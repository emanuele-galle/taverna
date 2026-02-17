import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const MAX_TABLES_PER_SLOT = 5

const ALL_SLOTS = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
]

export async function GET(request: NextRequest) {
  try {
    const date = request.nextUrl.searchParams.get('date')
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ success: false, error: 'Data non valida' }, { status: 400 })
    }

    const bookings = await prisma.booking.findMany({
      where: {
        bookingDate: new Date(date),
        status: { not: 'cancelled' },
      },
      select: { bookingTime: true },
    })

    const countBySlot: Record<string, number> = {}
    for (const b of bookings) {
      countBySlot[b.bookingTime] = (countBySlot[b.bookingTime] || 0) + 1
    }

    const slots = ALL_SLOTS.map((time) => ({
      time,
      booked: countBySlot[time] || 0,
      available: MAX_TABLES_PER_SLOT - (countBySlot[time] || 0),
    }))

    return NextResponse.json({ success: true, date, slots })
  } catch (err) {
    console.error('Availability check error:', err)
    return NextResponse.json({ success: false, error: 'Errore interno del server' }, { status: 500 })
  }
}
