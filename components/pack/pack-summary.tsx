'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Pack, RoomSelection, PackOption } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ROOM_OPTIONS } from '@/lib/pack-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';
import { Check } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { usePackContext } from '@/lib/contexts/pack-context';

interface PackSummaryProps {
  pack: Pack;
  roomSelections: RoomSelection[];
  additionalSelections: AdditionalSelection[];
}

export function PackSummary({ 
  pack, 
  roomSelections, 
  additionalSelections 
}: PackSummaryProps) {
  const { setPackData } = usePackContext();

  // Calculate total monthly cost
  const baseMonthly = pack.price;
  const additionalTotal = additionalSelections.reduce((sum, sel) => {
    const option = Object.values(ADDITIONAL_OPTIONS)
      .flatMap(cat => cat.items)
      .find(opt => opt.id === sel.id);
    return sum + (option ? option.price * sel.quantity : 0);
  }, 0);
  
  const totalMonthly = Math.round((baseMonthly + (additionalTotal / pack.duration)) * 100) / 100;

  useEffect(() => {
    setPackData(pack, roomSelections, additionalSelections);
  }, [pack, roomSelections, additionalSelections, setPackData]);

  return (
    <div className="space-y-12">
      {/* Selected Rooms */}
      <div className="grid md:grid-cols-2 gap-6">
        {roomSelections.map((selection, index) => {
          const option = ROOM_OPTIONS[selection.type].find((opt: PackOption) => opt.id === selection.optionId);
          if (!option) return null;

          return (
            <Card key={index} className="bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  {selection.type.replace(/-/g, ' ')} - {option.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Options */}
      {additionalSelections.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Options additionnelles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSelections.map((selection) => {
              const option = Object.values(ADDITIONAL_OPTIONS)
                .flatMap(cat => cat.items)
                .find(opt => opt.id === selection.id);
              
              if (!option) return null;

              return (
                <Card key={selection.id} className="bg-gray-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#FE6022] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">{option.name}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                        <p className="text-sm font-medium mt-2">
                          {option.price}€ x{selection.quantity} 
                          ({Math.round((option.price * selection.quantity / pack.duration) * 100) / 100}€/mois)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Summary and Total */}
      <div className="bg-gray-50 p-6 rounded-lg">
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

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-6">Finaliser votre demande</h3>
        <ContactForm />
      </div>
    </div>
  );
}