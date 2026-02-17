'use client'

import { useState } from 'react'
import { restaurant } from '@/data/restaurant'
import { z } from 'zod'

const bookingSchema = z.object({
  date: z.string().min(1, 'Seleziona una data'),
  time: z.string().min(1, 'Seleziona un orario'),
  guests: z.number().min(1, 'Minimo 1 ospite').max(restaurant.maxGuestsPerBooking, `Massimo ${restaurant.maxGuestsPerBooking} ospiti`),
  name: z.string().min(2, 'Inserisci il tuo nome'),
  email: z.string().email('Email non valida'),
  phone: z.string().min(6, 'Inserisci un numero di telefono valido'),
  specialRequests: z.string().optional(),
})

type BookingData = z.infer<typeof bookingSchema>

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [confirmationCode, setConfirmationCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const allTimeSlots = [
    ...restaurant.bookingTimeSlots.lunch.map((t) => ({ value: t, label: `${t} (Pranzo)` })),
    ...restaurant.bookingTimeSlots.dinner.map((t) => ({ value: t, label: `${t} (Cena)` })),
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setErrorMessage('')

    const parsed = bookingSchema.safeParse({
      ...formData,
      guests: parseInt(formData.guests, 10),
    })

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      parsed.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/booking/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Errore durante la prenotazione')
      }

      setConfirmationCode(data.confirmationCode)
      setStatus('success')
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Errore imprevisto')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-charcoal-light rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-cream mb-2">Prenotazione Confermata!</h3>
        <p className="text-warm-grey mb-4">Il tuo codice di conferma:</p>
        <p className="text-3xl font-mono font-bold text-gold tracking-widest mb-4">
          {confirmationCode}
        </p>
        <p className="text-sm text-warm-grey">
          Riceverai una email di conferma con tutti i dettagli.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal-light rounded-2xl p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm text-cream mb-1.5">Data *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
          />
          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm text-cream mb-1.5">Orario *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
          >
            <option value="">Seleziona...</option>
            {allTimeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm text-cream mb-1.5">Ospiti *</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
          >
            {Array.from({ length: restaurant.maxGuestsPerBooking }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'persona' : 'persone'}
              </option>
            ))}
          </select>
          {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm text-cream mb-1.5">Nome completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Mario Rossi"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm placeholder:text-warm-grey/50 focus:outline-none focus:border-gold transition-colors"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-cream mb-1.5">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mario@esempio.it"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm placeholder:text-warm-grey/50 focus:outline-none focus:border-gold transition-colors"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm text-cream mb-1.5">Telefono *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 333 1234567"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm placeholder:text-warm-grey/50 focus:outline-none focus:border-gold transition-colors"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm text-cream mb-1.5">
          Richieste speciali
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          placeholder="Allergie, intolleranze, occasioni speciali..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-cream text-sm placeholder:text-warm-grey/50 focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-gold text-charcoal font-semibold rounded-full hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Prenotazione in corso...' : 'Conferma Prenotazione'}
      </button>
    </form>
  )
}
