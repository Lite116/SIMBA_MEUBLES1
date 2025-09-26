'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const images = [
  {
    src: "/images/home/herolivingroom1.jpeg",
    alt: "Modern living room with grey sofa",
    width: 1920,
    height: 1080
  },
  {
    src: "/images/home/herolivingroom2.jpeg",
    alt: "Elegant living room setup",
    width: 1920,
    height: 1080
  },
  {
    src: "/images/home/herolivingroom3.jpeg",
    alt: "Modern living room with TV",
    width: 1920,
    height: 1080
  }
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate min-h-[85vh]">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-1000",
            index === currentImage ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover brightness-[0.65]"
            priority={index === 0}
            sizes="100vw"
            quality={85}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative flex items-center min-h-[85vh] py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            className="mx-auto max-w-2xl text-center text-white animate-fade-in-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mt-12 animate-fade-in-up-delay-1">
  MEUBLEZ-VOUS <span className="text-[#FE6022]">PAS CHER</span>
</h1>

            <p 
              className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 animate-fade-in-up-delay-2"
            >
              95€ en 30 mois, 0€ d&#39;intérêt et 0€ d&#39;acompte
            </p>
            <div 
              className="mt-8 sm:mt-10 animate-fade-in-up-delay-3"
            >
              <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                <Link href="/packs">
                  Découvrir nos packs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentImage ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}