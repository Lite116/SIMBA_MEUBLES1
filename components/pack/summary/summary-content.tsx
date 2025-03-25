'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Pack, RoomSelection } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { usePackContext } from '@/lib/contexts/pack-context';
import { SelectedRooms } from './selected-rooms';
import { AdditionalOptions } from './additional-options';
import { SummaryTotal } from './summary-total';
import { Button } from '@/components/ui/button';
import { serializeSelections } from '@/lib/utils/selection-parser';

interface SummaryContentProps {
  pack: Pack;
  roomSelections: RoomSelection[];
  additionalSelections: AdditionalSelection[];
}

export function SummaryContent({ 
  pack, 
  roomSelections, 
  additionalSelections 
}: SummaryContentProps) {
  const router = useRouter();
  const { setPackData } = usePackContext();
  const initialized = useRef(false);
  const packType = pack.name === 'Pack Duo' ? 'duo' : 'trio';

  // Update pack context only once on mount
  useEffect(() => {
    if (!initialized.current) {
      setPackData(pack, roomSelections, additionalSelections);
      initialized.current = true;
    }
  }, [pack, roomSelections, additionalSelections, setPackData]);

  const handleContinue = () => {
    const params = serializeSelections(roomSelections, additionalSelections);
    router.push(`/packs/${packType}/contact?${params.toString()}`);
  };

  return (
    <div className="space-y-12">
      <SelectedRooms selections={roomSelections} />
      
      {additionalSelections.length > 0 && (
        <AdditionalOptions 
          selections={additionalSelections} 
          duration={pack.duration} 
        />
      )}

      <SummaryTotal 
        pack={pack}
        additionalSelections={additionalSelections}
      />

      <div className="flex justify-end">
        <Button onClick={handleContinue} size="lg">
          Finaliser ma demande
        </Button>
      </div>
    </div>
  );
}