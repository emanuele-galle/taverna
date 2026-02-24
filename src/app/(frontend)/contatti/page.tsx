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

const contactCards = [
  {
    icon: MapPin,
    accent: 'border-burgundy',
    title: 'Dove Siamo',
    content: restaurant.address,
    action: { label: 'Ottieni indicazioni', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`, external: true },
  },
  {
    icon: Phone,
    accent: 'border-gold',
    title: 'Telefono',
    content: restaurant.phoneDisplay,
    action: { label: 'Chiama ora', href: `tel:${restaurant.phone}`, external: false },
    sub: 'Lun-Sab 12:00-15:00, 19:00-23:00',
  },
  {
    icon: Mail,
    accent: 'border-warm-grey',
    title: 'Email',
    content: restaurant.email,
    action: { label: 'Scrivici', href: `mailto:${restaurant.email}`, external: false },
    sub: 'Risposta entro 24h',
  },
  {
    icon: MessageCircle,
    accent: 'border-green-500',
    title: 'WhatsApp',
    content: 'Contattaci rapidamente',
    action: { label: 'Apri Chat', href: restaurant.whatsappUrl, external: true },
  },
]

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

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards */}
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {contactCards.map((card) => (
                <div key={card.title} className={`bg-white rounded-2xl p-7 border-l-4 ${card.accent} hover-lift shadow-md`}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border-2 border-gold/25 flex items-center justify-center mb-5">
                    <card.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso mb-2">{card.title}</h3>
                  <p className="text-warm-grey text-lg mb-2">{card.content}</p>
                  {card.sub && <p className="text-warm-grey/80 text-base mb-2">{card.sub}</p>}
                  <a
                    href={card.action.href}
                    {...(card.action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-base text-burgundy hover:text-gold transition-colors font-medium inline-flex items-center gap-1"
                  >
                    {card.action.label} <span>&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Orari */}
          <FadeIn delay={100}>
            <div className="bg-white rounded-2xl p-8 hover-lift mb-14 max-w-lg mx-auto border border-charcoal/[0.08] shadow-md">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl text-espresso">Orari di Apertura</h3>
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
          </FadeIn>

          {/* Google Maps */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-14">
              <LazyGoogleMap
                src={restaurant.googleMapsEmbed}
                title="La Taverna degli Amici - Mappa"
              />
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={100}>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-serif font-normal text-3xl md:text-4xl text-espresso mb-3">Inviaci un Messaggio</h2>
                <p className="font-serif italic text-base text-warm-grey/70">
                  Compila il form e ti risponderemo entro 24 ore
                </p>
              </div>
              <ContactForm />
            </div>
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
