import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy de La Taverna degli Amici. Informazioni sull\'utilizzo dei cookie sul nostro sito.',
  alternates: { canonical: '/cookie' },
  openGraph: {
    title: 'Cookie Policy | La Taverna degli Amici',
    description: 'Cookie Policy de La Taverna degli Amici. Informazioni sull\'utilizzo dei cookie sul nostro sito.',
    url: 'https://latavernadegliamici.it/cookie',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | La Taverna degli Amici',
    description: 'Cookie Policy de La Taverna degli Amici. Informazioni sull\'utilizzo dei cookie sul nostro sito.',
  },
}

export default function CookiePage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Informazioni sull'utilizzo dei cookie"
      />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-base">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5 space-y-6 text-warm-grey text-base leading-relaxed">
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Cosa Sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono salvati sul dispositivo dell&apos;utente
                durante la navigazione. Servono a migliorare l&apos;esperienza di navigazione e a
                fornire informazioni ai proprietari del sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Cookie Tecnici</h2>
              <p>
                Questo sito utilizza cookie tecnici strettamente necessari al funzionamento del sito.
                Questi cookie non richiedono il consenso dell&apos;utente e includono:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Cookie di sessione per la gestione dell&apos;autenticazione</li>
                <li>Cookie per il salvataggio delle preferenze dell&apos;utente</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Cookie Analitici</h2>
              <p>
                Potremmo utilizzare cookie analitici (es. Google Analytics) per raccogliere
                informazioni aggregate sull&apos;utilizzo del sito, al fine di migliorarne
                contenuti e funzionalit&agrave;. Questi dati sono anonimi e non consentono
                l&apos;identificazione dell&apos;utente.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Come Gestire i Cookie</h2>
              <p>
                L&apos;utente pu&ograve; gestire le preferenze relative ai cookie direttamente dal proprio browser.
                La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalit&agrave; del sito.
              </p>
              <p className="mt-2">
                Per maggiori informazioni sulla gestione dei cookie, consulta la guida del tuo browser:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Chrome: Impostazioni &gt; Privacy e sicurezza &gt; Cookie</li>
                <li>Firefox: Impostazioni &gt; Privacy e sicurezza</li>
                <li>Safari: Preferenze &gt; Privacy</li>
                <li>Edge: Impostazioni &gt; Cookie e autorizzazioni sito</li>
              </ul>
            </div>

            <p className="text-base text-warm-grey/70 pt-4 border-t border-charcoal/5">
              Cookie Policy ai sensi della Direttiva 2009/136/CE e del Provvedimento del Garante
              dell&apos;8 maggio 2014. Ultimo aggiornamento: Febbraio 2026.
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
