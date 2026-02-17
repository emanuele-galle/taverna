'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {prefersReducedMotion ? (
        <Image
          src="/images/hero/hero-fallback.jpg"
          alt="La Taverna degli Amici - Carni alla brace"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero/hero-fallback.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 border border-gold/60 rounded-full text-gold text-xs font-medium tracking-widest uppercase">
            Dal 1997
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-4 leading-tight">
          La Taverna degli Amici
        </h1>

        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gold mb-4">
          Carni alla Brace di Alta Qualit&agrave;
        </p>

        <p className="text-base sm:text-lg text-cream/80 mb-10 max-w-2xl mx-auto">
          Qualit&agrave;, esperienza e cultura dell&apos;ospitalit&agrave;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prenota"
            className="inline-flex items-center px-8 py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-colors duration-200 text-base"
          >
            Prenota il Tuo Tavolo
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3 border-2 border-cream/60 text-cream font-semibold rounded-full hover:border-gold hover:text-gold transition-colors duration-200 text-base"
          >
            Esplora il Menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-cream/60 animate-bounce-subtle" />
      </div>
    </section>
  )
}
