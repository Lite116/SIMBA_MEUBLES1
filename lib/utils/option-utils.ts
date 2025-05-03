import { ROOM_OPTIONS } from '@/lib/pack-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';
import { Room } from '@/lib/types';

export function getOptionNameById(id: string): string | null {
  // Check room options
  for (const room in ROOM_OPTIONS) {
    const option = ROOM_OPTIONS[room as Room].find((opt: { id: string }) => opt.id === id);
    if (option) return option.name;
  }

  // Check additional options
  for (const category of Object.values(ADDITIONAL_OPTIONS)) {
    const option = category.items.find(opt => opt.id === id);
    if (option) return option.name;
  }

  return null;
}

export function getOptionPriceById(id: string): number | null {
  // Check room options (assuming room options have no additional price)
  for (const room in ROOM_OPTIONS) {
    const option = ROOM_OPTIONS[room as Room].find((opt: { id: string }) => opt.id === id);
    if (option) return option.price;
  }

  // Check additional options
  for (const category of Object.values(ADDITIONAL_OPTIONS)) {
    const option = category.items.find(opt => opt.id === id);
    if (option) return option.price;
  }

  return null;
}