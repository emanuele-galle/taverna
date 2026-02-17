import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { formatPrice } from '@/lib/utils'

export default async function AdminMenuPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) redirect('/admin/login')
  const session = await verifyToken(token)
  if (!session) redirect('/admin/login')

  const items = await prisma.menuItem.findMany({
    orderBy: [{ categoryOrder: 'asc' }, { displayOrder: 'asc' }],
  })

  // Group by category
  const categories: Record<string, typeof items> = {}
  for (const item of items) {
    if (!categories[item.category]) categories[item.category] = []
    categories[item.category].push(item)
  }

  return (
    <div>
      <h1 className="font-serif text-2xl text-charcoal mb-8">Menu</h1>

      <div className="space-y-8">
        {Object.entries(categories).map(([category, catItems]) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
