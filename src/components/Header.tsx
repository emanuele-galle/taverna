'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'La Taverna' },
  { href: '/menu', label: 'Menu' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollProgress = Math.min(scrollY / 100, 1)
  const isScrolled = scrollProgress > 0.5

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: `rgba(26, 26, 26, ${scrollProgress * 0.97})`,
        backdropFilter: `blur(${scrollProgress * 16}px)`,
        borderBottom: `1px solid rgba(201, 164, 78, ${scrollProgress * 0.15})`,
        boxShadow: isScrolled ? `0 4px 30px rgba(0,0,0,${scrollProgress * 0.15})` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Logo.png"
              alt="Logo La Taverna degli Amici"
              width={50}
              height={50}
              className="h-[50px] w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sc text-[13px] tracking-[0.22em] transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/prenota"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal font-sc text-[12px] tracking-[0.22em] rounded-full shadow-[0_2px_12px_rgba(196,163,90,0.2)] hover:shadow-[0_2px_20px_rgba(196,163,90,0.35)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Prenota
            </Link>
          </div>

          <MobileNav links={[...navLinks, { href: '/prenota', label: 'Prenota' }]} />
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold/60 via-gold to-gold/60 transition-all duration-300"
        style={{
          width: isScrolled ? '100%' : '0%',
          opacity: isScrolled ? 0.3 : 0,
        }}
      />
    </header>
  )
}
