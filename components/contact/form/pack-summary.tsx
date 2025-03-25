'use client';

import { usePackContext } from '@/lib/contexts/pack-context';
import { getOptionNameById } from '@/lib/utils/option-utils';
import { formatChoiceLabel } from '@/lib/utils/selection-transformer';

export function PackSummary() {
  const { selectedPack, roomSelections, additionalSelections, totalMonthly } = usePackContext();

  if (!selectedPack) return null;

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <h3 className="font-medium mb-2">Récapitulatif de votre sélection</h3>
      <p className="text-sm text-gray-600">
        {selectedPack.name} - {totalMonthly}€/mois pendant {selectedPack.duration} mois
      </p>
      
      {/* Numbered Choices */}
      <div className="mt-2 text-sm text-gray-600">
        {roomSelections.map((selection, index) => {
          const optionName = getOptionNameById(selection.optionId);
          if (!optionName) return null;
          
          return (
            <div key={`choice-${index}`} className="py-1">
              <strong>{formatChoiceLabel(index)}:</strong> {optionName}
            </div>
          );
        })}
      </div>

      {/* Additional Options */}
      {additionalSelections.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          <strong>Options additionnelles:</strong>
          <ul className="ml-4 mt-1">
            {additionalSelections.map((selection) => {
              const optionName = getOptionNameById(selection.id);
              if (!optionName) return null;
              
              return (
                <li key={selection.id}>
                  - {optionName} (x{selection.quantity})
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}