import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Prenota il Tuo Tavolo',
  subtitle = 'Prenota ora e scopri la qualita delle nostre carni selezionate, cotte a vista sulla brace.',
  primaryLabel = 'Prenota Ora',
  primaryHref = '/prenota',
  secondaryLabel = 'Vedi il Menu',
  secondaryHref = '/menu',
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-burgundy via-wine to-charcoal text-white relative overflow-hidden bg-pattern-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">{title}</h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        <p className="text-cream/80 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-charcoal text-lg font-semibold rounded-full hover:bg-cream transition-colors duration-200"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
