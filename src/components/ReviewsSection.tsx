'use client'

import FadeIn from '@/components/FadeIn'

const reviews = [
  {
    name: 'Marco Valentini',
    initial: 'M',
    color: 'bg-burgundy',
    city: 'Milano',
    date: 'Settembre 2024',
    stars: 5,
    text: 'La fiorentina di scottona è semplicemente perfetta: crosta croccante, interno rosa e succulento. Ernesto sa come trattare la carne alla brace come nessun altro a Milano. Torneremo sicuramente!',
  },
  {
    name: 'Giulia Ferretti',
    initial: 'G',
    color: 'bg-gold-dark',
    city: 'Roma',
    date: 'Ottobre 2024',
    stars: 5,
    text: 'Abbiamo ordinato la grigliata mista e il controfiletto argentino: carni straordinarie, cottura impeccabile. L\'atmosfera è calda e accogliente, ci si sente davvero tra amici. Cantina eccezionale!',
  },
  {
    name: 'Alessandro Conti',
    initial: 'A',
    color: 'bg-charcoal-light',
    city: 'Milano',
    date: 'Novembre 2024',
    stars: 5,
    text: 'Da quasi 30 anni un punto di riferimento per le carni alla brace. Gli arrosticini sono i migliori che abbia mai assaggiato fuori dall\'Abruzzo. Porzioni generose, prezzi onesti, servizio familiare.',
  },
  {
    name: 'Francesca Rizzo',
    initial: 'F',
    color: 'bg-wine',
    city: 'Torino',
    date: 'Dicembre 2024',
    stars: 5,
    text: 'Una delle migliori esperienze culinarie di Milano. La costata alla brace si scioglie in bocca. La cantina con 500 etichette è un sogno per gli amanti del vino. Ambiente unico, torneremo presto.',
  },
  {
    name: 'Roberto De Luca',
    initial: 'R',
    color: 'bg-espresso',
    city: 'Napoli',
    date: 'Gennaio 2025',
    stars: 5,
    text: 'Siamo venuti da Napoli su consiglio di amici e non siamo rimasti delusi. La tagliata di argentino è sublime, il servizio impeccabile. Ernesto è un padrone di casa straordinario.',
  },
  {
    name: 'Laura Bianchi',
    initial: 'L',
    color: 'bg-terracotta',
    city: 'Milano',
    date: 'Febbraio 2025',
    stars: 5,
    text: 'Festeggiato il compleanno qui con 15 amici. Tutto perfetto: dalla grigliata mista ai dolci fatti in casa. Le sale con gli affreschi a trompe l\'oeil creano un\'atmosfera magica. Consigliatissimo!',
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[420px] flex-shrink-0 bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 group">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span key={i} className="text-gold text-lg">&#9733;</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-cream/80 text-base leading-[1.75] mb-6 line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center ring-1 ring-gold/20`}>
          <span className="text-cream font-semibold text-sm">{review.initial}</span>
        </div>
        <div>
          <p className="font-medium text-cream text-sm">{review.name}</p>
          <p className="text-cream/60 text-xs">
            {review.city} &middot; {review.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsSection() {
  // Duplicate reviews for infinite scroll effect
  const allReviews = [...reviews, ...reviews]

  return (
    <section className="py-24 md:py-32 bg-charcoal-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-sc tracking-[0.25em] text-gold/80 text-sm block mb-3">Testimonianze</span>
              <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream tracking-tight leading-[1.1]">
                Cosa Dicono i Nostri Clienti
              </h2>
            </div>
            <p className="font-serif italic text-base text-cream/70 max-w-sm">
              Recensioni autentiche da chi ha assaporato le nostre carni alla brace
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal-deep to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee" style={{ '--marquee-duration': '50s' } as React.CSSProperties}>
          {allReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
