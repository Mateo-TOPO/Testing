import { Hono } from 'hono'
import { renderToString } from 'hono/jsx/dom/server'
import { LandingPage } from './modules/landing/LandingPage'
import { OemPartnerPage } from './modules/landing/OemPartnerPage'
import { checkSpam, getClientIp } from '../api/_lib/spam-guard'
import { verifyTurnstile } from '../api/_lib/turnstile'
import { validateEmail } from '../api/_lib/email-validator'

const app = new Hono()

// Proxy: /api/public/* → VITE_API_BASE_URL (server-to-server, kein CORS-Problem)
app.get('/api/public/*', async (c) => {
  const apiBase = process.env.VITE_API_BASE_URL || 'http://localhost:3002'
  const path = c.req.path
  const qs = new URL(c.req.url).search
  const res = await fetch(`${apiBase}${path}${qs}`)
  const data = await res.text()
  return new Response(data, {
    status: res.status,
    headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/json' },
  })
})

// Enterprise-Anfrage → E-Mail via SMTP (nodemailer)
// Läuft nur in Node.js (Vite dev, Vercel Node.js).
// Auf Vercel in Produktion übernimmt api/enterprise/inquiry.ts diese Route.
app.post('/api/enterprise/inquiry', async (c) => {
  type NM = typeof import('nodemailer')
  const nm = await (import(/* @vite-ignore */ 'nodemailer') as Promise<NM>).catch(() => null)
  if (!nm) {
    return c.json({ error: 'E-Mail-Versand nicht unterstützt (Node.js erforderlich).' }, 503)
  }

  const smtpHost = process.env.SMTP_HOST
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '587')
  const smtpSecure = process.env.SMTP_SECURE === 'true'
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const contactEmail = process.env.CONTACT_EMAIL
  const emailFrom = process.env.EMAIL_FROM ?? (smtpUser ? `LAIMS <${smtpUser}>` : '')

  if (!smtpHost || !smtpUser || !smtpPass || !contactEmail) {
    return c.json({ error: 'SMTP nicht konfiguriert.' }, 503)
  }

  let payload: {
    company?: string
    name?: string
    phone?: string
    email?: string
    message?: string
    website?: string
    formStartedAt?: number | string
    turnstileToken?: string
  }
  try {
    payload = await c.req.json()
  } catch {
    return c.json({ error: 'Ungültige Anfrage.' }, 400)
  }

  // Spam-Schutz Schicht 1: Honeypot, Min-Form-Dauer, IP-Rate-Limit (max 2/h).
  const ip = getClientIp({ get: (n: string) => c.req.header(n) ?? null })
  const guard = checkSpam({ ip, honeypot: payload?.website, formStartedAt: payload?.formStartedAt })
  if (!guard.ok) {
    if (guard.silent) return c.json({ success: true })
    if (guard.retryAfterSeconds) c.header('Retry-After', String(guard.retryAfterSeconds))
    return c.json({ error: guard.error }, guard.status as 429)
  }

  // Spam-Schutz Schicht 2: Cloudflare Turnstile (wenn konfiguriert).
  // Bei Cloudflare-Ausfall tolerant durchwinken – siehe verifyTurnstile().
  const turnstile = await verifyTurnstile({
    token: payload?.turnstileToken,
    secret: process.env.TURNSTILE_SECRET_KEY,
    remoteIp: ip !== 'unknown' ? ip : undefined,
  })
  if (!turnstile.ok) return c.json({ error: turnstile.error }, 400)

  const { company, name, phone, email, message } = payload
  if (!company || !name || !email) {
    return c.json({ error: 'Pflichtfelder fehlen (Firma, Name, E-Mail).' }, 400)
  }

  // Spam-Schutz Schicht 3: E-Mail-Plausibilität (Format + Disposable + MX-Lookup).
  const emailCheck = await validateEmail(email)
  if (!emailCheck.ok) return c.json({ error: emailCheck.error }, 400)

  function esc(s?: string | null): string {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  const html = `<!DOCTYPE html>
<html lang="de">
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1f2937">
  <h2 style="color:#1a2744;border-bottom:2px solid #84cc16;padding-bottom:8px;margin-bottom:16px">Enterprise-Anfrage</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:10px 8px;color:#6b7280;width:140px;border-bottom:1px solid #f3f4f6">Firma</td><td style="padding:10px 8px;font-weight:600;border-bottom:1px solid #f3f4f6">${esc(company)}</td></tr>
    <tr><td style="padding:10px 8px;color:#6b7280;background:#f9fafb;border-bottom:1px solid #f3f4f6">Ansprechpartner</td><td style="padding:10px 8px;font-weight:600;background:#f9fafb;border-bottom:1px solid #f3f4f6">${esc(name)}</td></tr>
    <tr><td style="padding:10px 8px;color:#6b7280;border-bottom:1px solid #f3f4f6">E-Mail</td><td style="padding:10px 8px;border-bottom:1px solid #f3f4f6"><a href="mailto:${esc(email)}" style="color:#1a2744">${esc(email)}</a></td></tr>
    <tr><td style="padding:10px 8px;color:#6b7280;background:#f9fafb;border-bottom:1px solid #f3f4f6">Telefon</td><td style="padding:10px 8px;background:#f9fafb;border-bottom:1px solid #f3f4f6">${esc(phone) || '–'}</td></tr>
    ${message ? `<tr><td style="padding:10px 8px;color:#6b7280;vertical-align:top">Nachricht</td><td style="padding:10px 8px;white-space:pre-wrap">${esc(message)}</td></tr>` : ''}
  </table>
  <p style="color:#9ca3af;font-size:12px;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:12px">
    Eingegangen am ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} &middot; LAIMS Landing Page
  </p>
</body>
</html>`

  const transporter = nm.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  })

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: contactEmail,
      replyTo: email,
      subject: `Enterprise-Anfrage: ${company}`,
      html,
    })
  } catch (err) {
    console.error('[enterprise/inquiry] SMTP error:', err)
    return c.json({ error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' }, 500)
  }

  return c.json({ success: true })
})

// OEM Partner Program – eigene Seite
app.get('/oempartner', () => {
	const body = renderToString(<OemPartnerPage />)
	return new Response('<!DOCTYPE html>' + body, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	})
})

app.get('*', () => {
	const body = renderToString(<LandingPage />)
	return new Response(body, {
		headers: { 'Content-Type': 'text/html; charset=utf-8' }
	})
})

export { app }
export default app
