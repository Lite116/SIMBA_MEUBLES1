import { Header } from '@/components/layout/header';
import { ContactForm } from '@/components/contact/contact-form';
import { SITE_CONFIG } from '@/lib/constants';
import { PackType } from '@/lib/types';
import { generatePackTypeParams } from '@/lib/utils/route-utils';
import { parseSelections } from '@/lib/utils/selection-parser';
import { notFound, redirect } from 'next/navigation';

export function generateStaticParams() {
  return generatePackTypeParams();
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { type } = await params;
  const resolvedSearchParams = await searchParams;
  const packType = type as PackType;
  const pack = SITE_CONFIG.packs[packType];

  if (!pack) {
    notFound();
  }

  // Parse selections from URL
  const { roomSelections } = parseSelections(resolvedSearchParams);

  // Redirect if no selections are present
  if (roomSelections.length === 0) {
    redirect(`/packs/${packType}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F4] via-white to-[#F4F6F8]">
      <Header />
      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FE6022] mb-3 text-center">
            Presque terminé
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 text-center leading-tight">
            Finaliser votre{' '}
            <span className="text-[#FE6022]">demande</span>
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-lg mx-auto">
            Complétez le dossier crédit — votre configuration est déjà enregistrée.
          </p>
          <div className="mt-10 relative rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_24px_70px_-18px_rgba(15,23,42,0.12)] backdrop-blur-sm p-1 sm:p-1.5">
            <div className="rounded-[1.65rem] bg-white/95 px-5 py-8 sm:px-8 sm:py-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}