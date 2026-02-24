export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero skeleton */}
      <div className="h-64 bg-charcoal/10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title skeleton */}
        <div className="h-10 w-64 bg-gold/10 rounded-lg animate-pulse mx-auto mb-8" />

        {/* Category tabs skeleton */}
        <div className="flex gap-3 justify-center mb-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gold/10 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-[200px] bg-gold/10 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="flex justify-between">
                  <div className="h-6 w-40 bg-gold/10 rounded animate-pulse" />
                  <div className="h-6 w-16 bg-gold/10 rounded animate-pulse" />
                </div>
                <div className="h-4 w-full bg-gold/10 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gold/10 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
