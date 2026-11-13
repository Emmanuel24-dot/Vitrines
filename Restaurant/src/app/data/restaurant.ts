// Informations du restaurant : à adapter avant la mise en ligne.
export const RESTAURANT = {
  name: 'Saveurs du Togo',
  tagline: 'Cuisine togolaise faite maison',
  city: 'Lomé',
  address: 'Boulevard du 13 Janvier, Lomé, Togo',
  phone: '+228 90 00 00 00',
  /** Numéro WhatsApp au format international, sans "+" ni espaces. */
  whatsapp: '22890000000',
  email: 'contact@saveursdutogo.tg',
  hours: [
    { days: 'Lundi – Vendredi', time: '10h00 – 22h00' },
    { days: 'Samedi', time: '10h00 – 23h00' },
    { days: 'Dimanche', time: '12h00 – 21h00' },
  ],
  delivery: {
    fee: 1000,
    freeFrom: 15000,
    zone: 'Grand Lomé',
  },
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
  },
} as const;
