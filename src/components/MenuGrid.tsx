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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <section key={category}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif font-normal text-2xl md:text-3xl text-espresso whitespace-nowrap">
                {category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              <span className="text-warm-grey/50 text-sm font-sc tracking-wider">
                {categoryItems.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryItems.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
