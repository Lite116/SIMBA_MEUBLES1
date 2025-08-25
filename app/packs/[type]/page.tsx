import { Header } from '@/components/layout/header';
import { RoomSelections } from '@/components/pack/room-selections';
import { SITE_CONFIG } from '@/lib/constants';
import { PackType } from '@/lib/types';
import { generatePackTypeParams } from '@/lib/utils/route-utils';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return generatePackTypeParams();
}

export default async function PackConfigPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const packType = type as PackType;
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
            Configuration de votre {pack.name}
          </h1>
          <RoomSelections pack={pack} />
        </div>
      </div>
    </main>
  );
}