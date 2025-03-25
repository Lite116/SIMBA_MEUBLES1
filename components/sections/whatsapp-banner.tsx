import Image from 'next/image';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/ui/icons/whatsapp-icon';
import { Button } from '@/components/ui/button';

export function WhatsAppBanner() {
  const message = encodeURIComponent("Bonjour, je souhaiterais avoir plus d'informations");
  const whatsappLink = `https://wa.me/32471930694?text=${message}`;

  return (
    <section id='contact' className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/whatsapp-banner.jpg"
          alt="Contact background"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-[#FE6022]/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Une question ? Contactez-nous !
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions
              </p>
            </div>
            
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="group relative pl-12 bg-white hover:bg-white/90 text-gray-900"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <span className="absolute left-4">
                  <WhatsappIcon className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                </span>
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}