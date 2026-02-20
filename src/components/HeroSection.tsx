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
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero/hero-fallback.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/60 via-charcoal-deep/25 to-charcoal/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <span className="font-sc px-5 py-1.5 border border-gold/40 backdrop-blur-sm bg-white/5 rounded-full text-gold text-base tracking-[0.25em]">
            Dal 1997
          </span>
        </div>

        <p className="font-serif font-light text-2xl sm:text-3xl md:text-4xl text-cream mb-4 leading-tight tracking-tight">
          La Taverna degli Amici
        </p>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-5" />

        <h1 className="font-sc text-[length:var(--font-size-display)] tracking-[0.18em] text-gradient-gold mb-4">
          Carni alla Brace di Alta Qualit&agrave;
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-cream/70 mb-10 max-w-2xl mx-auto">
          Qualit&agrave;, esperienza e cultura dell&apos;ospitalit&agrave;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal font-semibold rounded-full shadow-[0_4px_20px_rgba(196,163,90,0.25)] hover:shadow-[0_4px_30px_rgba(196,163,90,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg"
          >
            Prenota il Tuo Tavolo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3.5 border border-gold/60 text-gold font-semibold rounded-full bg-gold/5 hover:bg-gold/15 active:scale-[0.98] transition-all duration-300 text-lg"
          >
            Esplora il Menu
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="font-sc text-[10px] tracking-[0.3em] text-cream/50">SCOPRI</span>
        <svg className="w-5 h-5 text-cream/40 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
