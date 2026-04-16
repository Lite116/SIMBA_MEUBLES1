import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactMap } from '@/components/contact/contact-map';

export const metadata: Metadata = {
  title: 'Faire une simulation - Simba Meubles | Financement meuble TAEG 0 %',
  description:
    'Simulation gratuite et sans engagement pour votre financement meubles TAEG 0 %. Réponse rapide.',
  openGraph: {
    title: 'Faire une simulation - Simba Meubles | Financement meuble TAEG 0 %',
    description:
      'Vérifiez votre éligibilité en ligne. Financement meubles TAEG 0 %.',
  },
};

// Force static generation for better performance
export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F4] via-white to-[#F4F6F8]">
      {/* halo décoratif discret */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#FE6022]/[0.07] blur-3xl" />
        <div className="absolute top-1/3 left-[-15%] h-[320px] w-[320px] rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FE6022] mb-3">
              Financement TAEG 0&nbsp;%
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-[1.15]">
              Faire une{' '}
              <span className="text-[#FE6022]">simulation</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Parcours court, réponse rapide — puis complétez votre dossier seulement
              si vous le souhaitez.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-start">
            <div className="order-1 lg:order-2">
              <div className="relative rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_24px_70px_-18px_rgba(15,23,42,0.12)] backdrop-blur-sm p-1 sm:p-1.5">
                <div className="rounded-[1.65rem] bg-white/95 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}