import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { generateConfirmationCode } from '@/lib/utils'

const bookingSchema = z.object({
  bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  bookingTime: z.string().min(1),
  numGuests: z.number().int().min(1).max(12),
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(6),
  specialRequests: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = bookingSchema.parse(body)

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
