'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-white">
      {/* Main Footer - Compact & Centered */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        {/* Logo + Tagline */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-3">
            <Image
              src="/images/Logo.png"
              alt="La Taverna degli Amici"
              width={50}
              height={50}
              className="h-[50px] w-auto mx-auto"
            />
          </Link>
          <p className="text-sm text-white/60 max-w-md mx-auto">
            Dal 1997, la tradizione della vera carne alla brace nel cuore di Milano.
          </p>
        </div>

        {/* Info Grid - 3 colonne centrate */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm mb-8">
          {/* Contatti */}
          <div className="space-y-1.5">
            <h4 className="font-sc text-xs tracking-widest text-gold/70 uppercase mb-2">Contatti</h4>
            <p className="text-white/70 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold/50 flex-shrink-0" />
              Via Spartaco 4, 20135 Milano
            </p>
            <p className="text-white/70 flex items-center justify-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold/50 flex-shrink-0" />
              <a href="tel:+390255194005" className="hover:text-gold transition-colors">02 5519 4005</a>
            </p>
            <p className="text-white/70 flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold/50 flex-shrink-0" />
              <a href="mailto:info@latavernadegliamici.it" className="hover:text-gold transition-colors">info@latavernadegliamici.it</a>
            </p>
          </div>

          {/* Orari */}
          <div className="space-y-1.5">
            <h4 className="font-sc text-xs tracking-widest text-gold/70 uppercase mb-2">Orari</h4>
            <div className="flex items-start justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold/50 mt-0.5 flex-shrink-0" />
              <div className="text-white/70">
                <p>Lun - Sab: 12-15 / 19:30-02</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
          </div>

          {/* Naviga */}
          <div>
            <h4 className="font-sc text-xs tracking-widest text-gold/70 uppercase mb-2">Naviga</h4>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-white/70">
              {[
                { href: '/chi-siamo', label: 'La Taverna' },
                { href: '/menu', label: 'Menu' },
                { href: '/galleria', label: 'Galleria' },
                { href: '/prenota', label: 'Prenota' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/tavernadegliamici/',
              icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
            },
            {
              label: 'WhatsApp',
              href: 'https://wa.me/390255194005',
              icon: <><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.106-1.138l-.294-.176-2.87.852.852-2.87-.176-.294A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></>,
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/latavernadegliamicimilano/',
              icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold/20 hover:text-gold transition-all duration-300"
              aria-label={social.label}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar - Minimal */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col items-center gap-2 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/50">
            <span>&copy; {new Date().getFullYear()} La Taverna degli Amici</span>
            <span className="hidden sm:inline text-white/20">|</span>
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/cookie', label: 'Cookie' },
              { href: '/termini', label: 'Termini' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold/70 transition-colors">
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { localStorage.removeItem('cookie-consent'); window.location.reload() }}
              className="hover:text-gold/70 transition-colors cursor-pointer"
            >
              Gestisci Cookie
            </button>
          </div>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <Link href="/admin" className="hover:text-gold/70 transition-colors">Admin</Link>
            <span className="text-white/20">|</span>
            <a href="https://fodisrl.it/" target="_blank" rel="noopener noreferrer" className="hover:text-gold/70 transition-colors">
              by Fodi S.r.l.
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
