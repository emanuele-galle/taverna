import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { verifyToken } from '@/lib/auth'
import { LayoutDashboard, UtensilsCrossed, CalendarDays, MessageSquare, LogOut } from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/menu', label: 'Menu', icon: UtensilsCrossed },
  { href: '/admin/prenotazioni', label: 'Prenotazioni', icon: CalendarDays },
  { href: '/admin/messaggi', label: 'Messaggi', icon: MessageSquare },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  // Allow login page without auth
  const isLoginPage = false // Layout wraps all admin pages including login

  if (!token && !isLoginPage) {
    // We check auth in each page except login
  }

  let user = null
  if (token) {
    user = await verifyToken(token)
  }

  // If no user and not on login page, the individual pages handle redirect
  // But we still show sidebar only when authenticated
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
      {/* Sidebar */}
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
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-warm-grey hover:text-cream rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Torna al Sito
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}
