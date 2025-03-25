'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pack } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { AdditionalOptions } from './additional-options';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';


interface AdditionalOptionsPageProps {
  pack: Pack;
  selections: { [key: string]: string };
}

export function AdditionalOptionsPage({ pack, selections }: AdditionalOptionsPageProps) {
  const router = useRouter();
  const [additionalSelections, setAdditionalSelections] = useState<AdditionalSelection[]>([]);
  const packType = pack.name === 'Pack Duo' ? 'duo' : 'trio';

  const handleNext = () => {
    const params = new URLSearchParams();
    
    // Add existing selections
    Object.entries(selections).forEach(([key, value]) => {
      params.set(key, value);
    });
    
    // Add additional selections - encode as URI component to handle special characters
    if (additionalSelections.length > 0) {
      params.set('additional', encodeURIComponent(JSON.stringify(additionalSelections)));
    }
    
    router.push(`/packs/${packType}/summary?${params.toString()}`);
  };
  const handleBack = () => {
    router.push(`/packs/${packType}`);
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handleBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Modifier ma sélection
        </Button>
      </div>
      <AdditionalOptions
        selections={additionalSelections}
        onUpdate={setAdditionalSelections}
        duration={pack.duration}
        packType={packType}
      />

      <div className="flex justify-end pt-8">
        <Button onClick={handleNext} size="lg">
          Voir le récapitulatif
        </Button>
      </div>
    </div>
  );
}