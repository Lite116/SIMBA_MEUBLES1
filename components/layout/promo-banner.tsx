'use client';

import { X } from 'lucide-react';
import { usePromoBanner } from './promo-banner-context';

export function PromoBanner() {
  const { visible, setVisible } = usePromoBanner();

  const handleClose = () => {
    setVisible(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('promoBannerClosed', 'true');
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-[#dc2626] text-white overflow-hidden h-10 flex items-center justify-center shadow-lg">
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <button onClick={handleClose} aria-label="Fermer le bandeau" className="p-1 hover:bg-white/20 rounded">
          <X className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="w-full h-full flex items-center">
        <div className="whitespace-nowrap animate-marquee text-lg font-bold tracking-widest text-white uppercase drop-shadow">
          SOLDES-SOLDES-SOLDES 3 MENSUALITES REMBOURSEES !!!!!
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 100vw;
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 16s;
          }
        }
      `}</style>
    </div>
  );
} 