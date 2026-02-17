import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const getSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET environment variable is required')
  return new TextEncoder().encode(secret)
}

const loginRateMap = new Map<string, number[]>()

setInterval(() => {
  const now = Date.now()
  for (const [key, timestamps] of loginRateMap) {
    const filtered = timestamps.filter(t => now - t < 3600000)
    if (filtered.length === 0) {
      loginRateMap.delete(key)
    } else {
      loginRateMap.set(key, filtered)
    }
  }
}, 60000)

function checkLoginRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 3600000
  const maxRequests = 10
  const timestamps = loginRateMap.get(ip) || []
  const recent = timestamps.filter(t => now - t < windowMs)
  if (recent.length >= maxRequests) return false
  recent.push(now)
  loginRateMap.set(ip, recent)
  return true
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/api/admin/login' && request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkLoginRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Troppi tentativi di accesso. Riprova tra un\'ora.' },
        { status: 429 }
      )
    }
    return NextResponse.next()
  }

  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    return NextResponse.next()
  }

  const token = request.cookies.get('admin_token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(token, getSecret())
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/login'],
}
