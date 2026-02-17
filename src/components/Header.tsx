import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'La Taverna' },
  { href: '/menu', label: 'Menu' },
  { href: '/galleria', label: 'Gallery' },
  { href: '/contatti', label: 'Contatti' },
  { href: '/prenota', label: 'Prenota' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/10">
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
                className="text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  )
}
