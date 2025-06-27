'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export function SalePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const closed = sessionStorage.getItem('salePopupClosed');
      if (!closed) {
        const timer = setTimeout(() => setOpen(true), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('salePopupClosed', 'true');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-8 flex flex-col items-center animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Fermer le popup"
        >
          <X className="h-6 w-6" />
        </button>
        <Image
          src="/images/soldes.png"
          alt="Soldes exceptionnelles"
          width={420}
          height={280}
          className="mb-6 rounded w-full max-w-md sm:w-[420px] sm:h-[280px] object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-center mb-2">🎉 Soldes exceptionnelles !</h2>
        <p className="text-center text-gray-700 mb-6 text-sm">
          Profitez de 3 mensualités gratuites sur tous les packs de meubles.
        </p>
        <Link
          href="/packs"
          className="inline-block bg-[#FE6022] text-white font-semibold px-8 py-3 rounded hover:bg-[#e5531a] transition text-base"
          onClick={handleClose}
        >
          Découvrir les packs
        </Link>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </div>
  );
} 