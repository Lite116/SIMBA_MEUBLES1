import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  animationDelay?: number;
}

export function SectionHeader({
  title,
  description,
  className,
  align = 'center',
  animationDelay = 0,
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={animationDelay}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}