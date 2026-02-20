import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-white bg-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Col 1: Logo & Desc & Social */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/Logo.png"
                alt="La Taverna degli Amici"
                width={70}
                height={70}
                className="h-[70px] w-auto"
              />
            </Link>
            <p className="text-base text-white/70 leading-relaxed mb-4">
              Dal 1997 portiamo a Milano la tradizione della vera carne alla brace con passione e qualit&agrave;.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/tavernadegliamici/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/390255194005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-charcoal transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.106-1.138l-.294-.176-2.87.852.852-2.87-.176-.294A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/latavernadegliamicimilano/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-charcoal transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Menu Veloce + Legal */}
          <div>
            <h3 className="font-sc text-gold text-base tracking-[0.25em] mb-4">
              Menu Veloce
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/chi-siamo', label: 'La Taverna' },
                { href: '/menu', label: 'Menu' },
                { href: '/galleria', label: 'Galleria' },
                { href: '/prenota', label: 'Prenota' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    &rarr; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <Link href="/privacy" className="text-base text-white/50 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/cookie" className="text-base text-white/50 hover:text-gold transition-colors">
                Cookie Policy
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/termini" className="text-base text-white/50 hover:text-gold transition-colors">
                Termini e Condizioni
              </Link>
            </div>
          </div>

          {/* Col 3: Contatti + Orari */}
          <div>
            <h3 className="font-sc text-gold text-base tracking-[0.25em] mb-4">
              Contatti
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-base text-white/70">
                  Via Spartaco, 4, 20135 Milano MI
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+390255194005"
                  className="text-base text-white/70 hover:text-gold transition-colors"
                >
                  02 5519 4005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@latavernadegliamici.it"
                  className="text-base text-white/70 hover:text-gold transition-colors"
                >
                  info@latavernadegliamici.it
                </a>
              </li>
            </ul>

            <h3 className="font-sc text-gold text-base tracking-[0.25em] mt-6 mb-4">
              Orari di Apertura
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-base text-white/80 font-medium">Lunedì - Sabato</p>
                  <p className="text-base text-white/60">Pranzo: 12:00 - 15:00</p>
                  <p className="text-base text-white/60">Cena: 19:30 - 02:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-base text-white/80 font-medium">Domenica</p>
                  <p className="text-base text-white/60">Chiuso</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
          <p className="text-base text-white/50">
            &copy; {new Date().getFullYear()} La Taverna degli Amici. Tutti i diritti riservati.
          </p>
          <p className="text-base text-white/40">
            Sito sviluppato da{' '}
            <a
              href="https://fodisrl.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-gold transition-colors"
            >
              Fodi S.r.l.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
