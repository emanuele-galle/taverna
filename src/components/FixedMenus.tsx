'use client'

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
      'Caffe\u0300',
    ],
    note: 'Minimo 2 persone',
  },
]

export default function FixedMenus() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-charcoal bg-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-sc tracking-[0.25em] text-gold/80 text-base block text-center mb-3">La Nostra Offerta</span>
        <h2 className="font-serif font-light text-3xl md:text-5xl text-cream text-center mb-4 tracking-tight">
          I Nostri Menu
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        <p className="font-serif italic text-lg text-cream/70 text-center mb-12 max-w-2xl mx-auto">
          Scegli il menu perfetto per la tua serata
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className={`relative bg-charcoal-light rounded-xl p-6 border hover-lift card-specialty ${
                menu.badge
                  ? 'border-gold shadow-xl shadow-gold/20 scale-[1.03]'
                  : 'border-gold/20'
              }`}
            >
              {menu.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B8923A] via-gold to-gold-light text-charcoal font-sc text-sm tracking-[0.15em] px-4 py-1 rounded-full whitespace-nowrap">
                  {menu.badge}
                </span>
              )}
              <h3 className="font-serif text-xl text-cream text-center mb-2">
                {menu.name}
              </h3>
              <p className="text-center mb-5">
                <span className="font-serif font-light text-6xl text-gradient-gold">
                  &euro;{menu.price}
                </span>
                <span className="text-cream/60 text-base">/persona</span>
              </p>
              <ul className="space-y-2 mb-4">
                {menu.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-serif text-cream/80 text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {menu.note && (
                <p className="text-cream/60 text-sm text-center font-serif italic">
                  {menu.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-cream/60 text-base text-center mt-8">
          Coperto: &euro;2,00 &middot; Comunicare eventuali intolleranze alimentari
        </p>
      </div>
    </section>
  )
}
