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
    <div className="group bg-white rounded-xl overflow-hidden hover-lift hover-glow-gold border border-charcoal/[0.04]">
      {item.image && (
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Chef special badge on image */}
          {item.isChefSpecial && (
            <div className="absolute top-3 right-3 bg-gold/90 text-charcoal text-[10px] font-sc tracking-[0.15em] px-2.5 py-1 rounded-full">
              Chef Special
            </div>
          )}
        </div>
      )}
      <div className={`p-5${!item.image ? ' bg-cream-warm' : ''}`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif font-semibold text-espresso text-lg leading-tight">
            {item.name}
          </h3>
          <span className="font-serif text-lg text-gold-dark font-semibold whitespace-nowrap menu-card-price">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.description && (
          <p className="text-[14px] text-warm-grey mb-3 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Dietary Badges */}
        <div className="flex flex-wrap gap-1.5">
          {item.isVegetarian && (
            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full menu-card-badge">
              Vegetariano
            </span>
          )}
          {item.isVegan && (
            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full menu-card-badge">
              Vegano
            </span>
          )}
          {item.isGlutenFree && (
            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[11px] font-medium rounded-full menu-card-badge">
              Senza Glutine
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[11px] font-medium rounded-full menu-card-badge">
              Piccante
            </span>
          )}
          {!item.image && item.isChefSpecial && (
            <span className="px-2 py-0.5 bg-gold/10 text-gold-dark text-[11px] font-medium rounded-full menu-card-badge">
              Chef Special
            </span>
          )}
        </div>

        {item.allergens && (
          <p className="text-[12px] text-warm-grey/60 mt-2">
            Allergeni: {item.allergens}
          </p>
        )}
      </div>
    </div>
  )
}
