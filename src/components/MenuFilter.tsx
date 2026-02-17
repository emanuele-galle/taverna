'use client'

interface MenuFilterProps {
  categories: string[]
  activeCategory: string
  onFilter: (category: string) => void
}

export default function MenuFilter({ categories, activeCategory, onFilter }: MenuFilterProps) {
  return (
    <div className="sticky top-16 md:top-20 z-30 bg-charcoal/95 backdrop-blur-md py-3 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={() => onFilter('Tutti')}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === 'Tutti'
                ? 'bg-gold text-charcoal'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Tutti
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilter(category)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-gold text-charcoal'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
