'use client';

import Link from 'next/link';
import { Pack } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { Button } from '@/components/ui/button';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';

interface SummaryTotalProps {
  pack: Pack;
  additionalSelections: AdditionalSelection[];
}

export function SummaryTotal({ pack, additionalSelections }: SummaryTotalProps) {
  const baseMonthly = pack.price;
  const additionalTotal = additionalSelections.reduce((sum, sel) => {
    const option = Object.values(ADDITIONAL_OPTIONS)
      .flatMap(cat => cat.items)
      .find(opt => opt.id === sel.id);
    return sum + (option ? option.price * sel.quantity : 0);
  }, 0);
  
  const totalMonthly = Math.round((baseMonthly + (additionalTotal / pack.duration)) * 100) / 100;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="text-lg text-center italic text-[#FE6022] mb-8">
        Emprunter de l&apos;argent coûte aussi de l&apos;argent.
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Total mensuel</h3>
        <p className="text-2xl font-bold text-[#FE6022]">{totalMonthly}€/mois</p>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Pendant {pack.duration} mois sans intérêts
      </p>
      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <Button variant="outline" asChild>
          <Link href={`/packs/${pack.name === 'Pack Duo' ? 'duo' : 'trio'}`}>
            Modifier ma sélection
          </Link>
        </Button>
      </div>
    </div>
  );
}
