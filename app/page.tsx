import { Hero } from '@/components/sections/hero';
import { SpecialOffer } from '@/components/sections/special-offer';
import { About } from '@/components/sections/about';
import { Offers } from '@/components/sections/offers';
import { Advantages } from '@/components/sections/advantages';
import { RoomShowcase } from '@/components/sections/room-showcase';
import { Process } from '@/components/sections/process';
import { FAQ } from '@/components/sections/faq';
import { WhatsAppBanner } from '@/components/sections/whatsapp-banner';
import { SuccessAlert } from '@/components/ui/success-alert';

// Force static generation for better performance
export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <SuccessAlert />
      <Hero />
      <SpecialOffer />
      <About />
      <Offers />
      <Advantages />
      <RoomShowcase />
      <Process />
      <FAQ />
      <WhatsAppBanner />
    </main>
  );
}