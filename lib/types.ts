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
}

export interface RoomSelection {
  type: Room;
  optionId: string;
  quantity: number;
}

export interface PackSelections {
  rooms: RoomSelection[];
  additional?: string[];
}

export interface SelectionCounter {
  total: number;
  remaining: number;
  byRoom: Record<Room, number>;
}

export interface AdditionalOption {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'lighting' | 'furniture' | 'chairs';
}

export interface RoomOptions {
  [key: string]: PackOption[];
}