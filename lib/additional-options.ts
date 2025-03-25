import { AdditionalOption } from './types';

// Grouper les options par catégorie
export const ADDITIONAL_OPTIONS_BY_CATEGORY = {
  lighting: {
    name: 'Éclairage',
    items: [
      {
        id: 'lampe-1',
        name: 'Lampadaire Design',
        description: 'Lampadaire moderne avec variateur de lumière',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
        price: 89,
        category: 'lighting',
      },
      {
        id: 'lampe-2',
        name: 'Suspension Contemporaine',
        description: 'Suspension ajustable en hauteur',
        image: 'https://images.unsplash.com/photo-1573148195900-7845dcb9b127',
        price: 129,
        category: 'lighting',
      },
    ],
  },
  furniture: {
    name: 'Tables',
    items: [
      {
        id: 'table-1',
        name: 'Table d\'appoint',
        description: 'Table d\'appoint en bois et métal',
        image: 'https://images.unsplash.com/photo-1565374392032-8359b8b6332a',
        price: 149,
        category: 'furniture',
      },
      {
        id: 'table-2',
        name: 'Table Basse Design',
        description: 'Table basse avec rangement intégré',
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d',
        price: 199,
        category: 'furniture',
      },
    ],
  },
  chairs: {
    name: 'Chaises',
    items: [
      {
        id: 'chaise-1',
        name: 'Chaise Scandinave',
        description: 'Lot de 2 chaises style scandinave',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
        price: 159,
        category: 'chairs',
      },
      {
        id: 'chaise-2',
        name: 'Fauteuil Design',
        description: 'Fauteuil confortable en tissu',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c',
        price: 249,
        category: 'chairs',
      },
    ],
  },
};