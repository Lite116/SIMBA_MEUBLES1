import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactMap } from '@/components/contact/contact-map';

export const metadata: Metadata = {
  title: 'Contact - Simba Meubles | Financement meuble à 0%',
  description: 'Contactez Simba Meubles pour toute question sur nos packs meubles et notre financement à 0%. Service client disponible du lundi au samedi de 9h à 19h.',
  openGraph: {
    title: 'Contact - Simba Meubles | Financement meuble à 0%',
    description: 'Contactez Simba Meuble pour toute question sur nos packs meubles et notre financement à 0%. Service client disponible du lundi au samedi de 9h à 19h.',
  },
};

// Force static generation for better performance
export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <main>
      <div className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Contactez-nous
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16">
            {/* Form comes first on mobile and tablet */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Contact info comes second on mobile and tablet */}
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}