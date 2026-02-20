'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


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

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/40 to-charcoal/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span className="font-sc px-5 py-1.5 border border-gold/60 rounded-full text-gold text-sm tracking-[0.25em] shimmer-border">
            Dal 1997
          </span>
        </div>

        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold mb-4 leading-tight tracking-tight">
          La Taverna degli Amici
        </h1>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-5" />

        <p className="font-sc text-sm sm:text-base tracking-[0.25em] text-cream/90 mb-4">
          Carni alla Brace di Alta Qualit&agrave;
        </p>

        <p className="text-base sm:text-lg font-serif italic text-cream/70 mb-10 max-w-2xl mx-auto">
          Qualit&agrave;, esperienza e cultura dell&apos;ospitalit&agrave;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prenota"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-[#B8923A] via-gold to-gold-light text-charcoal font-semibold rounded-full shadow-[0_4px_20px_rgba(196,163,90,0.25)] hover:shadow-[0_4px_30px_rgba(196,163,90,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base"
          >
            Prenota il Tuo Tavolo
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3.5 border border-gold/60 text-gold font-semibold rounded-full bg-gold/5 hover:bg-gold/15 active:scale-[0.98] transition-all duration-300 text-base"
          >
            Esplora il Menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cream/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-cream/60 animate-bounce-subtle" />
      </div>
    </section>
  )
}
