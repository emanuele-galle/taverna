'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Indirizzo email non valido.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Errore di connessione. Riprova.')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-gold font-medium">
        Iscritto con successo!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="La tua email"
          required
          className="flex-1 px-3 py-2 bg-white/5 border border-gold/30 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-gold text-charcoal text-sm font-medium rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Iscriviti'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}
    </form>
  )
}
