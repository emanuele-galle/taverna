interface PageHeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[280px] flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal bg-pattern-dark pt-20 overflow-hidden">
      <div className="text-center relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3 drop-shadow-sm">{title}</h1>
        {subtitle && (
          <p className="text-cream/60 max-w-lg mx-auto mb-2 uppercase tracking-wider text-sm">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        {children}
      </div>
    </section>
  )
}
