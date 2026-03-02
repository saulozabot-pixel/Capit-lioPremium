'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError('Senha incorreta. Tente novamente.')
      }
    } catch {
      setError('Erro ao conectar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center px-4">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-2xl mb-4">
            <span className="text-3xl">🏠</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-900">Capitólio Premium</h1>
          <p className="text-gray-500 mt-1">Painel Administrativo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium text-sm">
              Senha de Acesso
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
              placeholder="••••••••••••"
              required
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Entrando...
              </span>
            ) : (
              'Entrar no Painel'
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs">
            🔒 Acesso restrito a administradores autorizados
          </p>
        </div>
      </div>
    </div>
  )
}
