import { Room } from './types';

export const SITE_CONFIG = {
  name: 'Simba Meubles',
  description: 'Aménagez votre maison en toute simplicité',
  packs: {
    trio: {
      name: 'Pack Trio',
      price: 95,
      duration: 30,
      rooms: ['salon', 'salle-a-manger', 'chambre'] as Room[],
      image: "/images/home/image-pack2.webp",
    },
    duo: {
      name: 'Pack Duo',
      price: 95,
      duration: 24,
      rooms: ['salon', 'salle-a-manger', 'chambre'] as Room[],
      image: "/images/home/image-pack1.webp",
    },
  },
  icons: {
    icon: '/logo.png',
  },
  other: {
    'google-site-verification': '692ZM2eIwQ068PeJF4xW91rO2DHIH-axL_qm5NJJjVE',
  },
};
