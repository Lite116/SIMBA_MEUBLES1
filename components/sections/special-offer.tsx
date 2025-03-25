import Image from "next/image";
import Link from "next/link";
import { Palette, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SpecialOffer() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-1 rounded-2xl shadow-2xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/packs/trio" className="block group">
              <Image
                src="/images/home/special-offer.jpeg"
                alt="Modern Interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-colors duration-300 group-hover:from-black/40" />
            </Link>
          </div>

          {/* Content Section */}
          <div
            className="lg:pl-8 order-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Des espaces qui vous ressemblent
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Meublez votre salon, salle à manger et chambre avec notre offre
                exceptionnelle avec notre Pack Trio
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div
                className="bg-gray-50 p-6 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#FE6022]/10 rounded-lg shrink-0">
                    <CreditCard className="h-6 w-6 text-[#FE6022]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Financement 0%</h3>
                    <p className="text-gray-600">Sans frais sur 30 mois</p>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#FE6022]/10 rounded-lg shrink-0">
                    <Palette className="h-6 w-6 text-[#FE6022]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Large choix de meubles
                    </h3>
                    <p className="text-gray-600">
                      Pour tous les styles et budgets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center lg:text-left space-y-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <p className="text-4xl sm:text-5xl font-bold text-[#FE6022]">
                    95€
                  </p>
                  <p className="text-xl text-gray-600">/mois</p>
                </div>
                <p className="text-gray-600 mt-2">
                  Pendant 30 mois sans intérêts • Prix total : 2850€
                </p>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto px-8">
                <Link href="/packs/trio">Je découvre le Pack Trio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
