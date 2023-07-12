import { prisma } from './prisma';

async function main() {
  await prisma.trip.createMany({
    data: [
      {
        name: 'Hotel Palace',
        description:
          'O Hotel Palace é uma joia da hospitalidade, um símbolo de luxo e elegância. Localizado em uma localização privilegiada, o hotel oferece aos hóspedes uma experiência verdadeiramente magnífica. Com quartos deslumbrantes, decoração sofisticada e vistas panorâmicas deslumbrantes, o Palace cativa seus visitantes desde o momento em que entram. Os serviços impecáveis ​​e a atenção aos detalhes garantem uma estadia inesquecível, enquanto os restaurantes requintados e bares elegantes satisfazem os paladares mais exigentes. Com uma ampla gama de instalações de lazer, incluindo spa, academia e piscinas deslumbrantes, o Hotel Palace oferece uma experiência de luxo incomparável para aqueles que buscam o ápice da hospitalidade e conforto.',
        startDate: new Date('2023-07-03'),
        endDate: new Date('2023-07-30'),
        location: 'New York, Estados Unidos',
        countryCode: 'US',
        coverImage:
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        imageUrl:
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        pricePerDay: 350,
        highlights: 'Café da manhã incluso',

        recommended: true,
        maxGuest: 5,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
