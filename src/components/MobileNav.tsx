'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Separate "Prenota" from the rest
  const navLinks = links.filter((l) => l.href !== '/prenota')
  const prenotaLink = links.find((l) => l.href === '/prenota')

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    toggleButtonRef.current?.focus()
  }

  return (
    <div className="md:hidden">
      <button
        ref={toggleButtonRef}
        onClick={() => setIsOpen(true)}
        className="p-2 text-cream hover:text-gold transition-colors"
        aria-label="Apri menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-50 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal backdrop-blur-lg transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <Image src="/images/Logo.png" alt="La Taverna degli Amici" width={40} height={40} className="h-10 w-auto" />
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="p-2 text-cream hover:text-gold transition-colors"
              aria-label="Chiudi menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className="flex flex-col items-center gap-6"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.4s ease-out ${index * 0.08}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className="text-2xl font-serif font-light text-cream hover:text-gold transition-colors duration-200 tracking-[0.1em]"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="w-8 h-px bg-gold/20" />
                )}
              </div>
            ))}

            {prenotaLink && (
              <div
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.4s ease-out ${navLinks.length * 0.08}s`,
                }}
              >
                <Link
                  href={prenotaLink.href}
                  onClick={handleClose}
                  className="mt-4 inline-flex items-center px-8 py-3 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal font-semibold rounded-full"
                >
                  Prenota il Tuo Tavolo
                </Link>
              </div>
            )}
          </nav>

          <div className="p-6 text-center space-y-2 border-t border-white/10">
            <a href="tel:+390255194005" className="block text-sm text-cream/60 hover:text-gold transition-colors">02 5519 4005</a>
            <p className="text-xs text-cream/40">Via Spartaco, 4 - Milano</p>
          </div>
        </div>
      </div>
    </div>
  )
}
