import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
  description: 'Termini e condizioni d\'uso del sito La Taverna degli Amici e delle prenotazioni online.',
  openGraph: {
    title: 'Termini e Condizioni | La Taverna degli Amici',
    description: 'Termini e condizioni d\'uso del sito La Taverna degli Amici e delle prenotazioni online.',
    url: 'https://taverna.fodivps2.cloud/termini',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termini e Condizioni | La Taverna degli Amici',
    description: 'Termini e condizioni d\'uso del sito La Taverna degli Amici e delle prenotazioni online.',
  },
}

export default function TerminiPage() {
  return (
    <>
      <PageHero
        title="Termini e Condizioni"
        subtitle="Condizioni di utilizzo del sito web"
      />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5 space-y-6">
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">1. Titolare del sito</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                Il presente sito web &egrave; di propriet&agrave; di La Taverna degli Amici, con sede in Via Spartaco 4, 20154 Milano (MI).
                Per qualsiasi comunicazione: info@latavernadegliamici.it | Tel. 02 5519 4005.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">2. Accettazione dei termini</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                L&apos;accesso e l&apos;utilizzo di questo sito web implicano l&apos;accettazione integrale dei presenti Termini e Condizioni.
                Se non si accettano tali condizioni, si prega di non utilizzare il sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">3. Propriet&agrave; intellettuale</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                Tutti i contenuti presenti su questo sito (testi, immagini, loghi, grafica, video) sono protetti dal diritto d&apos;autore
                e sono di propriet&agrave; esclusiva de La Taverna degli Amici, salvo diversa indicazione. &Egrave; vietata la riproduzione,
                distribuzione o utilizzo non autorizzato dei contenuti.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">4. Prenotazioni</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                Le prenotazioni effettuate tramite il sito web sono soggette a conferma da parte del ristorante.
                La Taverna degli Amici si riserva il diritto di modificare o cancellare prenotazioni in caso di
                circostanze eccezionali, dandone tempestiva comunicazione al cliente.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">5. Limitazione di responsabilit&agrave;</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                La Taverna degli Amici si impegna a mantenere le informazioni del sito accurate e aggiornate,
                ma non garantisce la completezza o l&apos;assenza di errori. Il ristorante non sar&agrave; responsabile
                per eventuali danni derivanti dall&apos;utilizzo delle informazioni presenti sul sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">6. Modifiche ai termini</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                La Taverna degli Amici si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento.
                Le modifiche saranno effettive dal momento della pubblicazione sul sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">7. Legge applicabile</h2>
              <p className="text-base text-warm-grey leading-relaxed">
                I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia
                sar&agrave; competente il Foro di Milano.
              </p>
            </div>

            <p className="text-xs text-warm-grey/60 pt-4 border-t border-charcoal/5">
              Ultimo aggiornamento: Febbraio 2026
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200 text-sm"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
