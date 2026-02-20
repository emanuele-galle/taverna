interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  variant?: 'dark' | 'light'
  align?: 'center' | 'left'
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  variant = 'dark',
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      {label && (
        <span className="font-sc tracking-[0.18em] text-sm text-gold mb-4 block">
          {label}
        </span>
      )}
      <h2 className="font-serif font-light tracking-tight text-[length:var(--font-size-heading)]">
        {title}
      </h2>
      {variant === 'dark' ? (
        <div className="w-16 h-[2px] bg-gold/60 mt-4" />
      ) : (
        <div className="w-20 h-px bg-gradient-to-r from-gold to-transparent mt-4" />
      )}
      {subtitle && (
        <p className="mt-4 text-warm-grey max-w-2xl text-[length:var(--font-size-body)]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
