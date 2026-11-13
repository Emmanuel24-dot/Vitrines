# IMMOLOMÉ — Site vitrine immobilier premium

Site vitrine statique (HTML / CSS / JavaScript, sans backend) pour une agence immobilière à Lomé, Togo. Conçu comme démonstration commerciale, facilement personnalisable pour une agence cliente réelle.

## 1. Structure du projet

```
immolome/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/        (dossier libre pour vos propres photos)
```

## 2. Lancer le site en local

Aucune installation n'est requise, c'est un site 100 % statique.

- **Le plus simple** : double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.
- **Recommandé** (pour que les chemins relatifs fonctionnent parfaitement) : lancez un petit serveur local depuis le dossier `immolome/` :
  ```bash
  python3 -m http.server 8000
  ```
  puis ouvrez `http://localhost:8000` dans votre navigateur.

## 3. Modifier les informations de l'agence

Tout se passe dans **`assets/js/main.js`**, tout en haut du fichier, dans l'objet `siteConfig` :

```js
const siteConfig = {
  businessName: "ImmoLomé",
  slogan: "Votre partenaire immobilier à Lomé",
  phone: "+228 XX XX XX XX",
  whatsapp: "+228XXXXXXXX",     // sans le "+", format international
  email: "contact@immolome.com",
  address: "Lomé, Togo",
  hours: "Lundi – Samedi, 08h00 – 18h00",
  primaryColor: "#0B1B33",
  secondaryColor: "#B8925A"
};
```

Le nom de l'agence, l'adresse, le téléphone, l'email et les horaires affichés dans les sections **Contact** et **Footer** de `index.html` sont écrits directement dans le HTML — pensez à les mettre à jour aussi à ces deux endroits pour rester cohérent avec `siteConfig`.

## 4. Modifier le numéro WhatsApp

Un seul endroit à modifier : la valeur `whatsapp` dans `siteConfig` (voir ci-dessus). Tous les boutons WhatsApp du site (header, hero, CTA, fiches biens, footer, bouton flottant) utilisent automatiquement ce numéro via la fonction `waLink()`.

Les messages préremplis se trouvent juste en dessous, dans `WA_MESSAGES` :

```js
const WA_MESSAGES = {
  general: "Bonjour ImmoLomé, je souhaite avoir plus d'informations...",
  property: (name) => `Bonjour ImmoLomé, je suis intéressé par le bien "${name}"...`
};
```

## 5. Modifier les couleurs

Les couleurs sont centralisées en haut de **`assets/css/style.css`**, dans `:root` :

```css
:root{
  --navy:  #0B1B33;   /* bleu nuit principal */
  --gold:  #B8925A;   /* accent doré/cuivre */
  --cream: #FAF7F1;   /* fond clair */
  --beige: #EDE3CE;   /* fond secondaire */
  ...
}
```

Changez ces valeurs et l'ensemble du site (boutons, titres, badges, icônes) se met à jour automatiquement.

## 6. Modifier les biens immobiliers

Les biens affichés dans la section **"Nos biens"** sont définis dans `assets/js/main.js`, dans le tableau `properties`. Pour ajouter, modifier ou supprimer un bien, éditez ou dupliquez un objet :

```js
{
  id: "villa-agoe",
  ref: "REF. VL-014",
  name: "Villa contemporaine",
  zone: "Agoè, Lomé",
  type: "vente",           // "vente" ou "location"
  price: "125 000 000 FCFA",
  beds: 4, baths: 3, area: "320 m²",
  img: "chemin/vers/votre-image.jpg",
  desc: "Description détaillée affichée dans la fiche du bien."
}
```

La liste `galleryImages` (juste en dessous) fonctionne sur le même principe pour la section **Galerie**.

## 7. Modifier les images

Toutes les images de démonstration proviennent d'Unsplash (photos libres de droits). Pour les remplacer par vos propres photos :

1. Déposez vos images dans `assets/images/`.
2. Remplacez les URLs Unsplash dans `index.html` (hero, section À propos) et dans `main.js` (biens, galerie) par le chemin local, par exemple : `assets/images/villa-agoe-1.jpg`.

## 8. Personnalisation rapide pour une nouvelle agence cliente

Pour transformer ImmoLomé en site réel pour une agence :

1. Mettez à jour `siteConfig` (nom, téléphone, WhatsApp, email, adresse).
2. Mettez à jour les couleurs `--navy` et `--gold` dans `style.css` si l'agence a sa propre charte.
3. Remplacez le logo texte `IMMO<span>LOMÉ</span>` par le nom de l'agence dans `index.html` (header, menu mobile, footer).
4. Remplacez les biens, la galerie et les photos par les contenus réels de l'agence.
5. Mettez à jour les statistiques (`+150`, `+8`, `+20`, `+300`) dans la section Stats de `index.html`.

## 9. Héberger le site gratuitement

Ce site étant 100 % statique, il peut être hébergé gratuitement en quelques minutes sur :

- **GitHub Pages** : créez un dépôt, poussez le contenu du dossier `immolome/`, puis activez GitHub Pages dans les paramètres du dépôt (branche `main`, dossier racine).
- **Netlify** (le plus simple) : glissez-déposez le dossier `immolome/` sur [app.netlify.com/drop](https://app.netlify.com/drop) — le site est en ligne instantanément.
- **Vercel** : importez le dossier via `vercel.com`, aucun réglage de build n'est nécessaire (site statique).
- **Cloudflare Pages** : même principe, dépôt Git ou upload direct du dossier.

Dans tous les cas, aucune base de données ni backend n'est nécessaire — le site fonctionne tel quel.

## 10. Notes importantes

- Ce projet est un **site vitrine**, pas une plateforme immobilière : il n'y a ni authentification, ni compte utilisateur, ni base de données, ni système de paiement.
- Les biens, statistiques et témoignages sont des **données de démonstration**, clairement identifiées comme telles dans le site (mention en pied de page et sous les statistiques).
- Le formulaire de contact est simulé côté client (aucun envoi réel) — pour un site en production, connectez-le à un service comme Formspree, EmailJS, ou un backend léger.
