'use client'

import FadeIn from './FadeIn'

const menus = [
  {
    name: 'Menu Base',
    price: '22',
    badge: null,
    items: ['Antipasto', 'Primo', 'Secondo', 'Contorno', 'Acqua'],
    note: null,
  },
  {
    name: 'Menu Standard',
    price: '24',
    badge: null,
    items: ['Antipasto', 'Primo', 'Secondo', 'Contorno', 'Dolce', 'Acqua'],
    note: null,
  },
  {
    name: 'Menu Grigliata',
    price: '37',
    badge: 'Consigliato',
    items: [
      'Antipasto misto',
      'Primo a scelta',
      'Grigliata mista',
      'Contorno',
      'Dolce',
      'Acqua',
      'Caffè',
    ],
    note: 'Minimo 2 persone',
  },
]

export default function FixedMenus() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dark" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-gold text-sm font-medium tracking-widest uppercase mb-5">
              <span className="w-8 h-[2px] bg-gold/50" />
              La Nostra Offerta
              <span className="w-8 h-[2px] bg-gold/50" />
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-[0.95]">
              I Nostri Menu
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menus.map((menu, i) => (
            <FadeIn key={menu.name} delay={i * 120} animation="scaleUp">
              <div
                className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                  menu.badge
                    ? 'bg-charcoal-light ring-2 ring-gold/60 shadow-[0_0_40px_rgba(196,163,90,0.15)]'
                    : 'bg-charcoal-light/50 ring-1 ring-white/10 hover:ring-gold/30'
                }`}
              >
                {/* Top accent bar */}
                {menu.badge && (
                  <div className="bg-gold text-charcoal-deep text-center py-2 text-xs font-bold tracking-widest uppercase">
                    {menu.badge}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="font-serif text-2xl text-white text-center mb-6">{menu.name}</h3>

                  <p className="text-center mb-8">
                    <span className="text-6xl md:text-7xl font-serif text-gold tracking-tight">&euro;{menu.price}</span>
                    <span className="text-white/50 text-base ml-2">/persona</span>
                  </p>

                  <div className="w-full h-px bg-white/10 mb-6" />

                  <ul className="space-y-3 mb-6">
                    {menu.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-[15px]">
                        <svg className="w-4 h-4 text-gold/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {menu.note && (
                    <p className="text-white/50 text-sm text-center italic">{menu.note}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-white/40 text-sm text-center mt-10">
          Coperto: &euro;2,00 &middot; Comunicare eventuali intolleranze alimentari
        </p>
      </div>
    </section>
  )
}
