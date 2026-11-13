import { RESTAURANT } from '../data/restaurant';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${RESTAURANT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
