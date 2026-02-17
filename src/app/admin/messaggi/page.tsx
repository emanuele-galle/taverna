'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Mail, CheckCircle, Loader2 } from 'lucide-react'

interface Message {
  id: number
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  status: string
  repliedAt: string | null
  createdAt: string
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  read: 'bg-gray-100 text-gray-600',
  replied: 'bg-green-100 text-green-700',
}

const statusLabels: Record<string, string> = {
  new: 'Nuovo',
  read: 'Letto',
  replied: 'Risposto',
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export default function AdminMessaggiPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const fetchMessages = async () => {
    const res = await fetch('/api/admin/messages')
    if (res.ok) setMessages(await res.json())
    setLoading(false)
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const markAsRead = async (id: number) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'read' }),
    })
    fetchMessages()
  }

  const markAsReplied = async (id: number) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'replied' }),
    })
    fetchMessages()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-warm-grey" />
      </div>
    )
  }

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
              className={`bg-white rounded-xl shadow-sm border transition-colors ${msg.status === 'new' ? 'border-blue-200 bg-blue-50/30' : 'border-charcoal/5'}`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => {
                  setExpandedId(expandedId === msg.id ? null : msg.id)
                  if (msg.status === 'new') markAsRead(msg.id)
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-medium text-charcoal">{msg.name}</h3>
                    <p className="text-sm text-warm-grey">{msg.email}</p>
                    {msg.phone && <p className="text-sm text-warm-grey">{msg.phone}</p>}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[msg.status] || 'bg-gray-100 text-gray-600'}`}>
                      {statusLabels[msg.status] || msg.status}
                    </span>
                    <span className="text-xs text-warm-grey">{formatDate(msg.createdAt)}</span>
                    {expandedId === msg.id ? (
                      <ChevronUp className="w-4 h-4 text-warm-grey" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-warm-grey" />
                    )}
                  </div>
                </div>
                {msg.subject && (
                  <p className="text-sm font-medium text-charcoal mb-1">{msg.subject}</p>
                )}
                {expandedId !== msg.id && (
                  <p className="text-sm text-warm-grey line-clamp-2">{msg.message}</p>
                )}
              </div>

              {expandedId === msg.id && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm text-charcoal whitespace-pre-wrap mb-4">{msg.message}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-charcoal/5">
                    {msg.status !== 'read' && msg.status !== 'replied' && (
                      <button
                        onClick={(e) => { e.stopPropagation(); markAsRead(msg.id) }}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm text-charcoal bg-charcoal/5 hover:bg-charcoal/10 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Segna come letto
                      </button>
                    )}
                    <a
                      href={`mailto:${msg.email}?subject=${encodeURIComponent(`Re: ${msg.subject || 'Messaggio'}`)}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (msg.status !== 'replied') markAsReplied(msg.id)
                      }}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-gold hover:bg-gold/90 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Rispondi via Email
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
