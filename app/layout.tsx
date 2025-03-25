import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import { Footer } from '@/components/layout/footer';
import { PackProvider } from '@/lib/contexts/pack-context';
import AosProvider from '@/components/providers/aos-provider';
import { CookieBanner } from '@/components/cookie/cookie-banner';
import { SocialButtons } from '@/components/ui/social-buttons';

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
        <PackProvider>
          <AosProvider>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <CookieBanner />
            <SocialButtons />
          </AosProvider>
        </PackProvider>
      </body>
    </html>
  );
}