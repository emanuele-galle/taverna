'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

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
          <div className="flex items-center justify-end p-4">
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
            {links.map((link, index) => (
              <div
                key={link.href}
                className="flex flex-col items-center gap-6"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.4s ease-out ${index * 0.06}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className="text-2xl font-serif font-light text-cream hover:text-gold transition-colors duration-200 tracking-[0.1em]"
                >
                  {link.label}
                </Link>
                {index < links.length - 1 && (
                  <div className="w-8 h-px bg-gold/20" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
