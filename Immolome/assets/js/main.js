/* =========================================================
   IMMOLOMÉ — main.js
   Toute la configuration du site se trouve dans siteConfig
   et WHATSAPP_NUMBER ci-dessous. Modifiez ces valeurs pour
   personnaliser rapidement le site pour une agence cliente.
   ========================================================= */

/* ---------- 1. CONFIGURATION CENTRALE ---------- */
const siteConfig = {
  businessName: "ImmoLomé",
  slogan: "Votre partenaire immobilier à Lomé",
  phone: "+228 XX XX XX XX",
  whatsapp: "+228XXXXXXXX", // format international, sans le "+", pour le lien wa.me
  email: "contact@immolome.com",
  address: "Lomé, Togo",
  hours: "Lundi – Samedi, 08h00 – 18h00",
  primaryColor: "#0B1B33",
  secondaryColor: "#B8925A"
};

// Numéro WhatsApp central utilisé par TOUS les boutons WhatsApp du site.
const WHATSAPP_NUMBER = siteConfig.whatsapp.replace(/\D/g, "");

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const WA_MESSAGES = {
  general: "Bonjour ImmoLomé, je souhaite avoir plus d'informations concernant vos services immobiliers.",
  property: (name) => `Bonjour ImmoLomé, je suis intéressé par le bien "${name}". Je souhaiterais obtenir plus d'informations.`
};

/* ---------- 2. DONNÉES DE DÉMONSTRATION — BIENS ---------- */
// Pour ajouter / modifier un bien, éditez simplement ce tableau.
const properties = [
  {
    id: "villa-agoe",
    ref: "REF. VL-014",
    name: "Villa contemporaine",
    zone: "Agoè, Lomé",
    type: "vente",
    price: "125 000 000 FCFA",
    beds: 4, baths: 3, area: "320 m²",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    desc: "Cette villa contemporaine offre un cadre de vie confortable dans un environnement calme. Elle dispose de plusieurs chambres, d'un vaste séjour lumineux, d'un espace extérieur arboré et d'un parking sécurisé."
  },
  {
    id: "appart-tokoin",
    ref: "REF. AP-027",
    name: "Appartement moderne",
    zone: "Tokoin, Lomé",
    type: "location",
    price: "350 000 FCFA",
    priceSuffix: "/ mois",
    beds: 2, baths: 1, area: "95 m²",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    desc: "Appartement moderne et lumineux situé à Tokoin, à proximité des commerces et axes principaux. Cuisine équipée, balcon et place de parking incluse."
  },
  {
    id: "maison-adidogome",
    ref: "REF. MS-009",
    name: "Maison familiale",
    zone: "Adidogomé, Lomé",
    type: "vente",
    price: "85 000 000 FCFA",
    beds: 3, baths: 2, area: "210 m²",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
    desc: "Maison familiale idéalement située à Adidogomé, dans un quartier calme et résidentiel. Cour spacieuse, cuisine ouverte et proximité des écoles."
  },
  {
    id: "terrain-baguida",
    ref: "REF. TR-041",
    name: "Terrain résidentiel",
    zone: "Baguida, Lomé",
    type: "vente",
    price: "45 000 000 FCFA",
    beds: 0, baths: 0, area: "600 m²",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    desc: "Terrain résidentiel titré, situé à Baguida à proximité du littoral. Idéal pour un projet de construction familiale ou d'investissement."
  },
  {
    id: "villa-kegue",
    ref: "REF. VL-032",
    name: "Villa avec piscine",
    zone: "Kégué, Lomé",
    type: "vente",
    price: "180 000 000 FCFA",
    beds: 5, baths: 4, area: "410 m²",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    desc: "Villa haut de gamme avec piscine privée, jardin paysager et finitions soignées. Un cadre exceptionnel pour recevoir en toute élégance."
  },
  {
    id: "appart-hedzranawoe",
    ref: "REF. AP-018",
    name: "Appartement haut standing",
    zone: "Hedzranawoé, Lomé",
    type: "location",
    price: "600 000 FCFA",
    priceSuffix: "/ mois",
    beds: 3, baths: 2, area: "140 m²",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    desc: "Appartement haut standing proche de l'aéroport, avec finitions modernes, sécurité 24h/24 et vue dégagée sur la ville."
  }
];

/* ---------- 3. DONNÉES DE DÉMONSTRATION — GALERIE ---------- */
const galleryImages = [
  { cat: "villas", src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80", alt: "Villa moderne à Lomé" },
  { cat: "appartements", src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80", alt: "Appartement moderne" },
  { cat: "interieurs", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80", alt: "Intérieur élégant" },
  { cat: "terrains", src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80", alt: "Terrain résidentiel" },
  { cat: "villas", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80", alt: "Villa avec piscine" },
  { cat: "interieurs", src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80", alt: "Salon moderne" },
  { cat: "appartements", src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80", alt: "Appartement haut standing" },
  { cat: "villas", src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80", alt: "Maison familiale" }
];

/* ---------- 4. RENDU DES BIENS ---------- */
function renderProperties() {
  const grid = document.getElementById("propertiesGrid");
  grid.innerHTML = properties.map(p => `
    <div class="property-card reveal" data-id="${p.id}">
      <div class="property-media">
        <img src="${p.img}" alt="${p.name} — ${p.zone}" loading="lazy">
        <span class="property-badge ${p.type === 'vente' ? 'badge-vente' : 'badge-location'}">
          ${p.type === 'vente' ? 'À vendre' : 'À louer'}
        </span>
        <span class="property-ref">${p.ref}</span>
      </div>
      <div class="property-body">
        <div class="property-loc"><i class="bi bi-geo-alt"></i> ${p.zone}</div>
        <h3>${p.name}</h3>
        <div class="property-price">${p.price} ${p.priceSuffix ? `<span>${p.priceSuffix}</span>` : ""}</div>
        <div class="property-features">
          ${p.beds ? `<span><i class="bi bi-door-closed"></i> ${p.beds} chambres</span>` : ""}
          ${p.baths ? `<span><i class="bi bi-droplet"></i> ${p.baths} sdb</span>` : ""}
          <span><i class="bi bi-arrows-angle-expand"></i> ${p.area}</span>
        </div>
        <button class="btn btn-outline-navy btn-details" data-id="${p.id}" style="width:100%">Voir les détails</button>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", () => openPropertyModal(btn.dataset.id));
  });

  initReveal();
}

/* ---------- 5. MODAL DÉTAIL D'UN BIEN ---------- */
function openPropertyModal(id) {
  const p = properties.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById("propertyModal");
  document.getElementById("modalContent").innerHTML = `
    <img src="${p.img}" alt="${p.name}" class="modal-img">
    <div class="modal-content">
      <span class="property-badge ${p.type === 'vente' ? 'badge-vente' : 'badge-location'}" style="position:static; display:inline-block; margin-bottom:14px;">
        ${p.type === 'vente' ? 'À vendre' : 'À louer'}
      </span>
      <div class="property-loc"><i class="bi bi-geo-alt"></i> ${p.zone} · ${p.ref}</div>
      <h3 style="margin:10px 0 4px; font-size:26px;">${p.name}</h3>
      <div class="property-price">${p.price} ${p.priceSuffix ? `<span>${p.priceSuffix}</span>` : ""}</div>
      <p class="desc">${p.desc}</p>
      <div class="modal-features">
        ${p.beds ? `<span><i class="bi bi-door-closed"></i> ${p.beds} chambres</span>` : ""}
        ${p.baths ? `<span><i class="bi bi-droplet"></i> ${p.baths} salles de bain</span>` : ""}
        <span><i class="bi bi-arrows-angle-expand"></i> ${p.area}</span>
      </div>
      <a href="${waLink(WA_MESSAGES.property(p.name))}" target="_blank" rel="noopener" class="btn btn-whatsapp">
        <i class="bi bi-whatsapp"></i> Demander plus d'informations
      </a>
    </div>
  `;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePropertyModal() {
  document.getElementById("propertyModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- 6. GALERIE + LIGHTBOX ---------- */
function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  const items = filter === "all" ? galleryImages : galleryImages.filter(g => g.cat === filter);
  grid.innerHTML = items.map(g => `
    <div class="gallery-item reveal" data-src="${g.src}" data-alt="${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
    </div>
  `).join("");

  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(el.dataset.src, el.dataset.alt));
  });
  initReveal();
}

function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = alt;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- 7. NAVIGATION ---------- */
function initNav() {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });

  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("navOverlay");
  const closeBtn = document.getElementById("mobileCloseBtn");

  function openMobileNav() {
    mobileNav.classList.add("open");
    overlay.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
  }
  function closeMobileNav() {
    mobileNav.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
  hamburger.addEventListener("click", () => {
    mobileNav.classList.contains("open") ? closeMobileNav() : openMobileNav();
  });
  closeBtn.addEventListener("click", closeMobileNav);
  overlay.addEventListener("click", closeMobileNav);
  mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMobileNav));
}

/* ---------- 8. LIENS WHATSAPP ---------- */
function initWhatsAppLinks() {
  document.querySelectorAll(".wa-link").forEach(a => {
    a.href = waLink(WA_MESSAGES.general);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* ---------- 9. FORMULAIRE DE CONTACT (simulation, sans backend) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("formToast");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toast.classList.add("show");
    form.reset();
    setTimeout(() => toast.classList.remove("show"), 5000);
  });
}

/* ---------- 10. BARRE DE RECHERCHE (CTA visuel) ---------- */
function initSearchBar() {
  document.getElementById("searchBar").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- 11. GALERIE — FILTRES ---------- */
function initGalleryTabs() {
  document.querySelectorAll(".gallery-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".gallery-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderGallery(tab.dataset.filter);
    });
  });
}

/* ---------- 12. REVEAL ON SCROLL ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ---------- 13. MODALS / LIGHTBOX CLOSE HANDLERS ---------- */
function initOverlayClosers() {
  document.getElementById("modalCloseBtn").addEventListener("click", closePropertyModal);
  document.getElementById("propertyModal").addEventListener("click", (e) => {
    if (e.target.id === "propertyModal") closePropertyModal();
  });
  document.getElementById("lightboxCloseBtn").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closePropertyModal(); closeLightbox(); }
  });
}

/* ---------- 14. INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNav();
  initWhatsAppLinks();
  initContactForm();
  initSearchBar();
  initGalleryTabs();
  initOverlayClosers();
  renderProperties();
  renderGallery();
  initReveal();
});
