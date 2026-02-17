import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RestaurantSchema from '@/components/RestaurantSchema'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RestaurantSchema />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
