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
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  icons: SITE_CONFIG.icons,
  other: SITE_CONFIG.other,
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
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
          <SpeedInsights />
        </PackProvider>
      </body>
    </html>
  );
}