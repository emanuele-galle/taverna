'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-sc tracking-wider text-[#C9A44E]/60 text-sm mb-4">Errore</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#FAF9F6] mb-4">Qualcosa è andato storto</h1>
        <p className="text-[#FAF9F6]/70 text-base mb-8 leading-relaxed">
          Si è verificato un errore imprevisto. Riprova o torna alla home page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-8 py-3 bg-[#C9A44E] text-[#2C2C2C] font-semibold rounded-full hover:bg-[#C9A44E]/90 active:scale-[0.98] transition-all duration-200"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 border border-[#C9A44E]/30 text-[#C9A44E] font-semibold rounded-full hover:bg-[#C9A44E]/10 active:scale-[0.98] transition-all duration-200"
          >
            Torna alla Home
          </a>
        </div>
      </div>
    </div>
  )
}
