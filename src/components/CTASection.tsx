import Link from 'next/link'
import FadeIn from './FadeIn'

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
    <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-br from-burgundy via-wine to-charcoal-deep text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dark opacity-50" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          {/* Ornament */}
          <div className="ornament-line mb-8">
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
          </div>

          <h2 className="font-serif font-normal text-3xl md:text-5xl text-gradient-gold mb-5 tracking-tight">{title}</h2>
          <p className="text-cream/70 text-lg leading-[1.85] mb-10 max-w-xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal text-lg font-semibold rounded-full shadow-[0_4px_20px_rgba(196,163,90,0.25)] hover:shadow-[0_4px_35px_rgba(196,163,90,0.5)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              {primaryLabel}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-10 py-4 border border-cream/25 text-cream text-lg font-semibold rounded-full hover:border-gold/60 hover:text-gold hover:bg-gold/5 active:scale-[0.97] transition-all duration-300"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
