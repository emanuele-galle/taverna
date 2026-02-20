import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { CalendarDays, UtensilsCrossed, MessageSquare, TrendingUp } from 'lucide-react'
import { formatDate } from '@/lib/utils'

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
  const weekLater = new Date(today)
  weekLater.setDate(weekLater.getDate() + 7)

  const [bookingsToday, bookingsWeek, unreadMessages, activeMenuItems, recentMessages, recentActivity] = await Promise.all([
    prisma.booking.count({
      where: { bookingDate: { gte: today, lt: tomorrow } },
    }),
    prisma.booking.count({
      where: { bookingDate: { gte: today, lt: weekLater } },
    }),
    prisma.contactMessage.count({
      where: { status: 'new' },
    }),
    prisma.menuItem.count({
      where: { active: true },
    }),
    prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
    prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: { admin: { select: { username: true } } },
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
      label: 'Prenotazioni Settimana',
      value: bookingsWeek,
      icon: TrendingUp,
      href: '/admin/prenotazioni',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-charcoal/5 flex items-center justify-between">
            <h2 className="font-serif text-lg text-charcoal">Ultimi Messaggi</h2>
            <Link href="/admin/messaggi" className="text-sm text-gold hover:text-gold/80">
              Vedi tutti
            </Link>
          </div>
          <div className="divide-y divide-charcoal/5">
            {recentMessages.length === 0 ? (
              <div className="px-6 py-8 text-center text-warm-grey text-sm">
                Nessun messaggio
              </div>
            ) : (
              recentMessages.map((msg) => (
                <div key={msg.id} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-charcoal">{msg.name}</span>
                    <span className="text-xs text-warm-grey">{formatDate(msg.createdAt)}</span>
                  </div>
                  {msg.subject && (
                    <p className="text-xs text-charcoal/70 mb-0.5">{msg.subject}</p>
                  )}
                  <p className="text-sm text-warm-grey line-clamp-1">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-charcoal/5">
            <h2 className="font-serif text-lg text-charcoal">Attività Recente</h2>
          </div>
          <div className="divide-y divide-charcoal/5">
            {recentActivity.length === 0 ? (
              <div className="px-6 py-8 text-center text-warm-grey text-sm">
                Nessuna attività registrata
              </div>
            ) : (
              recentActivity.map((log) => (
                <div key={log.id} className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-charcoal bg-charcoal/5 px-2 py-0.5 rounded">
                        {log.action.replace(/_/g, ' ')}
                      </span>
                      {log.entityType && (
                        <span className="text-xs text-warm-grey">
                          {log.entityType} #{log.entityId}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-warm-grey">{formatDate(log.createdAt)}</span>
                  </div>
                  {log.details && (
                    <p className="text-xs text-warm-grey mt-1">{log.details}</p>
                  )}
                  {log.admin && (
                    <p className="text-xs text-charcoal/50 mt-0.5">da {log.admin.username}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
