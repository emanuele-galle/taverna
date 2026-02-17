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
    badge: 'PIU\u0300 RICHIESTO',
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
    <section className="py-16 bg-charcoal bg-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
          I Nostri Menu
        </h2>
        <p className="text-warm-grey text-center mb-12 max-w-2xl mx-auto">
          Scegli il menu perfetto per la tua serata
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className={`relative bg-cream rounded-xl p-6 border-2 ${
                menu.badge
                  ? 'border-gold shadow-xl shadow-gold/20'
                  : 'border-gold/40'
              }`}
            >
              {menu.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {menu.badge}
                </span>
              )}
              <h3 className="font-serif text-xl text-charcoal text-center mb-2">
                {menu.name}
              </h3>
              <p className="text-center mb-5">
                <span className="font-serif text-5xl text-gold font-bold">
                  &euro;{menu.price}
                </span>
                <span className="text-warm-grey text-sm">/persona</span>
              </p>
              <ul className="space-y-2 mb-4">
                {menu.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-charcoal/80 text-sm"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              {menu.note && (
                <p className="text-warm-grey text-xs text-center italic">
                  {menu.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-warm-grey text-sm text-center mt-8">
          Coperto: &euro;2,00 &middot; Comunicare eventuali intolleranze alimentari
        </p>
      </div>
    </section>
  )
}
