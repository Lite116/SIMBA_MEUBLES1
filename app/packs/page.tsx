import { Offers } from '@/components/sections/offers';

// Force static generation for better performance
export const dynamic = 'force-static';

export default function PacksPage() {
  return (
    <main>
      <div className="pt-16">
        <Offers />
      </div>
    </main>
  );
}