import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/Logo.png"
                alt="La Taverna degli Amici"
                width={60}
                height={60}
                className="h-[60px] w-auto"
              />
            </Link>
            <p className="font-serif text-lg text-cream mb-2">
              La Taverna degli Amici
            </p>
            <p className="text-sm text-warm-grey mb-3">
              Qualità, esperienza e cultura dell&apos;ospitalità
            </p>
            <p className="text-xs text-gold font-medium">Dal 1997</p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-gold text-sm uppercase tracking-wider mb-4">
              Esplora
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/prenota', label: 'Prenota' },
                { href: '/galleria', label: 'Galleria' },
                { href: '/chi-siamo', label: 'Chi Siamo' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Orari */}
          <div>
            <h3 className="font-serif text-gold text-sm uppercase tracking-wider mb-4">
              Orari
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-cream font-medium">Lunedì - Sabato</p>
                  <p className="text-xs text-warm-grey">Pranzo: 12:00 - 15:00</p>
                  <p className="text-xs text-warm-grey">Cena: 19:30 - 02:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-cream font-medium">Domenica</p>
                  <p className="text-xs text-warm-grey">Chiuso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contatti */}
          <div>
            <h3 className="font-serif text-gold text-sm uppercase tracking-wider mb-4">
              Contatti
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream/70">
                  Via Spartaco, 4, 20154 Milano MI
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+390255194005"
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  02 5519 4005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@latavernadegliamici.it"
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  info@latavernadegliamici.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 01-4.106-1.138l-.294-.176-2.87.852.852-2.87-.176-.294A7.963 7.963 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                <a
                  href="https://wa.me/390255194005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/tavernadegliamici/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/latavernadegliamicimilano/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-grey">
            &copy; {new Date().getFullYear()} La Taverna degli Amici. Tutti i diritti riservati. | Sviluppato da Fodi S.r.l.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-warm-grey hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="text-xs text-warm-grey hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
