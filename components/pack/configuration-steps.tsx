'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pack, Room } from '@/lib/types';
import { ROOM_OPTIONS } from '@/lib/pack-options';
import { RoomSelector } from './room-selector';
import { AdditionalOptions } from './additional-options';
import { Button } from '@/components/ui/button';

interface ConfigurationStepsProps {
  pack: Pack;
}

export function ConfigurationSteps({ pack }: ConfigurationStepsProps) {
  const router = useRouter();
  const [selections, setSelections] = useState<Record<Room, string>>({
    salon: '',
    'salle-a-manger': '',
    chambre: '',
  });
  const [additionalSelections, setAdditionalSelections] = useState<string[]>([]);

  const handleSelection = (room: Room, optionId: string) => {
    setSelections((prev) => ({ ...prev, [room]: optionId }));
  };

  const canProceed = pack.rooms.every((room) => selections[room as Room] !== '');

  const handleSubmit = () => {
    const params = new URLSearchParams();
    Object.entries(selections).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    if (additionalSelections.length > 0) {
      params.set('additional', additionalSelections.join(','));
    }
    const packType = pack.name === 'Pack Duo' ? 'duo' : 'trio';
    router.push(`/packs/${packType}/summary?${params.toString()}`);
  };

  return (
    <div className="space-y-12">
      {pack.rooms.map((room) => (
        <div key={room} className="space-y-6">
          <h2 className="text-2xl font-semibold">Choisissez votre {room.replace(/-/g, ' ')}</h2>
          <RoomSelector
            options={ROOM_OPTIONS[room]}
            selectedIds={[selections[room as Room]]}
            onSelect={(id) => handleSelection(room as Room, id)}
            roomType={room}
            maxSelections={pack.name === 'Pack Duo' ? 2 : 3}
            currentSelections={0}
          />
        </div>
      ))}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Personnalisez votre pack avec des options</h2>
        <AdditionalOptions
          selections={additionalSelections.map((id) => ({ id, quantity: 1 }))}
          onUpdate={(updatedSelections) => setAdditionalSelections(updatedSelections.map((s) => s.id))}
          duration={pack.duration}
          packType={pack.name === 'Pack Duo' ? 'duo' : 'trio'}
        />
      </div>
      <div className="flex justify-end pt-8">
        <Button onClick={handleSubmit} disabled={!canProceed} size="lg">
          Voir le récapitulatif
        </Button>
      </div>
    </div>
  );
}
