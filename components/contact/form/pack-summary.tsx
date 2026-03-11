'use client';

import Image from 'next/image';
import { usePackContext } from '@/lib/contexts/pack-context';
import { ROOM_OPTIONS } from '@/lib/pack-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';
import { Room } from '@/lib/types';

export function PackSummary() {
  const { selectedPack, roomSelections, additionalSelections, totalMonthly } = usePackContext();

  if (!selectedPack) return null;

  const getRoomOption = (roomType: Room, optionId: string) =>
    ROOM_OPTIONS[roomType].find((opt) => opt.id === optionId);

  const getAdditionalOption = (id: string) => {
    for (const category of Object.values(ADDITIONAL_OPTIONS)) {
      const opt = category.items.find((item) => item.id === id);
      if (opt) return opt;
    }
    return null;
  };

  return (
    <div className="bg-[#FE6022]/5 border border-[#FE6022]/20 p-4 sm:p-5 rounded-xl mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h3 className="font-semibold text-sm sm:text-base">
          Récapitulatif de votre sélection
        </h3>
        <p className="text-xs sm:text-sm text-gray-700">
          {selectedPack.name} • {totalMonthly}€/mois pendant {selectedPack.duration} mois
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {roomSelections.map((selection, index) => {
          const option = getRoomOption(selection.type as Room, selection.optionId);
          if (!option) return null;

          return (
            <div
              key={`room-${index}`}
              className="rounded-lg overflow-hidden bg-[#FE6022]/10 border border-[#FE6022]/30"
            >
              {option.image && (
                <div className="relative h-24 sm:h-28 w-full">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-2 sm:p-3 text-xs sm:text-sm">
                <p className="font-semibold text-gray-900 truncate">{option.name}</p>
                <p className="text-[11px] sm:text-xs text-gray-600">
                  {selection.type.replace(/-/g, ' ')}
                </p>
              </div>
            </div>
          );
        })}

        {additionalSelections.map((selection) => {
          const option = getAdditionalOption(selection.id);
          if (!option) return null;

          return (
            <div
              key={`add-${selection.id}`}
              className="rounded-lg overflow-hidden bg-[#FE6022]/5 border border-[#FE6022]/20 p-2 sm:p-3 text-xs sm:text-sm flex flex-col justify-between"
            >
              <div>
                <p className="font-semibold text-gray-900 truncate">{option.name}</p>
                <p className="text-[11px] sm:text-xs text-gray-600">
                  Option additionnelle • x{selection.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
