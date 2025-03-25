import { Room, PackOption, SelectionCounter } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { RoomSelector } from './room-selector';

interface RoomSectionProps {
  room: Room;
  options: PackOption[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  counter: SelectionCounter;
  maxSelections: number;
}

export function RoomSection({
  room,
  options,
  selectedIds,
  onSelect,
  counter,
  maxSelections
}: RoomSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold capitalize">
          {room.replace(/-/g, ' ')}
        </h2>
        <Badge variant="outline" className="text-[#FE6022]">
          {counter.byRoom[room] || 0} sélection(s)
        </Badge>
      </div>
      <RoomSelector
        options={options}
        selectedIds={selectedIds}
        onSelect={onSelect}
        roomType={room}
        maxSelections={maxSelections}
        currentSelections={counter.total}
      />
    </div>
  );
}