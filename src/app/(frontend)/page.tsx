import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Flame, Wine, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import CounterAnimation from '@/components/CounterAnimation'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const featuredSpecialties = [
  {
    name: 'Costata di Scottona',
    image: '/images/gallery/piatti/bistecca-alla-griglia.jpg',
    badges: ['Scottona Bavarese', '300g'],
    description: 'Tenera costata di scottona bavarese da 300g, cotta alla perfezione sulla brace.',
    price: 20,
  },
  {
    name: 'Tagliata Argentino',
    image: '/images/gallery/piatti/carne-tagliata.jpg',
    badges: ['Controfiletto', 'Premium'],
    description: 'Tagliata di controfiletto argentino servita con rucola e grana.',
    price: 25,
  },
  {
    name: 'Arrosticini',
    image: '/images/gallery/piatti/arrosticini.jpg',
    badges: ['Pecora Abruzzese', 'Tradizione'],
    description: 'Autentici arrosticini di pecora abruzzesi cotti sulla brace ardente.',
    price: 18,
  },
]

const timelineSteps = [
  {
    year: '1997',
    title: "L'Inizio",
    text: 'Ernesto e Rita aprono La Taverna degli Amici con un sogno: portare a Milano la vera carne alla brace.',
  },
  {
    year: '2000s',
    title: 'La Cantina',
    text: 'La taverna amplia la sua offerta con oltre 500 etichette selezionate tra vini italiani e internazionali.',
  },
  {
    year: '2010s',
    title: "L'Eccellenza",
    text: 'Scottona bavarese, controfiletti argentini, fiorentine da oltre 1kg. Tutte cotte a vista sulla brace.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione',
    text: 'Quasi 30 anni di storia, migliaia di clienti soddisfatti, e la stessa passione del primo giorno.',
  },
]

const whyChoose = [
  {
    counterValue: 1,
    counterSuffix: 'kg+',
    icon: Flame,
    title: 'Carni di Alta Qualità',
    desc: 'Scottona bavarese, controfiletto argentino e uruguaiano, fiorentine da oltre 1kg. Tutte cotte a vista sulla brace.',
  },
  {
    counterValue: 500,
    counterSuffix: '+',
    icon: Wine,
    title: 'Etichette Selezionate',
    desc: 'Una cantina ricca e curata con vini italiani e internazionali, selezionati per esaltare ogni taglio di carne.',
  },
  {
    counterValue: 28,
    counterSuffix: '+',
    icon: Award,
    title: 'Anni di Eccellenza',
    desc: 'Quasi 30 anni di esperienza e passione. La stessa dedizione del primo giorno nel servire carni alla brace.',
  },
]

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      {/* === Perché Scegliere La Taverna === */}
      <section className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <span className="font-sc tracking-[0.3em] text-gold/80 text-sm block text-center mb-4 uppercase">I Nostri Punti di Forza</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream text-center mb-5 tracking-tight leading-[1.1]">
              Perch&eacute; Scegliere La Taverna
            </h2>
            <div className="ornament-line mb-14">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120} animation="scaleUp">
                <div className="text-center p-10 md:p-12 rounded-2xl glass-card-strong hover-lift border-animated group shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <CounterAnimation
                    value={item.counterValue}
                    suffix={item.counterSuffix}
                    className="font-serif font-normal text-5xl text-gradient-gold block mb-3"
                  />
                  <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                  <p className="text-cream/85 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* === Una Storia di Passione === */}
      <section className="py-24 md:py-32 bg-smoke relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <FadeIn animation="slideRight">
                <span className="font-sc tracking-[0.3em] text-gold-dark/80 text-sm block mb-4 uppercase">La Nostra Storia</span>
                <h2 className="font-serif font-normal text-4xl md:text-6xl text-burgundy mb-6 tracking-tight leading-[1.1]">
                  Una Storia di Passione
                </h2>
                <p className="font-serif italic text-lg text-warm-grey/80 mb-10">
                  Dal 1997, un punto di riferimento per gli amanti delle carni alla brace a Milano
                </p>
              </FadeIn>

              {/* Compact Timeline */}
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent" />
                <div className="space-y-8">
                  {timelineSteps.map((step, i) => (
                    <FadeIn key={step.year} delay={i * 100} animation="slideRight">
                      <div className="relative pl-8 group">
                        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-smoke border-2 border-gold/40 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300" />
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-sc tracking-[0.15em] text-gold-dark text-sm font-semibold">{step.year}</span>
                          <span className="text-espresso font-serif text-lg">{step.title}</span>
                        </div>
                        <p className="text-warm-grey text-base leading-relaxed">{step.text}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <FadeIn delay={500}>
                <div className="mt-10">
                  <Link
                    href="/chi-siamo"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-charcoal text-cream font-medium rounded-full hover:bg-charcoal/90 active:scale-[0.98] transition-all duration-200 text-sm group"
                  >
                    Scopri Tutta la Nostra Storia
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: Stacked Images */}
            <FadeIn animation="slideLeft" delay={200}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl img-zoom">
                  <Image
                    src="/images/gallery/ambiente/sala-principale.jpg"
                    alt="Sala principale della Taverna degli Amici"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream p-5 rounded-xl shadow-xl border border-gold/10 max-w-[200px]">
                  <span className="font-serif text-3xl text-gradient-gold block mb-1">1997</span>
                  <p className="text-cream/75 text-xs leading-relaxed">Anno di fondazione nel cuore di Milano</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === Le Nostre Specialità === */}
      <section className="py-24 md:py-32 bg-cream-warm relative">
        <div className="absolute inset-0 bg-pattern-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <span className="font-sc tracking-[0.3em] text-gold-dark/80 text-sm block text-center mb-4 uppercase">Dalla Nostra Brace</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-burgundy text-center mb-5 tracking-tight leading-[1.1]">
              Le Nostre Specialit&agrave;
            </h2>
            <div className="ornament-line mb-6">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-dark/40" />
            </div>
            <p className="font-serif italic text-lg text-warm-grey/80 text-center mb-14 max-w-xl mx-auto">
              Carni selezionate cotte a vista sulla brace
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredSpecialties.map((item, i) => (
              <FadeIn key={item.name} delay={i * 120} animation="scaleUp">
                <div className="group bg-white rounded-2xl overflow-hidden hover-lift shadow-lg border border-charcoal/[0.08]">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} - La Taverna degli Amici`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-serif text-2xl text-cream mb-2.5">{item.name}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="font-sc text-xs tracking-[0.12em] bg-gold/90 text-charcoal px-2.5 py-0.5 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-warm-grey text-lg leading-relaxed mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-burgundy">
                        &euro;{item.price},00
                      </span>
                      <span className="flex items-center gap-1 text-gold text-sm font-medium">
                        <Flame className="w-3.5 h-3.5" /> Alla Brace
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-cream font-medium rounded-full hover:bg-charcoal/90 active:scale-[0.98] transition-all duration-200 text-sm group"
              >
                Vedi il Menu Completo
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ReviewsSection />

      <CTASection
        title="Pronto a Gustare le Nostre Carni?"
        subtitle="Prenota ora il tuo tavolo e scopri la qualità delle nostre carni selezionate. Ti aspettiamo in Via Spartaco, 4 Milano."
        primaryLabel="Prenota Ora"
        primaryHref="/prenota"
        secondaryLabel="Chiamaci"
        secondaryHref="tel:+390255194005"
      />
    </>
  )
}
