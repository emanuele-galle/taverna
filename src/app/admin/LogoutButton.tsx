'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400/80 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors w-full"
    >
      <LogOut className="w-4 h-4" />
      Esci
    </button>
  )
}
