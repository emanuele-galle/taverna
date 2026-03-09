import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import LazyGoogleMap from '@/components/LazyGoogleMap'
import FadeIn from '@/components/FadeIn'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta La Taverna degli Amici: Via Spartaco 4, 20135 Milano. Telefono 02 5519 4005. Aperto dal lunedì al sabato per pranzo e cena.',
  alternates: { canonical: '/contatti' },
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

function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Dove si trova La Taverna degli Amici?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `La Taverna degli Amici si trova in ${restaurant.address}. Siamo facilmente raggiungibili con i mezzi pubblici e disponiamo di parcheggi nelle vicinanze.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Quali sono gli orari di apertura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siamo aperti dal lunedì al sabato, a pranzo dalle 12:00 alle 15:00 e a cena dalle 19:30 alle 02:00. La domenica siamo chiusi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come posso prenotare un tavolo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Puoi prenotare un tavolo chiamando il ${restaurant.phoneDisplay}, tramite WhatsApp, oppure direttamente dal nostro sito nella sezione Prenota. Accettiamo prenotazioni per gruppi fino a ${restaurant.maxGuestsPerBooking} persone.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Che tipo di carne servite?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siamo specializzati in carni alla brace di altissima qualità: tagli pregiati di manzo, bistecche, costate e molto altro, cucinati sulla nostra griglia a vista. Proponiamo anche antipasti della tradizione, primi piatti e dolci artigianali.',
        },
      },
      {
        '@type': 'Question',
        name: 'Avete opzioni per celiaci?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì, offriamo diverse opzioni senza glutine nel nostro menu. Le carni alla brace sono naturalmente gluten-free, e abbiamo piatti dedicati per chi ha esigenze alimentari specifiche. Vi consigliamo di informare il personale al momento della prenotazione.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export default function ContattiPage() {
  return (
    <>
      <FAQSchema />
      <PageHero
        title="Contatti"
        subtitle="Scrivici o vieni a trovarci"
        image="/images/hero/interno.jpg"
        breadcrumb="Contatti"
      >
        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          <a
            href={`tel:${restaurant.phone}`}
            className="flex items-center gap-2 bg-white/5 border border-gold/25 text-gold rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm hover:bg-gold/10 active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4" />
            Chiamaci
          </a>
          <a
            href={`mailto:${restaurant.email}`}
            className="flex items-center gap-2 bg-white/5 border border-gold/25 text-gold rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm hover:bg-gold/10 active:scale-[0.98] transition-all"
          >
            <Mail className="w-4 h-4" />
            Scrivici
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 border border-gold/25 text-gold rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur-sm hover:bg-gold/10 active:scale-[0.98] transition-all"
          >
            <MapPin className="w-4 h-4" />
            Indicazioni
          </a>
        </div>
      </PageHero>

      {/* Info + Mappa */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Colonna sinistra: Info */}
            <FadeIn animation="slideRight">
              <div className="space-y-5">
                {/* Dove Siamo */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-charcoal/[0.06] shadow-sm hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-burgundy/10 border border-burgundy/20 flex items-center justify-center shrink-0 group-hover:bg-burgundy/15 transition-colors">
                    <MapPin className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-1">Dove Siamo</h3>
                    <p className="text-warm-grey text-base">{restaurant.address}</p>
                    <span className="text-burgundy text-sm font-medium mt-1 inline-flex items-center gap-1">
                      Ottieni indicazioni <span>&rarr;</span>
                    </span>
                  </div>
                </a>

                {/* Telefono */}
                <a
                  href={`tel:${restaurant.phone}`}
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-charcoal/[0.06] shadow-sm hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    <Phone className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-1">Telefono</h3>
                    <p className="text-warm-grey text-base">{restaurant.phoneDisplay}</p>
                    <span className="text-warm-grey/60 text-sm">Lun-Sab 12:00-15:00, 19:30-02:00</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${restaurant.email}`}
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-charcoal/[0.06] shadow-sm hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-warm-grey/10 border border-warm-grey/20 flex items-center justify-center shrink-0 group-hover:bg-warm-grey/15 transition-colors">
                    <Mail className="w-5 h-5 text-warm-grey" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-1">Email</h3>
                    <p className="text-warm-grey text-base">{restaurant.email}</p>
                    <span className="text-warm-grey/60 text-sm">Risposta entro 24h</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={restaurant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border border-charcoal/[0.06] shadow-sm hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/15 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-espresso mb-1">WhatsApp</h3>
                    <p className="text-warm-grey text-base">Contattaci rapidamente</p>
                    <span className="text-green-600 text-sm font-medium mt-1 inline-flex items-center gap-1">
                      Apri Chat <span>&rarr;</span>
                    </span>
                  </div>
                </a>

                {/* Orari */}
                <div className="bg-white rounded-2xl p-6 border border-charcoal/[0.06] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-dark" />
                    </div>
                    <h3 className="font-serif text-lg text-espresso">Orari di Apertura</h3>
                  </div>
                  <div className="divide-y divide-charcoal/[0.04]">
                    {restaurant.openingHours.map((h) => (
                      <div key={h.days} className="flex items-center justify-between py-3">
                        <span className="text-base font-medium text-espresso">{h.days}</span>
                        <span className="text-base text-warm-grey">
                          {h.lunch === 'Chiuso' ? 'Chiuso' : `${h.lunch} / ${h.dinner}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Colonna destra: Mappa */}
            <FadeIn animation="slideLeft" delay={150} className="h-full">
              <LazyGoogleMap
                src={restaurant.googleMapsEmbed}
                title="La Taverna degli Amici - Mappa"
                className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form Contatto */}
      <section className="py-20 md:py-28 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="font-sc tracking-widest text-gold/80 text-sm block mb-4 uppercase">Scrivici</span>
              <h2 className="font-serif font-normal text-3xl md:text-5xl text-cream mb-4 tracking-tight leading-[1.1]">
                Inviaci un Messaggio
              </h2>
              <div className="ornament-line mb-6">
                <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
              </div>
              <p className="text-cream/70 text-base">
                Compila il form e ti risponderemo entro 24 ore
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
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
