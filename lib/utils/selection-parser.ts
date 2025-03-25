import { Room, RoomSelection } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { ROOM_OPTIONS } from '@/lib/pack-options';

export function parseSelections(searchParams: { [key: string]: string }) {
  const roomSelections: RoomSelection[] = [];
  const additionalSelections: AdditionalSelection[] = [];

  try {
    // Parse room selections
    for (let i = 1; i <= 3; i++) {
      const selection = searchParams[`selection${i}`];
      if (selection) {
        // Determine room type from selection ID
        let roomType: Room | null = null;
        for (const [type, options] of Object.entries(ROOM_OPTIONS)) {
          if (options.some(opt => opt.id === selection)) {
            roomType = type as Room;
            break;
          }
        }

        if (roomType) {
          roomSelections.push({
            type: roomType,
            optionId: selection,
            quantity: 1
          });
        }
      }
    }

    // Parse additional selections
    const additionalParam = searchParams['additional'];
    if (additionalParam) {
      try {
        const decoded = decodeURIComponent(additionalParam);
        const parsed = JSON.parse(decoded);
        if (Array.isArray(parsed)) {
          additionalSelections.push(...parsed);
        }
      } catch (error) {
        console.error('Error parsing additional selections:', error);
      }
    }
  } catch (error) {
    console.error('Error parsing selections:', error);
  }

  return {
    roomSelections,
    additionalSelections
  };
}

export function serializeSelections(
  roomSelections: RoomSelection[],
  additionalSelections: AdditionalSelection[]
): URLSearchParams {
  const params = new URLSearchParams();

  // Add room selections
  roomSelections.forEach((selection, index) => {
    params.set(`selection${index + 1}`, selection.optionId);
  });

  // Add additional selections if any
  if (additionalSelections.length > 0) {
    params.set('additional', encodeURIComponent(JSON.stringify(additionalSelections)));
  }

  return params;
}