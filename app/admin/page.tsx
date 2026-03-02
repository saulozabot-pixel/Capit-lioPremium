import AdminNav from '@/components/AdminNav'
import Link from 'next/link'

const stats = {
  totalReservas: 12,
  reservasHoje: 2,
  faturamentoMes: 45000,
  ocupacaoMedia: 78,
}

const recentReservas = [
  {
    guest: 'João Silva',
    property: 'Rancho à Beira da Represa',
    checkIn: '15/03/2026',
    checkOut: '18/03/2026',
    status: 'Confirmada',
    statusColor: 'bg-green-100 text-green-800',
    value: 'R$ 8.000',
  },
  {
    guest: 'Maria Santos',
    property: 'Casa Premium Capitólio',
    checkIn: '20/03/2026',
    checkOut: '22/03/2026',
    status: 'Pendente',
    statusColor: 'bg-yellow-100 text-yellow-800',
    value: 'R$ 4.800',
  },
  {
    guest: 'Carlos Oliveira',
    property: 'Rancho à Beira da Represa',
    checkIn: '25/03/2026',
    checkOut: '30/03/2026',
    status: 'Confirmada',
    statusColor: 'bg-green-100 text-green-800',
    value: 'R$ 13.000',
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total de Reservas</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">{stats.totalReservas}</p>
              </div>
              <div className="text-4xl">📅</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Reservas Hoje</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.reservasHoje}</p>
              </div>
              <div className="text-4xl">✨</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Faturamento do Mês</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">
                  R$ {(stats.faturamentoMes / 1000).toFixed(0)}k
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Ocupação Média</p>
                <p className="text-3xl font-bold text-orange-500 mt-1">{stats.ocupacaoMedia}%</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
        </div>

        {/* Recent Reservations */}
        <div className="bg-white rounded-xl shadow mb-8">
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Reservas Recentes</h2>
            <Link href="/admin/reservas" className="text-blue-900 text-sm font-medium hover:underline">
              Ver todas →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Hóspede</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Propriedade</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Check-in</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Check-out</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Valor</th>
                </tr>
              </thead>
              <tbody>
                {recentReservas.map((r, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{r.guest}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{r.property}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{r.checkIn}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{r.checkOut}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${r.statusColor}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/admin/reservas"
            className="bg-blue-900 text-white p-6 rounded-xl hover:bg-blue-800 transition group"
          >
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-bold mb-1">Reservas</h3>
            <p className="text-blue-200 text-sm">Gerenciar todas as reservas</p>
          </Link>

          <Link
            href="/admin/propriedades"
            className="bg-purple-600 text-white p-6 rounded-xl hover:bg-purple-700 transition"
          >
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="text-xl font-bold mb-1">Propriedades</h3>
            <p className="text-purple-200 text-sm">Gerenciar propriedades</p>
          </Link>

          <Link
            href="/admin/servicos"
            className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition"
          >
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-xl font-bold mb-1">Serviços</h3>
            <p className="text-green-200 text-sm">Gerenciar serviços de concierge</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
