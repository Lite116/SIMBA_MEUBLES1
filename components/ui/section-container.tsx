import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'brand';
}

export function SectionContainer({
  children,
  className,
  background = 'white',
}: SectionContainerProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    brand: 'bg-[#FEEDEC]',
  };

  return (
    <section className={cn('py-16 sm:py-20 lg:py-24', bgColors[background])}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={className}>
          {children}
        </div>
      </div>
    </section>
  );
}