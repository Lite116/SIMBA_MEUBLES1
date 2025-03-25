'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { Pack } from '@/lib/types/pack';
import { RoomSelection } from '@/lib/types/selection';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { PackContextType, PackContextState } from '@/lib/types/pack-context';
import { calculateTotalMonthly } from '@/lib/utils/price-utils';

const initialState: PackContextState = {
  selectedPack: null,
  roomSelections: [],
  additionalSelections: [],
  totalMonthly: 0,
};

const PackContext = createContext<PackContextType>({
  ...initialState,
  setPackData: () => {},
  clearPackData: () => {},
});

export function PackProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PackContextState>(initialState);

  const setPackData = useCallback((
    pack: Pack,
    roomSels: RoomSelection[],
    additionalSels: AdditionalSelection[]
  ) => {
    const totalMonthly = calculateTotalMonthly(pack, additionalSels);
    setState({
      selectedPack: pack,
      roomSelections: roomSels,
      additionalSelections: additionalSels,
      totalMonthly,
    });
  }, []);

  const clearPackData = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <PackContext.Provider 
      value={{ 
        ...state,
        setPackData,
        clearPackData,
      }}
    >
      {children}
    </PackContext.Provider>
  );
}

export const usePackContext = () => {
  const context = useContext(PackContext);
  if (!context) {
    throw new Error('usePackContext must be used within a PackProvider');
  }
  return context;
};