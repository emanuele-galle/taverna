'use client'

import { useEffect, useCallback, useRef, useState } from 'react'
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
  onGoTo?: (index: number) => void
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: GalleryLightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const [fadeKey, setFadeKey] = useState(currentIndex)
  const [fading, setFading] = useState(false)
  const prevIndex = useRef(currentIndex)
  const thumbsRef = useRef<HTMLDivElement>(null)

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

  // Crossfade transition
  useEffect(() => {
    if (currentIndex !== prevIndex.current) {
      requestAnimationFrame(() => setFading(true))
      const timer = setTimeout(() => {
        requestAnimationFrame(() => {
          setFadeKey(currentIndex)
          setFading(false)
        })
      }, 200)
      prevIndex.current = currentIndex
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  // Scroll thumbnail into view
  useEffect(() => {
    const container = thumbsRef.current
    if (!container) return
    const thumb = container.children[currentIndex] as HTMLElement
    if (thumb) {
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [currentIndex])

  // Preload adjacent images
  useEffect(() => {
    const preload = (index: number) => {
      if (index >= 0 && index < images.length) {
        const img = new window.Image()
        img.src = images[index].src
      }
    }
    preload(currentIndex + 1)
    preload(currentIndex - 1)
  }, [currentIndex, images])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) onPrev()
    else if (delta < -50) onNext()
    touchStartX.current = null
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const current = images[fadeKey]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Chiudi"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-base z-10">
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

      {/* Image with crossfade */}
      <div
        className="relative w-full max-w-5xl mx-16 transition-opacity duration-200 ease-in-out"
        style={{ height: 'calc(75vh - 80px)', opacity: fading ? 0 : 1 }}
      >
        <Image
          key={fadeKey}
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Caption */}
      <p className="text-white/70 text-base mt-3 text-center px-4 max-w-2xl">
        {current.alt}
      </p>

      {/* Thumbnail strip */}
      <div
        ref={thumbsRef}
        className="flex gap-2 mt-3 px-4 overflow-x-auto scrollbar-hide max-w-full"
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={(e) => {
              e.stopPropagation()
              if (onGoTo) onGoTo(i)
            }}
            className={`relative w-14 h-14 rounded-md overflow-hidden shrink-0 border-2 transition-all duration-200 ${
              i === currentIndex
                ? 'border-gold opacity-100 scale-105'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="56px"
            />
          </button>
        ))}
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
