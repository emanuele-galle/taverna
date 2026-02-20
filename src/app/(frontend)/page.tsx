import Link from 'next/link'
import Image from 'next/image'
import { Flame, Wine, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import SectionDivider from '@/components/SectionDivider'
import CTASection from '@/components/CTASection'

const featuredSpecialties = [
  {
    name: 'Costata di Scottona',
    image: '/images/gallery/piatti/bistecca-alla-griglia.jpg',
    badges: ['Scottona Bavarese', '300g'],
    description: 'Tenera costata di scottona bavarese da 300g, cotta alla perfezione sulla brace. Carne di altissima qualità, succulenta e saporita.',
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
    text: 'Ernesto Notaro e sua moglie Rita aprono La Taverna degli Amici con un sogno: portare a Milano la passione per le carni di qualità cotte sulla brace. Immediatamente il locale ottiene un grande successo per l\'eccellente selezione di carni.',
  },
  {
    year: 'Anni 2000',
    title: 'La Cantina si Arricchisce',
    text: 'La taverna amplia la sua offerta con una ricca cantina che arriva a contare oltre 500 etichette selezionate. Vini italiani e internazionali scelti con cura per esaltare il sapore delle carni alla brace.',
  },
  {
    year: 'Anni 2010',
    title: "L'Eccellenza delle Carni",
    text: 'La selezione si raffina ulteriormente: scottona bavarese, controfiletti argentini e uruguaiani, fiorentine da oltre 1kg. Tutte le carni vengono cotte a vista sulla brace, permettendo ai clienti di apprezzare la maestria e la qualità della materia prima.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione e Qualità',
    text: 'Quasi 30 anni di storia, migliaia di clienti soddisfatti, e la stessa passione del primo giorno. La Taverna degli Amici è oggi un punto di riferimento per chi cerca carni di altissima qualità in un ambiente caldo e accogliente, con il motto: "qualità, esperienza e cultura dell\'ospitalità".',
  },
]

const whyChoose = [
  {
    counter: '1kg+',
    icon: Flame,
    title: 'Carni di Alta Qualità',
    desc: 'Selezioniamo le migliori carni: scottona bavarese, controfiletto argentino e uruguaiano, fiorentine da oltre 1kg. Tutte cotte a vista sulla brace.',
  },
  {
    counter: '500+',
    icon: Wine,
    title: 'Oltre 500 Etichette',
    desc: 'Una cantina ricca e curata con oltre 500 etichette di vini italiani e internazionali, selezionati per esaltare ogni taglio di carne.',
  },
  {
    counter: '28+',
    icon: Award,
    title: 'Anni di Eccellenza',
    desc: 'Quasi 30 anni di esperienza e passione. Migliaia di clienti soddisfatti e la stessa dedizione del primo giorno nel servire carni alla brace di eccellenza.',
  },
]

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Perché Scegliere - gradient charcoal→burgundy→charcoal */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal via-burgundy to-charcoal text-white bg-pattern-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-sc tracking-[0.18em] text-gold/80 text-sm block text-center mb-3">I Nostri Punti di Forza</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-cream text-center mb-4 tracking-tight">
              Perch&eacute; Scegliere La Taverna degli Amici
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl glass-card hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="font-serif font-light text-4xl text-gradient-gold block mb-2">{item.counter}</span>
                  <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                  <p className="text-cream/80 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Una Storia di Passione - bg smoke, timeline a sinistra */}
      <section className="py-16 md:py-24 bg-smoke">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-2 border-gold/30 pl-6 mb-12 max-w-2xl">
              <h2 className="font-serif font-light text-3xl md:text-5xl text-burgundy mb-3 tracking-tight">
                Una Storia di Passione
              </h2>
              <p className="font-serif italic text-lg text-warm-grey">
                Dal 1997, un punto di riferimento per gli amanti delle carni alla brace a Milano
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line on left */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10" />
              <div className="space-y-12">
                {timelineSteps.map((step) => (
                  <div key={step.year} className="relative pl-12 md:pl-16 hover:translate-x-1 transition-transform duration-300">
                    {/* Dot */}
                    <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-gold border-4 border-smoke" />
                    <span className="inline-block font-sc tracking-[0.15em] text-burgundy text-sm mb-1">
                      {step.year}
                    </span>
                    <h3 className="font-serif text-xl text-espresso mb-2">{step.title}</h3>
                    <p className="text-warm-grey text-base leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-14">
              <Link
                href="/chi-siamo"
                className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 active:scale-[0.98] transition-all duration-200"
              >
                Scopri Tutta la Nostra Storia
              </Link>
            </div>
          </div>
      </section>

      <SectionDivider />

      {/* Le Nostre Specialita alla Brace - bg cream-warm */}
      <section className="py-16 md:py-24 bg-cream-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-sc tracking-[0.18em] text-gold-dark text-sm block text-center mb-3">Dalla Nostra Brace</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-burgundy text-center mb-4 tracking-tight">
              Le Nostre Specialit&agrave; alla Brace
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="font-serif italic text-lg text-warm-grey text-center mb-12 max-w-2xl mx-auto">
              Carni selezionate cotte a vista sulla brace, per un&apos;esperienza unica
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSpecialties.map((item) => (
                <div
                  key={item.name}
                  className="group bg-white rounded-xl overflow-hidden hover-lift border border-charcoal/5"
                >
                  {/* Image with overlay title */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} - La Taverna degli Amici`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-xl text-cream mb-2">{item.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="font-sc text-xs tracking-[0.1em] bg-gold/90 text-charcoal px-2.5 py-0.5 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 border-l-2 border-gold">
                    <p className="text-warm-grey text-base leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-gold/10 text-burgundy font-bold text-lg px-3 py-1 rounded-full">
                        &euro;{item.price},00
                      </span>
                      <span className="flex items-center gap-1 text-gold font-semibold text-sm">
                        <Flame className="w-4 h-4" /> {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 active:scale-[0.98] transition-all duration-200"
              >
                Vedi il Menu Completo
              </Link>
            </div>
          </div>
      </section>

      <ReviewsSection />

      {/* CTA Prenota */}
      <CTASection
        title="Pronto a Gustare le Nostre Carni alla Brace?"
        subtitle="Prenota ora il tuo tavolo e scopri la qualità delle nostre carni selezionate, cotte a vista sulla brace. Ti aspettiamo in Via Spartaco, 4 Milano."
        primaryLabel="Prenota Ora"
        primaryHref="/prenota"
        secondaryLabel="Chiamaci"
        secondaryHref="tel:+390255194005"
      />
    </>
  )
}
