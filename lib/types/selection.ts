import { Room } from './pack';

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