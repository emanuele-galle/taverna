'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

interface LazyGoogleMapProps {
  src: string
  title?: string
  className?: string
}

export default function LazyGoogleMap({ src, title = 'Mappa', className }: LazyGoogleMapProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className || "rounded-xl overflow-hidden shadow-sm border border-gold/10 mb-12"}>
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          className={className ? "w-full h-full" : "w-full h-64 md:h-96"}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div className={`${className ? "w-full h-full" : "w-full h-64 md:h-96"} bg-cream flex flex-col items-center justify-center gap-3 text-warm-grey`}>
          <MapPin className="w-10 h-10 text-gold/50" />
          <span className="text-base font-serif italic">Caricamento mappa...</span>
        </div>
      )}
    </div>
  )
}
