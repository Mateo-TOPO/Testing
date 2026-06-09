// Minimal E-Mail-Validator Stub (lokale Dev-Umgebung).
// In Produktion: Format + Disposable-Check + MX-Lookup.

export interface EmailCheckResult {
  ok: boolean
  error?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function validateEmail(email: string): Promise<EmailCheckResult> {
  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }
  }
  return { ok: true }
}
