import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

const getSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET environment variable is required')
  return new TextEncoder().encode(secret)
}

export interface SessionPayload {
  id: number
  username: string
  role: string
}

export async function signToken(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret())
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

export async function getSession(cookieStore: ReadonlyRequestCookies): Promise<SessionPayload | null> {
  const token = cookieStore.get('admin_token')?.value
  if (!token) return null
  return verifyToken(token)
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  if (storedHash.includes(':')) {
    return verifySha256(password, storedHash)
  }
  return bcrypt.compare(password, storedHash)
}

async function verifySha256(password: string, storedHash: string): Promise<boolean> {
  const [salt, hash] = storedHash.split(':')
  const encoder = new TextEncoder()
  const data = encoder.encode(salt + password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex === hash
}

export async function verifyAndMigratePassword(password: string, storedHash: string, userId: number): Promise<boolean> {
  if (storedHash.includes(':')) {
    const valid = await verifySha256(password, storedHash)
    if (valid) {
      const { prisma } = await import('@/lib/prisma')
      const newHash = await hashPassword(password)
      await prisma.adminUser.update({ where: { id: userId }, data: { passwordHash: newHash } })
    }
    return valid
  }
  return bcrypt.compare(password, storedHash)
}
