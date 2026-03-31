export type Room = 'salon' | 'salle-a-manger' | 'chambre';
export type PackType = 'duo' | 'trio';

export interface Pack {
  name: string;
  price: number;
  duration: number;
  rooms: Room[];
  image: string;
}

export interface PackOption {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  /** Si false : carte grisée + « Non disponible » */
  available?: boolean;
  /** Si true : l’option n’apparaît pas du tout dans les sélecteurs (récap / URLs inchangés). */
  hidden?: boolean;
}

export type RoomOptions = Record<Room, PackOption[]>;