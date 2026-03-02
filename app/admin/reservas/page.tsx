import AdminNav from '@/components/AdminNav'

const mockReservas = [
  {
    id: '1',
    guestName: 'João Silva',
    guestEmail: 'joao@email.com',
    guestPhone: '(35) 99999-0001',
    property: 'Rancho à Beira da Represa',
    checkIn: '2026-03-15',
    checkOut: '2026-03-18',
    guests: 8,
    totalPrice: 8000,
    status: 'confirmed',
    paymentStatus: 'paid',
  },
  {
    id: '2',
    guestName: 'Maria Santos',
    guestEmail: 'maria@email.com',
    guestPhone: '(35) 99999-0002',
    property: 'Casa Premium Capitólio',
    checkIn: '2026-03-20',
    checkOut: '2026-03-22',
    guests: 6,
    totalPrice: 4800,
    status: 'pending',
    paymentStatus: 'pending',
  },
  {
    id: '3',
    guestName: 'Carlos Oliveira',
    guestEmail: 'carlos@email.com',
    guestPhone: '(35) 99999-0003',
    property: 'Rancho à Beira da Represa',
    checkIn: '2026-03-25',
    checkOut: '2026-03-30',
    guests: 12,
    totalPrice: 13000,
    status: 'confirmed',
    paymentStatus: 'paid',
  },
  {
    id: '4',
    guestName: 'Ana Pereira',
    guestEmail: 'ana@email.com',
    guestPhone: '(35) 99999-0004',
    property: 'Casa Premium Capitólio',
    checkIn: '2026-04-05',
    checkOut: '2026-04-08',
    guests: 4,
    totalPrice: 7200,
    status: 'pending',
    paymentStatus: 'pending',
  },
]

const statusLabels: Record<string, { label: string; className: string }> = {
  confirmed: { label: 'Confirmada', className: 'bg-green-100 text-green-800' },
  pending: { label: 'Pendente', className: 'bg-yellow-100 text-yellow-800' },
  cancelled: { label: 'Cancelada', className: 'bg-red-100 text-red-800' },
  completed: { label: 'Concluída', className: 'bg-blue-100 text-blue-800' },
}

const paymentLabels: Record<string, { label: string; className: string }> = {
  paid: { label: 'Pago', className: 'bg-green-100 text-green-800' },
  pending: { label: 'Pendente', className: 'bg-yellow-100 text-yellow-800' },
  refunded: { label: 'Reembolsado', className: 'bg-gray-100 text-gray-800' },
}

export default function AdminReservas() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reservas</h2>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition text-sm font-semibold">
            + Nova Reserva
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-blue-900">{mockReservas.length}</p>
            <p className="text-gray-500 text-sm">Total</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-green-600">
              {mockReservas.filter(r => r.status === 'confirmed').length}
            </p>
            <p className="text-gray-500 text-sm">Confirmadas</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {mockReservas.filter(r => r.status === 'pending').length}
            </p>
            <p className="text-gray-500 text-sm">Pendentes</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-2xl font-bold text-purple-600">
              R$ {mockReservas.reduce((acc, r) => acc + r.totalPrice, 0).toLocaleString('pt-BR')}
            </p>
            <p className="text-gray-500 text-sm">Total Faturado</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Hóspede</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Propriedade</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Check-in</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Check-out</th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Hóspedes</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Valor</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Pagamento</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockReservas.map((reserva, index) => {
                  const status = statusLabels[reserva.status]
                  const payment = paymentLabels[reserva.paymentStatus]
                  return (
                    <tr key={reserva.id} className={`border-t hover:bg-gray-50 transition ${index % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{reserva.guestName}</p>
                        <p className="text-xs text-gray-500">{reserva.guestEmail}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{reserva.property}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(reserva.checkIn).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(reserva.checkOut).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{reserva.guests}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 text-sm">
                        R$ {reserva.totalPrice.toLocaleString('pt-BR')}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status.className}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${payment.className}`}>
                          {payment.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                            Ver
                          </button>
                          <button className="text-green-600 hover:text-green-800 text-xs font-medium">
                            Confirmar
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
