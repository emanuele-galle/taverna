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
    <div className="group py-4 border-b border-charcoal/[0.06] last:border-b-0 hover:bg-parchment/40 -mx-4 px-4 rounded-lg transition-colors duration-200">
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-lg md:text-xl text-espresso leading-snug">
          {item.name}
        </h3>
        {/* Dietary icons inline */}
        <span className="flex items-center gap-1 shrink-0">
          {item.isVegan && (
            <span className="w-5 h-5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center" title="Vegano">VV</span>
          )}
          {item.isVegetarian && !item.isVegan && (
            <span className="w-5 h-5 rounded-full bg-green-500 text-white text-[10px] font-bold flex items-center justify-center" title="Vegetariano">V</span>
          )}
          {item.isSpicy && (
            <span className="text-red-500 text-sm" title="Piccante">🌶</span>
          )}
          {item.isChefSpecial && (
            <span className="text-gold text-sm" title="Consigliato">★</span>
          )}
        </span>
        <span className="flex-1 border-b border-dotted border-charcoal/15 min-w-[30px] mb-1" />
        <span className="text-lg font-serif text-gold-dark font-semibold whitespace-nowrap tabular-nums">
          {formatPrice(item.price)}
        </span>
      </div>

      {item.description && (
        <p className="text-sm text-warm-grey/80 mt-1 italic">
          {item.description}
        </p>
      )}

      {item.allergens && (
        <p className="text-xs text-warm-grey/50 mt-1">
          Allergeni: {item.allergens}
        </p>
      )}
    </div>
  )
}
