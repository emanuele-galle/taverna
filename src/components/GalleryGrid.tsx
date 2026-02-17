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

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === cat
                ? 'bg-gold text-charcoal'
                : 'bg-white/10 text-cream hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setLightboxIndex(index)}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
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
        />
      )}
    </div>
  )
}
