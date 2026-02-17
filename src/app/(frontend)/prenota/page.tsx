import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { Clock, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prenota un Tavolo',
  description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedi al sabato, pranzo e cena.',
  openGraph: {
    title: 'Prenota un Tavolo | La Taverna degli Amici',
    description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedi al sabato, pranzo e cena.',
    url: 'https://taverna.fodivps2.cloud/prenota',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prenota un Tavolo | La Taverna degli Amici',
    description: 'Prenota il tuo tavolo alla Taverna degli Amici. Ristorante di carni alla brace a Milano, Via Spartaco 4. Aperto dal lunedi al sabato, pranzo e cena.',
  },
}

export default function PrenotaPage() {
  return (
    <>
      <PageHero
        title="Prenota il Tuo Tavolo"
        subtitle="Compila il modulo e ti confermeremo la prenotazione"
      />

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Orari</h3>
                </div>
                <div className="text-sm text-warm-grey space-y-1">
                  <p><span className="font-medium text-charcoal">Lun - Sab</span></p>
                  <p>Pranzo: 12:00 - 15:00</p>
                  <p>Cena: 19:30 - 02:00</p>
                  <p className="mt-2"><span className="font-medium text-charcoal">Domenica:</span> Chiuso</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Telefono</h3>
                </div>
                <a href="tel:+390255194005" className="text-sm text-burgundy hover:text-gold transition-colors">
                  02 5519 4005
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Indirizzo</h3>
                </div>
                <p className="text-sm text-warm-grey">Via Spartaco, 4, 20154 Milano MI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Preferisci Chiamare?"
        subtitle="Il nostro staff e a disposizione per confermare la tua prenotazione e rispondere a ogni domanda."
        primaryLabel="Chiamaci Ora"
        primaryHref="tel:+390255194005"
        secondaryLabel="Vedi il Menu"
        secondaryHref="/menu"
      />
    </>
  )
}
