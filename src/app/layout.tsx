import type { Metadata } from 'next'
import { Lora, Outfit, DM_Sans } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sc',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://taverna.fodivps2.cloud'
const description = 'Ristorante di carni alla brace di alta qualità a Milano. Dal 1997, qualità, esperienza e cultura dell\'ospitalità. Scottona bavarese, controfiletti argentini, fiorentina.'

export const metadata: Metadata = {
  title: {
    default: 'La Taverna degli Amici - Carni alla Brace | Milano',
    template: '%s | La Taverna degli Amici',
  },
  description,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'La Taverna degli Amici - Carni alla Brace | Milano',
    description,
    url: siteUrl,
    siteName: 'La Taverna degli Amici',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-fallback.jpg',
        width: 1200,
        height: 630,
        alt: 'La Taverna degli Amici - Ristorante di carni alla brace a Milano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Taverna degli Amici - Carni alla Brace | Milano',
    description,
    images: ['/images/hero/hero-fallback.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${lora.variable} ${outfit.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <CookieConsent />
        {/* TODO: Add Google Analytics 4 script here when GA4 ID is provided by client */}
      </body>
    </html>
  )
}
