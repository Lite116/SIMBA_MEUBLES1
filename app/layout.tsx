import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import { Footer } from '@/components/layout/footer';
import { PackProvider } from '@/lib/contexts/pack-context';
import AosProvider from '@/components/providers/aos-provider';
import { CookieBanner } from '@/components/cookie/cookie-banner';
import { SocialButtons } from '@/components/ui/social-buttons';
import { MetaPixel } from '@/components/providers/meta-pixel';
import { PromoBanner } from '@/components/layout/promo-banner';
import { Header } from '@/components/layout/header';
import { PromoBannerProvider } from '@/components/layout/promo-banner-context';
import { SalePopup } from '@/components/ui/SalePopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  icons: SITE_CONFIG.icons,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <SalePopup />
        <PackProvider>
          <AosProvider>
            <PromoBannerProvider>
              <PromoBanner />
              <Header />
              <div className="flex-1">
                {children}
              </div>
            </PromoBannerProvider>
            <Footer />
            <CookieBanner />
            <SocialButtons />
            <MetaPixel />
          </AosProvider>
        </PackProvider>
      </body>
    </html>
  );
}