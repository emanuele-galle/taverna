import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  const session = await verifyToken(token)
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(messages)
}
