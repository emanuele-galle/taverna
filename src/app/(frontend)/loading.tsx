export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero skeleton */}
      <div className="h-[50vh] bg-[#2C2C2C] animate-pulse" />

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="h-4 w-32 bg-[#C9A44E]/20 rounded-full animate-pulse" />
          <div className="h-8 w-64 bg-[#2C2C2C]/10 rounded-lg animate-pulse" />
          <div className="h-px w-24 bg-[#C9A44E]/30 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#2C2C2C]/5">
              <div className="h-48 bg-[#2C2C2C]/5 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-3/4 bg-[#2C2C2C]/10 rounded animate-pulse" />
                <div className="h-4 w-full bg-[#2C2C2C]/5 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-[#2C2C2C]/5 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
