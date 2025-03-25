import Image from 'next/image';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';

interface AdditionalOptionsProps {
  selections: AdditionalSelection[];
  duration: number;
}

export function AdditionalOptions({ selections, duration }: AdditionalOptionsProps) {
  if (selections.length === 0) return null;

  // Separate delivery options from other options
  const deliverySelections = selections.filter(sel => 
    Object.values(ADDITIONAL_OPTIONS.delivery.items).some(item => item.id === sel.id)
  );
  
  const otherSelections = selections.filter(sel => 
    !Object.values(ADDITIONAL_OPTIONS.delivery.items).some(item => item.id === sel.id)
  );

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Options additionnelles</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherSelections.map((selection) => {
          const option = Object.values(ADDITIONAL_OPTIONS)
            .flatMap(cat => cat.items)
            .find(opt => opt.id === selection.id);
          
          if (!option) return null;

          return (
            <Card key={selection.id} className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#FE6022] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">{option.name}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                        <p className="text-sm font-medium mt-2">
                            {Math.round((option.price * selection.quantity / duration) * 100) / 100}€/mois
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Delivery options */}
      {deliverySelections.length > 0 && (
        <div className="mt-4">
          {deliverySelections.map((selection) => {
            const option = ADDITIONAL_OPTIONS.delivery.items.find(opt => opt.id === selection.id);
            if (!option) return null;

            return (
              <Card key={selection.id} className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#FE6022] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">{option.name}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                          <p className="text-sm font-medium mt-2">
                              {Math.round((option.price / duration) * 100) / 100}€/mois
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}