import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import GalleryGrid from '@/components/GalleryGrid'

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
      <section className="relative h-64 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">La Nostra Galleria</h1>
          <p className="text-warm-grey max-w-lg mx-auto">
            Immagini dal nostro ristorante, dalla cucina e dai nostri piatti
          </p>
        </div>
      </section>
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  )
}
