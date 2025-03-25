import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Comment fonctionne le financement à 0% ?",
    answer: "Notre financement vous permet d'étaler votre paiement sur 30 mois sans aucun frais ni intérêts. Par exemple, pour un Pack Trio à 2850€, vous ne payez que 95€ par mois."
  },
  {
    question: "Quel est le délai de livraison ?",
    answer: "La livraison est effectuée sous 2 à 3 semaines après validation de votre commande. Nous vous contactons pour planifier une date de livraison qui vous convient."
  },
  {
    question: "Puis-je personnaliser mon pack ?",
    answer: "Absolument ! Chaque pack propose plusieurs styles de meubles au choix, et vous pouvez ajouter des options complémentaires comme l'éclairage ou des tables d'appoint."
  },
  {
    question: "Quelle est la garantie sur les meubles ?",
    answer: "Tous nos meubles sont garantis 2 ans. Cette garantie couvre les défauts de fabrication et les problèmes structurels."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tout ce que vous devez savoir sur nos packs et services
          </p>
        </div>

        <div 
          className="mx-auto max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="group data-[state=open]:bg-[#FEEDEC] transition-colors duration-300"
              >
                <AccordionTrigger 
                  className="text-left group-hover:bg-[#FEEDEC] rounded-lg px-4 transition-colors duration-300 [&[data-state=open]>div]:bg-[#FEEDEC] [&>div]:transition-colors [&>div]:duration-300 [&>svg]:transition-transform [&>svg]:duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}