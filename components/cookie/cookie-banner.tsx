'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CookieSettings } from './cookie-settings';
import { useCookieConsent } from '@/lib/hooks/use-cookie-consent';

export function CookieBanner() {
  const { consent, acceptAll, isLoading } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);

  if (isLoading || consent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Vous pouvez personnaliser vos préférences ou accepter tous les cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(true)}
            >
              Personnaliser
            </Button>
            <Button 
              size="sm"
              onClick={acceptAll}
            >
              Tout accepter
            </Button>
          </div>
        </div>
      </div>

      <CookieSettings
        open={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </div>
  );
}