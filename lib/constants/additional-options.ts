import { AdditionalOptionCategory } from '@/lib/types/additional-options';

export const ADDITIONAL_OPTIONS: Record<string, AdditionalOptionCategory> = {
  delivery: {
    name: 'Livraison',
    items: [
      {
        id: 'livraison-standard',
        name: 'Livraison Standard',
        description: 'Livraison déposée au rez-de-chaussée - Délai : 10 à 12 semaines',
        image: '',
        price: 150, // 5€ x 30 mois
        category: 'delivery',
      }
    ]
  },
  mattresses: {
    name: 'Matelas',
    items: [
      {
        id: 'matelas-trio',
        name: 'Matelas Pack Trio',
        description: 'Matelas confortable pour votre lit',
        image: '',
        price: 510, // 17€ x 30 mois
        category: 'mattresses',
        packType: 'trio'
      },
      {
        id: 'matelas-duo',
        name: 'Matelas Pack Duo',
        description: 'Matelas confortable pour votre lit',
        image: '',
        price: 510, // 21.25€ x 24 mois
        category: 'mattresses',
        packType: 'duo'
      },
    ],
  },
  bedBases: {
    name: 'Sommiers',
    items: [
      {
        id: 'sommier-trio',
        name: 'Sommier Pack Trio',
        description: 'Sommier adapté à votre matelas',
        image: '',
        price: 240, // 8€ x 30 mois
        category: 'bedBases',
        packType: 'trio'
      },
      {
        id: 'sommier-duo',
        name: 'Sommier Pack Duo',
        description: 'Sommier adapté à votre matelas',
        image: '',
        price: 240, // 10€ x 24 mois
        category: 'bedBases',
        packType: 'duo'
      },
    ],
  },
  chairs: {
    name: 'Chaises',
    items: [
      {
        id: 'chaises-trio',
        name: '4 Chaises Pack Trio',
        description: 'Lot de 4 chaises assorties',
        image: '',
        price: 450, // 15€ x 30 mois
        category: 'chairs',
        packType: 'trio'
      },
      {
        id: 'chaises-duo',
        name: '4 Chaises Pack Duo',
        description: 'Lot de 4 chaises assorties',
        image: '',
        price: 450, // 18.75€ x 24 mois
        category: 'chairs',
        packType: 'duo'
      },
    ],
  },
  pillows: {
    name: 'Oreillers',
    items: [
      {
        id: 'oreillers-trio',
        name: '2 Oreillers Pack Trio',
        description: 'Lot de 2 oreillers confortables',
        image: '',
        price: 90, // 3€ x 30 mois
        category: 'pillows',
        packType: 'trio'
      },
      {
        id: 'oreillers-duo',
        name: '2 Oreillers Pack Duo',
        description: 'Lot de 2 oreillers confortables',
        image: '',
        price: 120, // 4€ x 30 mois
        category: 'pillows',
        packType: 'duo'
      },
    ],
  },
};