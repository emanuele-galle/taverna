'use client'

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
    color: 'bg-gold',
    city: 'Roma',
    date: 'Ottobre 2024',
    stars: 5,
    text: 'Abbiamo ordinato la grigliata mista e il controfiletto argentino: carni straordinarie, cottura impeccabile. L\'atmosfera è calda e accogliente, ci si sente davvero tra amici. Cantina eccezionale!',
  },
  {
    name: 'Alessandro Conti',
    initial: 'A',
    color: 'bg-charcoal',
    city: 'Milano',
    date: 'Novembre 2024',
    stars: 5,
    text: 'Da quasi 30 anni un punto di riferimento per le carni alla brace. Gli arrosticini sono i migliori che abbia mai assaggiato fuori dall\'Abruzzo. Porzioni generose, prezzi onesti, servizio familiare.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy text-center mb-4">
          Cosa Dicono i Nostri Clienti
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
          Recensioni autentiche da chi ha assaporato le nostre carni alla brace
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-cream/50 rounded-xl p-6 border border-charcoal/5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-charcoal/80 text-sm italic leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-charcoal/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center`}>
                    <span className="text-cream font-semibold text-sm">{review.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{review.name}</p>
                    <p className="text-warm-grey text-sm">
                      {review.city} &bull; {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
