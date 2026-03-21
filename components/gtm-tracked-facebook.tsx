'use client';

import type { ReactNode } from 'react';
import { pushGtmEvent } from '@/lib/gtm';

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  /** Où le lien est affiché (pour GTM) */
  location: string;
};

/**
 * Lien Facebook — envoie messenger_click (page Facebook / Messenger côté GTM).
 */
export function GtmTrackedFacebookLink({
  href,
  className,
  children,
  location,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        pushGtmEvent('messenger_click', {
          location,
          channel: 'facebook_page',
        })
      }
    >
      {children}
    </a>
  );
}
