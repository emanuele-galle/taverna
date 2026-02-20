import Image from 'next/image'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  overlay?: 'dark' | 'burgundy' | 'warm'
  breadcrumb?: string
  children?: React.ReactNode
}

const overlayClasses = {
  dark: 'from-charcoal-deep/90 via-charcoal/60 to-charcoal-deep/80',
  burgundy: 'from-burgundy/80 via-charcoal/50 to-charcoal-deep/80',
  warm: 'from-charcoal-deep/85 via-espresso/40 to-charcoal-deep/80',
}

export default function PageHero({ title, subtitle, image, overlay = 'dark', breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden pt-20">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlay]}`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal bg-pattern-dark" />
      )}

      <div className="text-center relative z-10 px-4">
        {breadcrumb && (
          <>
            <BreadcrumbSchema items={[
              { name: 'Home', url: '/' },
              { name: breadcrumb },
            ]} />
            <nav className="mb-4" aria-label="Breadcrumb">
              <span className="font-sc tracking-[0.25em] text-gold/70 text-base">
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                <span className="mx-2 text-gold/40">/</span>
                <span className="text-gold">{breadcrumb}</span>
              </span>
            </nav>
          </>
        )}
        <h1 className="font-serif font-light text-[2.8rem] md:text-[3.5rem] text-cream tracking-tight mb-3 drop-shadow-sm">{title}</h1>
        {subtitle && (
          <p className="text-xl font-serif italic text-cream/80 max-w-2xl mx-auto mb-2">{subtitle}</p>
        )}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        {children}
      </div>
    </section>
  )
}
