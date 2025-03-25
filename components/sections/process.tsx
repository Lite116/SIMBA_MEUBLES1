import { Check, PackageSearch, Settings, Send } from 'lucide-react';

const steps = [
  {
    title: 'Choisissez votre pack',
    description: 'Sélectionnez le pack Duo ou Trio selon vos besoins',
    icon: Check,
  },
  {
    title: 'Sélectionnez vos meubles',
    description: 'Personnalisez chaque pièce avec nos collections',
    icon: PackageSearch,
  },
  {
    title: 'Ajoutez des options',
    description: 'Complétez votre intérieur avec nos accessoires',
    icon: Settings,
  },
  {
    title: 'Finalisez votre demande',
    description: 'Remplissez le formulaire et nous vous recontactons',
    icon: Send,
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un processus simple en 4 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.5rem] left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px]">
                  <div 
                    className="w-full h-full bg-gray-200"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay={(index + 1) * 200}
                  />
                </div>
              )}

              {/* Step content */}
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-2xl bg-[#FE6022]/10 flex items-center justify-center mb-6"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay={index * 200 + 400}
                >
                  <step.icon className="h-10 w-10 text-[#FE6022]" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-[250px] mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}