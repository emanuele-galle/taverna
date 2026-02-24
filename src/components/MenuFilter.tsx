'use client'

interface MenuFilterProps {
  categories: string[]
  activeCategory: string
  onFilter: (category: string) => void
  counts?: Record<string, number>
}

export default function MenuFilter({ categories, activeCategory, onFilter, counts }: MenuFilterProps) {
  return (
    <div className="sticky top-20 md:top-24 z-30 bg-charcoal-deep/97 backdrop-blur-xl py-5 border-b-2 border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => onFilter('Tutti')}
            className={`flex-shrink-0 px-5 py-2 rounded-full font-sc text-base tracking-[0.18em] transition-all duration-300 ${
              activeCategory === 'Tutti'
                ? 'bg-gold/20 text-gold border border-gold/40'
                : 'text-white/70 hover:text-gold/80 border border-transparent hover:border-white/10'
            }`}
          >
            Tutti{counts ? ` (${Object.values(counts).reduce((a, b) => a + b, 0)})` : ''}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilter(category)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-sc text-base tracking-[0.18em] transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold/20 text-gold border border-gold/40'
                  : 'text-white/70 hover:text-gold/80 border border-transparent hover:border-white/10'
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
