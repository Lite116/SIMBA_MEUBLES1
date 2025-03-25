import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    title: 'Salon',
    description: 'Un espace de vie élégant et confortable',
    image: "/images/home/room-showcase1.jpeg",
    link: '/packs/duo',
  },
  {
    title: 'Salle à manger',
    description: 'Le lieu de partage par excellence',
    image: "/images/home/room-showcase2.jpeg",
    link: '/packs/duo',
  },
  {
    title: 'Chambre',
    description: 'Votre havre de paix personnel',
    image: '/images/home/room-showcase3.jpeg',
    link: '/packs/trio',
  },
];

export function RoomShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FEEDEC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Des espaces qui vous ressemblent
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Découvrez nos solutions d&apos;ameublement pour chaque pièce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.title}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              className="aspect-[4/3] md:aspect-auto md:h-[300px] lg:h-[400px]"
            >
              <Link 
                href={room.link}
                className="group relative block h-full overflow-hidden rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{room.title}</h3>
                  <p className="text-gray-200 mb-4">{room.description}</p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    Découvrir
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}