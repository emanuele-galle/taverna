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
  const isScrolled = scrollProgress > 0.3

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: `rgba(26, 26, 26, ${0.4 + scrollProgress * 0.57})`,
        backdropFilter: `blur(${8 + scrollProgress * 12}px)`,
        borderBottom: isScrolled ? '1px solid rgba(201, 164, 78, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-[88px]">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Logo.png"
              alt="Logo La Taverna degli Amici"
              width={52}
              height={52}
              className="h-[52px] w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-gold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/prenota"
              className="inline-flex items-center px-7 py-2.5 bg-gold text-charcoal-deep text-[15px] font-semibold tracking-wide rounded-lg hover:bg-gold-light active:scale-[0.97] transition-all duration-200 shadow-lg shadow-gold/20"
            >
              Prenota un Tavolo
            </Link>
          </div>

          <MobileNav links={[...navLinks, { href: '/prenota', label: 'Prenota' }]} />
        </div>
      </div>
    </header>
  )
}
