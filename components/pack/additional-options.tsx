'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { AdditionalOption, AdditionalSelection } from '@/lib/types/additional-options';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { QuantityControls } from './quantity-controls';

interface AdditionalOptionsProps {
  selections: AdditionalSelection[];
  onUpdate: (selections: AdditionalSelection[]) => void;
  duration: number;
  packType: 'duo' | 'trio';
}

export function AdditionalOptions({ 
  selections = [], 
  onUpdate, 
  duration,
  packType
}: AdditionalOptionsProps) {
  const handleQuantityChange = (optionId: string, quantity: number, isDeliveryOption: boolean = false) => {
    if (quantity === 0) {
      onUpdate(selections.filter(s => s.id !== optionId));
    } else {
      // Vérifier la limite de 10 pour les options non-livraison
      if (!isDeliveryOption) {
        const totalNonDeliveryQuantity = selections
          .filter(s => !delivery?.items.some(item => item.id === s.id))
          .reduce((sum, s) => sum + s.quantity, 0);

        if (quantity > 0 && (totalNonDeliveryQuantity >= 10)) {
          alert("Vous ne pouvez pas sélectionner plus de 10 options au total.");
          return;
        }
      }

      const existingIndex = selections.findIndex(s => s.id === optionId);
      if (existingIndex >= 0) {
        const newSelections = [...selections];
        newSelections[existingIndex] = { id: optionId, quantity };
        onUpdate(newSelections);
      } else {
        onUpdate([...selections, { id: optionId, quantity }]);
      }
    }
  };

  const getQuantity = (optionId: string) => 
    selections.find(s => s.id === optionId)?.quantity || 0;

  // Filtrer les options en fonction du type de pack
  const filteredOptions = Object.entries(ADDITIONAL_OPTIONS).reduce((acc, [key, category]) => {
    if (key === 'delivery') {
      acc[key] = category;
    } else {
      acc[key] = {
        ...category,
        items: category.items.filter(item => !item.packType || item.packType === packType)
      };
    }
    return acc;
  }, {} as Record<string, typeof ADDITIONAL_OPTIONS[keyof typeof ADDITIONAL_OPTIONS]>);

  // Separate delivery options from other options
  const { delivery, ...otherOptions } = filteredOptions;

  return (
    <div className="space-y-8">
       <Tabs defaultValue="mattresses" className="w-full">
        <TabsList className="mb-6 w-full flex flex-wrap gap-2 h-auto">
          {Object.entries(otherOptions).map(([key, category]) => (
            <TabsTrigger 
              key={key} 
              value={key}
              className="flex-grow sm:flex-grow-0"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(otherOptions).map(([key, category]) => (
          <TabsContent key={key} value={key}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((option) => {
                const quantity = getQuantity(option.id);
                const isSelected = quantity > 0;
                const monthlyPrice = Math.round((option.price / duration) * 100) / 100;
                
                return (
                  <Card 
                    key={option.id} 
                    className={cn(
                      "relative transition-all duration-200 hover:shadow-md",
                      isSelected && "ring-2 ring-[#FE6022] ring-offset-2"
                    )}
                  >
                    {isSelected && (
                      <Badge 
                        className="absolute top-3 right-3 z-10 bg-[#FE6022]"
                        variant="secondary"
                      >
                        {quantity}x
                      </Badge>
                    )}
                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold">{option.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {option.description}
                        </p>
                        <p className="text-sm font-medium">
                          {monthlyPrice}€/mois
                        </p>
                        <div className="pt-1 flex justify-center">
                          <QuantityControls
                            quantity={quantity}
                            onIncrease={() => handleQuantityChange(option.id, quantity + 1)}
                            onDecrease={() => handleQuantityChange(option.id, quantity - 1)}
                            maxQuantity={10}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Delivery options section */}
      {delivery && (
        <div className="pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">{delivery.name}</h3>
          <div className="space-y-3">
            {delivery.items.map((option) => {
              const quantity = getQuantity(option.id);
              const isSelected = quantity > 0;
              const monthlyPrice = Math.round((option.price / duration) * 100) / 100;
              
              return (
                <Card 
                  key={option.id}
                  onClick={() => handleQuantityChange(option.id, isSelected ? 0 : 1, true)}
                  className={cn(
                    "transition-all duration-200 hover:shadow-md cursor-pointer",
                    isSelected && "ring-2 ring-[#FE6022] ring-offset-2"
                  )}
                >
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-base font-semibold">{option.name}</h4>
                            <p className="text-sm text-gray-600 mt-0.5">
                              {option.description}
                            </p>
                            <p className="text-sm font-medium mt-1">
                              {monthlyPrice}€/mois
                            </p>
                          </div>
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                            isSelected 
                              ? "bg-[#FE6022] border-[#FE6022]" 
                              : "border-gray-300"
                          )}>
                            {isSelected && <Check className="h-3 w-3 text-white" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}