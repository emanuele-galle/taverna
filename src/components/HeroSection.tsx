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

    requestAnimationFrame(() => setLoaded(true))

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
    <section ref={sectionRef} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      {/* Content - bottom-aligned, left-aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="mb-6 transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms',
            }}
          >
            <span className="inline-flex items-center gap-3 text-gold text-base font-medium tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-gold" />
              Dal 1997 &middot; Milano
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.95] tracking-tight transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '400ms',
            }}
          >
            Carni alla Brace<br />
            <span className="text-gold">di Alta Qualit&agrave;</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-lg leading-relaxed transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '600ms',
            }}
          >
            Qualit&agrave;, esperienza e cultura dell&apos;ospitalit&agrave; nel cuore di Milano.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '800ms',
            }}
          >
            <Link
              href="/prenota"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal-deep font-semibold text-lg rounded-lg hover:bg-gold-light active:scale-[0.98] transition-all duration-200 shadow-xl shadow-gold/25"
            >
              Prenota il Tuo Tavolo
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:border-white/60 hover:bg-white/5 active:scale-[0.98] transition-all duration-200"
            >
              Esplora il Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{
          opacity: loaded ? 0.6 : 0,
          transitionDelay: '1200ms',
        }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent animate-bounce-subtle" />
      </div>
    </section>
  )
}
