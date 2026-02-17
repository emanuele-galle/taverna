'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-cream hover:text-gold transition-colors"
        aria-label="Apri menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-lg">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-cream hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/prenota"
                onClick={() => setIsOpen(false)}
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
