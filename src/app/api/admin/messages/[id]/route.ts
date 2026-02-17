import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { logActivity } from '@/lib/activity'
import { z } from 'zod'

const messageUpdateSchema = z.object({
  status: z.enum(['read', 'replied']),
})

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  const session = await verifyToken(token)
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const { id } = await params
  const msgId = parseInt(id, 10)
  if (isNaN(msgId)) return NextResponse.json({ error: 'ID non valido' }, { status: 400 })

  const body = await request.json()
  const parsed = messageUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Dati non validi', details: parsed.error.flatten() }, { status: 400 })
  }

  const existing = await prisma.contactMessage.findUnique({ where: { id: msgId } })
  if (!existing) return NextResponse.json({ error: 'Messaggio non trovato' }, { status: 404 })

  const data: { status: string; repliedAt?: Date } = { status: parsed.data.status }
  if (parsed.data.status === 'replied') {
    data.repliedAt = new Date()
  }

  const message = await prisma.contactMessage.update({
    where: { id: msgId },
    data,
  })

  await logActivity(`message_${parsed.data.status}`, 'ContactMessage', message.id, session.id, `From: ${message.name}`)

  return NextResponse.json(message)
}
