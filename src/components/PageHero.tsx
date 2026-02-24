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

export default function PageHero({ title, subtitle, image, overlay = 'dark', breadcrumb, children }: PageHeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-charcoal-deep" />
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 md:pb-20 pt-32">
        {breadcrumb && (
          <>
            <BreadcrumbSchema items={[
              { name: 'Home', url: '/' },
              { name: breadcrumb },
            ]} />
            <nav
              className="mb-4 transition-all duration-700"
              aria-label="Breadcrumb"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: '100ms',
              }}
            >
              <span className="flex items-center gap-2 text-white/60 text-sm font-medium tracking-wide">
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                <span>/</span>
                <span className="text-gold">{breadcrumb}</span>
              </span>
            </nav>
          </>
        )}
        <h1
          className="font-serif text-5xl md:text-7xl text-white tracking-tight mb-4 leading-[0.95] transition-all duration-700"
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
            className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(15px)',
              transitionDelay: '400ms',
            }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className="mt-6 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '550ms',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
