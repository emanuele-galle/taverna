import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyToken } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { logActivity } from '@/lib/activity'
import { z } from 'zod'

const menuItemSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  categoryOrder: z.number().int().min(0).optional(),
  displayOrder: z.number().int().min(0).optional(),
  description: z.string().optional().nullable(),
  ingredients: z.string().optional().nullable(),
  price: z.number().min(0),
  allergens: z.string().optional().nullable(),
  isVegetarian: z.boolean().optional(),
  isVegan: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  isSpicy: z.boolean().optional(),
  isChefSpecial: z.boolean().optional(),
  active: z.boolean().optional(),
})

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  const session = await verifyToken(token)
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const items = await prisma.menuItem.findMany({
    orderBy: [{ categoryOrder: 'asc' }, { displayOrder: 'asc' }],
  })

  return NextResponse.json(items)
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
  const session = await verifyToken(token)
  if (!session) return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })

  const body = await request.json()
  const parsed = menuItemSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Dati non validi', details: parsed.error.flatten() }, { status: 400 })
  }

  const data = parsed.data
  const item = await prisma.menuItem.create({
    data: {
      name: data.name,
      category: data.category,
      categoryOrder: data.categoryOrder ?? 0,
      displayOrder: data.displayOrder ?? 0,
      description: data.description ?? null,
      ingredients: data.ingredients ?? null,
      price: data.price,
      allergens: data.allergens ?? null,
      isVegetarian: data.isVegetarian ?? false,
      isVegan: data.isVegan ?? false,
      isGlutenFree: data.isGlutenFree ?? false,
      isSpicy: data.isSpicy ?? false,
      isChefSpecial: data.isChefSpecial ?? false,
      active: data.active ?? true,
    },
  })

  await logActivity('menu_item_created', 'MenuItem', item.id, session.id, `Created: ${item.name}`)

  return NextResponse.json(item, { status: 201 })
}
