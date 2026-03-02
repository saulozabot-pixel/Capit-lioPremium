// Dados das propriedades - CapitÃ³lio Premium

export const properties = [
  {
    id: "rancho-beira-represa",
    name: "Rancho Ã  Beira da Represa",
    slug: "rancho-beira-represa",
    shortDesc: "MansÃ£o exclusiva com acesso direto Ã  represa",
    description: `
      O Rancho Ã  Beira da Represa Ã© uma mansÃ£o exclusiva que oferece a melhor experiÃªncia 
      em CapitÃ³lio. Com acesso direto Ã  Ã¡gua, deck privativo e vista panorÃ¢mica dos cÃ¢nions, 
      esta propriedade Ã© perfeita para quem busca luxo e tranquilidade.
    `,
    address: "CapitÃ³lio, MG",
    city: "CapitÃ³lio",
    state: "MG",
    bedrooms: 5,
    bathrooms: 6,
    maxGuests: 12,
    area: 450,
    pricePerNight: 2500,
    cleaningFee: 500,
    amenities: [
      "Acesso direto Ã  represa",
      "Marina privativa",
      "Piscina aquecida",
      "Deck exclusivo",
      "Churrasqueira",
      "Cozinha gourmet",
      "Wi-Fi",
      "TV a cabo",
      "Ar condicionado",
      "Roupa de cama e banho",
      "Estacionamento privativo",
      "Vista panorÃ¢mica dos cÃ¢nions"
    ],
    images: [
      "/images/rancho-beira-represa/exterior-01.jpg",
      "/images/rancho-beira-represa/vista-represa-01.jpg",
      "/images/rancho-beira-represa/deck-01.jpg",
      "/images/rancho-beira-represa/piscina-01.jpg",
    ],
    googleDriveLinks: [
      "https://drive.google.com/drive/folders/1sU4OfTOzsMBaneJ1mZLM7CPpKSW9Ie2A",
      "https://drive.google.com/drive/folders/16yBg2P1VPXMyNIJNBJuRbfhdCGUg0XDx"
    ],
    featured: true,
    active: true,
  },
  {
    id: "casa-proxima",
    name: "Casa Premium CapitÃ³lio",
    slug: "casa-premium-capitolio",
    shortDesc: "Casa moderna prÃ³xima Ã  represa com todo conforto",
    description: `
      A Casa Premium CapitÃ³lio Ã© uma propriedade moderna e confortÃ¡vel, localizada 
      a poucos minutos da represa.
    `,
    address: "CapitÃ³lio, MG",
    city: "CapitÃ³lio",
    state: "MG",
    bedrooms: 4,
    bathrooms: 5,
    maxGuests: 10,
    area: 350,
    pricePerNight: 2200,
    cleaningFee: 400,
    amenities: [
      "Piscina aquecida",
      "Ãrea gourmet completa",
      "Churrasqueira",
      "Wi-Fi de alta velocidade",
    ],
    images: [
      "/images/casa-proxima/exterior-01.jpg",
      "/images/casa-proxima/piscina-01.jpg",
    ],
    googleDriveLinks: [
      "https://drive.google.com/drive/folders/16yBg2P1VPXMyNIJNBJuRbfhdCGUg0XDx"
    ],
    featured: true,
    active: true,
  }
];

export const getPropertyBySlug = (slug: string) => {
  return properties.find(p => p.slug === slug);
};

export const getFeaturedProperties = () => {
  return properties.filter(p => p.featured && p.active);
};
