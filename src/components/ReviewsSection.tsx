'use client'

const reviews = [
  {
    name: 'Marco Valentini',
    initial: 'M',
    color: 'bg-burgundy',
    city: 'Milano',
    date: 'Settembre 2024',
    stars: 5,
    text: 'Finalmente la vera carbonara a Milano! Cremosa, saporita, esattamente come a Roma. Il guanciale è croccante al punto giusto e la mantecatura perfetta. Tornerò sicuramente!',
  },
  {
    name: 'Giulia Rossi',
    initial: 'G',
    color: 'bg-gold',
    city: 'Roma',
    date: 'Ottobre 2024',
    stars: 5,
    text: 'Ambiente familiare e accogliente. La coda alla vaccinara è da provare assolutamente! Chef Roberto è un artista, si vede la passione in ogni piatto.',
  },
  {
    name: 'Alessandro Marini',
    initial: 'A',
    color: 'bg-charcoal',
    city: 'Milano',
    date: 'Novembre 2024',
    stars: 5,
    text: 'Ho portato amici romani ed erano stupiti: \'Sembra di essere a Trastevere!\' Ingredienti di qualità, porzioni generose, prezzi onesti. Consigliatissimo!',
  },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
          Cosa Dicono i Nostri Clienti
        </h2>
        <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
          Recensioni autentiche da chi ha assaporato le nostre carni alla brace
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
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center`}>
                  <span className="text-cream font-semibold text-sm">{review.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{review.name}</p>
                  <p className="text-warm-grey text-sm">
                    {review.city} &middot; {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
