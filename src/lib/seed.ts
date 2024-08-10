import { prisma } from "../lib/prisma";

async function main() {
  await prisma.trip.createMany({
    data: [
      {
        name: "Royal Oasis",
        description:
          "A Royal Oasis é um hotel de luxo exclusivo que combina uma arquitetura imponente, decoração refinada e serviços de alta qualidade para proporcionar aos seus hóspedes uma experiência inigualável. Com quartos espaçosos, restaurantes gourmet, instalações de bem-estar e um serviço impecável, este refúgio de tranquilidade e elegância é o local perfeito para aqueles que buscam o melhor em conforto e sofisticação.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Florença, Itália",
        countryCode: "IT",
        coverImage:
          "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Azure Haven Retreat",
        description:
          "O Azure Haven Retreat é um oásis de luxo localizado em uma ilha privativa, onde as águas cristalinas do oceano encontram praias intocadas de areia branca. Com uma arquitetura contemporânea e elegante, este hotel exclusivo oferece aos seus hóspedes uma experiência de refúgio tranquilo e sofisticado. Os quartos e suítes espaçosos e meticulosamente decorados proporcionam um ambiente sereno, enquanto os restaurantes de classe mundial oferecem uma gastronomia requintada com ingredientes frescos e sabores internacionais. Além disso, o Azure Haven Retreat oferece uma variedade de atividades de lazer, como mergulho, iatismo e relaxamento em um spa de luxo, garantindo uma experiência inesquecível de luxo à beira-mar.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Lago Sereno, Suíça",
        countryCode: "CH",
        coverImage:
          "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 600,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Palazzo Sereno",
        description:
          "O Palazzo Sereno é um hotel de luxo localizado em uma cidade histórica da Europa. Com uma arquitetura deslumbrante e um ambiente elegante, o hotel oferece aos hóspedes uma experiência exclusiva de conforto e sofisticação. Os quartos exquisitamente decorados proporcionam um refúgio tranquilo, enquanto os serviços de alta qualidade garantem uma estadia inesquecível. Com uma localização privilegiada, o Palazzo Sereno permite que os hóspedes explorem as belezas da cidade e vivenciem a cultura local com facilidade. Uma estadia neste hotel é uma verdadeira experiência de luxo e requinte.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Madrid, Espanha",
        countryCode: "ES",
        coverImage:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Mountain Peak Lodge",
        description:
          "O Mountain Haven Retreat é um hotel boutique de luxo localizado em uma região montanhosa serena, cercada por paisagens deslumbrantes e tranquilidade. Com quartos elegantemente decorados, o hotel oferece aos hóspedes uma estadia confortável e relaxante, em meio à natureza intocada. Os hóspedes podem desfrutar de refeições gourmet preparadas com ingredientes frescos e locais no restaurante do hotel, enquanto apreciam vistas deslumbrantes das montanhas. Com acesso a trilhas para caminhadas, atividades ao ar livre e um spa relaxante, o Mountain Haven Retreat proporciona aos seus hóspedes uma experiência de luxo em um refúgio natural e encantador.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Montreal, Canadá",
        countryCode: "CA",
        coverImage:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 700,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Hotel Palace",
        description:
          "O Hotel Palace é uma joia da hospitalidade, um símbolo de luxo e elegância. Localizado em uma localização privilegiada, o hotel oferece aos hóspedes uma experiência verdadeiramente magnífica. Com quartos deslumbrantes, decoração sofisticada e vistas panorâmicas deslumbrantes, o Palace cativa seus visitantes desde o momento em que entram. Os serviços impecáveis ​​e a atenção aos detalhes garantem uma estadia inesquecível, enquanto os restaurantes requintados e bares elegantes satisfazem os paladares mais exigentes. Com uma ampla gama de instalações de lazer, incluindo spa, academia e piscinas deslumbrantes, o Hotel Palace oferece uma experiência de luxo incomparável para aqueles que buscam o ápice da hospitalidade e conforto.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "New York, Estados Unidos",
        countryCode: "US",
        coverImage:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 350,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Hotel Aurora",
        description:
          "O Hotel Aurora é um refúgio encantador situado em meio às majestosas montanhas. Com seus jardins exuberantes e uma arquitetura elegante, o Aurora oferece quartos espaçosos e bem decorados, gastronomia premiada, um spa luxuoso e uma variedade de instalações de lazer. É o lugar perfeito para os viajantes que buscam uma escapada relaxante e rejuvenescedora, proporcionando uma experiência memorável em um cenário deslumbrante.",
        locationDescription:
          "Nossa pitoresca localização oferece aos nossos hóspedes uma experiência única em um cenário natural deslumbrante, com uma rica história e uma atmosfera acolhedora.Situada nas encostas das montanhas italianas, Vallarsa é um verdadeiro refúgio para os amantes da natureza e para aqueles que desejam escapar da agitação das cidades maiores. Com paisagens magníficas, colinas verdejantes e montanhas imponentes, esta cidade encanta visitantes de todas as idades.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Vallarsa, Itália",
        countryCode: "IT",
        coverImage:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/55862064.jpg?k=0f7cf0ec02739f3bba4aea5120e6a9a91655dc708593f2a46a7b9bff4a6dfd35&o=&hp=1",
        imagesUrl: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/120338824.jpg?k=720260c6ac231ebdcdde36fc6810a387796f6247830dcaee148ab5e7a6e84478&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/451590689.jpg?k=7fc38bbefc99d675868c1c013f01670e727494bb20fa27cfbec517562cd2536e&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/86317258.jpg?k=d7884a71a0179ead350f43433c9aa1ec26507c6ab46cfcb3de81ab7d1d9d0af5&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/120338824.jpg?k=720260c6ac231ebdcdde36fc6810a387796f6247830dcaee148ab5e7a6e84478&o=&hp=1",
        ],
        pricePerDay: 250,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Bar",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Wyndham New Yorker",
        description:
          "O Wyndham New Yorker é um hotel de 4 estrelas localizado em Nova York, com uma localização central privilegiada. Com 1050 quartos elegantes, oferece uma variedade de comodidades para garantir uma estadia confortável e conveniente.",
        locationDescription:
          "O Wyndham New Yorker é um icônico hotel localizado em Nova York, situado em um edifício de estilo Art Déco construído em 1930. Com uma localização privilegiada, o hotel está a apenas dez minutos de caminhada da Times Square. O hotel oferece 1050 quartos divididos em 17 categorias, alguns dos quais proporcionam vistas deslumbrantes do rio Hudson ou do Empire State Building. Todos os quartos estão equipados com TV LCD com canais a cabo, ar-condicionado, camas queen-size ou maiores e Wi-Fi. A localização do hotel é excelente, estando a poucos passos do Madison Square Garden e a apenas 15 minutos de caminhada do High Line, um famoso parque suspenso na cidade de Nova York.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "New York, Estados Unidos",
        countryCode: "US",
        coverImage:
          "https://utfs.io/f/12d74660-4ef6-495f-af88-2a074836d94a-1xn.webp",
        imagesUrl: [
          "https://utfs.io/f/e2dbd3bd-fdcf-42f3-ad9f-4c256a058d60-1o07.webp",
          "https://utfs.io/f/d7ba4074-dc9f-456a-bb33-9641c4f9c9e3-1fo5q.webp",
          "https://utfs.io/f/be10077d-fcef-4d99-bf0b-b37cbd657602-1fo5s.webp",
          "https://utfs.io/f/a9e38ec6-7a94-477c-a622-08c13627b1e3-1fo5r.webp",
        ],
        pricePerDay: 350,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Park MGM",
        description:
          "A Park MGM é um hotel de luxo exclusivo que combina uma arquitetura imponente, decoração refinada e serviços de alta qualidade para proporcionar aos seus hóspedes uma experiência inigualável. Com quartos espaçosos, restaurantes gourmet, instalações de bem-estar e um serviço impecável, este refúgio de tranquilidade e elegância é o local perfeito para aqueles que buscam o melhor em conforto e sofisticação.",
        locationDescription:
          "Localizado na famosa Las Vegas Strip, ao lado da T-Mobile Arena, o Park MGM Las Vegas é um resort contemporâneo que oferece uma variedade de comodidades e entretenimento. Com capacidade para 20.000 pessoas, a T-Mobile Arena abriga eventos esportivos e shows de renome internacional. O resort possui um cassino emocionante onde os hóspedes podem desfrutar de apostas esportivas, caça-níqueis e diversos jogos de mesa. Além disso, o Park MGM possui seu próprio anfiteatro, o Dolby Live at Park MGM, com 5.200 assentos, que recebe performances de músicos famosos.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Las Vegas, Estados Unidos",
        countryCode: "US",
        coverImage:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330800463.jpg?k=85d26772ca04588f7be34b5cd5cabf05bf1c109ff564b995da15ae71f24a8d21&o=&hp=1",
        imagesUrl: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193380020.jpg?k=b469c878392420256402c3d5b485c9176a2a0bd2f11cd656c0c2da858feb6dcc&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200939141.jpg?k=7cab0256583f60f224fd204a867cd36edae455482c7fd936fdfc7312831cad8c&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295710118.jpg?k=f77ae4a6bc9e5581a217a6278ab16e0840602dac2a0234e4aa16d6e92f13f078&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193380011.jpg?k=9d611084011d7217b05f7d669e5cdaee9e6cb80aafe28b6f95927fbb77a4523c&o=&hp=1",
        ],
        pricePerDay: 400,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Hotel Magnifique",
        description:
          "O Hotel Magnifique é uma joia encantadora situada nas belas paisagens da França. Com sua arquitetura elegante e atmosfera sofisticada, o Magnifique oferece quartos luxuosos e bem decorados, uma culinária requintada, um spa relaxante e uma variedade de instalações de lazer. É o lugar perfeito para os viajantes que buscam uma experiência autêntica na encantadora França.",
        locationDescription:
          "Localizado em uma região pitoresca da França, o Hotel Magnifique oferece uma experiência única em meio a paisagens deslumbrantes, rica cultura e história fascinante. Com seus encantadores vilarejos, campos verdejantes e vinícolas renomadas, esta região cativa os visitantes com seu charme e autenticidade.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Provence, França",
        countryCode: "FR",
        coverImage:
          "https://utfs.io/f/809a6602-1e38-4a33-99ce-e2d91066f819-2j0.jpg",
        imagesUrl: [
          "https://utfs.io/f/69dea157-abe4-4fd7-be74-c1f3e7286904-1vidt.jpg",
          "https://utfs.io/f/ad10abe8-cb5c-4922-a06c-cb4e6b477ffe-1vidr.jpg",
          "https://utfs.io/f/6b19e297-6b3a-415e-bbf3-9c602bc962bd-1vidq.jpg",
          "https://utfs.io/f/8b2d7fdc-a141-46ec-b4e4-357eff59cb29-1vids.jpg",
        ],
        pricePerDay: 600,
        highlights: [
          "Vista panorâmica",
          "Gastronomia requintada",
          "Spa relaxante",
          "Atividades ao ar livre",
          "Degustação de vinhos",
          "Serviço de concierge",
        ],
        recommended: true,
        maxGuests: 4,
      },
      {
        name: "Hotel Belle Vue",
        description:
          "O Hotel Belle Vue é um refúgio sofisticado situado em uma cidade vibrante da Argentina. Com sua arquitetura clássica e ambiente elegante, o Belle Vue oferece quartos luxuosos e bem equipados, culinária gourmet, um spa relaxante e uma variedade de instalações de lazer. É o local perfeito para os viajantes que desejam explorar a rica cultura e a emocionante cena gastronômica da Argentina.",
        locationDescription:
          "Localizado em uma cidade charmosa da Argentina, o Hotel Belle Vue oferece uma base ideal para explorar as atrações culturais, as delícias gastronômicas e a vibrante atmosfera local. Com seu patrimônio histórico, praças encantadoras e uma cena artística em crescimento, esta cidade oferece uma experiência única para os visitantes.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Buenos Aires, Argentina",
        countryCode: "AR",
        coverImage:
          "https://utfs.io/f/0f9c3db8-41a7-469a-825b-30e94f8a1075-2fn.jpg",
        imagesUrl: [
          "https://utfs.io/f/4d3196e8-ff08-4830-a7b4-6219f2951bc5-1t0np.jpg",
          "https://utfs.io/f/b6cd0410-3c88-4eb5-afb1-93e4cfbfb2cb-1t0nq.jpg",
          "https://utfs.io/f/79620e52-952a-42db-9bda-749ae7c1038a-1t0nr.jpg",
          "https://utfs.io/f/1e8cf68e-31d1-4ef9-8757-b431c70bd983-1t0ns.jpg",
        ],
        pricePerDay: 200,
        highlights: [
          "Localização central",
          "Gastronomia gourmet",
          "Spa relaxante",
          "Exploração cultural",
          "Passeios turísticos",
          "Serviço de quarto 24 horas",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Hotel Oasis",
        description:
          "O Hotel Oasis é um luxuoso refúgio situado em meio ao esplendor da Arábia. Com sua arquitetura impressionante e ambiente sofisticado, o Oasis oferece quartos elegantes e bem equipados, uma culinária refinada, um spa relaxante e uma variedade de comodidades exclusivas. É o local perfeito para os viajantes que desejam experimentar o luxo e a hospitalidade da Arábia.",
        locationDescription:
          "Localizado em uma cidade encantadora da Arábia, o Hotel Oasis oferece uma localização exclusiva, com vistas deslumbrantes do deserto e uma atmosfera envolvente. Os visitantes podem desfrutar de passeios de camelo, experiências culturais autênticas, praias paradisíacas e uma rica herança histórica, proporcionando uma estadia verdadeiramente memorável.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Dubai, Emirados Árabes Unidos",
        countryCode: "AE",
        coverImage:
          "https://utfs.io/f/ba0980e4-cb1b-4221-ab97-54d78b9e49de-25kx.jpg",
        imagesUrl: [
          "https://utfs.io/f/60f2fedb-1266-44a6-8420-99053be69ecb-1lj0jp.jpg",
          "https://utfs.io/f/d5ebd06d-6729-4efc-bdcb-2285ec97bb6b-1lj0jo.jpg",
          "https://utfs.io/f/51259b74-5f6a-4a58-a4a7-520acb983561-1lj0jq.jpg",
          "https://utfs.io/f/b6212fe3-d904-4d56-b2d0-472afa58a891-1lj0jn.jpg",
        ],
        pricePerDay: 500,
        highlights: [
          "Vista deslumbrante do deserto",
          "Culinária refinada",
          "Spa luxuoso",
          "Praias paradisíacas",
          "Experiências culturais autênticas",
          "Serviço de concierge 24 horas",
        ],
        recommended: true,
        maxGuests: 6,
      },
      {
        name: "Hotel Rus",
        description:
          "O Hotel Rus é um estabelecimento moderno localizado na movimentada cidade de Moscou, na Rússia. Com sua arquitetura contemporânea e instalações elegantes, o Rus oferece quartos confortáveis e bem equipados, uma culinária variada, um centro de fitness e uma localização conveniente para explorar as atrações da cidade. É o local perfeito para os viajantes que desejam experimentar a vibrante cultura russa.",
        locationDescription:
          "Situado no coração de Moscou, o Hotel Rus oferece fácil acesso às famosas atrações turísticas, como a Praça Vermelha, o Kremlin e a Catedral de São Basílio. Além disso, os visitantes podem explorar as lojas elegantes, os restaurantes animados e a rica história e cultura da cidade, proporcionando uma experiência emocionante e enriquecedora.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Moscou, Rússia",
        countryCode: "RU",
        coverImage:
          "https://utfs.io/f/bca2ff54-ac82-47f0-9e4b-8fcd1ac8800d-2oy.jpg",
        imagesUrl: [
          "https://utfs.io/f/36098a4b-595b-44d7-8b20-6a75ae8d5479-1zx2e.jpg",
          "https://utfs.io/f/4b044550-441f-4a62-8006-65d745f63ba9-1zx2d.jpg",
          "https://utfs.io/f/494727bb-038d-4369-a15c-f9255a8ad733-1zx2f.jpg",
          "https://utfs.io/f/168d3884-91d0-46da-8bc9-7b8d8a6ef937-1zx2c.jpg",
        ],
        pricePerDay: 180,
        highlights: [
          "Localização central",
          "Culinária variada",
          "Centro de fitness",
          "Exploração cultural",
          "Lojas e restaurantes próximos",
          "Serviço de quarto",
        ],
        recommended: true,
        maxGuests: 2,
      },
      {
        name: "Casa de campo",
        description:
          "Este confortável chalé está localizado nas alturas de Besançon, nos limites da floresta de Bregille. Você está a 20 minutos a pé do centro da cidade, 5 minutos de carro). Ambiente muito natural, tranquilo em um alojamento funcional renovado com coração.Um espaço de estacionamento (gratuito) é adjacente ao chalé.O chalé é muito bem isolado (fônico e térmico), é muito frio no verão (sem necessidade de ar condicionado) e bem aquecido no inverno. Trilhas para caminhadas e belas vistas estão nas proximidades.",
        locationDescription:
          "Bregille está localizada em uma das sete colinas ao redor de Besancon. Este bairro popular é conhecido por seu acesso direto à natureza, suas inúmeras caminhadas e seu curso de saúde. O Grande Deserto e sua característica geológica, bem como o forte de Bregille, oferecem um cenário ideal para caminhadas em família, kitesurf ou admirar a vista esplêndida sobre Besançon.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Besançon, França",
        countryCode: "FR",
        coverImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-53459091/original/c0f53145-c095-4fbe-9348-99eeb186f1b6.jpeg?im_w=960",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-53459091/original/b90c5de0-7ba4-426a-a815-d0206ccc5af6.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-53459091/original/c800a702-f478-40a7-9118-e76aba5f82c0.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-53459091/original/e45181fd-5807-478c-9f4d-5d3e3a4c4aca.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-53459091/original/bc6a421b-284c-4277-a3e9-2f34bf0f94d0.jpeg?im_w=1200",
        ],
        pricePerDay: 600,
        highlights: [
          "Café da manhã incluso",
          "Permitido animais",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista para o horizonte da cidade",
          "Máquina de lavar na acomodação por Gratuito",
        ],
        recommended: true,
        maxGuests: 4,
      },
      {
        name: "Chalé",
        description:
          "Bem vindo ao chalé aconchegante a apenas 7 minutos de carro do capivari, uma cabana igual aquelas de filmes para você passar momentos mágicos!  estamos localizados a 3,7km do capivari no sentido do horto florestal.  pra chegar na cabana, temos um pequeno trecho de estrada terra de cerca de 700 mts.",
        locationDescription:
          'Campos do Jordão é uma encantadora cidade localizada no estado de São Paulo, Brasil. Conhecida como a "Suíça Brasileira", a cidade atrai visitantes de todo o país e do mundo com seu clima ameno, belas paisagens montanhosas e arquitetura europeia. Se você está em busca de uma experiência única e encantadora, Campos do Jordão é o lugar perfeito para uma escapada romântica, uma viagem em família ou um retiro relaxante. ',
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Campos do Jordão, São Paulo, Brasil",
        countryCode: "BR",
        coverImage:
          "https://utfs.io/f/9473867a-4897-488d-9ed1-fbf0f9e9b945-2fy.jpg",
        imagesUrl: [
          "https://utfs.io/f/49b0411b-8d02-43c9-b9f2-8c00870cfedb-1t8te.jpg",
          "https://utfs.io/f/006becce-7235-43b1-91e7-62bf35c84747-1t8td.jpg",
          "https://utfs.io/f/e1fbdea9-0be4-41c3-b163-24c0750fb01a-1t8tf.jpg",
          "https://utfs.io/f/1c7272a9-8ceb-4afb-9d64-996411359bb4-1t8tc.jpg",
        ],
        pricePerDay: 600,
        highlights: [
          "Café da manhã incluso",
          "TV",
          "Lareira interna",
          "Quintal",
          "Vista para as montanhas",
          "Secador de cabelo",
        ],
        recommended: true,
        maxGuests: 4,
      },
      {
        name: "Casarão na Fazenda",
        description:
          "Entre no embalo dos sons da natureza ao ficar neste lugar único. Um casarão centenário, com todos os detalhes mantidos na restauração que prezou pela qualidade e conforto. A surpreendente Casona está na Fazenda Estância Piabas, um paraíso inesquecível, localizado a apenas 3 km do centro da aconchegante Buenópolis. A Fazenda tem cachoeira, rio e lago privativos. A casa possui extensa área verde, banheiros integrados com a natureza, fogão a lenha e toda a estrutura para dias inesquecíveis!",
        locationDescription: "",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Buenópolis,Brasil",
        countryCode: "BR",
        coverImage:
          "https://a0.muscache.com/im/pictures/962cc444-2cd3-4171-92c9-2ef3c44b1491.jpg?im_w=960",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/6c08764d-bf97-4ff8-b0e0-3639cea0e57c.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/40056a11-1db3-4d56-8144-21c6b1552c5f.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/905bda3f-b816-4eda-a347-ff8e57038189.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/6e217ad6-7a07-4f01-8086-f2f0ed7231d9.jpg?im_w=1200",
        ],
        pricePerDay: 400,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Porto Real Resort",
        description:
          "O Porto Real Resort é um hotel boutique de luxo, cercada por paisagens deslumbrantes e tranquilidade. Com quartos elegantemente decorados, o hotel oferece aos hóspedes uma estadia confortável e relaxante, em meio à natureza intocada. Os hóspedes podem desfrutar de refeições gourmet preparadas com ingredientes frescos e locais no restaurante do hotel, enquanto apreciam vistas deslumbrantes das montanhas. Com acesso a trilhas para caminhadas, atividades ao ar livre e um spa relaxante, o Mountain Haven Retreat proporciona aos seus hóspedes uma experiência de luxo em um refúgio natural e encantador.",
        locationDescription:
          "A localização do Porto Real Resort é verdadeiramente privilegiada. Rodeado por uma natureza deslumbrante e uma atmosfera tranquila, o hotel oferece aos seus hóspedes uma experiência única de refúgio na natureza. Localizado em meio às montanhas, os arredores do Mountain Peak Lodge oferecem vistas panorâmicas de tirar o fôlego. Os hóspedes têm acesso direto a trilhas para caminhadas deslumbrantes, permitindo que explorem as belezas naturais da região.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Montreal, Canadá",
        countryCode: "CA",
        coverImage:
          "https://a0.muscache.com/im/pictures/0ce3f923-4f5b-4763-8a80-48b698579591.jpg?im_w=960",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/50fb5751-5afb-462b-9f39-1ff7e8c7593c.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/2c88f428-d346-4fa8-b4a2-407a835b1a79.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/b3361f33-6d75-48c7-ad43-c1feaf8345ad.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/57baadba-2b0e-456c-a014-e736a657b541.jpg?im_w=1200",
        ],
        pricePerDay: 700,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Encanto da Serra",
        description:
          "O Recanto Sereno é uma pousada encantadora localizada em uma pequena cidade costeira, no litoral sul do Brasil. Com uma atmosfera acolhedora e familiar, a pousada oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são confortáveis e bem decorados, proporcionando um refúgio aconchegante. Os hóspedes podem desfrutar de um café da manhã delicioso, com opções caseiras e regionais, que é servido com carinho. Além disso, o Recanto Sereno está a uma curta caminhada da praia, permitindo que os hóspedes desfrutem de momentos de descanso e lazer à beira-mar. Com uma equipe atenciosa e simpática, o Recanto Sereno proporciona aos seus hóspedes uma estadia relaxante e memorável em um ambiente sereno no litoral do Brasil.",
        locationDescription:
          "A localização do Recanto Sereno é outro ponto forte. A pousada está a uma curta caminhada da praia, permitindo que os hóspedes desfrutem de momentos relaxantes e de lazer à beira-mar. A brisa marinha e a paisagem litorânea adicionam um toque especial à estadia. Se você está em busca de um refúgio tranquilo na costa brasileira, o Recanto Sereno é o lugar perfeito para uma estadia relaxante",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Oslo, Noruega",
        countryCode: "NO",
        coverImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-54003186/original/2d5b2623-794b-4a88-9e32-75d96278c2f8.jpeg?im_w=1200",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-54003186/original/69536f43-8e47-41c6-b8c0-4accddd588af.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-54003186/original/e9cf339c-33f8-4cb9-8f46-9d5c1d1b6d76.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-54003186/original/95e42389-2a85-4fe3-9a54-a1427c6bed08.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-54003186/original/ad6cbf7c-3c27-4cc2-ae8c-73f410072010.jpeg?im_w=1200",
        ],
        pricePerDay: 300,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Rancho Sereno",
        description:
          "O Rancho Sereno é uma fazenda encantadora situada em uma região rural tranquila. Com acomodações simples e acolhedoras, o rancho oferece aos visitantes uma experiência autêntica de vida no campo. Os hóspedes podem desfrutar de momentos de paz e tranquilidade em meio à natureza exuberante, aproveitando trilhas para caminhadas, passeios a cavalo e atividades ao ar livre.",
        locationDescription:
          "Localizado em meio à natureza exuberante, o Rancho Sereno é o refúgio perfeito para aqueles que buscam momentos de paz e tranquilidade. Os hóspedes têm a oportunidade de desfrutar de trilhas para caminhadas cênicas, explorar a região montanhosa e participar de atividades ao ar livre. Se você está em busca de uma experiência autêntica de vida no campo, o Rancho Sereno oferece a oportunidade de se reconectar com a natureza, relaxar e desfrutar de momentos de serenidade em uma região rural encantadora.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Amsterdam, Holanda",
        countryCode: "NL",
        coverImage:
          "https://a0.muscache.com/im/pictures/a297bfaf-3cea-47f7-a1dc-7563a4d54175.jpg?im_w=960",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/ec8903a4-a0f2-4f88-9529-276578617821.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/1b8d4356-53fd-40fb-a17c-73dc6c297a85.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/e8cafa3c-e752-4e2f-978c-edd4664f23f9.jpg?im_w=1200",
          "https://a0.muscache.com/im/pictures/6698b8a3-0f6b-4159-bd9d-3a6d270a4bd0.jpg?im_w=1200",
        ],
        pricePerDay: 100,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
      },
      {
        name: "Chalé Serenidade",
        description:
          "O Chalé Serenidade é um refúgio encantador situado em uma área montanhosa pitoresca. Com sua arquitetura charmosa e ambiente acolhedor, o chalé oferece aos hóspedes uma estadia tranquila e relaxante. Os quartos são aconchegantes e bem decorados, proporcionando um ambiente agradável para descansar e apreciar a beleza da natureza ao redor. Os hóspedes podem desfrutar de momentos de paz em frente à lareira ou explorar trilhas nas proximidades. Com sua localização isolada, o Chalé Serenidade é perfeito para aqueles que buscam uma escapada serena e acolhedora nas montanhas.",
        locationDescription:
          "Com sua localização isolada, o Chalé Serenidade é perfeito para aqueles que buscam uma escapada serena e acolhedora nas montanhas. A tranquilidade e a privacidade proporcionadas pelo chalé permitem que os hóspedes se desconectem do mundo exterior e se entreguem a um ambiente de calma e serenidade. Se você está em busca de um refúgio encantador em meio à natureza, o Chalé Serenidade é o lugar perfeito para desfrutar de momentos relaxantes e renovadores. Aconchegue-se em um ambiente acolhedor, desfrute da paz das montanhas e recarregue suas energias neste oásis de serenidade.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2024-07-30"),
        location: "Paris, França",
        countryCode: "FR",
        coverImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-44339404/original/2a61fcf2-4bab-47df-b08c-204fa19249f6.jpeg?im_w=960",
        imagesUrl: [
          "https://a0.muscache.com/im/pictures/miso/Hosting-44339404/original/22a0c1a9-68cd-4001-a1d5-0e9ba66c0348.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44339404/original/7a6e3154-7a07-4180-99b1-c479aa118be3.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44339404/original/8b839cf5-9630-4424-9ba5-ffdb40c24c62.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-44339404/original/a77cf10c-f1c9-435f-9091-07e90fb957e5.jpeg?im_w=1200",
        ],
        pricePerDay: 200,
        highlights: [
          "Café da manhã incluso",
          "Piscina",
          "Wifi grátis",
          "Estacionamento grátis",
          "Vista paradisíaca",
          "Luxuoso",
        ],
        recommended: true,
        maxGuests: 10,
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
