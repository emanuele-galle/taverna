export function formatPrice(price: number | string): string {
  const num = typeof price === 'string' ? parseFloat(price) : price
  if (num === 0) return 'S.Q.'
  return `€${num.toFixed(2).replace('.', ',')}`
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export function generateConfirmationCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

const rateLimitMap = new Map<string, number[]>()

setInterval(() => {
  const now = Date.now()
  for (const [key, timestamps] of rateLimitMap) {
    const filtered = timestamps.filter(t => now - t < 3600000)
    if (filtered.length === 0) {
      rateLimitMap.delete(key)
    } else {
      rateLimitMap.set(key, filtered)
    }
  }
}, 60000)

export function checkRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(key) || []
  const recent = timestamps.filter(t => now - t < windowMs)
  if (recent.length >= maxRequests) {
    return false
  }
  recent.push(now)
  rateLimitMap.set(key, recent)
  return true
}
