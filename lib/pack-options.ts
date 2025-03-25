import { RoomOptions } from './types';

export const ROOM_OPTIONS: RoomOptions = {
  salon: [
    {
      id: 'salon-1',
      name: 'Salon 1',
      description: 'Salon avec mobilier de base',
      image: '/images/salons/s1.jpg',
      price: 0,
    },
    {
      id: 'salon-2',
      name: 'Salon 2',
      description: 'Salon avec canapé et fauteuils',
      image: '/images/salons/s2.jpg',
      price: 0,
    },
    {
      id: 'salon-4',
      name: 'Salon 3',
      description: 'Salon confortable et fonctionnel',
      image: '/images/salons/s4.jpg',
      price: 0,
    },
    {
      id: 'salon-5',
      name: 'Salon 4',
      description: 'Salon avec équipement standard',
      image: '/images/salons/s5.jpg',
      price: 0,
    },
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `salon-${i + 6}`,
      name: `Salon ${i + 5}`,
      description: `Salon supplémentaire standard`,
      image: `/images/salons/s${i + 6}.jpg`,
      price: 0,
    }))
  ],
  'salle-a-manger': [
    {
      id: 'sam-1',
      name: 'Salle à Manger 1',
      description: 'Espace repas avec table et chaises',
      image: '/images/salle-a-manger/sam1.jpg',
      price: 0,
    },
    {
      id: 'sam-2',
      name: 'Salle à Manger 2',
      description: 'Salle à manger avec mobilier de base',
      image: '/images/salle-a-manger/sam2.jpg',
      price: 0,
    },
    {
      id: 'sam-3',
      name: 'Salle à Manger 3',
      description: 'Espace repas standard',
      image: '/images/salle-a-manger/sam3.jpg',
      price: 0,
    },
    {
      id: 'sam-4',
      name: 'Salle à Manger 4',
      description: 'Salle à manger avec ensemble table et chaises',
      image: '/images/salle-a-manger/sam4.jpg',
      price: 0,
    },
    {
      id: 'sam-5',
      name: 'Salle à Manger 5',
      description: 'Espace repas fonctionnel',
      image: '/images/salle-a-manger/sam5.jpg',
      price: 0,
    },
  ],
  chambre: [
    {
      id: 'chambre-1',
      name: 'Chambre 1',
      description: 'Chambre avec lit et rangements',
      image: '/images/chambres/c1.jpg',
      price: 0,
    },
    {
      id: 'chambre-2',
      name: 'Chambre 2',
      description: 'Chambre standard avec mobilier de base',
      image: '/images/chambres/c2.jpg',
      price: 0,
    },
    {
      id: 'chambre-3',
      name: 'Chambre 3',
      description: 'Chambre avec espace de couchage et rangement',
      image: '/images/chambres/c3.png',
      price: 0,
    },
    {
      id: 'chambre-4',
      name: 'Chambre 4',
      description: 'Chambre fonctionnelle et pratique',
      image: '/images/chambres/c4.png',
      price: 0,
    },
  ]
};
