import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-fallback.jpg"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 border border-gold/60 rounded-full text-gold text-xs font-medium tracking-widest uppercase">
            Dal 1997
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-4 leading-tight">
          La Taverna degli Amici
        </h1>

        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gold mb-4">
          Carni alla Brace di Alta Qualità
        </p>

        <p className="text-base sm:text-lg text-cream/80 mb-10 max-w-2xl mx-auto">
          Qualità, esperienza e cultura dell&apos;ospitalità
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prenota"
            className="inline-flex items-center px-8 py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
          >
            Prenota il Tuo Tavolo
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3 border-2 border-cream/60 text-cream font-semibold rounded-full hover:border-gold hover:text-gold transition-colors duration-200 text-base"
          >
            Esplora il Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
