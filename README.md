# CapitÃ³lio Premium

Site de hospedagem de luxo em CapitÃ³lio/MG

## ðŸ  Sobre o Projeto

Plataforma para reserva de mansÃµes de luxo Ã  beira da represa de CapitÃ³lio, com serviÃ§os de concierge incluindo passeios de lancha, jet ski, personal chef e muito mais.

## ðŸš€ Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma ORM**
- **PostgreSQL**

## ðŸ“‹ Funcionalidades

### MVP (Atual)
- âœ… Vitrine de propriedades
- âœ… Detalhes de cada propriedade
- âœ… FormulÃ¡rio de reservas
- âœ… Dashboard administrativo
- âœ… CatÃ¡logo de serviÃ§os
- ðŸ”„ IntegraÃ§Ã£o WhatsApp (Em breve)
- ðŸ”„ Gateway de pagamento (Em breve)

### Futuras
- Sistema de autenticaÃ§Ã£o completo
- Painel de gestÃ£o de hÃ³spedes
- IntegraÃ§Ã£o com Evolution API
- AutomaÃ§Ã£o com n8n
- Sistema de pagamentos (Stripe/Mercado Pago)
- CalendÃ¡rio de disponibilidade
- Sistema de avaliaÃ§Ãµes

## ðŸ—ï¸ Estrutura do Projeto

\\\
capitolio-premium/
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ page.tsx              # PÃ¡gina inicial
â”‚   â”œâ”€â”€ reservar/             # Sistema de reservas
â”‚   â”œâ”€â”€ propriedades/[slug]/  # Detalhes das propriedades
â”‚   â””â”€â”€ admin/                # Dashboard administrativo
â”œâ”€â”€ components/               # Componentes reutilizÃ¡veis
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ prisma.ts            # Cliente Prisma
â”‚   â”œâ”€â”€ utils.ts             # FunÃ§Ãµes utilitÃ¡rias
â”‚   â””â”€â”€ properties-data.ts   # Dados das propriedades
â”œâ”€â”€ prisma/
â”‚   â””â”€â”€ schema.prisma        # Schema do banco de dados
â””â”€â”€ public/
    â””â”€â”€ images/              # Imagens das propriedades
\\\

## ðŸ› ï¸ ConfiguraÃ§Ã£o

### PrÃ©-requisitos
- Node.js 18+
- PostgreSQL
- npm ou yarn

### InstalaÃ§Ã£o

1. Clone o repositÃ³rio:
\\\ash
git clone <repo-url>
cd capitolio-premium
\\\

2. Instale as dependÃªncias:
\\\ash
npm install
\\\

3. Configure as variÃ¡veis de ambiente:
Copie \.env.local\ e ajuste as configuraÃ§Ãµes

4. Configure o banco de dados:
\\\ash
npx prisma migrate dev
npx prisma generate
\\\

5. Inicie o servidor de desenvolvimento:
\\\ash
npm run dev
\\\

Acesse: http://localhost:3000

## ðŸ“¦ Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte o repositÃ³rio na Vercel
3. Configure as variÃ¡veis de ambiente
4. Deploy automÃ¡tico!

## ðŸ“¸ Imagens

As imagens das propriedades estÃ£o disponÃ­veis no Google Drive:
- [CapitÃ³lio Premium - Geral](https://drive.google.com/drive/folders/1sU4OfTOzsMBaneJ1mZLM7CPpKSW9Ie2A)
- [Rancho Ã  Beira da Represa](https://drive.google.com/drive/folders/16yBg2P1VPXMyNIJNBJuRbfhdCGUg0XDx)

Organize as imagens em:
- \public/images/rancho-beira-represa/\
- \public/images/casa-proxima/\
- \public/images/geral/\

## ðŸ” IntegraÃ§Ãµes Futuras

### WhatsApp (Evolution API + n8n)
- Atendimento automatizado
- NotificaÃ§Ãµes de reservas
- ConfirmaÃ§Ãµes automÃ¡ticas

### Gateway de Pagamento
- Stripe
- Mercado Pago
- Pix

## ðŸ“ LicenÃ§a

Â© 2026 CapitÃ³lio Premium. Todos os direitos reservados.

## ðŸ‘¥ Contato

Email: contato@capitoliopremium.com
