'use client'

import { useEffect, useState, useCallback } from 'react'
import { Plus, Pencil, Eye, EyeOff, X, Loader2 } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  category: string
  categoryOrder: number
  displayOrder: number
  description: string | null
  ingredients: string | null
  price: string | number
  allergens: string | null
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
  isSpicy: boolean
  isChefSpecial: boolean
  active: boolean
}

const emptyForm = {
  name: '',
  category: '',
  categoryOrder: 0,
  displayOrder: 0,
  description: '',
  ingredients: '',
  price: 0,
  allergens: '',
  isVegetarian: false,
  isVegan: false,
  isGlutenFree: false,
  isSpicy: false,
  isChefSpecial: false,
  active: true,
}

function formatPrice(price: number | string): string {
  const num = typeof price === 'string' ? parseFloat(price) : price
  if (num === 0) return 'S.Q.'
  return `\u20AC${num.toFixed(2).replace('.', ',')}`
}

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const fetchItems = useCallback(async () => {
    const res = await fetch('/api/admin/menu')
    if (res.ok) {
      setItems(await res.json())
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const categories = Array.from(new Set(items.map((i) => i.category)))

  const grouped: Record<string, MenuItem[]> = {}
  for (const item of items) {
    if (!grouped[item.category]) grouped[item.category] = []
    grouped[item.category].push(item)
  }

  const openCreate = () => {
    setEditingId(null)
    setForm(emptyForm)
    setError('')
    setModalOpen(true)
  }

  const openEdit = (item: MenuItem) => {
    setEditingId(item.id)
    setForm({
      name: item.name,
      category: item.category,
      categoryOrder: item.categoryOrder,
      displayOrder: item.displayOrder,
      description: item.description || '',
      ingredients: item.ingredients || '',
      price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
      allergens: item.allergens || '',
      isVegetarian: item.isVegetarian,
      isVegan: item.isVegan,
      isGlutenFree: item.isGlutenFree,
      isSpicy: item.isSpicy,
      isChefSpecial: item.isChefSpecial,
      active: item.active,
    })
    setError('')
    setModalOpen(true)
  }

  const toggleActive = async (item: MenuItem) => {
    await fetch(`/api/admin/menu/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !item.active }),
    })
    fetchItems()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = {
      ...form,
      description: form.description || null,
      ingredients: form.ingredients || null,
      allergens: form.allergens || null,
    }

    const url = editingId ? `/api/admin/menu/${editingId}` : '/api/admin/menu'
    const method = editingId ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setModalOpen(false)
      fetchItems()
    } else {
      const data = await res.json()
      setError(data.error || 'Errore nel salvataggio')
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-warm-grey" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-2xl text-charcoal">Menu</h1>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-gold text-charcoal text-sm font-medium rounded-lg hover:bg-gold/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nuovo Piatto
        </button>
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, catItems]) => (
          <div key={category} className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
            <div className="bg-charcoal/5 px-4 py-3 flex items-center justify-between">
              <h2 className="font-serif text-lg text-charcoal">{category}</h2>
              <span className="text-xs text-warm-grey bg-white px-2.5 py-1 rounded-full">
                {catItems.length} piatti
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-charcoal/5">
                    <th className="px-4 py-2.5 font-medium text-warm-grey">Nome</th>
                    <th className="px-4 py-2.5 font-medium text-warm-grey">Prezzo</th>
                    <th className="px-4 py-2.5 font-medium text-warm-grey">Stato</th>
                    <th className="px-4 py-2.5 font-medium text-warm-grey">Diete</th>
                    <th className="px-4 py-2.5 font-medium text-warm-grey w-24">Azioni</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/5">
                  {catItems.map((item) => (
                    <tr key={item.id} className="hover:bg-charcoal/[0.02]">
                      <td className="px-4 py-2.5 text-charcoal font-medium">{item.name}</td>
                      <td className="px-4 py-2.5 text-gold font-semibold">{formatPrice(Number(item.price))}</td>
                      <td className="px-4 py-2.5">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${item.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                          {item.active ? 'Attivo' : 'Inattivo'}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex gap-1 flex-wrap">
                          {item.isVegetarian && <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">V</span>}
                          {item.isVegan && <span className="text-xs bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">VG</span>}
                          {item.isGlutenFree && <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">GF</span>}
                          {item.isSpicy && <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">S</span>}
                          {item.isChefSpecial && <span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">Chef</span>}
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openEdit(item)}
                            className="p-1.5 text-warm-grey hover:text-charcoal rounded transition-colors"
                            title="Modifica"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => toggleActive(item)}
                            className="p-1.5 text-warm-grey hover:text-charcoal rounded transition-colors"
                            title={item.active ? 'Disattiva' : 'Attiva'}
                          >
                            {item.active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-charcoal/5">
            <p className="text-warm-grey">Nessun piatto nel menu</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-charcoal/5">
              <h2 className="font-serif text-lg text-charcoal">
                {editingId ? 'Modifica Piatto' : 'Nuovo Piatto'}
              </h2>
              <button onClick={() => setModalOpen(false)} className="text-warm-grey hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 text-sm px-4 py-2 rounded-lg">{error}</div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-charcoal mb-1">Nome *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Categoria *</label>
                  <input
                    type="text"
                    required
                    list="categories"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <datalist id="categories">
                    {categories.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Prezzo *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-charcoal mb-1">Descrizione</label>
                  <textarea
                    rows={2}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-charcoal mb-1">Ingredienti</label>
                  <textarea
                    rows={2}
                    value={form.ingredients}
                    onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-charcoal mb-1">Allergeni</label>
                  <input
                    type="text"
                    value={form.allergens}
                    onChange={(e) => setForm({ ...form, allergens: e.target.value })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Ordine Categoria</label>
                  <input
                    type="number"
                    min="0"
                    value={form.categoryOrder}
                    onChange={(e) => setForm({ ...form, categoryOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Ordine Piatto</label>
                  <input
                    type="number"
                    min="0"
                    value={form.displayOrder}
                    onChange={(e) => setForm({ ...form, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-charcoal/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {([
                  ['isVegetarian', 'Vegetariano'],
                  ['isVegan', 'Vegano'],
                  ['isGlutenFree', 'Senza Glutine'],
                  ['isSpicy', 'Piccante'],
                  ['isChefSpecial', 'Speciale Chef'],
                ] as const).map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2 text-sm text-charcoal cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
                      className="rounded border-charcoal/20 text-gold focus:ring-gold/50"
                    />
                    {label}
                  </label>
                ))}
              </div>

              <label className="flex items-center gap-2 text-sm text-charcoal cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                  className="rounded border-charcoal/20 text-gold focus:ring-gold/50"
                />
                Attivo
              </label>

              <div className="flex justify-end gap-3 pt-4 border-t border-charcoal/5">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-sm text-warm-grey hover:text-charcoal transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-gold text-charcoal text-sm font-medium rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingId ? 'Salva Modifiche' : 'Crea Piatto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
