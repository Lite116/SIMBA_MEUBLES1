'use client';

import Image from 'next/image';
import { PackOption, Room } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { QuantityControls } from './quantity-controls';

interface RoomSelectorProps {
  options: PackOption[];
  selectedIds: string[];
  onSelect: (id: string, quantity: number) => void;
  roomType: Room;
  maxSelections: number;
  currentSelections: number;
}

export function RoomSelector({
  options,
  selectedIds,
  onSelect,
  roomType,
  maxSelections,
  currentSelections
}: RoomSelectorProps) {
  const getQuantity = (optionId: string) =>
    selectedIds.filter(id => id === optionId).length;

  const remainingSelections = maxSelections - currentSelections;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {options.map((option) => {
        const quantity = getQuantity(option.id);
        const isSelected = quantity > 0;
        
        return (
          <Card 
            key={option.id} 
            className={cn(
              "relative transition-all duration-200 hover:shadow-md",
              isSelected && "ring-2 ring-[#FE6022] ring-offset-2",
              'available' in option && option.available === false && "opacity-75"
            )}
          >
            {'available' in option && option.available === false && (
              <Badge 
                className="absolute top-4 right-4 z-10 bg-red-500"
                variant="secondary"
              >
                Non disponible
              </Badge>
            )}
            {isSelected && (
              <Badge 
                className="absolute top-4 right-4 z-10 bg-[#FE6022]"
                variant="secondary"
              >
                {quantity}x
              </Badge>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{option.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg group">
                <Image
                  src={option.image}
                  alt={option.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    isSelected && "scale-105",
                    'available' in option && option.available === false && "grayscale"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 transition-colors duration-300",
                  isSelected ? "bg-black/10" : "bg-black/0 group-hover:bg-black/5"
                )} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {option.description}
              </p>
              <div className="pt-2 flex justify-center">
                {!('available' in option) || option.available !== false ? (
                  <QuantityControls
                    quantity={quantity}
                    onIncrease={() => onSelect(option.id, quantity + 1)}
                    onDecrease={() => onSelect(option.id, quantity - 1)}
                    maxQuantity={Math.min(maxSelections, quantity + remainingSelections)}
                  />
                ) : (
                  <p className="text-sm text-red-500 font-medium">Cette option n&apos;est pas disponible actuellement</p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}