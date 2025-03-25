import { Header } from '@/components/layout/header';
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

export default function Home() {
  return (
    <main>
      <Header />
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