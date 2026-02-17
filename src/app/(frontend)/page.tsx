import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import { formatPrice } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [chefSpecials, featuredImages] = await Promise.all([
    prisma.menuItem.findMany({
      where: { active: true, isChefSpecial: true },
      take: 6,
      orderBy: { categoryOrder: 'asc' },
    }),
    prisma.galleryImage.findMany({
      where: { active: true, isFeatured: true },
      take: 6,
      orderBy: { displayOrder: 'asc' },
    }),
  ])

  return (
    <>
      <HeroSection />

      {/* Perche Sceglierci */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
            Perché Sceglierci
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            Dal 1997, la nostra passione per la qualità ci guida ogni giorno
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🥩',
                title: 'Carni di Alta Qualità',
                desc: 'Scottona bavarese, controfiletti argentini, fiorentina. Selezioniamo solo le migliori carni per la nostra brace.',
              },
              {
                icon: '🍷',
                title: 'Oltre 500 Etichette',
                desc: 'Una cantina curata con passione: dai grandi rossi italiani alle bollicine francesi, per ogni palato.',
              },
              {
                icon: '⭐',
                title: 'Dal 1997',
                desc: 'Oltre 25 anni di esperienza, tradizione e cultura dell\'ospitalità nel cuore di Milano.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I Nostri Piatti */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">
            I Nostri Piatti
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            Le specialità dello chef, selezionate con cura
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chefSpecials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-charcoal/5"
              >
                {item.image && (
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg text-charcoal">{item.name}</h3>
                    <span className="text-gold font-semibold whitespace-nowrap">
                      {formatPrice(Number(item.price))}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-warm-grey text-sm mt-2 line-clamp-2">{item.description}</p>
                  )}
                  <div className="flex gap-2 mt-3">
                    {item.isVegetarian && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Vegetariano</span>}
                    {item.isGlutenFree && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Senza Glutine</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {chefSpecials.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200"
              >
                Scopri il Menu Completo
              </Link>
            </div>
          )}
        </div>
      </section>

      <ReviewsSection />

      {/* La Nostra Galleria */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
            La Nostra Galleria
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            Immagini dal nostro ristorante e dai nostri piatti
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredImages.map((img) => (
              <div
                key={img.id}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.imagePath}
                  alt={img.title || 'Galleria'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {img.title && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-cream text-sm font-medium">{img.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {featuredImages.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/galleria"
                className="inline-flex items-center px-8 py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold/90 transition-colors duration-200"
              >
                Vedi Tutta la Galleria
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Prenota */}
      <section className="py-20 bg-burgundy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Prenota il Tuo Tavolo
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Vivi un&apos;esperienza culinaria indimenticabile. Prenota ora il tuo tavolo e lasciati conquistare dai sapori della nostra brace.
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center px-10 py-4 bg-gold text-charcoal text-lg font-semibold rounded-full hover:bg-cream transition-colors duration-200"
          >
            Prenota Ora
          </Link>
        </div>
      </section>
    </>
  )
}
