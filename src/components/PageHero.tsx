interface PageHeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative h-64 flex items-center justify-center bg-charcoal bg-pattern-dark pt-20 overflow-hidden">
      <div className="text-center relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-3">{title}</h1>
        {subtitle && (
          <p className="text-warm-grey max-w-lg mx-auto mb-2">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        {children}
      </div>
    </section>
  )
}
