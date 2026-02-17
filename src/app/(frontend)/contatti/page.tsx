import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata: Metadata = { title: 'Contatti' }

export default function ContattiPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">Contatti</h1>
          <p className="text-warm-grey max-w-lg mx-auto">
            Scrivici o vieni a trovarci
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">Scrivici un Messaggio</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Indirizzo</h3>
                </div>
                <p className="text-sm text-warm-grey">{restaurant.address}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Telefono</h3>
                </div>
                <a href={`tel:${restaurant.phone}`} className="text-sm text-burgundy hover:text-gold transition-colors">
                  {restaurant.phoneDisplay}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Email</h3>
                </div>
                <a href={`mailto:${restaurant.email}`} className="text-sm text-burgundy hover:text-gold transition-colors">
                  {restaurant.email}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Orari</h3>
                </div>
                <div className="text-sm text-warm-grey space-y-1">
                  {restaurant.openingHours.map((h) => (
                    <div key={h.days}>
                      <p className="font-medium text-charcoal">{h.days}</p>
                      {h.lunch === 'Chiuso' ? (
                        <p>Chiuso</p>
                      ) : (
                        <>
                          <p>Pranzo: {h.lunch}</p>
                          <p>Cena: {h.dinner}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-sm">
            <iframe
              src={restaurant.googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Taverna degli Amici - Mappa"
            />
          </div>
        </div>
      </section>
    </>
  )
}
