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
        <h2 className="text-xl font-bold text-center mb-2">🎉 Soldes exceptionnelles !</h2>
        
        <div className="text-4xl font-extrabold text-[#FE6022] text-center mb-6 animate-bounce-custom">
          3 mensualités offertes !!!
        </div>
        <p className="text-center text-gray-700 mb-4 text-sm">
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
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-20px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-10px); }
          80% { transform: translateY(0); }
        }
        .animate-bounce-custom {
          animation: bounce-custom 1.2s infinite;
        }
      `}</style>
    </div>
  );
} 