import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Chi Siamo' }

const timeline = [
  {
    year: '1997',
    title: "L'Inizio",
    desc: 'Nasce La Taverna degli Amici, un piccolo ristorante nel cuore di Milano con una grande passione: la carne alla brace e l\'ospitalità autentica.',
  },
  {
    year: 'Anni 2000',
    title: 'La Cantina',
    desc: 'La nostra cantina cresce fino a superare le 500 etichette. Dai grandi rossi piemontesi e toscani alle migliori bollicine, ogni bottiglia racconta una storia.',
  },
  {
    year: 'Anni 2010',
    title: "L'Eccellenza",
    desc: 'Selezioniamo le migliori carni del mondo: scottona bavarese, controfiletti argentini, fiorentina toscana. La nostra brace diventa un punto di riferimento.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione e Innovazione',
    desc: 'Oltre 25 anni di esperienza. Continuiamo a innovare rispettando la tradizione, con un servizio attento e un\'atmosfera che fa sentire ogni ospite a casa.',
  },
]

const philosophy = [
  {
    title: 'Qualità',
    desc: 'Selezioniamo personalmente ogni taglio di carne, ogni ingrediente. Solo il meglio arriva sulla nostra brace e nei piatti dei nostri ospiti.',
  },
  {
    title: 'Cantina da 500 Etichette',
    desc: 'Una delle cantine più fornite di Milano, curata con passione. Il nostro sommelier saprà consigliarvi l\'abbinamento perfetto per ogni piatto.',
  },
  {
    title: 'Esperienza dal 1997',
    desc: 'Oltre un quarto di secolo di ospitalità milanese. La nostra esperienza si traduce in un servizio impeccabile e un\'atmosfera unica.',
  },
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
