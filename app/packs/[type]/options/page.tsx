import { Header } from '@/components/layout/header';
import { AdditionalOptionsPage } from '@/components/pack/additional-options-page';
import { SITE_CONFIG } from '@/lib/constants';
import { PackType } from '@/lib/types';
import { generatePackTypeParams } from '@/lib/utils/route-utils';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return generatePackTypeParams();
}

export default function PackOptionsPage({
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

  return (
    <main>
      <Header />
      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Personnalisez votre {pack.name}
          </h1>
          <AdditionalOptionsPage pack={pack} selections={searchParams} />
        </div>
      </div>
    </main>
  );
}