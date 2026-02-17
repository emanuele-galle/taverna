import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { verifyPassword, signToken } from '@/lib/auth'

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = loginSchema.parse(body)

    const user = await prisma.adminUser.findUnique({ where: { username } })
    if (!user || !user.isActive) {
      return NextResponse.json({ success: false, error: 'Credenziali non valide' }, { status: 401 })
    }

    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) {
      return NextResponse.json({ success: false, error: 'Credenziali non valide' }, { status: 401 })
    }

    const token = await signToken({ id: user.id, username: user.username, role: user.role })

    await prisma.adminUser.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'issues' in err) {
      return NextResponse.json({ success: false, errors: (err as { issues: unknown[] }).issues }, { status: 400 })
    }
    console.error('Login error:', err)
    return NextResponse.json({ success: false, error: 'Errore interno del server' }, { status: 500 })
  }
}
