'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  /** compact: carte plus légère pour colonne latérale ou flux serré */
  variant?: 'default' | 'compact';
  className?: string;
};

export function CreditLegalNotice({
  variant = 'default',
  className,
}: Props) {
  const [devReady, setDevReady] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (isDev) setDevReady(true);
  }, [isDev]);

  // En dev : même HTML SSR + 1er rendu client (évite les faux positifs si .next / HMR est désynchronisé).
  // En prod : contenu légal toujours dans le HTML initial.
  if (isDev && !devReady) {
    return (
      <section
        className={cn('mt-2 sm:mt-4', className)}
        aria-label="Mentions légales crédit"
        aria-busy="true"
      >
        <div
          className={cn(
            'rounded-2xl border bg-slate-50/90 border-slate-200/80 shadow-sm',
            variant === 'compact' ? 'min-h-[200px] p-4' : 'min-h-[240px] p-5 sm:p-6'
          )}
        />
      </section>
    );
  }

  return (
    <section className={cn('mt-2 sm:mt-4', className)} aria-label="Mentions légales crédit">
      <div
        className={cn(
          'rounded-2xl border bg-slate-50/90 border-slate-200/80',
          'text-gray-800 shadow-sm',
          variant === 'compact' ? 'p-4 text-xs leading-relaxed' : 'p-5 sm:p-6 text-sm leading-relaxed'
        )}
      >
        <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Information crédit
        </h4>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900">
              Prêt à tempérament – Montant du crédit : 2850 €
            </p>
            <p className="text-gray-700">
              Durée : <strong>30 mois</strong> · Mensualité : <strong>95 €</strong>
            </p>
            <p className="text-gray-700">
              TAEG : <strong>0 %</strong> · Taux débiteur annuel <strong>fixe</strong> : 0
              % · Montant total dû : 2850 €
            </p>
          </div>

          <p className="font-bold text-gray-900 text-xs sm:text-sm leading-snug">
            ATTENTION, EMPRUNTER DE L&apos;ARGENT COÛTE AUSSI DE L&apos;ARGENT.
          </p>

          <div className="text-gray-700 space-y-1">
            <p className="font-medium text-gray-900">Meubles Family SRL – BE0679.866.565</p>
            <p>Intermédiaire de Crédit</p>
          </div>

          <div className="pt-2 border-t border-slate-200/80 space-y-1">
            <p className="font-semibold text-gray-900 underline underline-offset-2 decoration-slate-400">
              Autorité de surveillance en matière de crédit :
            </p>
            <p>Service public fédéral Economie, P.M.E., Classes moyennes et Energie</p>
            <p>Rue du Progrès, 50 à 1210 Bruxelles</p>
            <p>Téléphone : 0800 120 33</p>
            <p>
              E-mail :{' '}
              <a
                href="mailto:info.eco@economie.fgov.be"
                className="text-[#FE6022] hover:underline font-medium"
              >
                info.eco@economie.fgov.be
              </a>
            </p>
            <p>
              Internet :{' '}
              <a
                href="https://economie.fgov.be"
                className="text-[#FE6022] hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://economie.fgov.be
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
