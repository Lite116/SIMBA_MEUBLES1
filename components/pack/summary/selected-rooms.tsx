import Image from 'next/image';
import { RoomSelection } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { ROOM_OPTIONS } from '@/lib/pack-options';

interface SelectedRoomsProps {
  selections: RoomSelection[];
}

export function SelectedRooms({ selections }: SelectedRoomsProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Pièces sélectionnées</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {selections.map((selection, index) => {
          const option = ROOM_OPTIONS[selection.type].find(opt => opt.id === selection.optionId);
          if (!option) return null;

          return (
            <Card key={index} className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={option.image}
                      alt={option.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2">
                      {selection.type.replace(/-/g, ' ')} - {option.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}