import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Cookie Policy' }

export default function CookiePage() {
  return (
    <>
      <section className="relative h-48 flex items-center justify-center bg-charcoal pt-20">
        <h1 className="font-serif text-3xl md:text-4xl text-cream">Cookie Policy</h1>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5 space-y-6 text-warm-grey text-sm leading-relaxed">
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
                contenuti e funzionalità. Questi dati sono anonimi e non consentono
                l&apos;identificazione dell&apos;utente.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">Come Gestire i Cookie</h2>
              <p>
                L&apos;utente può gestire le preferenze relative ai cookie direttamente dal proprio browser.
                La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
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

            <p className="text-xs text-warm-grey/70 pt-4 border-t border-charcoal/5">
              Cookie Policy ai sensi della Direttiva 2009/136/CE e del Provvedimento del Garante
              dell&apos;8 maggio 2014. Ultimo aggiornamento: Febbraio 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
