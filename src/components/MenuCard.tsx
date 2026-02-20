import Image from 'next/image'
import { formatPrice } from '@/lib/utils'

interface MenuItem {
  name: string
  description?: string | null
  price: number | string
  image?: string | null
  isVegetarian?: boolean
  isVegan?: boolean
  isGlutenFree?: boolean
  isSpicy?: boolean
  isChefSpecial?: boolean
  allergens?: string | null
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover-lift hover-glow-gold">
      {item.image && (
        <div className="relative w-full h-[200px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif font-semibold text-espresso text-xl leading-tight">
            {item.name}
          </h3>
          <span className="bg-gold/10 px-3 py-1 rounded-full font-bold text-gold-dark whitespace-nowrap text-base">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.description && (
          <p className="text-base text-warm-grey mb-3 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Dietary Badges */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {item.isVegetarian && (
            <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Vegetariano
            </span>
          )}
          {item.isVegan && (
            <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Vegano
            </span>
          )}
          {item.isGlutenFree && (
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
              Senza Glutine
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
              Piccante
            </span>
          )}
          {item.isChefSpecial && (
            <span className="px-2.5 py-0.5 bg-gold/20 text-gold-dark text-xs font-medium rounded-full">
              ★ Chef Special
            </span>
          )}
        </div>

        {item.allergens && (
          <p className="text-xs text-warm-grey/70">
            Allergeni: {item.allergens}
          </p>
        )}
      </div>
    </div>
  )
}
