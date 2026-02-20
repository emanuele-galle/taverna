import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import MenuGrid from '@/components/MenuGrid'
import FixedMenus from '@/components/FixedMenus'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Scopri il menu completo de La Taverna degli Amici: carni alla brace, antipasti della tradizione, primi piatti, dolci artigianali e oltre 500 etichette di vini selezionati.',
  openGraph: {
    title: 'Menu | La Taverna degli Amici',
    description: 'Scopri il menu completo de La Taverna degli Amici: carni alla brace, antipasti della tradizione, primi piatti, dolci artigianali e oltre 500 etichette di vini selezionati.',
    url: '/menu',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu | La Taverna degli Amici',
    description: 'Scopri il menu completo de La Taverna degli Amici: carni alla brace, antipasti della tradizione, primi piatti, dolci artigianali e oltre 500 etichette di vini selezionati.',
  },
}
export const dynamic = 'force-dynamic'

export default async function MenuPage() {
  const items = await prisma.menuItem.findMany({
    where: { active: true },
    orderBy: [{ categoryOrder: 'asc' }, { displayOrder: 'asc' }],
  })

  return (
    <>
      <PageHero
        title="Il Nostro Menu"
        subtitle="Carni alla brace, primi tradizionali e dolci fatti in casa"
        image="/images/gallery/piatti/bistecca-alla-griglia.jpg"
        overlay="dark"
        breadcrumb="Menu"
      />
      <FixedMenus />
      <section className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MenuGrid items={JSON.parse(JSON.stringify(items))} />
        </div>
      </section>
      <CTASection />
    </>
  )
}
