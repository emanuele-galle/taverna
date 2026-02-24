'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import GalleryLightbox from './GalleryLightbox'

interface GalleryImage {
  src: string
  alt: string
  category: 'Piatti' | 'Dolci' | 'Ambiente'
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('Tutti')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'Tutti') return images
    return images.filter((img) => img.category === activeCategory)
  }, [images, activeCategory])

  const categories = ['Tutti', 'Piatti', 'Dolci', 'Ambiente']

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Tutti: images.length }
    for (const img of images) {
      counts[img.category] = (counts[img.category] || 0) + 1
    }
    return counts
  }, [images])

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-sc text-sm tracking-[0.18em] transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-burgundy/10 text-burgundy border border-burgundy/20'
                : 'text-warm-grey hover:text-burgundy border border-transparent hover:border-warm-grey/20'
            }`}
          >
            {cat} ({categoryCounts[cat] || 0})
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setLightboxIndex(index)}
            className="relative w-full rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading={index < 8 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
              <div>
                <span className="font-sc text-xs tracking-[0.2em] text-gold/90 block mb-0.5">{image.category}</span>
                <span className="text-cream text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % filteredImages.length : null
            )
          }
          onGoTo={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  )
}
