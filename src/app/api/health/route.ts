import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    await prisma.$queryRawUnsafe('SELECT 1')
    return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
  } catch (err) {
    console.error('Health check DB error:', err)
    return NextResponse.json({ status: 'error', error: 'Database unreachable' }, { status: 503 })
  }
}
