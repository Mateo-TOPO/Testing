// Minimal Turnstile Stub (lokale Dev-Umgebung).
// Wenn kein Secret gesetzt ist, wird die Prüfung übersprungen.

export interface TurnstileInput {
  token?: string
  secret?: string
  remoteIp?: string
}

export interface TurnstileResult {
  ok: boolean
  error?: string
}

export async function verifyTurnstile(input: TurnstileInput): Promise<TurnstileResult> {
  // Kein Secret konfiguriert → Prüfung überspringen (siehe .env.example).
  if (!input.secret) return { ok: true }

  if (!input.token) {
    return { ok: false, error: 'Bitte bestätigen Sie, dass Sie kein Roboter sind.' }
  }

  try {
    const form = new FormData()
    form.append('secret', input.secret)
    form.append('response', input.token)
    if (input.remoteIp) form.append('remoteip', input.remoteIp)

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    })
    const data = (await res.json()) as { success?: boolean }
    if (data.success) return { ok: true }
    return { ok: false, error: 'Verifizierung fehlgeschlagen. Bitte erneut versuchen.' }
  } catch {
    // Cloudflare-Ausfall: tolerant durchwinken.
    return { ok: true }
  }
}
