import { Header } from '@/components/layout/header';
import { Offers } from '@/components/sections/offers';

export default function PacksPage() {
  return (
    <main>
      <Header />
      <div className="pt-16">
        <Offers />
      </div>
    </main>
  );
}