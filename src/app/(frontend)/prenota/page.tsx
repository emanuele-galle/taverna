import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { Clock, Phone, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prenota un Tavolo',
  description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedì al sabato, pranzo e cena.',
  alternates: { canonical: '/prenota' },
  openGraph: {
    title: 'Prenota un Tavolo | La Taverna degli Amici',
    description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedì al sabato, pranzo e cena.',
    url: '/prenota',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prenota un Tavolo | La Taverna degli Amici',
    description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedì al sabato, pranzo e cena.',
  },
}

export default function PrenotaPage() {
  return (
    <>
      <PageHero
        title="Prenota il Tuo Tavolo"
        subtitle="Compila il modulo e ti confermeremo la prenotazione"
        image="/images/hero/interno.jpg"
        breadcrumb="Prenota"
      />

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <FadeIn className="lg:col-span-2">
              <BookingForm />
            </FadeIn>

            <FadeIn delay={150} className="space-y-5">
              {/* Orari */}
              <div className="bg-white rounded-2xl p-7 hover-lift border border-charcoal/[0.08] shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-espresso">Orari</h3>
                </div>
                <div className="text-base text-warm-grey space-y-1.5">
                  <p><span className="font-medium text-espresso">Lun - Sab</span></p>
                  <p>Pranzo: 12:00 - 15:00</p>
                  <p>Cena: 19:30 - 02:00</p>
                  <p className="mt-3"><span className="font-medium text-espresso">Domenica:</span> Chiuso</p>
                </div>
              </div>

              {/* Telefono */}
              <div className="bg-white rounded-2xl p-7 hover-lift border border-charcoal/[0.08] shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-espresso">Telefono</h3>
                </div>
                <a href="tel:+390255194005" className="text-base text-burgundy hover:text-gold transition-colors font-medium">
                  02 5519 4005
                </a>
              </div>

              {/* Indirizzo */}
              <div className="bg-white rounded-2xl p-7 hover-lift border border-charcoal/[0.08] shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-espresso">Indirizzo</h3>
                </div>
                <p className="text-base text-warm-grey">Via Spartaco, 4, 20135 Milano MI</p>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/390255194005?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20alla%20Taverna%20degli%20Amici."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-50 rounded-xl p-6 hover-lift border border-green-200/50 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-espresso">Prenota via WhatsApp</h3>
                    <p className="text-sm text-warm-grey">Rispondiamo in pochi minuti</p>
                  </div>
                  <svg className="w-4 h-4 text-green-600 ml-auto transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Preferisci Chiamare?"
        subtitle="Il nostro staff è a disposizione per confermare la tua prenotazione e rispondere a ogni domanda."
        primaryLabel="Chiamaci Ora"
        primaryHref="tel:+390255194005"
        secondaryLabel="Vedi il Menu"
        secondaryHref="/menu"
      />
    </>
  )
}
