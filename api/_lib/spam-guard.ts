// Minimal Spam-Guard Stub (lokale Dev-Umgebung).
// In Produktion ist hier die echte Logik (Honeypot, Min-Form-Dauer, IP-Rate-Limit).

export interface SpamCheckInput {
  ip: string
  honeypot?: string
  formStartedAt?: number | string
}

export interface SpamCheckResult {
  ok: boolean
  silent?: boolean
  error?: string
  status?: number
  retryAfterSeconds?: number
}

export function getClientIp(req: { get: (name: string) => string | null }): string {
  return (
    req.get('cf-connecting-ip') ||
    req.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.get('x-real-ip') ||
    'unknown'
  )
}

export function checkSpam(input: SpamCheckInput): SpamCheckResult {
  // Honeypot: gefülltes verstecktes Feld → still als Erfolg behandeln.
  if (input.honeypot && input.honeypot.trim() !== '') {
    return { ok: false, silent: true }
  }
  return { ok: true }
}
