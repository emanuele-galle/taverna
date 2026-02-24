import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import MenuGrid from '@/components/MenuGrid'
import FixedMenus from '@/components/FixedMenus'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { serializeMenuItems } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Scopri il menu completo de La Taverna degli Amici: carni alla brace, antipasti della tradizione, primi piatti, dolci artigianali e oltre 500 etichette di vini selezionati.',
  alternates: { canonical: '/menu' },
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
export const revalidate = 300

export default async function MenuPage() {
  const items = await prisma.menuItem.findMany({
    where: { active: true },
    orderBy: [{ categoryOrder: 'asc' }, { displayOrder: 'asc' }],
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://taverna.fodivps2.cloud'

  const categories = items.reduce<Record<string, typeof items>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Menu - La Taverna degli Amici',
    url: `${siteUrl}/menu`,
    hasMenuSection: Object.entries(categories).map(([categoryName, categoryItems]) => ({
      '@type': 'MenuSection',
      name: categoryName,
      hasMenuItem: categoryItems.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        ...(item.description && { description: item.description }),
        offers: {
          '@type': 'Offer',
          price: item.price.toString(),
          priceCurrency: 'EUR',
        },
        ...(item.isGlutenFree && { suitableForDiet: 'https://schema.org/GlutenFreeDiet' }),
      })),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
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
          <MenuGrid items={serializeMenuItems(items)} />
        </div>
      </section>
      <CTASection />
    </>
  )
}
