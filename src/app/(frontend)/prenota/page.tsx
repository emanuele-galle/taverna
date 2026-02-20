import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { Clock, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prenota un Tavolo',
  description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedì al sabato, pranzo e cena.',
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

      <section className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 card-specialty hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-espresso">Orari</h3>
                </div>
                <div className="text-lg text-warm-grey space-y-1.5">
                  <p><span className="font-medium text-espresso">Lun - Sab</span></p>
                  <p>Pranzo: 12:00 - 15:00</p>
                  <p>Cena: 19:30 - 02:00</p>
                  <p className="mt-3"><span className="font-medium text-espresso">Domenica:</span> Chiuso</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 card-specialty hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-espresso">Telefono</h3>
                </div>
                <a href="tel:+390255194005" className="text-lg text-burgundy hover:text-gold transition-colors font-medium">
                  02 5519 4005
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 card-specialty hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl text-espresso">Indirizzo</h3>
                </div>
                <p className="text-lg text-warm-grey">Via Spartaco, 4, 20135 Milano MI</p>
              </div>
            </div>
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
