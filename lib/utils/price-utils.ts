import { Pack } from '@/lib/types';
import { AdditionalSelection } from '@/lib/types/additional-options';
import { ADDITIONAL_OPTIONS } from '@/lib/constants/additional-options';

export function calculateTotalMonthly(
  pack: Pack, 
  additionalSelections: AdditionalSelection[]
): number {
  const baseMonthly = pack.price;
  const additionalTotal = additionalSelections.reduce((sum, sel) => {
    const option = Object.values(ADDITIONAL_OPTIONS)
      .flatMap(cat => cat.items)
      .find(opt => opt.id === sel.id);
    return sum + (option ? option.price * sel.quantity : 0);
  }, 0);
  
  return Math.round((baseMonthly + (additionalTotal / pack.duration)) * 100) / 100;
}