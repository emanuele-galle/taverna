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
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-gold/40 hover:shadow-xl transition-all duration-400">
      {item.image && (
        <div className="relative w-full h-56 md:h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {item.isChefSpecial && (
            <div className="absolute top-3 right-3 bg-charcoal-deep text-gold text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md">
              Chef Special
            </div>
          )}
        </div>
      )}
      <div className={`p-5 md:p-6${!item.image ? ' bg-cream-warm' : ''}`}>
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-serif text-xl text-espresso leading-snug">
            {item.name}
          </h3>
          <span className="text-lg text-gold-dark font-bold whitespace-nowrap tabular-nums menu-card-price">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.description && (
          <p className="text-[15px] text-warm-grey leading-relaxed mb-3">
            {item.description}
          </p>
        )}

        {/* Dietary Badges */}
        <div className="flex flex-wrap gap-1.5">
          {item.isVegetarian && (
            <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md menu-card-badge">
              Vegetariano
            </span>
          )}
          {item.isVegan && (
            <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md menu-card-badge">
              Vegano
            </span>
          )}
          {item.isGlutenFree && (
            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md menu-card-badge">
              Senza Glutine
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-md menu-card-badge">
              Piccante
            </span>
          )}
          {!item.image && item.isChefSpecial && (
            <span className="px-2.5 py-1 bg-gold/10 text-gold-dark text-xs font-medium rounded-md menu-card-badge">
              Chef Special
            </span>
          )}
        </div>

        {item.allergens && (
          <p className="text-sm text-warm-grey/60 mt-2.5">
            Allergeni: {item.allergens}
          </p>
        )}
      </div>
    </div>
  )
}
