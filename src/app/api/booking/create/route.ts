import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { generateConfirmationCode, checkRateLimit } from '@/lib/utils'

const VALID_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
]

const bookingSchema = z.object({
  bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato data non valido'),
  bookingTime: z.string().refine(val => VALID_SLOTS.includes(val), 'Orario non valido'),
  numGuests: z.number().int().min(1, 'Minimo 1 ospite').max(12, 'Massimo 12 ospiti'),
  customerName: z.string().min(2, 'Nome troppo corto'),
  customerEmail: z.string().email('Email non valida'),
  customerPhone: z.string().min(6, 'Numero di telefono non valido'),
  specialRequests: z.string().max(500, 'Richieste speciali: massimo 500 caratteri').optional(),
})

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(`booking:${ip}`, 5, 60000)) {
      return NextResponse.json({ success: false, error: 'Troppe richieste. Riprova tra un minuto.' }, { status: 429 })
    }

    const body = await request.json()
    const data = bookingSchema.parse(body)

    const bookingDate = new Date(data.bookingDate + 'T00:00:00')
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (bookingDate < today) {
      return NextResponse.json({ success: false, error: 'Non è possibile prenotare per una data passata.' }, { status: 400 })
    }

    const maxDate = new Date(today)
    maxDate.setDate(maxDate.getDate() + 30)
    if (bookingDate > maxDate) {
      return NextResponse.json({ success: false, error: 'È possibile prenotare al massimo 30 giorni in anticipo.' }, { status: 400 })
    }

    if (bookingDate.getDay() === 0) {
      return NextResponse.json({ success: false, error: 'Il ristorante è chiuso la domenica.' }, { status: 400 })
    }

    const confirmationCode = generateConfirmationCode()

    await prisma.booking.create({
      data: {
        bookingDate: new Date(data.bookingDate),
        bookingTime: data.bookingTime,
        numGuests: data.numGuests,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        specialRequests: data.specialRequests || null,
        confirmationCode,
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, confirmationCode })
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'issues' in err) {
      return NextResponse.json({ success: false, errors: (err as { issues: unknown[] }).issues }, { status: 400 })
    }
    console.error('Booking creation error:', err)
    return NextResponse.json({ success: false, error: 'Errore interno del server' }, { status: 500 })
  }
}
