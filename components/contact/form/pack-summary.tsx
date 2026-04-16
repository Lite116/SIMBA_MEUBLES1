'use client';

import Image from 'next/image';
import { usePackContext } from '@/lib/contexts/pack-context';
import { ROOM_OPTIONS } from '@/lib/pack-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';
import { Room } from '@/lib/types';
import { cn } from '@/lib/utils';

type PackSummaryProps = {
  /** full: grille visuelle (ancien). compact: carte légère pour colonne latérale / mobile. */
  variant?: 'full' | 'compact';
  className?: string;
};

export function PackSummary({
  variant = 'full',
  className,
}: PackSummaryProps) {
  const { selectedPack, roomSelections, additionalSelections, totalMonthly } =
    usePackContext();

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

  if (variant === 'compact') {
    const roomLines = roomSelections
      .map((selection) => {
        const option = getRoomOption(selection.type as Room, selection.optionId);
        if (!option) return null;
        return `${selection.type.replace(/-/g, ' ')} · ${option.name}`;
      })
      .filter(Boolean) as string[];

    const addCount = additionalSelections.length;

    return (
      <div
        className={cn(
          'rounded-2xl border border-[#FE6022]/20 bg-gradient-to-b from-[#FE6022]/5 to-white',
          'p-4 sm:p-5 shadow-sm',
          className
        )}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#FE6022] mb-1">
          Votre sélection
        </p>
        <h3 className="text-base font-bold text-gray-900 leading-tight">
          {selectedPack.name}
        </h3>
        <p className="mt-2 text-2xl font-bold text-[#FE6022] tabular-nums">
          {totalMonthly}€
          <span className="text-sm font-medium text-gray-600">/mois</span>
        </p>
        <p className="text-xs text-gray-600 mt-0.5">
          pendant {selectedPack.duration} mois · TAEG 0 %
        </p>

        {roomLines.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-xs text-gray-700 border-t border-gray-100 pt-3">
            {roomLines.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#FE6022] shrink-0" aria-hidden>
                  ·
                </span>
                <span className="leading-snug">{line}</span>
              </li>
            ))}
          </ul>
        )}

        {addCount > 0 && (
          <p className="mt-2 text-xs text-gray-600">
            + {addCount} option{addCount > 1 ? 's' : ''} additionnelle
            {addCount > 1 ? 's' : ''}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-[#FE6022]/5 border border-[#FE6022]/20 p-4 sm:p-5 rounded-xl mb-6',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h3 className="font-semibold text-sm sm:text-base">
          Récapitulatif de votre sélection
        </h3>
        <p className="text-xs sm:text-sm text-gray-700">
          {selectedPack.name} • {totalMonthly}€/mois pendant {selectedPack.duration}{' '}
          mois
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
