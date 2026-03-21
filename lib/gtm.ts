/**
 * Google Tag Manager — dataLayer
 * Conteneur : déployé globalement via app/layout.tsx
 * Événements personnalisés pour triggers GTM / Google Ads :
 * - credit_form_success : formulaire crédit / demande envoyée avec succès
 * - whatsapp_click : clic WhatsApp (location: floating | banner)
 * - messenger_click : clic icône Facebook (Messenger / page — à mapper dans GTM)
 * - pack_choice_click : clic « Choisir ce pack »
 * - pack_room_option : sélection pièce / option du pack (+/-)
 * - pack_additional_option : options additionnelles ou livraison
 * - spa_page_view : navigation client (App Router) pour suivi par URL
 */

export const GTM_ID = 'GTM-KW5RF63P';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushGtmEvent(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
