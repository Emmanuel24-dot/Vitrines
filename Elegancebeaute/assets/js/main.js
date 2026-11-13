/**
 * ============================================================
 *  MAIN.JS — Élégance Beauty
 *  Comportements partagés par toutes les pages du site.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  injectDynamicContent();
  initHeader();
  initMobileNav();
  initScrollReveal();
  initGalleryFilter();
  initLightbox();
  initContactForm();
  initActiveNavLink();
  initYear();
});

/* ------------------------------------------------------------
   1. Injection du contenu dynamique (config -> DOM)
------------------------------------------------------------ */
function injectDynamicContent() {
  // Tous les liens WhatsApp génériques
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const key = el.getAttribute("data-whatsapp") || "default";
    el.href = buildWhatsAppLink(key);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Téléphone
  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${siteConfig.phoneLink}`;
  });
  document.querySelectorAll("[data-phone-display]").forEach((el) => {
    el.textContent = siteConfig.phoneDisplay;
  });

  // Email
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${siteConfig.email}`;
  });
  document.querySelectorAll("[data-email-display]").forEach((el) => {
    el.textContent = siteConfig.email;
  });

  // Adresse
  document.querySelectorAll("[data-address]").forEach((el) => {
    el.textContent = siteConfig.address;
  });

  // Réseaux sociaux
  document.querySelectorAll("[data-social='instagram']").forEach((el) => (el.href = siteConfig.social.instagram));
  document.querySelectorAll("[data-social='facebook']").forEach((el) => (el.href = siteConfig.social.facebook));
  document.querySelectorAll("[data-social='tiktok']").forEach((el) => (el.href = siteConfig.social.tiktok));

  // Google Maps
  const mapFrame = document.querySelector("[data-maps-embed]");
  if (mapFrame) mapFrame.src = siteConfig.mapsEmbedUrl;
  document.querySelectorAll("[data-maps-link]").forEach((el) => (el.href = siteConfig.mapsLink));

  // Horaires
  const hoursList = document.querySelector("[data-hours]");
  if (hoursList) {
    hoursList.innerHTML = siteConfig.hours
      .map((h) => `<li><span class="hours-day">${h.day}</span><span class="hours-time">${h.time}</span></li>`)
      .join("");
  }
}

/* ------------------------------------------------------------
   2. Header sticky au scroll
------------------------------------------------------------ */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ------------------------------------------------------------
   3. Navigation mobile (menu hamburger)
------------------------------------------------------------ */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const overlay = document.querySelector(".nav-overlay");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  };

  const openNav = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-locked");
  };

  toggle.addEventListener("click", () => {
    nav.classList.contains("is-open") ? closeNav() : openNav();
  });

  if (overlay) overlay.addEventListener("click", closeNav);
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNav();
  });
}

/* ------------------------------------------------------------
   4. Surlignage du lien de navigation actif
------------------------------------------------------------ */
function initActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });
}

/* ------------------------------------------------------------
   5. Apparition au scroll (fade / slide-up)
------------------------------------------------------------ */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------
   6. Filtre de galerie par catégorie
------------------------------------------------------------ */
function initGalleryFilter() {
  const filters = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("[data-category]");
  if (!filters.length || !items.length) return;

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const category = btn.getAttribute("data-filter");

      items.forEach((item) => {
        const match = category === "all" || item.getAttribute("data-category") === category;
        item.style.display = match ? "" : "none";
      });
    });
  });
}

/* ------------------------------------------------------------
   7. Lightbox simple pour la galerie
------------------------------------------------------------ */
function initLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox]");
  const lightbox = document.querySelector(".lightbox");
  if (!triggers.length || !lightbox) return;

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt;
    caption.textContent = alt;
    lightbox.classList.add("is-open");
    document.body.classList.add("nav-locked");
  };
  const close = () => {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("nav-locked");
  };

  triggers.forEach((el) => {
    el.addEventListener("click", () => {
      const image = el.querySelector("img");
      open(el.getAttribute("data-lightbox"), image ? image.alt : "");
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ------------------------------------------------------------
   8. Formulaire de contact -> envoi vers WhatsApp
   (Pas de backend prévu : le message est transmis via WhatsApp)
------------------------------------------------------------ */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name")?.value.trim();
    const contact = form.querySelector("#contact")?.value.trim();
    const subject = form.querySelector("#subject")?.value.trim();
    const message = form.querySelector("#message")?.value.trim();

    const feedback = form.querySelector(".form-feedback");

    if (!name || !contact || !message) {
      if (feedback) {
        feedback.textContent = "Merci de renseigner au minimum votre nom, un moyen de contact et votre message.";
        feedback.classList.add("is-error");
      }
      return;
    }

    const lines = [
      `Bonjour Élégance Beauty, je vous contacte via le site :`,
      ``,
      `Nom : ${name}`,
      `Contact : ${contact}`,
      subject ? `Sujet : ${subject}` : null,
      `Message : ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${text}`;

    if (feedback) {
      feedback.textContent = "Redirection vers WhatsApp en cours...";
      feedback.classList.remove("is-error");
      feedback.classList.add("is-success");
    }

    window.open(url, "_blank", "noopener");
    form.reset();
  });
}

/* ------------------------------------------------------------
   9. Année du footer
------------------------------------------------------------ */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = siteConfig.year));
}
