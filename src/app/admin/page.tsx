import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { CalendarDays, UtensilsCrossed, MessageSquare } from 'lucide-react'

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) redirect('/admin/login')
  const session = await verifyToken(token)
  if (!session) redirect('/admin/login')

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [bookingsToday, unreadMessages, activeMenuItems] = await Promise.all([
    prisma.booking.count({
      where: { bookingDate: { gte: today, lt: tomorrow } },
    }),
    prisma.contactMessage.count({
      where: { status: 'new' },
    }),
    prisma.menuItem.count({
      where: { active: true },
    }),
  ])

  const stats = [
    {
      label: 'Prenotazioni Oggi',
      value: bookingsToday,
      icon: CalendarDays,
      href: '/admin/prenotazioni',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      label: 'Messaggi da Leggere',
      value: unreadMessages,
      icon: MessageSquare,
      href: '/admin/messaggi',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      label: 'Piatti Attivi',
      value: activeMenuItems,
      icon: UtensilsCrossed,
      href: '/admin/menu',
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
  ]

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-3xl font-bold text-charcoal">{stat.value}</p>
                <p className="text-sm text-warm-grey">{stat.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
