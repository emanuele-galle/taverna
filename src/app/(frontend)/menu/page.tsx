import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import MenuGrid from '@/components/MenuGrid'
import FixedMenus from '@/components/FixedMenus'

export const metadata: Metadata = { title: 'Menu' }
export const dynamic = 'force-dynamic'

export default async function MenuPage() {
  const items = await prisma.menuItem.findMany({
    where: { active: true },
    orderBy: [{ categoryOrder: 'asc' }, { displayOrder: 'asc' }],
  })

  return (
    <>
      <section className="relative h-64 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">Il Nostro Menu</h1>
          <p className="text-warm-grey max-w-lg mx-auto">
            Carni alla brace, primi tradizionali e dolci fatti in casa
          </p>
        </div>
      </section>
      <FixedMenus />
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuGrid items={JSON.parse(JSON.stringify(items))} />
        </div>
      </section>
    </>
  )
}
