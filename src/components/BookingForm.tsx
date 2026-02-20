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
        body: JSON.stringify({
          bookingDate: parsed.data.date,
          bookingTime: parsed.data.time,
          numGuests: parsed.data.guests,
          customerName: parsed.data.name,
          customerEmail: parsed.data.email,
          customerPhone: parsed.data.phone,
          specialRequests: parsed.data.specialRequests,
        }),
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
      <div className="bg-white rounded-2xl shadow-sm border border-charcoal/5 p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-espresso mb-2">Prenotazione Confermata!</h3>
        <p className="text-warm-grey text-lg mb-4">Il tuo codice di conferma:</p>
        <p className="text-3xl font-mono font-bold text-gold tracking-widest mb-4">
          {confirmationCode}
        </p>
        <p className="text-base text-warm-grey">
          Riceverai una email di conferma con tutti i dettagli.
        </p>
      </div>
    )
  }

  const inputClass = "w-full bg-white border border-charcoal/10 rounded-lg px-4 py-3.5 text-espresso text-lg focus:border-gold focus:ring-2 focus:ring-gold/15 focus:outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-charcoal/5 p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Date */}
        <div>
          <label htmlFor="date" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Data *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={inputClass}
          />
          {errors.date && <p className="text-red-400 text-base mt-1">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Orario *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Seleziona...</option>
            {allTimeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-400 text-base mt-1">{errors.time}</p>}
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Ospiti *</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={inputClass}
          >
            {Array.from({ length: restaurant.maxGuestsPerBooking }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'persona' : 'persone'}
              </option>
            ))}
          </select>
          {errors.guests && <p className="text-red-400 text-base mt-1">{errors.guests}</p>}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Nome completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Mario Rossi"
          className={`${inputClass} placeholder:text-warm-grey/50`}
        />
        {errors.name && <p className="text-red-400 text-base mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mario@esempio.it"
            className={`${inputClass} placeholder:text-warm-grey/50`}
          />
          {errors.email && <p className="text-red-400 text-base mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Telefono *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 333 1234567"
            className={`${inputClass} placeholder:text-warm-grey/50`}
          />
          {errors.phone && <p className="text-red-400 text-base mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">
          Richieste speciali
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          placeholder="Allergie, intolleranze, occasioni speciali..."
          className={`${inputClass} placeholder:text-warm-grey/50 resize-none`}
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-base">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 text-lg bg-gradient-to-r from-[#B8923A] via-gold to-gold-light text-charcoal font-semibold rounded-full shadow-[0_4px_15px_rgba(196,163,90,0.2)] hover:shadow-[0_4px_25px_rgba(196,163,90,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Prenotazione in corso...' : 'Conferma Prenotazione'}
      </button>

      <p className="text-center mt-4 text-base text-warm-grey">
        Oppure{' '}
        <a href="https://wa.me/390255194005" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
          prenota via WhatsApp
        </a>
      </p>
    </form>
  )
}
