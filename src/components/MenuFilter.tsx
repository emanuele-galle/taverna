'use client'

interface MenuFilterProps {
  categories: string[]
  activeCategory: string
  onFilter: (category: string) => void
  counts?: Record<string, number>
}

export default function MenuFilter({ categories, activeCategory, onFilter, counts }: MenuFilterProps) {
  return (
    <div className="sticky top-16 md:top-20 z-30 bg-charcoal/95 backdrop-blur-md py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => onFilter('Tutti')}
            className={`flex-shrink-0 px-5 pb-2 font-sc text-sm tracking-[0.15em] transition-all duration-200 ${
              activeCategory === 'Tutti'
                ? 'text-gold border-b-2 border-gold'
                : 'text-white/70 hover:text-gold border-b-2 border-transparent'
            }`}
          >
            Tutti{counts ? ` (${Object.values(counts).reduce((a, b) => a + b, 0)})` : ''}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilter(category)}
              className={`flex-shrink-0 px-5 pb-2 font-sc text-sm tracking-[0.15em] transition-all duration-200 ${
                activeCategory === category
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-white/70 hover:text-gold border-b-2 border-transparent'
              }`}
            >
              {category}{counts?.[category] ? ` (${counts[category]})` : ''}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
