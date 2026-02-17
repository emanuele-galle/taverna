import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata: Metadata = { title: 'Contatti' }

export default function ContattiPage() {
  return (
    <>
      <section className="relative h-72 flex items-center justify-center bg-charcoal pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">Contatti</h1>
          <p className="text-warm-grey max-w-lg mx-auto mb-8">
            Scrivici o vieni a trovarci
          </p>
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${restaurant.phone}`}
              className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gold/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Chiamaci
            </a>
            <a
              href={`mailto:${restaurant.email}`}
              className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gold/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Scrivici
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gold/20 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Vieni a trovarci
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Dove Siamo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Dove Siamo</h3>
              <p className="text-sm text-warm-grey mb-3">{restaurant.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-burgundy hover:text-gold transition-colors font-medium"
              >
                Ottieni indicazioni &rarr;
              </a>
            </div>

            {/* Telefono */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Telefono</h3>
              <a href={`tel:${restaurant.phone}`} className="text-sm text-burgundy hover:text-gold transition-colors font-medium">
                {restaurant.phoneDisplay}
              </a>
              <p className="text-xs text-warm-grey mt-2">Lun-Sab 12:00-15:00, 19:00-23:00</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Email</h3>
              <a href={`mailto:${restaurant.email}`} className="text-sm text-burgundy hover:text-gold transition-colors font-medium">
                {restaurant.email}
              </a>
              <p className="text-xs text-warm-grey mt-2">Risposta entro 24h</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">WhatsApp</h3>
              <p className="text-sm text-warm-grey mb-3">Contattaci rapidamente</p>
              <a
                href={restaurant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-burgundy hover:text-gold transition-colors font-medium"
              >
                Apri Chat &rarr;
              </a>
            </div>
          </div>

          {/* Orari di Apertura */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-serif text-xl text-charcoal">Orari di Apertura</h3>
            </div>
            <div className="divide-y divide-charcoal/5">
              {restaurant.openingHours.map((h) => (
                <div key={h.days} className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-charcoal">{h.days}</span>
                  <span className="text-sm text-warm-grey">
                    {h.lunch === 'Chiuso'
                      ? 'Chiuso'
                      : `${h.lunch} / ${h.dinner}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl text-charcoal mb-2">Inviaci un Messaggio</h2>
              <p className="text-sm text-warm-grey">
                Compila il form e ti risponderemo entro 24 ore
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-sm">
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
