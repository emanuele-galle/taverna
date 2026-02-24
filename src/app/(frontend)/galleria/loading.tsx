export default function GalleriaLoading() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero skeleton */}
      <div className="h-64 bg-charcoal/10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title skeleton */}
        <div className="h-10 w-48 bg-gold/10 rounded-lg animate-pulse mx-auto mb-8" />

        {/* Filter tabs skeleton */}
        <div className="flex gap-3 justify-center mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-20 bg-gold/10 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Gallery grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gold/10 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
