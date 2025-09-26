import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    title: "Notre engagement",
    description: "Nous nous engageons à vous offrir des meubles de qualité à des prix accessibles avec un financement adapté à vos besoins.",
  },
  {
    title: "Notre expertise",
    description: "Plus de 10 ans d'expérience dans l'ameublement nous permettent de vous conseiller au mieux dans vos choix.",
  },
  {
    title: "Notre service",
    description: "Une équipe dédiée vous accompagne de la sélection à la livraison, avec un service client réactif et professionnel.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FEEDEC] rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Section */}
            <div 
              className="max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-8">
                Depuis plus de 10 ans, <span className="text-[#FE6022] font-semibold">SIMBA</span> MEUBLES{' '}
                s&apos;engage à rendre l&apos;ameublement de qualité accessible à tous. Notre mission est de{' '}
                transformer vos espaces de vie en lieux chaleureux et confortables, sans{' '}
                compromis sur la qualité ni sur votre budget.
              </p>

              <div className="space-y-6 mb-8">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="flex gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#FE6022]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in-up">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/packs">
                    Découvrir nos packs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div 
              className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Image
                src="/images/home/about.jpeg"
                alt="Notre équipe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}