import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Cria as 2 propriedades iniciais
  const p1 = await prisma.property.upsert({
    where: { slug: 'rancho-beira-represa' },
    update: {},
    create: {
      id: 'rancho-beira-represa',
      name: 'Rancho à Beira da Represa',
      slug: 'rancho-beira-represa',
      shortDesc: 'Mansão exclusiva com acesso direto à represa',
      description: 'O Rancho à Beira da Represa é uma mansão exclusiva que oferece a melhor experiência em Capitólio. Com acesso direto à água, deck privativo e vista panorâmica dos cânions, esta propriedade é perfeita para quem busca luxo e tranquilidade.',
      address: 'Capitólio, MG',
      city: 'Capitólio',
      state: 'MG',
      bedrooms: 5,
      bathrooms: 6,
      maxGuests: 12,
      area: 450,
      pricePerNight: 2500,
      cleaningFee: 500,
      amenities: [
        'Acesso direto à represa',
        'Marina privativa',
        'Piscina aquecida',
        'Deck exclusivo',
        'Churrasqueira',
        'Cozinha gourmet',
        'Wi-Fi',
        'TV a cabo',
        'Ar condicionado',
        'Roupa de cama e banho',
        'Estacionamento privativo',
        'Vista panorâmica dos cânions'
      ],
      images: [
        'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      ],
      featured: true,
      active: true,
    }
  })

  const p2 = await prisma.property.upsert({
    where: { slug: 'casa-premium-capitolio' },
    update: {},
    create: {
      id: 'casa-proxima',
      name: 'Casa Premium Capitólio',
      slug: 'casa-premium-capitolio',
      shortDesc: 'Casa moderna próxima à represa com todo conforto',
      description: 'A Casa Premium Capitólio é uma propriedade moderna e confortável, localizada a poucos minutos da represa. Com piscina aquecida, área gourmet completa e decoração sofisticada, é ideal para grupos que buscam conforto e lazer.',
      address: 'Capitólio, MG',
      city: 'Capitólio',
      state: 'MG',
      bedrooms: 4,
      bathrooms: 5,
      maxGuests: 10,
      area: 350,
      pricePerNight: 2200,
      cleaningFee: 400,
      amenities: [
        'Piscina aquecida',
        'Área gourmet completa',
        'Churrasqueira',
        'Wi-Fi de alta velocidade',
        'Ar condicionado',
        'TV a cabo',
        'Roupa de cama e banho',
        'Estacionamento privativo'
      ],
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      ],
      featured: true,
      active: true,
    }
  })

  console.log(`✅ Propriedade criada/atualizada: ${p1.name}`)
  console.log(`✅ Propriedade criada/atualizada: ${p2.name}`)
  console.log('🎉 Seed concluído!')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
