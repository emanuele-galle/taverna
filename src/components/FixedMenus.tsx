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
    badge: 'PIÙ RICHIESTO',
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
    <section className="py-24 md:py-28 bg-charcoal-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dark" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <span className="font-sc tracking-[0.3em] text-gold/80 text-sm block text-center mb-4 uppercase">La Nostra Offerta</span>
          <h2 className="font-serif font-normal text-4xl md:text-6xl text-cream text-center mb-5 tracking-tight leading-[1.1]">
            I Nostri Menu
          </h2>
          <div className="ornament-line mb-6">
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
          </div>
          <p className="font-serif italic text-base text-cream/70 text-center mb-14 max-w-md mx-auto">
            Scegli il menu perfetto per la tua serata
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {menus.map((menu, i) => (
            <FadeIn key={menu.name} delay={i * 120} animation="scaleUp">
              <div
                className={`relative rounded-2xl p-7 transition-all duration-500 group ${
                  menu.badge
                    ? 'bg-charcoal-light border-2 border-gold/40 shadow-[0_0_40px_rgba(196,163,90,0.12)] scale-[1.02]'
                    : 'bg-charcoal-light/60 border border-white/10 hover:border-gold/30'
                }`}
              >
                {menu.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-deep via-gold to-gold-light text-charcoal font-sc text-xs tracking-[0.18em] px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                    {menu.badge}
                  </span>
                )}

                <h3 className="font-serif text-lg text-cream text-center mb-4">{menu.name}</h3>

                <p className="text-center mb-6">
                  <span className="font-serif font-normal text-5xl text-gradient-gold">&euro;{menu.price}</span>
                  <span className="text-cream/70 text-sm ml-1">/persona</span>
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-5" />

                <ul className="space-y-2.5 mb-5">
                  {menu.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cream/80 text-base">
                      <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {menu.note && (
                  <p className="text-cream/70 text-sm text-center font-serif italic">{menu.note}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-cream/60 text-sm text-center mt-10">
          Coperto: &euro;2,00 &middot; Comunicare eventuali intolleranze alimentari
        </p>
      </div>
    </section>
  )
}
