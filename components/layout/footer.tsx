import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FEEDEC] text-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-lg text-center italic text-[#FE6022] mb-8">
          Emprunter de l&apos;argent coûte aussi de l&apos;argent.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold mb-4">
              <span className="text-[#FE6022]">SIMBA</span> MEUBLES
            </h3>
            <p className="text-lg mb-4">
  Solutions complètes d&apos;ameublement avec financement à 0% sur 30 mois.
</p>
<p className="text-sm mb-4">
  12 Rue de tirlemont<br />
  4280 Hannut
</p>
<p className="text-sm">
  TVA 0679 866 565
</p>

            <div className="flex space-x-4 mt-4">
              <Link 
                href="https://www.facebook.com/simbameubles/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FE6022] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/simbameubles/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FE6022] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@simbameuble.be" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FE6022] transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="h-5 w-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FE6022] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/packs" className="hover:text-[#FE6022] transition-colors">
                  Nos Packs
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="hover:text-[#FE6022] transition-colors">
                  Contact
                </Link>
              </li> */}
              <li>
                <Link href="/mentions-legales" className="hover:text-[#FE6022] transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales" className="hover:text-[#FE6022] transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-[#FE6022] transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="mailto:contact@simbameuble.fr"
                  className="flex items-center gap-2 hover:text-[#FE6022] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@simbameuble.be
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+32473590151"
                  className="flex items-center gap-2 hover:text-[#FE6022] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +32 471 93 06 94
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Simba Meubles. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
