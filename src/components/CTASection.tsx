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
  subtitle = 'Prenota ora e scopri la qualità delle nostre carni selezionate, cotte a vista sulla brace.',
  primaryLabel = 'Prenota Ora',
  primaryHref = '/prenota',
  secondaryLabel = 'Vedi il Menu',
  secondaryHref = '/menu',
}: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-burgundy via-wine to-charcoal text-white relative overflow-hidden bg-pattern-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/60" />
          <div className="w-8 h-px bg-gold/40" />
        </div>
        <h2 className="font-serif font-light text-3xl md:text-5xl text-gradient-gold mb-4 tracking-tight">{title}</h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        <p className="text-cream/85 text-base leading-[1.8] mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#B8923A] via-gold to-gold-light text-charcoal text-lg font-semibold rounded-full shadow-[0_4px_20px_rgba(196,163,90,0.25)] hover:shadow-[0_4px_30px_rgba(196,163,90,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-10 py-4 border border-cream/40 text-cream text-lg font-semibold rounded-full bg-gold/5 hover:border-gold hover:text-gold hover:bg-gold/15 active:scale-[0.98] transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
