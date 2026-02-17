import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'La Taverna degli Amici - Carni alla Brace | Milano',
    template: '%s | La Taverna degli Amici',
  },
  description: 'Ristorante di carni alla brace di alta qualità a Milano. Dal 1997, qualità, esperienza e cultura dell\'ospitalità. Scottona bavarese, controfiletti argentini, fiorentina.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  )
}
