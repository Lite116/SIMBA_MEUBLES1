'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useCookieConsent, CookieConsent } from '@/lib/hooks/use-cookie-consent';

interface CookieSettingsProps {
  open: boolean;
  onClose: () => void;
}

const cookieOptions = [
  {
    id: 'functional',
    title: 'Cookies fonctionnels',
    description: 'Nécessaires au bon fonctionnement du site',
    required: true,
  },
  {
    id: 'analytics',
    title: 'Cookies analytiques',
    description: 'Nous aident à comprendre comment vous utilisez notre site',
    required: false,
  },
  {
    id: 'marketing',
    title: 'Cookies marketing',
    description: 'Permettent de vous proposer des publicités pertinentes',
    required: false,
  },
];

export function CookieSettings({ open, onClose }: CookieSettingsProps) {
  const { consent, updateConsent, acceptAll, rejectAll } = useCookieConsent();

  const handleSave = () => {
    const newConsent: CookieConsent = {
      functional: true, // Always required
      analytics: consent?.analytics || false,
      marketing: consent?.marketing || false,
    };
    updateConsent(newConsent);
    onClose();
  };

  const handleToggle = (id: keyof CookieConsent) => {
    if (!consent || id === 'functional') return;
    updateConsent({
      ...consent,
      [id]: !consent[id],
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Préférences des cookies</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {cookieOptions.map((option) => (
            <div key={option.id} className="flex items-start space-x-4">
              <Checkbox
                id={option.id}
                checked={option.required || consent?.[option.id as keyof CookieConsent]}
                disabled={option.required}
                onCheckedChange={() => handleToggle(option.id as keyof CookieConsent)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <Label htmlFor={option.id} className="text-sm font-medium">
                  {option.title}
                  {option.required && (
                    <span className="text-xs text-gray-500 ml-2">(Requis)</span>
                  )}
                </Label>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <Button variant="outline" onClick={rejectAll}>
            Tout refuser
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" onClick={handleSave}>
              Enregistrer
            </Button>
            <Button onClick={acceptAll}>
              Tout accepter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}