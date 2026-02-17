import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'

export const dynamic = 'force-dynamic'

const featuredSpecialties = [
  {
    name: 'Costata di Scottona',
    image: '/images/gallery/piatti/bistecca-alla-griglia.jpg',
    badges: ['Scottona Bavarese', '300g'],
    description: 'Costata di scottona bavarese cotta alla brace a vista. Carne tenera e succosa, con la crosticina perfetta che solo la brace viva sa dare.',
    price: 20,
    rating: 4.9,
  },
  {
    name: 'Tagliata di Argentino',
    image: '/images/gallery/piatti/carne-tagliata.jpg',
    badges: ['Controfiletto', 'Premium'],
    description: 'Tagliata di controfiletto argentino servita su letto di rucola e scaglie di Parmigiano. Una carne dal sapore intenso e dalla consistenza impareggiabile.',
    price: 25,
    rating: 4.9,
  },
  {
    name: 'Arrosticini Abruzzesi',
    image: '/images/gallery/piatti/arrosticini.jpg',
    badges: ['Pecora Abruzzese', 'Tradizione'],
    description: 'Spiedini di pecora abruzzese preparati secondo la tradizione, cotti lentamente sulla brace per una croccantezza esterna e morbidezza interna perfette.',
    price: 18,
    rating: 4.8,
  },
]

const timelineSteps = [
  {
    year: '1997',
    title: "L'Inizio di un Sogno",
    text: 'Ernesto Notaro, originario di Tiriolo in Calabria, apre La Taverna degli Amici in Via Spartaco 4 a Milano. Un piccolo ristorante con una grande visione: portare la vera cultura della brace nel cuore della città.',
  },
  {
    year: 'Anni 2000',
    title: 'La Cantina si Arricchisce',
    text: 'La passione per il vino porta alla creazione di una cantina con oltre 500 etichette. Dai grandi rossi italiani alle bollicine francesi, ogni bottiglia è selezionata con cura.',
  },
  {
    year: 'Anni 2010',
    title: "L'Eccellenza delle Carni",
    text: 'La ricerca della qualità porta a collaborazioni dirette con allevatori selezionati. Scottona bavarese, controfiletti argentini, fiorentina: solo le migliori carni per la brace.',
  },
  {
    year: 'Oggi',
    title: 'Tradizione e Qualità',
    text: 'Oltre 25 anni di esperienza, tre piani di accoglienza e una reputazione costruita piatto dopo piatto. La Taverna degli Amici continua a essere un punto di riferimento per gli amanti delle carni alla brace.',
  },
]

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Perche Sceglierci */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
            Perché Sceglierci
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            Dal 1997, la nostra passione per la qualità ci guida ogni giorno
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🥩',
                title: 'Carni di Alta Qualità',
                desc: 'Scottona bavarese, controfiletti argentini, fiorentina. Selezioniamo solo le migliori carni per la nostra brace.',
              },
              {
                icon: '🍷',
                title: 'Oltre 500 Etichette',
                desc: 'Una cantina curata con passione: dai grandi rossi italiani alle bollicine francesi, per ogni palato.',
              },
              {
                icon: '⭐',
                title: 'Dal 1997',
                desc: "Oltre 25 anni di esperienza, tradizione e cultura dell'ospitalità nel cuore di Milano.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Una Storia di Passione */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">
            Una Storia di Passione
          </h2>
          <p className="text-warm-grey text-center mb-16 max-w-2xl mx-auto">
            Dal 1997, un punto di riferimento per gli amanti delle carni alla brace a Milano
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {timelineSteps.map((step, i) => (
                <div
                  key={step.year}
                  className={`relative ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}
                >
                  {/* Dot on timeline */}
                  <div className={`hidden md:block absolute top-1 w-4 h-4 rounded-full bg-gold border-4 border-cream ${i % 2 === 0 ? 'right-0 translate-x-[calc(50%+24px)]' : 'left-0 -translate-x-[calc(50%+24px)]'}`} />
                  <span className="inline-block text-sm font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
                    {step.year}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-warm-grey text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-14">
            <Link
              href="/chi-siamo"
              className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200"
            >
              Scopri Tutta la Nostra Storia
            </Link>
          </div>
        </div>
      </section>

      {/* La Nostra Filosofia */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
            La Nostra Filosofia
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            I valori che ci guidano da oltre 25 anni
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🥩',
                title: 'Qualità Eccellente',
                desc: 'Selezioniamo personalmente ogni taglio di carne dai migliori allevatori. Scottona bavarese, controfiletti argentini, fiorentina: solo il meglio arriva sulla nostra brace.',
              },
              {
                icon: '⭐',
                title: 'Esperienza dal 1997',
                desc: 'Oltre 25 anni di dedizione alla cucina alla brace. Ogni piatto porta con sé decenni di esperienza, ricerca e passione per la perfezione.',
              },
              {
                icon: '❤️',
                title: "Cultura dell'Ospitalità",
                desc: "Tre piani di accoglienza nel cuore di Milano. Ogni ospite è parte della famiglia, ogni serata un'esperienza da ricordare. Questo è lo spirito della Taverna.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-xl text-gold mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Nostre Specialita alla Brace */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">
            Le Nostre Specialità alla Brace
          </h2>
          <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
            Carni selezionate cotte a vista sulla brace, per un&apos;esperienza unica
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSpecialties.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-charcoal/5"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs bg-gold/10 text-gold border border-gold/20 px-2 py-0.5 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">{item.name}</h3>
                  <p className="text-warm-grey text-sm leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-semibold text-lg">
                      &euro;{item.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-gold text-sm">★★★★★</span>
                      <span className="text-warm-grey text-xs">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-charcoal/90 transition-colors duration-200"
            >
              Scopri il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* CTA Prenota */}
      <section className="py-20 bg-burgundy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Pronto a Gustare le Nostre Carni alla Brace?
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Prenota ora il tuo tavolo e scopri la qualità delle nostre carni selezionate, cotte a vista sulla brace. Ti aspettiamo in Via Spartaco, 4 Milano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/prenota"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal text-lg font-semibold rounded-full hover:bg-cream transition-colors duration-200"
            >
              Prenota Ora
            </Link>
            <a
              href="tel:+390255194005"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-cream text-cream text-lg font-semibold rounded-full hover:bg-cream/10 transition-colors duration-200"
            >
              Chiamaci
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream/70 text-sm">
            <span>📍 Via Spartaco, 4, 20154 Milano MI</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>📞 +39 02 55194005</span>
          </div>
        </div>
      </section>
    </>
  )
}
