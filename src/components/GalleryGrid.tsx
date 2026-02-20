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
      <div className="flex justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 pb-2 font-sc text-sm tracking-[0.15em] transition-all duration-200 ${
              activeCategory === cat
                ? 'text-burgundy border-b-2 border-gold'
                : 'text-warm-grey hover:text-burgundy border-b-2 border-transparent'
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <span className="text-cream font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase">{image.category}</span>
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
        />
      )}
    </div>
  )
}
