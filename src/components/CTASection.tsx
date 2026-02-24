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
    <section className="relative py-24 sm:py-28 md:py-36 bg-charcoal-deep text-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-transparent to-wine/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-tight leading-[0.95]">{title}</h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-charcoal-deep text-lg font-semibold rounded-lg hover:bg-gold-light active:scale-[0.97] transition-all duration-200 shadow-xl shadow-gold/20"
            >
              {primaryLabel}
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 active:scale-[0.97] transition-all duration-200"
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
