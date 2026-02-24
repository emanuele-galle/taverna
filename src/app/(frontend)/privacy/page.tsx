import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy de La Taverna degli Amici. Informativa sul trattamento dei dati personali ai sensi del GDPR.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | La Taverna degli Amici',
    description: 'Privacy Policy de La Taverna degli Amici. Informativa sul trattamento dei dati personali ai sensi del GDPR.',
    url: 'https://taverna.fodivps2.cloud/privacy',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | La Taverna degli Amici',
    description: 'Privacy Policy de La Taverna degli Amici. Informativa sul trattamento dei dati personali ai sensi del GDPR.',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Informativa sulla Privacy"
        subtitle="Come trattiamo i tuoi dati personali"
      />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-base">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5 space-y-6 text-warm-grey text-base leading-relaxed">
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Titolare del Trattamento</h2>
              <p>
                La Taverna degli Amici - Via Spartaco, 4, 20154 Milano MI<br />
                Email: info@latavernadegliamici.it | Tel: 02 5519 4005
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Dati Raccolti</h2>
              <p>
                Raccogliamo i seguenti dati personali forniti volontariamente dall&apos;utente:
                nome, cognome, indirizzo email, numero di telefono, e eventuali messaggi
                inviati tramite i moduli di contatto e prenotazione presenti sul sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Finalit&agrave; del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalit&agrave;:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Gestione delle prenotazioni tavolo</li>
                <li>Risposta alle richieste di contatto</li>
                <li>Invio di comunicazioni relative al servizio richiesto</li>
                <li>Invio di newsletter (previo consenso esplicito)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Base Giuridica</h2>
              <p>
                Il trattamento dei dati si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a del GDPR)
                e sull&apos;esecuzione di misure precontrattuali (art. 6, par. 1, lett. b del GDPR).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Conservazione dei Dati</h2>
              <p>
                I dati personali saranno conservati per il tempo strettamente necessario al perseguimento
                delle finalit&agrave; per cui sono stati raccolti, e comunque non oltre 24 mesi dall&apos;ultimo contatto.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Diritti dell&apos;Interessato</h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha diritto di accesso, rettifica,
                cancellazione, limitazione del trattamento, portabilit&agrave; dei dati e opposizione.
                Per esercitare tali diritti, scrivere a: info@latavernadegliamici.it
              </p>
            </div>

            <p className="text-base text-warm-grey/70 pt-4 border-t border-charcoal/5">
              Informativa ai sensi del D.Lgs. 196/2003 e del Regolamento UE 2016/679 (GDPR).
              Ultimo aggiornamento: Febbraio 2026.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200 text-base"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
