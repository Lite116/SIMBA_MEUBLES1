import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { SITE_CONFIG } from '@/lib/constants';
import { Footer } from '@/components/layout/footer';
import { PackProvider } from '@/lib/contexts/pack-context';
import { CookieBanner } from '@/components/cookie/cookie-banner';
import { SocialButtons } from '@/components/ui/social-buttons';
import { MetaPixel } from '@/components/providers/meta-pixel';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  icons: SITE_CONFIG.icons,
  other: SITE_CONFIG.other,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full flex flex-col`}>
        <PackProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <CookieBanner />
          <SocialButtons />
          <MetaPixel />
          <Analytics />
        </PackProvider>
      </body>
    </html>
  );
}