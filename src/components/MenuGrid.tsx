'use client'

import { useState, useMemo } from 'react'
import MenuFilter from './MenuFilter'
import MenuCard from './MenuCard'

interface MenuItem {
  name: string
  description?: string | null
  price: number | string
  image?: string | null
  category: string
  isVegetarian?: boolean
  isVegan?: boolean
  isGlutenFree?: boolean
  isSpicy?: boolean
  isChefSpecial?: boolean
  allergens?: string | null
}

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  const [activeCategory, setActiveCategory] = useState('Tutti')

  const categories = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category)))
  }, [items])

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const item of items) {
      c[item.category] = (c[item.category] || 0) + 1
    }
    return c
  }, [items])

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Tutti') return items
    return items.filter((item) => item.category === activeCategory)
  }, [items, activeCategory])

  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {}
    for (const item of filteredItems) {
      if (!groups[item.category]) groups[item.category] = []
      groups[item.category].push(item)
    }
    return groups
  }, [filteredItems])

  return (
    <div>
      <MenuFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={setActiveCategory}
        counts={counts}
      />

      <div className="py-8 sm:py-10 space-y-12 sm:space-y-16">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <section key={category}>
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
              <h2 className="font-serif font-normal text-xl sm:text-2xl md:text-3xl text-espresso whitespace-nowrap">
                {category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              <span className="text-warm-grey/70 text-xs sm:text-sm font-sc tracking-wider">
                {categoryItems.length}
              </span>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-charcoal/[0.06] shadow-sm px-3 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
                {categoryItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
