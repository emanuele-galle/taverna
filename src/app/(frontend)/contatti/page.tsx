import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta La Taverna degli Amici: Via Spartaco 4, 20135 Milano. Telefono 02 5519 4005. Aperto dal lunedì al sabato per pranzo e cena.',
  openGraph: {
    title: 'Contatti | La Taverna degli Amici',
    description: 'Contatta La Taverna degli Amici: Via Spartaco 4, 20135 Milano. Telefono 02 5519 4005. Aperto dal lunedì al sabato per pranzo e cena.',
    url: '/contatti',
    images: [{ url: '/images/hero/hero-fallback.jpg', width: 1200, height: 630, alt: 'La Taverna degli Amici' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contatti | La Taverna degli Amici',
    description: 'Contatta La Taverna degli Amici: Via Spartaco 4, 20135 Milano. Telefono 02 5519 4005. Aperto dal lunedì al sabato per pranzo e cena.',
  },
}

export default function ContattiPage() {
  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Scrivici o vieni a trovarci"
        image="/images/hero/interno.jpg"
        breadcrumb="Contatti"
      >
        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href={`tel:${restaurant.phone}`}
            className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-6 py-3 text-base font-medium hover:bg-gold/20 active:scale-[0.98] transition-all"
          >
            <Phone className="w-5 h-5" />
            Chiamaci
          </a>
          <a
            href={`mailto:${restaurant.email}`}
            className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-6 py-3 text-base font-medium hover:bg-gold/20 active:scale-[0.98] transition-all"
          >
            <Mail className="w-5 h-5" />
            Scrivici
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-6 py-3 text-base font-medium hover:bg-gold/20 active:scale-[0.98] transition-all"
          >
            <MapPin className="w-5 h-5" />
            Vieni a trovarci
          </a>
        </div>
      </PageHero>

      <section className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-8 border-l-4 border-burgundy text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">Dove Siamo</h3>
              <p className="text-lg text-warm-grey mb-3">{restaurant.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-burgundy hover:text-gold transition-colors font-medium"
              >
                Ottieni indicazioni &rarr;
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-500 text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">Telefono</h3>
              <a href={`tel:${restaurant.phone}`} className="text-lg text-burgundy hover:text-gold transition-colors font-medium">
                {restaurant.phoneDisplay}
              </a>
              <p className="text-base text-warm-grey mt-2">Lun-Sab 12:00-15:00, 19:00-23:00</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-gold text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">Email</h3>
              <a href={`mailto:${restaurant.email}`} className="text-base text-burgundy hover:text-gold transition-colors font-medium">
                {restaurant.email}
              </a>
              <p className="text-base text-warm-grey mt-2">Risposta entro 24h</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-green-500 text-left">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">WhatsApp</h3>
              <p className="text-lg text-warm-grey mb-3">Contattaci rapidamente</p>
              <a
                href={restaurant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-burgundy hover:text-gold transition-colors font-medium"
              >
                Apri Chat &rarr;
              </a>
            </div>
          </div>

          {/* Orari di Apertura */}
          <div className="bg-white rounded-xl p-8 card-specialty hover-lift mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-2xl text-espresso">Orari di Apertura</h3>
            </div>
            <div className="divide-y divide-charcoal/5">
              {restaurant.openingHours.map((h) => (
                <div key={h.days} className="flex items-center justify-between py-3">
                  <span className="text-base font-medium text-espresso">{h.days}</span>
                  <span className="text-base text-warm-grey">
                    {h.lunch === 'Chiuso'
                      ? 'Chiuso'
                      : `${h.lunch} / ${h.dinner}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-gold/10 mb-12">
            <iframe
              src={restaurant.googleMapsEmbed}
              width="100%"
              className="w-full h-64 md:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Taverna degli Amici - Mappa"
            />
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif font-normal text-3xl text-espresso mb-2">Inviaci un Messaggio</h2>
              <p className="font-serif italic text-lg text-warm-grey">
                Compila il form e ti risponderemo entro 24 ore
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Vuoi Prenotare un Tavolo?"
        subtitle="Scegli data e orario e ti confermeremo la prenotazione in pochi minuti."
        primaryLabel="Prenota Ora"
        primaryHref="/prenota"
        secondaryLabel="Vedi il Menu"
        secondaryHref="/menu"
      />
    </>
  )
}
