import { cookies } from 'next/headers'
import Link from 'next/link'
import { verifyToken } from '@/lib/auth'
import { LayoutDashboard, UtensilsCrossed, CalendarDays, MessageSquare, Home } from 'lucide-react'
import LogoutButton from './LogoutButton'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/menu', label: 'Menu', icon: UtensilsCrossed },
  { href: '/admin/prenotazioni', label: 'Prenotazioni', icon: CalendarDays },
  { href: '/admin/messaggi', label: 'Messaggi', icon: MessageSquare },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  let user = null
  if (token) {
    user = await verifyToken(token)
  }

  const isAuthenticated = !!user

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="w-64 bg-charcoal min-h-screen flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="font-serif text-lg text-gold">
            Admin Panel
          </Link>
          <p className="text-xs text-warm-grey mt-1">{user?.username}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-cream/70 hover:text-cream hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-warm-grey hover:text-cream rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Torna al Sito
          </Link>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}
