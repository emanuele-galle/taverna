import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { formatDate } from '@/lib/utils'

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  read: 'bg-gray-100 text-gray-600',
  replied: 'bg-green-100 text-green-700',
}

export default async function AdminMessaggiPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) redirect('/admin/login')
  const session = await verifyToken(token)
  if (!session) redirect('/admin/login')

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal mb-8">Messaggi</h1>

      {messages.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-charcoal/5">
          <p className="text-warm-grey">Nessun messaggio ricevuto</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white rounded-xl p-6 shadow-sm border ${msg.status === 'new' ? 'border-blue-200 bg-blue-50/30' : 'border-charcoal/5'}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-medium text-charcoal">{msg.name}</h3>
                  <p className="text-sm text-warm-grey">{msg.email}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[msg.status] || 'bg-gray-100 text-gray-600'}`}>
                    {msg.status}
                  </span>
                  <span className="text-xs text-warm-grey">{formatDate(msg.createdAt)}</span>
                </div>
              </div>
              {msg.subject && (
                <p className="text-sm font-medium text-charcoal mb-1">{msg.subject}</p>
              )}
              <p className="text-sm text-warm-grey line-clamp-3">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
