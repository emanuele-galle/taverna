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
            className={`flex-shrink-0 px-4 pb-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === 'Tutti'
                ? 'text-gold border-b-2 border-gold'
                : 'text-white/70 hover:text-gold border-b-2 border-transparent'
            }`}
          >
            Tutti
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilter(category)}
              className={`flex-shrink-0 px-4 pb-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-white/70 hover:text-gold border-b-2 border-transparent'
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
