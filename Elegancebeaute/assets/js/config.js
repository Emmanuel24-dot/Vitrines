/**
 * ============================================================
 *  CONFIGURATION CENTRALE DU SITE — ÉLÉGANCE BEAUTY
 * ============================================================
 *  Modifie UNIQUEMENT ce fichier pour adapter le site à un
 *  nouveau client (nom, contacts, couleurs, textes clés...).
 *  Toutes les pages lisent ces valeurs automatiquement.
 * ============================================================
 */

const siteConfig = {
  // ---- Identité ----
  businessName: "Élégance Beauty",
  shortName: "Élégance",
  slogan: "Révélez votre éclat, cultivez votre confiance.",
  tagline: "Institut de beauté haut de gamme à Lomé",
  description:
    "Institut de beauté premium au cœur de Lomé, spécialisé dans les soins du visage, soins du corps, massages, onglerie, maquillage et coiffure. Une parenthèse de douceur pensée pour vous.",

  // ---- Contact — [À REMPLACER] par les vraies coordonnées du client ----
  phoneDisplay: "+228 90 00 00 00", // [À REMPLACER — numéro de téléphone]
  phoneLink: "+22890000000",
  whatsapp: "22890000000", // [À REMPLACER — numéro WhatsApp, format international sans "+"]
  email: "contact@elegancebeauty.tg", // [À REMPLACER — adresse email]
  address: "Boulevard du 13 Janvier, Quartier Agbalépédogan, Lomé, Togo", // [À REMPLACER — adresse]
  addressShort: "Agbalépédogan, Lomé",

  // ---- Horaires ----
  hours: [
    { day: "Lundi — Vendredi", time: "9h00 — 19h30" },
    { day: "Samedi", time: "9h00 — 20h00" },
    { day: "Dimanche", time: "10h00 — 17h00" },
  ],

  // ---- Réseaux sociaux — [À REMPLACER] ----
  social: {
    instagram: "https://instagram.com/elegancebeauty.tg",
    facebook: "https://facebook.com/elegancebeautytg",
    tiktok: "https://tiktok.com/@elegancebeauty.tg",
  },

  // ---- Carte (Google Maps embed — remplacer par l'adresse réelle) ----
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Lom%C3%A9,+Togo&output=embed",
  mapsLink: "https://maps.google.com/?q=Lomé,Togo",

  // ---- Messages WhatsApp pré-remplis ----
  whatsappMessages: {
    default: "Bonjour Élégance Beauty, je souhaite avoir plus d'informations.",
    booking: "Bonjour, je souhaite prendre rendez-vous pour un soin. Quelles sont vos disponibilités ?",
    contact: "Bonjour, je vous contacte depuis votre site internet.",
  },

  // ---- Année copyright (calculée automatiquement, ne pas modifier) ----
  year: new Date().getFullYear(),
};

/**
 * Construit une URL WhatsApp avec message pré-rempli.
 * @param {string} messageKey - clé dans siteConfig.whatsappMessages
 */
function buildWhatsAppLink(messageKey = "default") {
  const message = siteConfig.whatsappMessages[messageKey] || siteConfig.whatsappMessages.default;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
