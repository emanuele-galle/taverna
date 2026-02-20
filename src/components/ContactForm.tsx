'use client'

import { useState } from 'react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Inserisci il tuo nome'),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Il messaggio deve contenere almeno 10 caratteri'),
  privacy: z.literal(true, { error: 'Devi accettare la privacy policy' }),
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: newValue }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setErrorMessage('')

    const parsed = contactSchema.safeParse(formData)

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
      const { privacy: _, ...dataToSend } = parsed.data
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Errore durante l\'invio')
      }

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
        <h3 className="font-serif text-3xl text-espresso mb-2">Messaggio Inviato!</h3>
        <p className="text-warm-grey text-lg">
          Ti risponderemo il prima possibile. Grazie per averci contattato.
        </p>
      </div>
    )
  }

  const inputClass = "w-full bg-white border border-charcoal/10 rounded-lg px-4 py-3.5 text-espresso text-lg focus:border-gold focus:ring-2 focus:ring-gold/15 focus:outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-charcoal/5 p-6 md:p-8 space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Nome *</label>
        <input
          type="text"
          id="contact-name"
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
          <label htmlFor="contact-email" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Email *</label>
          <input
            type="email"
            id="contact-email"
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
          <label htmlFor="contact-phone" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Telefono</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+39 333 1234567"
            className={`${inputClass} placeholder:text-warm-grey/50`}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Oggetto</label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" className="bg-charcoal">Seleziona un oggetto</option>
          <option value="Richiesta Informazioni" className="bg-charcoal">Richiesta Informazioni</option>
          <option value="Prenotazione" className="bg-charcoal">Prenotazione</option>
          <option value="Eventi Privati" className="bg-charcoal">Eventi Privati</option>
          <option value="Feedback" className="bg-charcoal">Feedback</option>
          <option value="Altro" className="bg-charcoal">Altro</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block font-sc tracking-[0.15em] text-base text-espresso mb-1.5">Messaggio *</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Scrivi il tuo messaggio..."
          className={`${inputClass} placeholder:text-warm-grey/50 resize-none`}
        />
        {errors.message && <p className="text-red-400 text-base mt-1">{errors.message}</p>}
      </div>

      {/* Privacy Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-gold/50 focus:ring-offset-0"
          />
          <span className="text-base text-warm-grey leading-relaxed">
            Accetto il trattamento dei dati personali secondo la{' '}
            <a href="/privacy" className="text-gold hover:text-gold-light underline">privacy policy</a> *
          </span>
        </label>
        {errors.privacy && <p className="text-red-400 text-base mt-1">{errors.privacy}</p>}
      </div>

      {/* Error */}
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
        {status === 'loading' ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  )
}
