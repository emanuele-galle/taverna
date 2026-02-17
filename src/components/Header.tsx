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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
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
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/prenota"
              className="inline-flex items-center px-6 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-full hover:bg-cream transition-colors duration-200"
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
