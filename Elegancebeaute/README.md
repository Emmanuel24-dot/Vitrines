# Élégance Beauty — Site vitrine

Site vitrine premium pour un institut de beauté à Lomé, Togo. HTML5 / CSS3 / JavaScript vanilla, sans dépendance à un build tool — prêt à héberger tel quel.

## 📁 Structure du projet

```
elegance-beauty/
│
├── index.html          → Accueil (hero, à propos, services, pourquoi nous, témoignages, CTA)
├── about.html           → À propos (histoire, valeurs, statistiques)
├── services.html         → Services & tarifs complets par catégorie
├── gallery.html          → Galerie filtrable + lightbox
├── contact.html          → Coordonnées, horaires, formulaire, carte
│
├── assets/
│   ├── css/
│   │   └── style.css     → Design system complet (couleurs, typo, composants, responsive)
│   ├── js/
│   │   ├── config.js      → ⭐ CONFIGURATION CENTRALE — à modifier pour personnaliser le site
│   │   └── main.js        → Comportements (menu, animations, galerie, formulaire → WhatsApp)
│   ├── images/            → (dossier prévu pour héberger vos propres photos en local)
│   └── icons/
│
└── README.md
```

## 🚀 Lancer le projet

Aucune installation n'est nécessaire. Deux options :

**Option 1 — ouvrir directement**
Double-cliquez sur `index.html`, il s'ouvre dans votre navigateur.

**Option 2 — serveur local (recommandé)**
```bash
cd elegance-beauty
python3 -m http.server 8000
```
Puis ouvrez `http://localhost:8000`.

**Mise en ligne** : le site est 100% statique. Vous pouvez le déposer tel quel sur n'importe quel hébergement (Netlify, Vercel, GitHub Pages, ou un hébergement mutuel classique — il suffit d'uploader le dossier via FTP).

## 🎨 Personnaliser pour un nouveau client

### 1. Informations générales — `assets/js/config.js`
C'est le SEUL fichier à modifier pour changer :
- nom de l'entreprise, slogan, description
- téléphone, **numéro WhatsApp** (variable `whatsapp`, format international sans "+", ex. `22890000000`)
- email, adresse, horaires
- liens réseaux sociaux
- lien Google Maps (remplacez `mapsEmbedUrl` par l'URL d'intégration de la vraie adresse du client — dans Google Maps : Partager → Intégrer une carte)
- messages WhatsApp pré-remplis (`whatsappMessages`)

Tous les boutons WhatsApp, numéros de téléphone, emails, adresses et horaires du site se mettent à jour **automatiquement** sur les 5 pages dès que vous modifiez ce fichier.

### 2. Couleurs et typographies — `assets/css/style.css`
Tout le système de couleurs est centralisé en haut du fichier, dans `:root` :
```css
:root {
  --ivory: #fbf6ef;
  --emerald: #1f3c33;   /* couleur principale */
  --brass: #ab8637;     /* couleur secondaire / accent doré */
  --blush: #e7c3b6;     /* accent féminin */
  --ink: #211a15;       /* texte */
}
```
Changez ces valeurs pour adapter l'identité visuelle à un nouveau secteur (restaurant, immobilier, salon de coiffure...). Les polices (`Fraunces` pour les titres, `Manrope` pour le texte) sont chargées via Google Fonts dans le `<head>` de chaque page — remplacez les liens `<link href="https://fonts.googleapis.com/...">` pour changer de typographie.

### 3. Textes et contenus
Les textes (services, témoignages, à propos...) sont directement dans le HTML de chaque page. Recherchez et remplacez le contenu section par section. Tous les éléments à remplacer avant mise en production sont clairement marqués `[À REMPLACER — ...]`.

### 4. Images
Les photos actuelles proviennent d'Unsplash (libres de droits, à usage de démonstration). Pour un vrai client :
1. Placez ses photos dans `assets/images/`
2. Remplacez les `src="https://images.unsplash.com/..."` par `src="assets/images/nom-du-fichier.jpg"`
3. Mettez à jour les attributs `alt` avec une description pertinente (important pour le SEO et l'accessibilité)

### 5. Services et tarifs
Dans `services.html`, chaque prestation est un bloc `.pricing-row` — copiez/collez un bloc pour ajouter un service, supprimez-en pour en retirer.

## 📱 WhatsApp

Le numéro WhatsApp est utilisé partout via l'attribut `data-whatsapp` (bouton flottant, header, CTA, formulaire de contact). Il suffit de modifier `whatsapp` dans `config.js` pour que **tous** les boutons du site pointent vers le bon numéro, avec un message pré-rempli différent selon le contexte (prise de rendez-vous, contact général, formulaire).

Le formulaire de contact n'a pas de backend : à la soumission, les informations saisies sont automatiquement formatées et envoyées vers WhatsApp via un lien `wa.me`. Si vous souhaitez un vrai backend (envoi d'email, base de données, tableau de bord admin), cela nécessite un serveur (Node.js/Express, PHP, etc.) — non inclus dans cette version standard.

## 🧩 Adapter à un autre secteur

Ce socle (structure, composants, système de design) est réutilisable pour n'importe quelle PME à Lomé :
- **Restaurant** : remplacez "Services" par "Menu", la galerie par des photos de plats, ajoutez une section réservation.
- **Salon de coiffure** : gardez la structure Services/Galerie/Témoignages telle quelle.
- **Agence immobilière** : remplacez les cartes de service par des fiches de biens (avec catégorie, prix, surface).
- **Boutique** : transformez la galerie en catalogue produit avec filtre par catégorie (le filtre existe déjà dans `gallery.html`, il suffit de le réutiliser).

## ⚙️ Version premium (fonctionnalités avancées)

Les fonctionnalités suivantes nécessitent un backend et ne sont pas incluses dans cette version statique :
- tableau de bord administrateur (gestion des services, galerie, tarifs sans toucher au code)
- authentification
- catalogue dynamique avec base de données
- statistiques de fréquentation
- formulaire envoyé par email/CRM plutôt que WhatsApp

Pour ces besoins, une stack recommandée : Node.js/Express ou PHP côté serveur, PostgreSQL/MySQL pour la base de données, et un espace d'administration protégé par authentification.

---

© Élégance Beauty — Démonstration réalisée à titre d'exemple commercial. Remplacez toutes les mentions `[À REMPLACER]` avant livraison à un client final.
