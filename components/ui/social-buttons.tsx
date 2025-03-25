'use client';

import { WhatsappIcon } from './icons/whatsapp-icon';
import { FacebookIcon } from './icons/facebook-icon';
import { InstagramIcon } from './icons/instagram-icon';
import { TiktokIcon } from './icons/tiktok-icon';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: WhatsappIcon,
    href: 'https://wa.me/32471930694?text=Bonjour%2C%20je%20souhaiterais%20avoir%20plus%20d%27information', 
    bgColor: 'bg-[#25D366]',
    className: 'block'  // Affiche WhatsApp sur mobile
  },
  {
    name: 'Facebook',
    icon: FacebookIcon,
    href: 'https://www.facebook.com/simbameubles/',
    bgColor: 'bg-[#1877F2]',
    className: 'hidden sm:block'  // Cache Facebook sur mobile
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/simbameubles/',
    bgColor: 'bg-[#E4405F]',
    className: 'hidden sm:block'  // Cache Instagram sur mobile
  },
  {
    name: 'TikTok',
    icon: TiktokIcon,
    href: 'https://www.tiktok.com/@simbameuble.be',
    bgColor: 'bg-[#000000]',
    className: 'hidden sm:block'  // Cache TikTok sur mobile
  },
];

export function SocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.bgColor} text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center ${social.className}`}
          aria-label={`Nous suivre sur ${social.name}`}
        >
          <social.icon className="w-8 h-8 sm:w-6 sm:h-6" />
        </a>
      ))}
    </div>
  );
}
