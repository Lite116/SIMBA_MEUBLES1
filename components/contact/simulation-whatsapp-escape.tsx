'use client';

import Link from 'next/link';
import { pushGtmEvent } from '@/lib/gtm';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  packLabel: string;
  className?: string;
  /** Mise en avant légère pour rappel en milieu de parcours */
  emphasis?: boolean;
};

/**
 * Sortie vers WhatsApp avec message pré-rempli (simulation crédit).
 */
export function SimulationWhatsAppEscape({
  href,
  packLabel,
  className,
  emphasis = false,
}: Props) {
  return (
    <div
      className={cn(
        'rounded-3xl border px-5 py-5 sm:px-6 sm:py-5 shadow-sm',
        emphasis
          ? 'border-[#FE6022]/25 bg-gradient-to-br from-[#FE6022]/[0.07] to-white'
          : 'border-dashed border-gray-200/90 bg-gray-50/80',
        className
      )}
    >
      <p className="text-sm text-gray-700 text-center leading-relaxed mb-4 max-w-md mx-auto">
        Pas envie de remplir tout le formulaire ? Contactez-nous sur WhatsApp
      </p>
      <div className="flex justify-center">
        <Button
          variant={emphasis ? 'default' : 'outline'}
          size="sm"
          className={cn(
            'rounded-xl',
            emphasis && 'bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 shadow-md shadow-green-600/15'
          )}
          asChild
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushGtmEvent('whatsapp_click', {
                location: 'simulation_form',
                pack: packLabel,
              })
            }
          >
            Ouvrir WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  );
}
