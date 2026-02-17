import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Chi Siamo' }

const timeline = [
  {
    year: '1997',
    title: "L'Inizio di un Sogno",
    desc: 'Ernesto Notaro, ristoratore di origini calabresi da Tiriolo, e sua moglie Rita fondano La Taverna degli Amici. La cucina si basa sulla selezione di carni pregiate, tutte cotte visibilmente sulla brace. Antipasti di eccellenza tradizionale regionale.',
  },
  {
    year: 'Anni 2000',
    title: 'La Cantina',
    desc: 'La cantina cresce fino a superare le 500 etichette di vini italiani e internazionali. Dai grandi rossi piemontesi e toscani alle migliori bollicine, ogni bottiglia racconta una storia.',
  },
  {
    year: 'Anni 2010',
    title: "L'Eccellenza",
    desc: 'Selezione delle migliori carni del mondo. La brace diventa un punto di riferimento a Milano per gli amanti della carne di qualità.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione e Innovazione',
    desc: 'Oltre 28 anni di esperienza. Tre piani con diverse salette, tavoloni in legno e affreschi a trompe l\'oeil. Ernesto e Rita continuano a garantire un servizio impeccabile.',
  },
]

const philosophy = [
  {
    title: 'Qualità',
    desc: 'Carni certificate selezionate con cura maniacale. Scottona bavarese, controfiletto argentino e uruguaiano, cotte a vista sulla brace a legna.',
  },
  {
    title: 'Cantina da 500 Etichette',
    desc: 'Una delle cantine più fornite di Milano. Oltre 50 tipi di formaggi italiani ed esteri. Una selezione che completa ogni esperienza a tavola.',
  },
  {
    title: 'Ospitalità dal 1997',
    desc: 'Ogni cliente è trattato come un amico. "Se l\'accoglienza conta, e conta, la Taverna parte decisamente in pole position."',
  },
]

const pressQuotes = [
  { text: 'La migliore carne di Milano', source: 'TripAdvisor' },
  { text: 'Buono, amichevole, con un gemello parigino', source: 'Corriere della Sera' },
]

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">Chi Siamo</h1>
          <p className="text-warm-grey max-w-lg mx-auto">
            La nostra storia, la nostra passione
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">La Nostra Storia</h2>
          <div className="relative border-l-2 border-gold/30 ml-4">
            {timeline.map((item) => (
              <div key={item.year} className="mb-10 ml-8 relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gold border-2 border-cream" />
                <span className="text-sm font-semibold text-gold">{item.year}</span>
                <h3 className="font-serif text-xl text-charcoal mt-1 mb-2">{item.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">La Nostra Filosofia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">Dicono di Noi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressQuotes.map((quote) => (
              <blockquote
                key={quote.source}
                className="text-center p-8 rounded-2xl bg-charcoal/5 border border-charcoal/10"
              >
                <p className="font-serif text-xl text-charcoal italic mb-4">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <cite className="text-gold font-semibold text-sm not-italic">
                  &mdash; {quote.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl text-cream/90 italic">
            &ldquo;Non c&rsquo;è amore più sincero di quello per il cibo buono&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gold text-sm not-italic">
            &mdash; George Bernard Shaw
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-burgundy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-cream mb-4">Vieni a Trovarci</h2>
          <p className="text-cream/80 mb-8">
            Prenota il tuo tavolo e scopri perché dal 1997 siamo un punto di riferimento per gli amanti della carne a Milano.
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
