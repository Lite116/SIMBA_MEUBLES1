import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Informations de contact</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-[#FE6022]" />
            </div>
            <div>
              <p className="font-medium mb-1">Email</p>
              <a 
                href="mailto:contact@simbameuble.fr"
                className="text-gray-600 hover:text-[#FE6022] transition-colors"
              >
                info@simbameuble.be
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-[#FE6022]" />
            </div>
            <div>
              <p className="font-medium mb-1">Téléphone</p>
              <div className="space-y-1">
                <a 
                  href="tel:+32471930694"
                  className="block text-gray-600 hover:text-[#FE6022] transition-colors"
                >
                  +32 471 93 06 94
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-[#FE6022]" />
            </div>
            <div>
              <p className="font-medium mb-1">Adresse</p>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600">
                    Rue de Tirlemont 12<br />
                    4280 Hannut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Suivez-nous</h2>
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/simbameubles/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center hover:bg-[#FE6022]/20 transition-colors"
          >
            <svg className="h-5 w-5 text-[#FE6022]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/simbameubles/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center hover:bg-[#FE6022]/20 transition-colors"
          >
            <svg className="h-5 w-5 text-[#FE6022]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@simbameuble.be"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#FE6022]/10 flex items-center justify-center hover:bg-[#FE6022]/20 transition-colors"
          >
            <svg className="h-5 w-5 text-[#FE6022]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}