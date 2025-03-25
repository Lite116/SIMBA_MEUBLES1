import { ShieldCheck, Package, Truck, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const advantages = [
  {
    title: 'Paiement sans intérêt',
    description: 'Profitez d\'un paiement échelonné sur 30 mois sans frais supplémentaires',
    icon: ShieldCheck,
  },
  {
    title: 'Large choix de styles',
    description: 'Des meubles adaptés à tous les goûts et à tous les intérieurs',
    icon: Palette,
  },
  {
    title: 'Options personnalisables',
    description: 'Personnalisez votre pack avec des options additionnelles',
    icon: Package,
  },
  {
    title: 'Livraison en option',
    description: 'Service de livraison disponible en Belgique selon vos besoins',
    icon: Truck,
  },
];

export function Advantages() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Pourquoi choisir nos packs ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des solutions complètes pour meubler votre intérieur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="bg-white hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <CardHeader>
                <div 
                  className="w-12 h-12 rounded-lg bg-[#FE6022]/10 flex items-center justify-center mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 200}
                >
                  <advantage.icon className="h-6 w-6 text-[#FE6022]" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}