import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { logActivity } from '@/lib/activity'
import { z } from 'zod'

const bookingUpdateSchema = z.object({
  status: z.enum(['confirmed', 'cancelled']).optional(),
  tableNumber: z.string().optional().nullable(),
})

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  const session = await verifyToken(token)
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const { id } = await params
  const bookingId = parseInt(id, 10)
  if (isNaN(bookingId)) return NextResponse.json({ error: 'ID non valido' }, { status: 400 })

  const body = await request.json()
  const parsed = bookingUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Dati non validi', details: parsed.error.flatten() }, { status: 400 })
  }

  const existing = await prisma.booking.findUnique({ where: { id: bookingId } })
  if (!existing) return NextResponse.json({ error: 'Prenotazione non trovata' }, { status: 404 })

  const booking = await prisma.booking.update({
    where: { id: bookingId },
    data: parsed.data,
  })

  const action = parsed.data.status
    ? `booking_${parsed.data.status}`
    : 'booking_updated'
  await logActivity(action, 'Booking', booking.id, session.id, `${booking.customerName} - ${booking.bookingTime}`)

  return NextResponse.json(booking)
}
