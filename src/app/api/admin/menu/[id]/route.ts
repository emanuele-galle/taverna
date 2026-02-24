import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { verifyToken } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { logActivity } from '@/lib/activity'
import { z } from 'zod'

const menuItemUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  categoryOrder: z.number().int().min(0).optional(),
  displayOrder: z.number().int().min(0).optional(),
  description: z.string().optional().nullable(),
  ingredients: z.string().optional().nullable(),
  price: z.number().min(0).optional(),
  allergens: z.string().optional().nullable(),
  isVegetarian: z.boolean().optional(),
  isVegan: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  isSpicy: z.boolean().optional(),
  isChefSpecial: z.boolean().optional(),
  active: z.boolean().optional(),
})

async function authenticate() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return null
  return verifyToken(token)
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await authenticate()
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const { id } = await params
  const itemId = parseInt(id, 10)
  if (isNaN(itemId)) return NextResponse.json({ error: 'ID non valido' }, { status: 400 })

  const body = await request.json()
  const parsed = menuItemUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Dati non validi', details: parsed.error.flatten() }, { status: 400 })
  }

  const existing = await prisma.menuItem.findUnique({ where: { id: itemId } })
  if (!existing) return NextResponse.json({ error: 'Piatto non trovato' }, { status: 404 })

  const item = await prisma.menuItem.update({
    where: { id: itemId },
    data: parsed.data,
  })

  await logActivity('menu_item_updated', 'MenuItem', item.id, session.id, `Updated: ${item.name}`)

  revalidatePath('/menu')

  return NextResponse.json(item)
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await authenticate()
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const { id } = await params
  const itemId = parseInt(id, 10)
  if (isNaN(itemId)) return NextResponse.json({ error: 'ID non valido' }, { status: 400 })

  const existing = await prisma.menuItem.findUnique({ where: { id: itemId } })
  if (!existing) return NextResponse.json({ error: 'Piatto non trovato' }, { status: 404 })

  const item = await prisma.menuItem.update({
    where: { id: itemId },
    data: { active: false },
  })

  await logActivity('menu_item_deactivated', 'MenuItem', item.id, session.id, `Deactivated: ${item.name}`)

  revalidatePath('/menu')

  return NextResponse.json(item)
}
