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
      image: "/images/home/image-pack2.jpeg",
    },
    duo: {
      name: 'Pack Duo',
      price: 95,
      duration: 24,
      rooms: ['salon', 'salle-a-manger', 'chambre'] as Room[],
      image: "/images/home/image-pack1.jpeg",
    },
  },
  icons: {
    icon: '/logo.png',
  },
};
