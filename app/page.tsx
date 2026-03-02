import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Capitólio Premium
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#casas" className="text-gray-700 hover:text-blue-900">
              Casas
            </Link>
            <Link href="/#servicos" className="text-gray-700 hover:text-blue-900">
              Serviços
            </Link>
            <Link href="/#contato" className="text-gray-700 hover:text-blue-900">
              Contato
            </Link>
            <Link 
              href="/reservar" 
              className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Reservar Agora
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Viva o Luxo em Capitólio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Mansões exclusivas à beira da represa com experiências inesquecíveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#casas" 
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
            >
              Ver Casas
            </Link>
            <Link 
              href="/#servicos" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Casas Section */}
      <section id="casas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nossas Propriedades
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha entre nossas mansões exclusivas com vista para a represa
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Casa 1 - Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg">Imagem em breve</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Casa Premium 1</h3>
                <p className="text-gray-600 mb-4">5 quartos • 6 banheiros • 12 hóspedes</p>
                <p className="text-gray-700 mb-4">
                  Mansão à beira da represa com deck exclusivo e vista panorâmica.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-900">R$ 2.500</span>
                  <span className="text-gray-600">/noite</span>
                </div>
                <Link 
                  href="/propriedades/casa-1" 
                  className="mt-4 block w-full text-center bg-blue-900 text-white py-3 rounded-full hover:bg-blue-800 transition"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>

            {/* Casa 2 - Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-lg">Imagem em breve</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Casa Premium 2</h3>
                <p className="text-gray-600 mb-4">4 quartos • 5 banheiros • 10 hóspedes</p>
                <p className="text-gray-700 mb-4">
                  Casa moderna com piscina aquecida e acesso direto ao lago.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-900">R$ 2.200</span>
                  <span className="text-gray-600">/noite</span>
                </div>
                <Link 
                  href="/propriedades/casa-2" 
                  className="mt-4 block w-full text-center bg-blue-900 text-white py-3 rounded-full hover:bg-blue-800 transition"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>

            {/* Em breve */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-dashed border-gray-300">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-gray-400 text-4xl mb-2 block">+</span>
                  <span className="text-gray-600">Em breve</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-400">Mais propriedades</h3>
                <p className="text-gray-500">
                  Estamos expandindo nossa seleção exclusiva de mansões em Capitólio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Serviços de Concierge
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Aproveite experiências exclusivas durante sua estadia
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Serviço 1 */}
            <div className="text-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-900 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Passeio de Lancha</h3>
              <p className="text-gray-600 mb-4">
                Explore os cânions e praias da represa com lancha privativa
              </p>
              <span className="text-blue-900 font-semibold">A partir de R$ 800/hora</span>
            </div>

            {/* Serviço 2 */}
            <div className="text-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-900 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏄</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Jet Ski</h3>
              <p className="text-gray-600 mb-4">
                Adrenalina e diversão nas águas cristalinas de Capitólio
              </p>
              <span className="text-blue-900 font-semibold">A partir de R$ 400/hora</span>
            </div>

            {/* Serviço 3 */}
            <div className="text-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-900 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Chef</h3>
              <p className="text-gray-600 mb-4">
                Chef particular para preparar refeições gourmet na casa
              </p>
              <span className="text-blue-900 font-semibold">A partir de R$ 1.200/dia</span>
            </div>

            {/* Serviço 4 */}
            <div className="text-center p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-900 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Transfer</h3>
              <p className="text-gray-600 mb-4">
                Transporte confortável do aeroporto até sua mansão
              </p>
              <span className="text-blue-900 font-semibold">Sob consulta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Estamos aqui para tornar sua estadia perfeita
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Formulário */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-800 transition font-semibold"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Info de Contato */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">
                    Atendimento rápido via WhatsApp com nossa IA
                  </p>
                  <a 
                    href="https://wa.me/5500000000000" 
                    target="_blank"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
                  >
                    <span className="mr-2">💬</span>
                    Chamar no WhatsApp
                  </a>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Email</h3>
                  <p className="text-gray-600">
                    contato@capitoliopremium.com
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Domingo: 8h às 22h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Capitólio Premium</h3>
              <p className="text-blue-200">
                Experiências de luxo em Capitólio, Minas Gerais
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/#casas" className="text-blue-200 hover:text-white">Casas</Link></li>
                <li><Link href="/#servicos" className="text-blue-200 hover:text-white">Serviços</Link></li>
                <li><Link href="/#contato" className="text-blue-200 hover:text-white">Contato</Link></li>
                <li><Link href="/admin" className="text-blue-200 hover:text-white">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/termos" className="text-blue-200 hover:text-white">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="text-blue-200 hover:text-white">Privacidade</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>&copy; 2026 Capitólio Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
