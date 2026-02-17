import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { formatDate } from '@/lib/utils'

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  confirmed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default async function AdminPrenotazioniPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) redirect('/admin/login')
  const session = await verifyToken(token)
  if (!session) redirect('/admin/login')

  const bookings = await prisma.booking.findMany({
    orderBy: { bookingDate: 'desc' },
    take: 50,
  })

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal mb-8">Prenotazioni</h1>

      <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-charcoal/5 text-left">
                <th className="px-4 py-3 font-medium text-charcoal">Data</th>
                <th className="px-4 py-3 font-medium text-charcoal">Ora</th>
                <th className="px-4 py-3 font-medium text-charcoal">Nome</th>
                <th className="px-4 py-3 font-medium text-charcoal">Ospiti</th>
                <th className="px-4 py-3 font-medium text-charcoal">Stato</th>
                <th className="px-4 py-3 font-medium text-charcoal">Telefono</th>
                <th className="px-4 py-3 font-medium text-charcoal">Codice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-charcoal/[0.02]">
                  <td className="px-4 py-3 text-charcoal">{formatDate(b.bookingDate)}</td>
                  <td className="px-4 py-3 text-charcoal">{b.bookingTime}</td>
                  <td className="px-4 py-3 text-charcoal font-medium">{b.customerName}</td>
                  <td className="px-4 py-3 text-charcoal">{b.numGuests}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status] || 'bg-gray-100 text-gray-700'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-warm-grey">{b.customerPhone}</td>
                  <td className="px-4 py-3 text-warm-grey font-mono text-xs">{b.confirmationCode}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-warm-grey">
                    Nessuna prenotazione trovata
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
