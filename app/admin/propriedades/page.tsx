import AdminNav from '@/components/AdminNav'
import Link from 'next/link'
import { properties } from '@/lib/properties-data'

export default function AdminPropriedades() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Propriedades</h2>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition text-sm font-semibold">
            + Nova Propriedade
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow overflow-hidden">
              {/* Property Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={
                    property.id === 'rancho-beira-represa'
                      ? 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80'
                      : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'
                  }
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${property.active ? 'bg-green-500' : 'bg-red-500'}`}>
                    {property.active ? 'Ativa' : 'Inativa'}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{property.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{property.shortDesc}</p>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="font-bold text-blue-900 text-sm">{property.bedrooms}</p>
                    <p className="text-xs text-gray-500">Quartos</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="font-bold text-blue-900 text-sm">{property.bathrooms}</p>
                    <p className="text-xs text-gray-500">Banheiros</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="font-bold text-blue-900 text-sm">{property.maxGuests}</p>
                    <p className="text-xs text-gray-500">Hóspedes</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="font-bold text-blue-900 text-sm">R$ {(property.pricePerNight / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-gray-500">/noite</p>
                  </div>
                </div>

                {/* Google Drive Links */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Links do Google Drive:</p>
                  {property.googleDriveLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-blue-600 hover:underline truncate mb-1"
                    >
                      📁 Drive {i + 1}: {link.split('/').pop()}
                    </a>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/propriedades/${property.slug}`}
                    className="flex-1 text-center bg-gray-100 text-gray-800 py-2 rounded-full text-sm hover:bg-gray-200 transition font-medium"
                  >
                    Ver Página
                  </Link>
                  <button className="flex-1 bg-blue-900 text-white py-2 rounded-full text-sm hover:bg-blue-800 transition font-medium">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Property Card */}
          <div className="bg-white rounded-xl shadow border-2 border-dashed border-gray-300 flex items-center justify-center min-h-64">
            <div className="text-center p-8">
              <p className="text-5xl mb-4 text-gray-300">+</p>
              <p className="text-gray-600 font-semibold mb-2">Adicionar Nova Propriedade</p>
              <p className="text-gray-400 text-sm mb-4">Cadastre uma nova mansão no sistema</p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-800 transition">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
