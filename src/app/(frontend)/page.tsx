import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import SectionDivider from '@/components/SectionDivider'
import CTASection from '@/components/CTASection'

const featuredSpecialties = [
  {
    name: 'Costata di Scottona',
    image: '/images/gallery/piatti/bistecca-alla-griglia.jpg',
    badges: ['Scottona Bavarese', '300g'],
    description: 'Tenera costata di scottona bavarese da 300g, cotta alla perfezione sulla brace. Carne di altissima qualita, succulenta e saporita.',
    price: 20,
    rating: 4.9,
  },
  {
    name: 'Tagliata Argentino',
    image: '/images/gallery/piatti/carne-tagliata.jpg',
    badges: ['Controfiletto', 'Premium'],
    description: 'Tagliata di controfiletto argentino servita con rucola e grana. Carne morbidissima e dal sapore intenso, perfetta per gli amanti delle carni pregiate.',
    price: 25,
    rating: 5.0,
  },
  {
    name: 'Arrosticini',
    image: '/images/gallery/piatti/arrosticini.jpg',
    badges: ['Pecora Abruzzese', 'Tradizione'],
    description: 'Autentici arrosticini di pecora abruzzesi cotti sulla brace ardente. Un classico della tradizione pastorale, saporiti e genuini.',
    price: 18,
    rating: 4.8,
  },
]

const timelineSteps = [
  {
    year: '1997',
    title: "L'Inizio di un Sogno",
    text: 'Ernesto Notaro e sua moglie Rita aprono La Taverna degli Amici con un sogno: portare a Milano la passione per le carni di qualita cotte sulla brace. Immediatamente il locale ottiene un grande successo per l\'eccellente selezione di carni.',
  },
  {
    year: 'Anni 2000',
    title: 'La Cantina si Arricchisce',
    text: 'La taverna amplia la sua offerta con una ricca cantina che arriva a contare oltre 500 etichette selezionate. Vini italiani e internazionali scelti con cura per esaltare il sapore delle carni alla brace.',
  },
  {
    year: 'Anni 2010',
    title: "L'Eccellenza delle Carni",
    text: 'La selezione si raffina ulteriormente: scottona bavarese, controfiletti argentini e uruguaiani, fiorentine da oltre 1kg. Tutte le carni vengono cotte a vista sulla brace, permettendo ai clienti di apprezzare la maestria e la qualita della materia prima.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione e Qualita',
    text: 'Quasi 30 anni di storia, migliaia di clienti soddisfatti, e la stessa passione del primo giorno. La Taverna degli Amici e oggi un punto di riferimento per chi cerca carni di altissima qualita in un ambiente caldo e accogliente, con il motto: "qualita, esperienza e cultura dell\'ospitalita".',
  },
]

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Perche Scegliere - gradient charcoal→burgundy→charcoal */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-burgundy to-charcoal text-white bg-pattern-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
              Perch&eacute; Scegliere La Taverna degli Amici
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🥩',
                  title: 'Carni di Alta Qualita',
                  desc: 'Selezioniamo le migliori carni: scottona bavarese, controfiletto argentino e uruguaiano, fiorentine da oltre 1kg. Tutte cotte a vista sulla brace.',
                },
                {
                  icon: '🍷',
                  title: 'Oltre 500 Etichette',
                  desc: 'Una cantina ricca e curata con oltre 500 etichette di vini italiani e internazionali, selezionati per esaltare ogni taglio di carne.',
                },
                {
                  icon: '⭐',
                  title: 'Dal 1997',
                  desc: 'Quasi 30 anni di esperienza e passione. Migliaia di clienti soddisfatti e la stessa dedizione del primo giorno nel servire carni alla brace di eccellenza.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <SectionDivider />

      {/* Una Storia di Passione - bg cream, timeline a sinistra */}
      <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy text-center mb-4">
              Una Storia di Passione
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-warm-grey text-center mb-16 max-w-2xl mx-auto">
              Dal 1997, un punto di riferimento per gli amanti delle carni alla brace a Milano
            </p>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line on left */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gold/30" />
              <div className="space-y-12">
                {timelineSteps.map((step) => (
                  <div key={step.year} className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div className="absolute left-2.5 md:left-4.5 top-1 w-4 h-4 rounded-full bg-burgundy border-4 border-cream" />
                    <span className="inline-block font-serif text-lg text-burgundy font-bold mb-1">
                      {step.year}
                    </span>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">{step.title}</h3>
                    <p className="text-warm-grey text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-14">
              <Link
                href="/chi-siamo"
                className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200"
              >
                Scopri Tutta la Nostra Storia
              </Link>
            </div>
          </div>
      </section>

      <SectionDivider />

      {/* Le Nostre Specialita alla Brace - gradient cream→white */}
      <section className="py-24 bg-gradient-to-br from-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy text-center mb-4">
              Le Nostre Specialit&agrave; alla Brace
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
              Carni selezionate cotte a vista sulla brace, per un&apos;esperienza unica
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSpecialties.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image with overlay title */}
                  <div className="relative h-56">
                    <Image
                      src={item.image}
                      alt={`${item.name} - La Taverna degli Amici`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-xl text-cream mb-2">{item.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="text-xs bg-white/20 backdrop-blur-sm text-cream border border-white/30 px-2 py-0.5 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-warm-grey text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-burgundy font-semibold text-lg">
                        &euro;{item.price},00
                      </span>
                      <span className="text-gold text-sm">★★★★★ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200"
              >
                Vedi il Menu Completo
              </Link>
            </div>
          </div>
      </section>

      <SectionDivider />

      <ReviewsSection />

      {/* CTA Prenota */}
      <CTASection
        title="Pronto a Gustare le Nostre Carni alla Brace?"
        subtitle="Prenota ora il tuo tavolo e scopri la qualita delle nostre carni selezionate, cotte a vista sulla brace. Ti aspettiamo in Via Spartaco, 4 Milano."
        primaryLabel="Prenota Ora"
        primaryHref="/prenota"
        secondaryLabel="Chiamaci"
        secondaryHref="tel:+390255194005"
      />
    </>
  )
}
