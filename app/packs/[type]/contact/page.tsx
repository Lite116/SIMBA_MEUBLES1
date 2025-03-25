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

export default function ContactPage({
  params,
  searchParams,
}: {
  params: { type: string };
  searchParams: { [key: string]: string };
}) {
  const packType = params.type as PackType;
  const pack = SITE_CONFIG.packs[packType];

  if (!pack) {
    notFound();
  }

  // Parse selections from URL
  const { roomSelections } = parseSelections(searchParams);

  // Redirect if no selections are present
  if (roomSelections.length === 0) {
    redirect(`/packs/${packType}`);
  }

  return (
    <main>
      <Header />
      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Finaliser votre demande
          </h1>
          <div className="bg-white p-6 sm:p-8 rounded-lg border">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}