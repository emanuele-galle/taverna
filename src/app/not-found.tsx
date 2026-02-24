import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2C2C2C] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-sc tracking-wider text-[#C9A44E]/60 text-sm mb-4">Errore 404</p>
        <h1 className="font-serif text-6xl md:text-8xl text-[#C9A44E] mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl text-[#FAF9F6] mb-4">Pagina Non Trovata</h2>
        <p className="text-[#FAF9F6]/70 text-base mb-8 leading-relaxed">
          La pagina che stai cercando non esiste o potrebbe essere stata spostata.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-[#C9A44E] text-[#2C2C2C] font-semibold rounded-full hover:bg-[#C9A44E]/90 active:scale-[0.98] transition-all duration-200"
          >
            Torna alla Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-3 border border-[#C9A44E]/30 text-[#C9A44E] font-semibold rounded-full hover:bg-[#C9A44E]/10 active:scale-[0.98] transition-all duration-200"
          >
            Vedi il Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
