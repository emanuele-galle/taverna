import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Chi Siamo' }

const philosophy = [
  {
    emoji: '\u{1F969}',
    title: 'Qualità',
    desc: 'Solo le migliori carni certificate: scottona bavarese, controfiletto argentino e uruguaiano. Ogni taglio viene selezionato personalmente con cura maniacale.',
  },
  {
    emoji: '\u{1F525}',
    title: 'Esperienza',
    desc: "Oltre 25 anni di passione per la carne alla brace. La cottura a legna a vista è un'arte che richiede maestria, attenzione e dedizione assoluta.",
  },
  {
    emoji: '\u{1F91D}',
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
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">Chi Siamo</h1>
          <p className="text-warm-grey max-w-lg mx-auto">
            La nostra storia, la nostra passione
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-semibold text-sm rounded-full mb-6">
            Dal 1997
          </span>
          <p className="text-warm-grey text-lg leading-relaxed">
            <strong className="text-charcoal">La Taverna degli Amici</strong> è molto più di un
            semplice ristorante: è un luogo dove la passione per le carni di alta qualità incontra la
            cultura dell&rsquo;ospitalità, un&rsquo;oasi di sapori autentici nel cuore di Milano,
            dove ogni cliente diventa un amico.
          </p>
        </div>
      </section>

      {/* Timeline con immagini alternate */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-16">La Nostra Storia</h2>

          {/* 1997 - L'Inizio di un Sogno */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="text-sm font-semibold text-gold">1997</span>
              <h3 className="font-serif text-2xl text-cream mt-1 mb-4">
                L&rsquo;Inizio di un Sogno
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                Ernesto Notaro, ristoratore di origini calabresi da Tiriolo, insieme alla moglie Rita
                fonda La Taverna degli Amici. Il successo è immediato: la cucina si basa sulla
                selezione di carni pregiate, tutte cotte visibilmente sulla brace a legna. La scelta
                è chiara fin dal primo giorno &mdash; solo il meglio.
              </p>
              <p className="text-cream/70 text-sm leading-relaxed">
                Accanto alle carni, antipasti di eccellenza dalla tradizione regionale, oltre 50 tipi
                di formaggi italiani ed esteri, e una cantina che cresce fino a superare le 500
                etichette di vini selezionati.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/ambiente/insegna-storica-dal-1948.jpg"
                  alt="La Taverna degli Amici - Le origini"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* L'Ambiente - layout invertito */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/ambiente/sala-principale.jpg"
                  alt="Sala principale della Taverna"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="font-serif text-2xl text-cream mb-4">L&rsquo;Ambiente</h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                Un ambiente vivace e conviviale, dove tavoloni di legno e affreschi a trompe
                l&rsquo;oeil creano un&rsquo;atmosfera calda e accogliente. Tre piani con diverse
                salette, ognuna con il suo carattere, per ospitare cene intime e grandi tavolate.
              </p>
              <blockquote className="border-l-2 border-gold/50 pl-4 mt-6">
                <p className="text-cream/60 text-sm italic">
                  &ldquo;Le cinque sale allestite da Ernesto sono un capolavoro di ospitalità, dove
                  ogni dettaglio è pensato per far sentire l&rsquo;ospite a casa.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Un Locale Caldo e Amichevole */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="font-serif text-2xl text-cream mb-4">
                Un Locale Caldo e Amichevole
              </h3>
              <blockquote className="border-l-2 border-gold/50 pl-4 mb-4">
                <p className="text-cream/80 text-sm italic">
                  &ldquo;Se l&rsquo;accoglienza conta, e conta, la Taverna degli Amici parte
                  decisamente in pole position.&rdquo;
                </p>
                <cite className="text-gold text-xs not-italic mt-1 block">&mdash; Locuste</cite>
              </blockquote>
              <p className="text-cream/70 text-sm leading-relaxed">
                Ottime carni e buone bottiglie, in un locale dove Ernesto e Rita si alternano alla
                guida con la stessa passione del primo giorno. L&rsquo;accoglienza non è un
                dettaglio: è la firma della Taverna.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/ambiente/sala-due-ambienti.jpg"
                  alt="Atmosfera calda della Taverna"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il Fondatore */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">Il Fondatore</h2>

          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Foto */}
            <div className="md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/ambiente/ernesto-proprietario-fondatore.jpg"
                  alt="Ernesto Notaro, fondatore della Taverna degli Amici"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:w-2/3">
              <h3 className="font-serif text-2xl text-charcoal mb-1">Ernesto Notaro</h3>
              <p className="text-gold font-semibold text-sm mb-4">
                Fondatore e Anima della Taverna | Da Tiriolo (Calabria)
              </p>
              <p className="text-warm-grey text-sm leading-relaxed mb-4">
                Ristoratore di origini calabresi trasferitosi a Milano, insieme a Rita ha dato vita
                nel 1997 a quello che è diventato un punto di riferimento per gli amanti della carne
                di qualità. Oltre 28 anni di esperienza, con la qualità e l&rsquo;ospitalità come
                missione quotidiana.
              </p>

              {/* Citazioni stampa */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {pressQuotes.map((quote) => (
                  <blockquote
                    key={quote.source}
                    className="flex-1 p-4 rounded-xl bg-charcoal/5 border border-charcoal/10"
                  >
                    <p className="font-serif text-charcoal italic text-sm">
                      &ldquo;{quote.text}&rdquo;
                    </p>
                    <cite className="text-gold text-xs not-italic mt-1 block">
                      &mdash; {quote.source}
                    </cite>
                  </blockquote>
                ))}
              </div>

              <p className="text-warm-grey text-sm leading-relaxed mb-6">
                Le cinque sale allestite da Ernesto sono un capolavoro di ospitalità, dove ogni
                dettaglio &mdash; dai tavoloni in legno agli affreschi a trompe l&rsquo;oeil &mdash;
                è pensato per far sentire ogni ospite parte della famiglia.
              </p>

              {/* Fiori all'Occhiello */}
              <div className="p-6 rounded-2xl bg-charcoal/5 border border-charcoal/10">
                <h4 className="font-serif text-lg text-charcoal mb-3">
                  I Fiori all&rsquo;Occhiello della Taverna
                </h4>
                <ul className="space-y-2">
                  {fioriAllOcchiello.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-warm-grey">
                      <span className="text-gold mt-0.5">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl text-charcoal/90 italic">
            &ldquo;La vera ospitalit&agrave; nasce dal cuore: ogni cliente che entra dalla nostra porta non &egrave; un estraneo, ma un amico che ancora non conosce il sapore della nostra brace.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-gold text-sm not-italic">
            &mdash; Ernesto Notaro, Fondatore
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-burgundy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-cream mb-4">Vieni a Trovarci</h2>
          <p className="text-cream/80 mb-8">
            Prenota il tuo tavolo e scopri perché dal 1997 siamo un punto di riferimento per gli
            amanti della carne a Milano.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/prenota"
              className="inline-flex items-center px-10 py-4 bg-gold text-charcoal text-lg font-semibold rounded-full hover:bg-cream transition-colors duration-200"
            >
              Prenota Ora
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center px-10 py-4 bg-transparent text-cream text-lg font-semibold rounded-full border-2 border-cream/30 hover:border-cream hover:bg-cream/10 transition-colors duration-200"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
