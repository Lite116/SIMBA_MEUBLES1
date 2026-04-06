import { RoomOptions, PackOption, Room } from './types/index';

/**
 * Options visibles dans les sélecteurs (salon / SAM / chambre).
 * Les entrées avec `hidden: true` restent dans `ROOM_OPTIONS` pour récapitulatif et anciens liens.
 */
export function getVisibleRoomOptions(room: Room): PackOption[] {
  return ROOM_OPTIONS[room].filter((opt) => !opt.hidden);
}

export const ROOM_OPTIONS: RoomOptions = {
  salon: [
    {
      id: 'salon-1',
      name: 'Salon 1 (hors catalogue)',
      description: 'Salon avec mobilier de base',
      image: '/images/salons/s1.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-2',
      name: 'Salon 1',
      description:
        '237 cm x 142 cm. Lit et coffre dans partie centrale. Tissu monolith noir. Méridienne réversible.',
      image: '/images/salons/s2.webp',
      price: 0,
    },
    {
      id: 'salon-3',
      name: 'Salon 2',
      description:
        '312 cm x 142 cm. Lit et coffre dans la partie centrale. Tissu velours côtelé.',
      image: '/images/salons/s4.webp',
      price: 0,
    },
    {
      id: 'salon-4',
      name: 'Salon 3',
      description:
        '240 cm x 142 cm. Lit et coffre dans la partie centrale. Tissu velours côtelé. Méridienne réversible.',
      image: '/images/salons/s5.webp',
      price: 0,
    },
    {
      id: 'salon-5',
      name: 'Salon 4',
      description:
        '312 cm x 142 cm. Lit et coffre dans la partie centrale. Tissu monolith noir.',
      image: '/images/salons/s6.webp',
      price: 0,
    },
    {
      id: 'salon-6',
      name: 'Salon 6',
      description: 'Salon supplémentaire standard',
      image: '/images/salons/s7.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-7',
      name: 'Salon 7 (hors catalogue)',
      description: 'Salon supplémentaire standard',
      image: '/images/salons/s8.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-8',
      name: 'Salon 5',
      description:
        '320 cm x 160 cm. Simili noir et tissu gris. Lit et coffre dans partie centrale.',
      image: '/images/salons/s9.webp',
      price: 0,
    },
    {
      id: 'salon-9',
      name: 'Salon 9',
      description: 'Salon supplémentaire standard',
      image: '/images/salons/s10.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-10',
      name: 'Salon 10 (hors catalogue)',
      description: 'Salon supplémentaire standard',
      image: '/images/salons/s11.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-11',
      name: 'Salon 6',
      description:
        '240 cm x 160 cm. Lit et coffre dans la partie centrale. Méridienne réversible.',
      image: '/images/salons/s12.webp',
      price: 0,
    },
    {
      id: 'salon-12',
      name: 'Salon 7',
      description:
        '237 cm x 142 cm. Méridienne réversible. Lit et coffre dans partie centrale, tissu velours côtelé.',
      image: '/images/salons/s13.webp',
      price: 0,
    },
    {
      id: 'salon-13',
      name: 'Salon 13 (hors catalogue)',
      description: 'Salon supplémentaire standard',
      image: '/images/salons/s14.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'salon-14',
      name: 'Salon 8',
      description:
        '215 cm x 127 cm avec lit dans la partie centrale et coffre dans la méridienne. Tissu noir lisse.',
      image: '/images/salons/s15.webp',
      price: 0,
    },
    {
      id: 'salon-15',
      name: 'Salon 9',
      description:
        '215 cm x 127 cm avec lit dans la partie centrale et coffre dans la méridienne. Tissu beige lisse.',
      image: '/images/salons/s16.webp',
      price: 0,
    },
  ],
  'salle-a-manger': [
    {
      id: 'sam-1',
      name: 'Salle à Manger 1',
      description:
        'Table 195 cm x 95 cm.\nBahut 225 cm.\nVitrine 120 cm.',
      image: '/images/salle-a-manger/sam1.webp',
      price: 0,
    },
    {
      id: 'sam-2',
      name: 'Salle à Manger 2',
      description:
        'Table Pieds X métal 200 cm x 90 cm. Bahut 230 cm.\nVitrine 130 cm.',
      image: '/images/salle-a-manger/sam2.webp',
      price: 0,
    },
    {
      id: 'sam-3',
      name: 'Salle à Manger 3',
      description:
        'Table Pieds U 200 cm x 95 cm. Bahut 225 cm. Vitrine 124 cm.',
      image: '/images/salle-a-manger/sam3.webp',
      price: 0,
    },
    {
      id: 'sam-4',
      name: 'Salle à Manger 4',
      description:
        'Ensemble table, bahut et vitrine — modèle actuellement non disponible.',
      image: '/images/salle-a-manger/sam4.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'sam-5',
      name: 'Salle à Manger 4',
      description:
        'Table 180 cm x 90 cm. Bahut 213 cm.\nVitrine 112 cm.',
      image: '/images/salle-a-manger/sam5.webp',
      price: 0,
    },
  ],
  chambre: [
    {
      id: 'chambre-1',
      name: 'Chambre 1',
      description: 'Lit 160 cm. Garde Robe 220,5 cm x 203 cm H.',
      image: '/images/chambres/c1.webp',
      price: 0,
    },
    {
      id: 'chambre-2',
      name: 'Chambre 2',
      description: 'Lit 160 cm. Garde Robe 215 cm x 210 cm H.',
      image: '/images/chambres/chambre2.webp',
      price: 0,
    },
    {
      id: 'chambre-3',
      name: 'Chambre 3',
      description: 'Lit 160 cm. Garde Robe 225 cm.',
      image: '/images/chambres/chambre3.webp',
      price: 0,
    },
    {
      id: 'chambre-4',
      name: 'Chambre 4 (hors catalogue)',
      description: 'Lit 160 cm. Garde Robe 240 cm x 215 cm H.',
      image: '/images/chambres/chambre4.webp',
      price: 0,
      hidden: true,
    },
    {
      id: 'chambre-5',
      name: 'Chambre 4',
      description: 'Lit 160 cm. Garde Robe 250 cm x 218 cm H.',
      image: '/images/chambres/chambre5.webp',
      price: 0,
    },
  ]
};
