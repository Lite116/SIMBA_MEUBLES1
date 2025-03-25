'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pack, Room } from '@/lib/types';
import { ROOM_OPTIONS } from '@/lib/pack-options';
import { RoomSelector } from './room-selector';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RoomSelectionsProps {
  pack: Pack;
}

export function RoomSelections({ pack }: RoomSelectionsProps) {
  const router = useRouter();
  const [selections, setSelections] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const maxSelections = pack.name === 'Pack Duo' ? 2 : 3;

  const handleSelection = (room: Room, optionId: string, quantity: number) => {
    setSelections(prev => {
      // Remove all existing selections for this option
      const filtered = prev.filter(id => id !== optionId);
      
      // Add new selections based on quantity
      const newSelections = Array(quantity).fill(optionId);
      const updatedSelections = [...filtered, ...newSelections];
      
      // Show dialog when reaching max selections
      if (updatedSelections.length === maxSelections) {
        setShowDialog(true);
      }
      
      return updatedSelections;
    });
  };

  const handleNext = () => {
    if (selections.length !== maxSelections) return;
    
    const params = new URLSearchParams();
    selections.forEach((selection, index) => {
      params.set(`selection${index + 1}`, selection);
    });
    
    const packType = pack.name === 'Pack Duo' ? 'duo' : 'trio';
    router.push(`/packs/${packType}/options?${params.toString()}`);
  };

  const getRoomSelectionCount = (room: Room) =>
    selections.filter(id => 
      ROOM_OPTIONS[room].some(option => option.id === id)
    ).length;

  return (
    <div className="space-y-12">
      <Alert>
        <AlertTitle>Configuration de votre {pack.name}</AlertTitle>
        <AlertDescription>
          Sélectionnez {maxSelections} pièces au total. Vous pouvez choisir plusieurs fois la même pièce.
          <p className="mt-2 font-medium">
            {selections.length} sur {maxSelections} pièces sélectionnées
          </p>
        </AlertDescription>
      </Alert>

      {['salon', 'salle-a-manger', 'chambre'].map((room) => (
        <div key={room} className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold capitalize">
              {room.replace(/-/g, ' ')}
            </h2>
            <Badge variant="outline" className="text-[#FE6022]">
              {getRoomSelectionCount(room as Room)} sélection(s)
            </Badge>
          </div>
          <RoomSelector
            options={ROOM_OPTIONS[room as Room]}
            selectedIds={selections}
            onSelect={(id, quantity) => handleSelection(room as Room, id, quantity)}
            roomType={room as Room}
            maxSelections={maxSelections}
            currentSelections={selections.length}
          />
        </div>
      ))}

      <div className="flex justify-end pt-8">
        <Button
          onClick={handleNext}
          disabled={selections.length !== maxSelections}
          size="lg"
        >
          Choisir les options
        </Button>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configuration terminée</DialogTitle>
            <DialogDescription>
              Vous avez sélectionné {maxSelections} pièces pour votre {pack.name}. 
              Souhaitez-vous passer aux options additionnelles ou modifier votre sélection ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="sm:order-1"
            >
              Modifier ma sélection
            </Button>
            <Button 
              onClick={handleNext}
              className="sm:order-2"
            >
              Passer aux options
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}