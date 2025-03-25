import { RoomSelection } from '@/lib/types';

export function transformSelectionsForApi(selections: RoomSelection[]) {
  return selections.reduce((acc, selection, index) => {
    acc[`choix ${index + 1}`] = {
      id: selection.optionId,
      type: selection.type
    };
    return acc;
  }, {} as Record<string, { id: string; type: string; }>);
}

export function formatChoiceLabel(index: number): string {
  return `Choix ${index + 1}`;
}