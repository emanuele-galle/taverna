'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setVisible(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    setVisible(false)
  }

  const rejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem('cookie-consent', JSON.stringify(allRejected))
    setVisible(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div className="bg-[#2C2C2C]/95 backdrop-blur-md border-t border-[#C8A97E]/20 px-4 py-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-[#F5F0EB] text-base flex-1">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
                Per saperne di più, consulta la nostra{' '}
                <Link href="/cookie" className="text-[#C8A97E] underline hover:text-[#C8A97E]/80 transition-colors">
                  Cookie Policy
                </Link>.
              </p>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-4 py-2 text-base font-medium text-[#F5F0EB] border border-[#C8A97E]/40 rounded-lg hover:border-[#C8A97E] transition-colors"
                >
                  Gestisci Preferenze
                </button>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 text-base font-medium text-[#F5F0EB]/70 border border-[#F5F0EB]/20 rounded-lg hover:border-[#F5F0EB]/40 transition-colors"
                >
                  Rifiuta Tutti
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-base font-medium bg-[#C8A97E] text-[#2C2C2C] rounded-lg hover:bg-[#C8A97E]/90 transition-colors"
                >
                  Accetta Tutti
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-[#F5F0EB] text-base font-medium">Gestisci le tue preferenze cookie</p>

              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-[#F5F0EB] text-base font-medium">Necessari</span>
                    <p className="text-[#F5F0EB]/60 text-base">Essenziali per il funzionamento del sito</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" checked disabled className="sr-only peer" />
                    <div className="w-10 h-5 bg-[#C8A97E] rounded-full opacity-60 cursor-not-allowed" />
                    <div className="absolute top-0.5 left-5 w-4 h-4 bg-white rounded-full" />
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="text-[#F5F0EB] text-base font-medium">Statistici</span>
                    <p className="text-[#F5F0EB]/60 text-base">Ci aiutano a capire come usi il sito</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-[#555] peer-checked:bg-[#C8A97E] rounded-full transition-colors" />
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="text-[#F5F0EB] text-base font-medium">Marketing</span>
                    <p className="text-[#F5F0EB]/60 text-base">Personalizzazione di annunci e contenuti</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-[#555] peer-checked:bg-[#C8A97E] rounded-full transition-colors" />
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                  </div>
                </label>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-base font-medium text-[#F5F0EB]/70 hover:text-[#F5F0EB] transition-colors"
                >
                  Indietro
                </button>
                <button
                  onClick={savePreferences}
                  className="px-4 py-2 text-base font-medium bg-[#C8A97E] text-[#2C2C2C] rounded-lg hover:bg-[#C8A97E]/90 transition-colors"
                >
                  Salva Preferenze
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
