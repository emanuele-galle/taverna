'use client'

import { useEffect, useState, useCallback } from 'react'
import { ChevronDown, ChevronUp, Check, XIcon, Loader2 } from 'lucide-react'

interface Booking {
  id: number
  bookingDate: string
  bookingTime: string
  numGuests: number
  customerName: string
  customerEmail: string
  customerPhone: string
  specialRequests: string | null
  status: string
  confirmationCode: string
  tableNumber: string | null
  createdAt: string
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  confirmed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
}

const statusLabels: Record<string, string> = {
  pending: 'In attesa',
  confirmed: 'Confermata',
  cancelled: 'Cancellata',
}

type FilterStatus = 'all' | 'pending' | 'confirmed' | 'cancelled'
type FilterDate = 'today' | 'week' | 'all'

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export default function AdminPrenotazioniPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all')
  const [dateFilter, setDateFilter] = useState<FilterDate>('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [page, setPage] = useState(0)
  const [tableInput, setTableInput] = useState<Record<number, string>>({})
  const perPage = 20

  const fetchBookings = useCallback(async () => {
    const res = await fetch('/api/admin/menu') // reuse pattern - we need a bookings GET
    // Actually there's no GET bookings API, so we use the server-fetched data approach
    // But since we're client-side, let's fetch all menu items... wait, we need bookings.
    // The task didn't create a GET bookings API. Let me use direct page fetching.
    setLoading(false)
  }, [])

  // Since there's no GET /api/admin/bookings endpoint, we'll create inline data fetching
  // Actually, let me just fetch from the page itself - we need to add a GET endpoint
  // For now, use a simple approach: fetch from a custom endpoint

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/admin/bookings')
      if (res.ok) {
        setBookings(await res.json())
      }
      setLoading(false)
    }
    load()
  }, [])

  const refresh = async () => {
    const res = await fetch('/api/admin/bookings')
    if (res.ok) setBookings(await res.json())
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/admin/bookings/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    refresh()
  }

  const assignTable = async (id: number) => {
    const table = tableInput[id]
    if (!table) return
    await fetch(`/api/admin/bookings/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tableNumber: table }),
    })
    setTableInput((prev) => ({ ...prev, [id]: '' }))
    refresh()
  }

  const now = new Date()
  const todayStr = now.toISOString().split('T')[0]
  const weekLater = new Date(now)
  weekLater.setDate(weekLater.getDate() + 7)
  const weekStr = weekLater.toISOString().split('T')[0]

  const filtered = bookings.filter((b) => {
    if (statusFilter !== 'all' && b.status !== statusFilter) return false
    if (dateFilter === 'today') {
      const bd = new Date(b.bookingDate).toISOString().split('T')[0]
      if (bd !== todayStr) return false
    } else if (dateFilter === 'week') {
      const bd = new Date(b.bookingDate).toISOString().split('T')[0]
      if (bd < todayStr || bd > weekStr) return false
    }
    return true
  })

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice(page * perPage, (page + 1) * perPage)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-warm-grey" />
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal mb-6">Prenotazioni</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex bg-white rounded-lg border border-charcoal/10 overflow-hidden">
          {(['all', 'pending', 'confirmed', 'cancelled'] as FilterStatus[]).map((s) => (
            <button
              key={s}
              onClick={() => { setStatusFilter(s); setPage(0) }}
              className={`px-4 py-2 text-sm transition-colors ${statusFilter === s ? 'bg-charcoal text-cream' : 'text-charcoal hover:bg-charcoal/5'}`}
            >
              {s === 'all' ? 'Tutte' : statusLabels[s]}
            </button>
          ))}
        </div>
        <div className="flex bg-white rounded-lg border border-charcoal/10 overflow-hidden">
          {([['all', 'Tutte'], ['today', 'Oggi'], ['week', 'Settimana']] as [FilterDate, string][]).map(([v, l]) => (
            <button
              key={v}
              onClick={() => { setDateFilter(v); setPage(0) }}
              className={`px-4 py-2 text-sm transition-colors ${dateFilter === v ? 'bg-charcoal text-cream' : 'text-charcoal hover:bg-charcoal/5'}`}
            >
              {l}
            </button>
          ))}
        </div>
        <span className="text-sm text-warm-grey self-center">{filtered.length} risultati</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-charcoal/5 text-left">
                <th className="px-4 py-3 font-medium text-charcoal w-8"></th>
                <th className="px-4 py-3 font-medium text-charcoal">Data</th>
                <th className="px-4 py-3 font-medium text-charcoal">Ora</th>
                <th className="px-4 py-3 font-medium text-charcoal">Nome</th>
                <th className="px-4 py-3 font-medium text-charcoal">Ospiti</th>
                <th className="px-4 py-3 font-medium text-charcoal">Stato</th>
                <th className="px-4 py-3 font-medium text-charcoal">Telefono</th>
                <th className="px-4 py-3 font-medium text-charcoal">Tavolo</th>
                <th className="px-4 py-3 font-medium text-charcoal">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              {paginated.map((b) => (
                <>
                  <tr key={b.id} className="hover:bg-charcoal/[0.02]">
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpandedId(expandedId === b.id ? null : b.id)}
                        className="text-warm-grey hover:text-charcoal"
                      >
                        {expandedId === b.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-charcoal">{formatDate(b.bookingDate)}</td>
                    <td className="px-4 py-3 text-charcoal">{b.bookingTime}</td>
                    <td className="px-4 py-3 text-charcoal font-medium">{b.customerName}</td>
                    <td className="px-4 py-3 text-charcoal">{b.numGuests}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[b.status] || 'bg-gray-100 text-gray-700'}`}>
                        {statusLabels[b.status] || b.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-warm-grey">{b.customerPhone}</td>
                    <td className="px-4 py-3 text-warm-grey">{b.tableNumber || '-'}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {b.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateStatus(b.id, 'confirmed')}
                              className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                              title="Conferma"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(b.id, 'cancelled')}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                              title="Cancella"
                            >
                              <XIcon className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                  {expandedId === b.id && (
                    <tr key={`${b.id}-detail`} className="bg-charcoal/[0.02]">
                      <td colSpan={9} className="px-4 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-warm-grey block text-xs mb-1">Email</span>
                            <span className="text-charcoal">{b.customerEmail}</span>
                          </div>
                          <div>
                            <span className="text-warm-grey block text-xs mb-1">Codice</span>
                            <span className="text-charcoal font-mono text-xs">{b.confirmationCode}</span>
                          </div>
                          <div>
                            <span className="text-warm-grey block text-xs mb-1">Richieste Speciali</span>
                            <span className="text-charcoal">{b.specialRequests || 'Nessuna'}</span>
                          </div>
                          <div>
                            <span className="text-warm-grey block text-xs mb-1">Assegna Tavolo</span>
                            <div className="flex gap-1">
                              <input
                                type="text"
                                placeholder="N. tavolo"
                                value={tableInput[b.id] || ''}
                                onChange={(e) => setTableInput((prev) => ({ ...prev, [b.id]: e.target.value }))}
                                className="w-20 px-2 py-1 text-xs border border-charcoal/10 rounded focus:outline-none focus:ring-1 focus:ring-gold/50"
                              />
                              <button
                                onClick={() => assignTable(b.id)}
                                className="px-2 py-1 text-xs bg-charcoal text-cream rounded hover:bg-charcoal/90"
                              >
                                OK
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {paginated.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-warm-grey">
                    Nessuna prenotazione trovata
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-charcoal/5">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="text-sm text-charcoal hover:text-gold disabled:text-warm-grey disabled:cursor-not-allowed"
            >
              Precedente
            </button>
            <span className="text-sm text-warm-grey">
              Pagina {page + 1} di {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="text-sm text-charcoal hover:text-gold disabled:text-warm-grey disabled:cursor-not-allowed"
            >
              Successiva
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
