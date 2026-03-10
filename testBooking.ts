import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin Test',
      email: 'test@admin.com',
      password: 'senha_test',
      role: 'admin'
    }
  });

  const property = await prisma.property.findFirst();

  if (property) {
    const booking = await prisma.booking.create({
      data: {
        propertyId: property.id,
        userId: adminUser.id,
        checkIn: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days from now
        checkOut: new Date(new Date().setDate(new Date().getDate() + 5)), // 5 days from now
        guests: 2,
        totalPrice: 1000,
        status: 'confirmed',
        guestName: 'John Doe',
        guestEmail: 'john@doe.com',
        guestPhone: '11999999999'
      }
    });
    console.log('Booking created:', booking.id);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
