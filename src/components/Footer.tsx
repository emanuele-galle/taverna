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
            &copy; {new Date().getFullYear()} La Taverna degli Amici. Tutti i diritti riservati.
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
