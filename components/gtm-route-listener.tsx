'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pushGtmEvent } from '@/lib/gtm';

/**
 * Envoie un événement à chaque changement de route (Next.js client-side)
 * pour que GTM voie les « pages » même sans rechargement complet.
 */
function GtmRouteListenerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.toString();
    const pagePath = q ? `${pathname}?${q}` : pathname;
    const pageUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}${pagePath}`
        : pagePath;

    pushGtmEvent('spa_page_view', {
      page_path: pagePath,
      page_location: pageUrl,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GtmRouteListener() {
  return (
    <Suspense fallback={null}>
      <GtmRouteListenerInner />
    </Suspense>
  );
}
