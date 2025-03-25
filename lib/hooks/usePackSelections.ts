'use client';

import { useState, useCallback } from 'react';
import { Room, RoomSelection, SelectionCounter, Pack } from '@/lib/types';

export function usePackSelections(pack: Pack) {
  const [selections, setSelections] = useState<RoomSelection[]>([]);
  const maxSelections = pack.name === 'Pack Duo' ? 2 : 3;

  const getCounter = useCallback((): SelectionCounter => {
    const total = selections.reduce((sum, s) => sum + s.quantity, 0);
    const byRoom = selections.reduce((acc, s) => ({
      ...acc,
      [s.type]: (acc[s.type] || 0) + s.quantity
    }), {} as Record<Room, number>);

    return {
      total,
      remaining: maxSelections - total,
      byRoom
    };
  }, [selections, maxSelections]);

  const addSelection = useCallback((room: Room, optionId: string) => {
    setSelections(prev => {
      const counter = getCounter();
      if (counter.total >= maxSelections) return prev;

      return [...prev, { type: room, optionId, quantity: 1 }];
    });
  }, [getCounter, maxSelections]);

  const removeSelection = useCallback((room: Room, optionId: string) => {
    setSelections(prev => 
      prev.filter(s => !(s.type === room && s.optionId === optionId))
    );
  }, []);

  return {
    selections,
    counter: getCounter(),
    maxSelections,
    addSelection,
    removeSelection
  };
}