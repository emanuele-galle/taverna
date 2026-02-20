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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        backgroundColor: `rgba(26, 26, 26, ${scrollProgress * 0.95})`,
        backdropFilter: `blur(${scrollProgress * 12}px)`,
        borderBottomColor: `rgba(201, 164, 78, ${scrollProgress * 0.2})`,
        boxShadow: scrollProgress > 0.5 ? `0 4px 6px rgba(0,0,0,${scrollProgress * 0.1})` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Logo La Taverna degli Amici"
              width={50}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sc text-sm tracking-[0.2em] transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold nav-link-active'
                    : 'text-white hover:text-gold underline-grow'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/prenota"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#B8923A] via-gold to-gold-light text-charcoal font-sc text-xs tracking-[0.2em] rounded-full shadow-[0_4px_15px_rgba(196,163,90,0.2)] hover:shadow-[0_4px_25px_rgba(196,163,90,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Prenota
            </Link>
          </div>

          <MobileNav links={[...navLinks, { href: '/prenota', label: 'Prenota' }]} />
        </div>
      </div>
    </header>
  )
}
