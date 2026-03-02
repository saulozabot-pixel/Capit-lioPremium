'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AdminNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  const navLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/reservas', label: 'Reservas' },
    { href: '/admin/propriedades', label: 'Propriedades' },
    { href: '/admin/servicos', label: 'Serviços' },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Capitólio Premium — Admin</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-blue-200 hover:text-white text-sm transition">
                Ver Site →
              </Link>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full transition disabled:opacity-50"
              >
                {loggingOut ? 'Saindo...' : '🚪 Sair'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
