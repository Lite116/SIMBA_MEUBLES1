'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function Offers() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Nos Packs Meubles
          </h2>
        </div>
        <div 
          className="mx-auto max-w-2xl text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-lg text-gray-800">
            Dans le pack vous avez 1 salon, 1 chambre (lit, garde robe, 2 chevets) et 1 salle à manger (bahut, table, vitrine) 🤩
          </p>
          <p className="mt-2 text-lg font-medium text-[#FE6022]">
            C&apos;est sans acompte, 95€/30 mois à 0%
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(SITE_CONFIG.packs).map(([key, pack], index) => (
            <div 
              key={key}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#FE6022]">{pack.price}€</span>
                    <span className="text-gray-600">/mois</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Pendant {pack.duration} mois sans intérêts
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#FE6022]" />
                    </div>
                    <span className="text-gray-600">
                      {pack.name === 'Pack Duo' ? '2 pièces au choix' : '3 pièces au choix'}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#FE6022]" />
                    </div>
                    <span className="text-gray-600">
                      Salon, salle à manger ou chambre
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#FE6022]" />
                    </div>
                    <span className="text-gray-600">
                      Options additionnelles disponibles
                    </span>
                  </li>
                </ul>

                <Button asChild className="w-full">
                  <Link href={`/packs/${key}`}>
                    Choisir ce pack
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}