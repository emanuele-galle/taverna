import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, Heart, Sparkles } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Chi Siamo',
  alternates: { canonical: '/chi-siamo' },
}

const philosophy = [
  {
    icon: Flame,
    title: 'Qualità',
    desc: 'Solo le migliori carni certificate: scottona bavarese, controfiletto argentino e uruguaiano. Ogni taglio viene selezionato personalmente con cura maniacale.',
  },
  {
    icon: Sparkles,
    title: 'Esperienza',
    desc: "Oltre 25 anni di passione per la carne alla brace. La cottura a legna a vista è un'arte che richiede maestria, attenzione e dedizione assoluta.",
  },
  {
    icon: Heart,
    title: 'Ospitalità',
    desc: "Ogni cliente è un amico. L'atmosfera familiare e accogliente fa sì che chi entra da noi si senta subito a casa, accolto come parte della famiglia.",
  },
]

const fioriAllOcchiello = [
  'Carni di eccellenza cotte a vista sulla brace',
  'Antipasti della tradizione regionale (lardo, finocchiona, petto d\'oca)',
  '50 tipi di formaggi italiani ed esteri',
  'Cantina con oltre 500 etichette di vini selezionati',
  'Dolci di alta pasticceria',
]

const pressQuotes = [
  { text: 'La migliore carne di Milano', source: 'TripAdvisor' },
  { text: 'Buono, amichevole, con un gemello parigino', source: 'Corriere della Sera' },
]

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        title="Chi Siamo"
        subtitle="La nostra storia, la nostra passione"
        image="/images/gallery/ambiente/sala-principale.jpg"
        overlay="warm"
        breadcrumb="Chi Siamo"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block font-sc tracking-[0.25em] px-5 py-2 bg-gold/8 text-gold-dark text-sm rounded-full mb-7 border border-gold/25">
              Dal 1997
            </span>
            <p className="text-warm-grey text-base md:text-lg leading-[1.85]">
              <strong className="text-espresso">La Taverna degli Amici</strong> &egrave; molto pi&ugrave; di un
              semplice ristorante: &egrave; un luogo dove la passione per le carni di alta qualit&agrave; incontra la
              cultura dell&rsquo;ospitalit&agrave;, un&rsquo;oasi di sapori autentici nel cuore di Milano,
              dove ogni cliente diventa un amico.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline con immagini alternate */}
      <section className="py-20 md:py-28 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <span className="font-sc tracking-[0.3em] text-gold/80 text-sm block text-center mb-4 uppercase">Il Nostro Percorso</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream text-center mb-5 tracking-tight leading-[1.1]">La Nostra Storia</h2>
            <div className="ornament-line mb-16">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
            </div>
          </FadeIn>

          {/* 1997 */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
              <div className="md:w-1/2 order-2 md:order-1">
                <span className="font-sc tracking-[0.2em] text-sm text-gold/80">1997</span>
                <h3 className="font-serif font-normal text-2xl text-cream mt-1 mb-4">
                  L&rsquo;Inizio di un Sogno
                </h3>
                <p className="text-cream/80 text-base leading-[1.8] mb-4">
                  Ernesto Notaro, ristoratore di origini calabresi da Tiriolo, insieme alla moglie Rita
                  fonda La Taverna degli Amici. Il successo &egrave; immediato: la cucina si basa sulla
                  selezione di carni pregiate, tutte cotte visibilmente sulla brace a legna.
                </p>
                <p className="text-cream/80 text-base leading-[1.8]">
                  Accanto alle carni, antipasti di eccellenza dalla tradizione regionale, oltre 50 tipi
                  di formaggi italiani ed esteri, e una cantina che cresce fino a superare le 500
                  etichette di vini selezionati.
                </p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-zoom shadow-2xl">
                  <Image
                    src="/images/gallery/ambiente/insegna-storica-dal-1948.jpg"
                    alt="La Taverna degli Amici - Le origini"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* L'Ambiente */}
          <FadeIn delay={100}>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-zoom shadow-2xl">
                  <Image
                    src="/images/gallery/ambiente/sala-principale.jpg"
                    alt="Sala principale della Taverna"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-serif font-normal text-2xl text-cream mb-4">L&rsquo;Ambiente</h3>
                <p className="text-cream/80 text-base leading-[1.8] mb-5">
                  Un ambiente vivace e conviviale, dove tavoloni di legno e affreschi a trompe
                  l&rsquo;oeil creano un&rsquo;atmosfera calda e accogliente. Tre piani con diverse
                  salette, ognuna con il suo carattere.
                </p>
                <blockquote className="border-l-2 border-gold/30 pl-5 bg-white/[0.03] rounded-r-xl py-3 pr-4">
                  <p className="text-cream/80 font-serif italic text-base">
                    &ldquo;Le cinque sale allestite da Ernesto sono un capolavoro di ospitalit&agrave;, dove
                    ogni dettaglio &egrave; pensato per far sentire l&rsquo;ospite a casa.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </FadeIn>

          {/* Un Locale Caldo */}
          <FadeIn delay={200}>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/2 order-2 md:order-1">
                <h3 className="font-serif font-normal text-2xl text-cream mb-4">
                  Un Locale Caldo e Amichevole
                </h3>
                <blockquote className="border-l-2 border-gold/30 pl-5 mb-5 bg-white/[0.03] rounded-r-xl py-3 pr-4">
                  <p className="text-cream/80 font-serif italic text-base">
                    &ldquo;Se l&rsquo;accoglienza conta, e conta, la Taverna degli Amici parte
                    decisamente in pole position.&rdquo;
                  </p>
                  <cite className="text-gold/80 text-sm not-italic mt-1 block">&mdash; Locuste</cite>
                </blockquote>
                <p className="text-cream/80 text-base leading-[1.8]">
                  Ottime carni e buone bottiglie, in un locale dove Ernesto e Rita si alternano alla
                  guida con la stessa passione del primo giorno.
                </p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-zoom shadow-2xl">
                  <Image
                    src="/images/gallery/ambiente/sala-due-ambienti.jpg"
                    alt="Atmosfera calda della Taverna"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Il Fondatore */}
      <section className="py-20 md:py-28 bg-smoke">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="font-sc tracking-[0.3em] text-gold-dark/80 text-sm block text-center mb-4 uppercase">Il Cuore della Taverna</span>
            <h2 className="font-serif font-normal text-4xl md:text-6xl text-espresso text-center mb-5 tracking-tight leading-[1.1]">Il Fondatore</h2>
            <div className="ornament-line mb-14">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-dark/30" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
              <div className="md:w-1/3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-gold/15 ring-offset-4 ring-offset-smoke shadow-xl">
                  <Image
                    src="/images/gallery/ambiente/ernesto-proprietario-fondatore.jpg"
                    alt="Ernesto Notaro, fondatore della Taverna degli Amici"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="font-serif font-normal text-2xl text-espresso mb-1">Ernesto Notaro</h3>
                <p className="font-sc tracking-[0.2em] text-gold-dark/80 text-sm mb-5">
                  Fondatore e Anima della Taverna &middot; Da Tiriolo (Calabria)
                </p>
                <p className="text-warm-grey text-base leading-[1.8] mb-5">
                  Ristoratore di origini calabresi trasferitosi a Milano, insieme a Rita ha dato vita
                  nel 1997 a quello che &egrave; diventato un punto di riferimento per gli amanti della carne
                  di qualit&agrave;.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {pressQuotes.map((quote) => (
                    <blockquote
                      key={quote.source}
                      className="flex-1 p-4 rounded-xl bg-parchment border border-gold/8 hover-lift"
                    >
                      <p className="font-serif text-espresso italic text-base">
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <cite className="text-gold-dark/80 text-sm not-italic mt-1.5 block">
                        &mdash; {quote.source}
                      </cite>
                    </blockquote>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-parchment border border-gold-muted/15">
                  <h4 className="font-serif text-lg text-espresso mb-3">
                    I Fiori all&rsquo;Occhiello
                  </h4>
                  <ul className="space-y-2.5">
                    {fioriAllOcchiello.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base text-warm-grey">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h2 className="font-serif font-normal text-4xl md:text-6xl tracking-tight text-cream text-center mb-5 leading-[1.1]">La Nostra Filosofia</h2>
            <div className="ornament-line mb-14">
              <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item, i) => (
              <FadeIn key={item.title} delay={i * 120} animation="scaleUp">
                <div className="text-center p-8 rounded-2xl glass-card-strong hover-lift border-animated group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-gold/90 mb-3">{item.title}</h3>
                  <p className="text-cream/80 text-base leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-parchment relative">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="font-serif text-5xl text-gold/15 mb-4">&ldquo;</div>
            <blockquote className="font-serif font-normal text-xl md:text-2xl text-espresso/85 italic leading-[1.7]">
              La vera ospitalit&agrave; nasce dal cuore: ogni cliente che entra dalla nostra porta non &egrave; un estraneo, ma un amico che ancora non conosce il sapore della nostra brace.
            </blockquote>
            <cite className="block mt-6 font-sc tracking-[0.2em] text-gold-dark/80 text-sm not-italic uppercase">
              &mdash; Ernesto Notaro, Fondatore
            </cite>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Vieni a Trovarci"
        subtitle="Prenota il tuo tavolo e scopri perché dal 1997 siamo un punto di riferimento per gli amanti della carne a Milano."
        primaryLabel="Prenota Ora"
        primaryHref="/prenota"
        secondaryLabel="Scopri il Menu"
        secondaryHref="/menu"
      />
    </>
  )
}
