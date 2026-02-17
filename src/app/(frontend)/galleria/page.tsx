import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import GalleryGrid from '@/components/GalleryGrid'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Galleria',
  description: 'Galleria fotografica de La Taverna degli Amici: le nostre carni alla brace, i piatti della tradizione, l\'ambiente caldo e accogliente del nostro ristorante a Milano.',
  openGraph: {
    title: 'Galleria | La Taverna degli Amici',
    description: 'Galleria fotografica de La Taverna degli Amici: le nostre carni alla brace, i piatti della tradizione, l\'ambiente caldo e accogliente del nostro ristorante a Milano.',
    url: 'https://taverna.fodivps2.cloud/galleria',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galleria | La Taverna degli Amici',
    description: 'Galleria fotografica de La Taverna degli Amici: le nostre carni alla brace, i piatti della tradizione, l\'ambiente caldo e accogliente del nostro ristorante a Milano.',
  },
}
export const dynamic = 'force-dynamic'

export default async function GalleriaPage() {
  const dbImages = await prisma.galleryImage.findMany({
    where: { active: true },
    orderBy: { displayOrder: 'asc' },
  })

  const images = dbImages.map((img) => ({
    src: img.imagePath,
    alt: img.title || 'Galleria',
    category: (img.category.charAt(0).toUpperCase() + img.category.slice(1)) as 'Piatti' | 'Dolci' | 'Ambiente',
  }))

  return (
    <>
      <PageHero
        title="La Nostra Galleria"
        subtitle="Immagini dal nostro ristorante, dalla cucina e dai nostri piatti"
      />
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>
      <CTASection
        title="Ti Abbiamo Fatto Venire Fame?"
        subtitle="Prenota il tuo tavolo e vieni a gustare dal vivo le nostre specialita alla brace."
      />
    </>
  )
}
