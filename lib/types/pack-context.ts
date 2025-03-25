import { Pack } from './pack';
import { RoomSelection } from './selection';
import { AdditionalSelection } from './additional-options';

export interface PackContextState {
  selectedPack: Pack | null;
  roomSelections: RoomSelection[];
  additionalSelections: AdditionalSelection[];
  totalMonthly: number;
}

export interface PackContextActions {
  setPackData: (
    pack: Pack,
    roomSels: RoomSelection[],
    additionalSels: AdditionalSelection[]
  ) => void;
  clearPackData: () => void;
}

export type PackContextType = PackContextState & PackContextActions;