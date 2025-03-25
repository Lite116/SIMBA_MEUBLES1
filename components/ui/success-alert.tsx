'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function SuccessAlert() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted === 'true') {
      setShow(true);
      localStorage.removeItem('formSubmitted');
    }
  }, []);

  if (!show) return null;

  return (
    <Alert className="fixed bottom-4 right-4 w-auto max-w-md z-50 bg-green-50 border-green-200 text-green-800">
      <div className="flex items-center justify-between">
        <AlertDescription className="text-sm">
          Votre demande a bien été envoyée ! Nous vous recontacterons rapidement.
        </AlertDescription>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-green-800 hover:text-green-900 hover:bg-green-100"
          onClick={() => setShow(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Alert>
  );
}