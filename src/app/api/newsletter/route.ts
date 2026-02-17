import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { checkRateLimit } from '@/lib/utils'

const newsletterSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(`newsletter:${ip}`, 3, 60000)) {
      return NextResponse.json({ success: false, error: 'Troppe richieste. Riprova tra un minuto.' }, { status: 429 })
    }

    const body = await request.json()
    const { email } = newsletterSchema.parse(body)
    const normalizedEmail = email.toLowerCase()

    await prisma.newsletterSubscriber.upsert({
      where: { email: normalizedEmail },
      update: { status: 'active', unsubscribedAt: null },
      create: { email: normalizedEmail, status: 'active' },
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'issues' in err) {
      return NextResponse.json({ success: false, errors: (err as { issues: unknown[] }).issues }, { status: 400 })
    }
    console.error('Newsletter subscription error:', err)
    return NextResponse.json({ success: false, error: 'Errore interno del server' }, { status: 500 })
  }
}
