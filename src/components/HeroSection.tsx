'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const [useStaticImage, setUseStaticImage] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.innerWidth < 768
    setUseStaticImage(mql.matches || isMobile)

    const handleMotion = (e: MediaQueryListEvent) => {
      setUseStaticImage(e.matches || window.innerWidth < 768)
    }
    const handleResize = () => {
      setUseStaticImage(mql.matches || window.innerWidth < 768)
    }
    mql.addEventListener('change', handleMotion)
    window.addEventListener('resize', handleResize)

    // Trigger entrance animation
    requestAnimationFrame(() => setLoaded(true))

    // Parallax scroll
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      mql.removeEventListener('change', handleMotion)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})` }}
      >
        {useStaticImage ? (
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
      </div>

      {/* Gradient overlay - more dramatic */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/70 via-charcoal-deep/20 to-charcoal/90" />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-block mb-8 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms',
          }}
        >
          <span className="font-sc px-8 py-3 border-2 border-gold/50 backdrop-blur-md bg-white/10 rounded-full text-gold text-lg tracking-[0.3em]">
            Dal 1997 &middot; Milano
          </span>
        </div>

        {/* Restaurant name */}
        <p
          className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-cream mb-3 leading-tight tracking-tight transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms',
          }}
        >
          La Taverna degli Amici
        </p>

        {/* Ornamental divider */}
        <div
          className="flex items-center justify-center gap-3 my-6 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: '600ms',
          }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Main headline */}
        <h1
          className="font-sc text-[length:var(--font-size-display)] tracking-[0.15em] text-gradient-gold-shimmer mb-5 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '700ms',
          }}
        >
          Carni alla Brace di Alta Qualit&agrave;
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl font-serif italic text-cream/90 mb-14 max-w-2xl mx-auto transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '900ms',
          }}
        >
          Qualit&agrave;, esperienza e cultura dell&apos;ospitalit&agrave;
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1100ms',
          }}
        >
          <Link
            href="/prenota"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal font-bold rounded-full shadow-[0_4px_25px_rgba(196,163,90,0.35)] hover:shadow-[0_8px_45px_rgba(196,163,90,0.55)] hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 text-lg"
          >
            Prenota il Tuo Tavolo
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-10 py-5 border-2 border-gold/50 text-gold font-bold rounded-full bg-gold/5 backdrop-blur-sm hover:bg-gold/15 hover:border-gold/70 active:scale-[0.98] transition-all duration-300 text-lg"
          >
            Esplora il Menu
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{
          opacity: loaded ? 1 : 0,
          transitionDelay: '1500ms',
        }}
      >
        <span className="font-sc text-xs tracking-[0.4em] text-cream/70 uppercase">Scopri</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-bounce-subtle" />
      </div>
    </section>
  )
}
