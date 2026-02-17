'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const current = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Chiudi"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-sm z-10">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-2 md:left-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Precedente"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-2 md:right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Successiva"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  )
}
