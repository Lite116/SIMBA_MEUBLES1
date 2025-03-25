import { SelectionCounter } from '@/lib/types';
import { Progress } from '@/components/ui/progress';

interface SelectionProgressProps {
  counter: SelectionCounter;
  maxSelections: number;
}

export function SelectionProgress({ counter, maxSelections }: SelectionProgressProps) {
  const progress = (counter.total / maxSelections) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{counter.total} sur {maxSelections} sélections</span>
        <span>{counter.remaining} restantes</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}