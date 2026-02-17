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

      {isOpen && (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-lg"
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

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="text-2xl font-serif text-cream hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/prenota"
                onClick={handleClose}
                className="mt-4 inline-flex items-center px-8 py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-colors duration-200"
              >
                Prenota Ora
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
