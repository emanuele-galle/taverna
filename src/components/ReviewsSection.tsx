'use client'

const reviews = [
  {
    name: 'Marco Valentini',
    city: 'Milano',
    date: 'Settembre 2024',
    stars: 5,
    text: 'La bistecca alla brace è semplicemente perfetta. Carne tenera, cottura impeccabile e un sapore che non trovi altrove a Milano. Ernesto sa il fatto suo — 27 anni di esperienza si sentono tutti.',
  },
  {
    name: 'Giulia Rossi',
    city: 'Roma',
    date: 'Ottobre 2024',
    stars: 5,
    text: 'Cercavo un posto dove sentirmi a casa e l\'ho trovato. Tre piani di calore, tavoli in legno, una cantina da sogno. Ho assaggiato la tagliata e un Barolo del 2016 — serata indimenticabile.',
  },
  {
    name: 'Alessandro Marini',
    city: 'Milano',
    date: 'Novembre 2024',
    stars: 5,
    text: 'Ci torno ogni settimana da anni. L\'antipasto misto è una poesia, gli arrosticini un capolavoro. E la cantina con 500 etichette? Ogni volta scopro un vino nuovo. Ernesto e Rita sono dei padroni di casa eccezionali.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
          Cosa Dicono i Nostri Ospiti
        </h2>
        <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
          Le esperienze di chi ha vissuto la nostra ospitalità
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 border border-charcoal/10 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-charcoal/80 text-sm italic leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-charcoal">{review.name}</p>
                <p className="text-warm-grey text-sm">
                  {review.city} &middot; {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
