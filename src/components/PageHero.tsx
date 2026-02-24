'use client'

import { useState, useEffect } from 'react'
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
  dark: 'from-charcoal-deep/90 via-charcoal/50 to-charcoal-deep/85',
  burgundy: 'from-burgundy/80 via-charcoal/40 to-charcoal-deep/85',
  warm: 'from-charcoal-deep/85 via-espresso/35 to-charcoal-deep/85',
}

export default function PageHero({ title, subtitle, image, overlay = 'dark', breadcrumb, children }: PageHeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <section className="relative min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden pt-20">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${overlayClasses[overlay]}`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal bg-pattern-dark" />
      )}

      {/* Grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="text-center relative z-10 px-4 max-w-3xl mx-auto">
        {breadcrumb && (
          <>
            <BreadcrumbSchema items={[
              { name: 'Home', url: '/' },
              { name: breadcrumb },
            ]} />
            <nav
              className="mb-5 transition-all duration-700"
              aria-label="Breadcrumb"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: '100ms',
              }}
            >
              <span className="font-sc tracking-[0.3em] text-gold/60 text-[12px]">
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                <span className="mx-2.5 text-gold/30">/</span>
                <span className="text-gold/90">{breadcrumb}</span>
              </span>
            </nav>
          </>
        )}
        <h1
          className="font-serif font-normal text-[2.8rem] md:text-[3.8rem] text-cream tracking-tight mb-3 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '250ms',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg md:text-xl font-serif italic text-cream/65 max-w-2xl mx-auto mb-2 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '400ms',
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          className="flex items-center justify-center gap-3 mt-5 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: '550ms',
          }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1 h-1 rotate-45 bg-gold/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>
        {children && (
          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '650ms',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
