import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { checkRateLimit } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(`contact:${ip}`, 3, 60000)) {
      return NextResponse.json({ success: false, error: 'Troppe richieste. Riprova tra un minuto.' }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot check - bots fill hidden fields
    if (body.website) {
      return NextResponse.json({ success: true })
    }

    const data = contactSchema.parse(body)

    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message,
      },
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'issues' in err) {
      return NextResponse.json({ success: false, errors: (err as { issues: unknown[] }).issues }, { status: 400 })
    }
    console.error('Contact form error:', err)
    return NextResponse.json({ success: false, error: 'Errore interno del server' }, { status: 500 })
  }
}
