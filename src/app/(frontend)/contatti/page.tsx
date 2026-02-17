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
                <p className="text-xs text-warm-grey mt-1">Lun-Sab 12:00-15:00, 19:00-23:00</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-charcoal">Email</h3>
                </div>
                <a href={`mailto:${restaurant.email}`} className="text-sm text-burgundy hover:text-gold transition-colors">
                  {restaurant.email}
                </a>
                <p className="text-xs text-warm-grey mt-1">Risposta entro 24 ore</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.106-1.138l-.294-.176-2.87.852.852-2.87-.176-.294A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                  </svg>
                  <h3 className="font-serif text-lg text-charcoal">WhatsApp</h3>
                </div>
                <a href={restaurant.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-burgundy hover:text-gold transition-colors">
                  Scrivici su WhatsApp
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
