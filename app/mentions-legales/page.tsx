import { Header } from '@/components/layout/header';
import { LegalContent } from '@/components/legal/legal-content';

export default function LegalPage() {
  return (
    <main>
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
          <LegalContent />
        </div>
      </div>
    </main>
  );
}