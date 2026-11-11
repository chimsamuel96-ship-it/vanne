/* RITUALES VANNE — personaliza los datos en STORE_CONFIG */
const STORE_CONFIG = {
  whatsapp: "5219990000000", // Reemplaza por tu número con código de país, sin + ni espacios.
  businessName: "RITUALES VANNE",
  location: "Mérida, Yucatán, México · Ubicación exacta disponible por mensaje",
  hours: ["Lunes a viernes: 10:00 – 19:00", "Sábados: 10:00 – 15:00", "Domingos: Cerrado"],
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "Facebook", url: "https://www.facebook.com/" }
  ],
  promotions: [
    {
      eyebrow: "PROMOCIÓN 01 · TEMPORADA",
      title: "Armoniza tu espacio",
      description: "Un detalle especial para renovar la energía de tu rincón favorito. Pregunta por los paquetes disponibles.",
      linkText: "Consultar promoción",
      image: "https://images.pexels.com/photos/6766579/pexels-photo-6766579.jpeg?auto=compress&cs=tinysrgb&w=900",
      message: "Hola, quiero conocer la promoción para armonizar mi espacio."
    },
    {
      eyebrow: "PROMOCIÓN 02 · DETALLES CON INTENCIÓN",
      title: "Un regalo con significado",
      description: "Sorprende a alguien especial con una selección de artículos elegidos con cariño.",
      linkText: "Quiero más información",
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
      message: "Hola, me gustaría conocer las opciones de regalos."
    },
    {
      eyebrow: "PROMOCIÓN 03 · TU MOMENTO",
      title: "Crea tu propio ritual",
      description: "Combina velas, aromas y cristales para acompañar ese momento que quieres dedicarte.",
      linkText: "Descubrir opciones",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
      message: "Hola, quiero recomendaciones para crear mi propio ritual."
    }
  ],
  products: [
    { name: "Velas de intención", tag: "LUZ & PROPÓSITO", description: "Velas para acompañar tus momentos de calma, reflexión y enfoque personal.", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85", message: "Hola, quisiera información sobre las velas de intención." },
    { name: "Cuarzos & cristales", tag: "PIEZAS NATURALES", description: "Cristales y piedras para coleccionar, decorar o integrar a tus espacios.", image: "https://images.pexels.com/photos/6766579/pexels-photo-6766579.jpeg?auto=compress&cs=tinysrgb&w=800", message: "Hola, quisiera ver los cuarzos y cristales disponibles." },
    { name: "Inciensos & aromas", tag: "AROMAS CONSCIENTES", description: "Aromas para crear una atmósfera acogedora y acompañar tus pausas.", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=85", message: "Hola, quisiera conocer los inciensos y aromas disponibles." },
    { name: "Accesorios rituales", tag: "DETALLES ESPECIALES", description: "Objetos seleccionados para dar personalidad y significado a tu altar o rincón.", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85", message: "Hola, quisiera conocer los accesorios rituales disponibles." }
  ],
  services: [
    { icon: "☾", title: "Orientación espiritual", description: "Un espacio de escucha y reflexión para explorar tus inquietudes y conectar con tus propias intenciones.", message: "Hola, quisiera información sobre orientación espiritual." },
    { icon: "✧", title: "Rituales personalizados", description: "Conoce opciones de rituales simbólicos adaptados a una intención o momento especial.", message: "Hola, quisiera conocer los rituales personalizados." },
    { icon: "❋", title: "Armonización de espacios", description: "Ideas y artículos para crear ambientes acogedores que inviten a la calma y al bienestar.", message: "Hola, quisiera información sobre armonización de espacios." }
  ]
};

const whatsappUrl = (message) => `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

function renderPromotions() {
  const track = document.querySelector("#promo-track");
  const dots = document.querySelector("#promo-dots");
  track.innerHTML = STORE_CONFIG.promotions.map((promo, index) => `
    <article class="promo-slide ${index === 0 ? "is-active" : ""}" aria-hidden="${index !== 0}">
      <div class="promo-slide__image"><img src="${promo.image}" alt="" loading="lazy"></div>
      <div class="promo-slide__copy">
        <small>${promo.eyebrow}</small><h3>${promo.title}</h3><p>${promo.description}</p>
        <a href="${whatsappUrl(promo.message)}" target="_blank" rel="noopener">${promo.linkText} ↗</a>
      </div>
    </article>`).join("");
  dots.innerHTML = STORE_CONFIG.promotions.map((_, index) =>
    `<button class="promo-dot ${index === 0 ? "is-active" : ""}" aria-label="Ver promoción ${index + 1}" aria-current="${index === 0}"></button>`
  ).join("");
  const slides = [...track.children];
  const dotButtons = [...dots.children];
  let active = 0;
  let timer;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.classList.toggle("is-active", i === active); slide.setAttribute("aria-hidden", String(i !== active)); });
    dotButtons.forEach((dot, i) => { dot.classList.toggle("is-active", i === active); dot.setAttribute("aria-current", String(i === active)); });
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(active + 1), 6000); };
  document.querySelector("#promo-prev").addEventListener("click", () => { show(active - 1); restart(); });
  document.querySelector("#promo-next").addEventListener("click", () => { show(active + 1); restart(); });
  dotButtons.forEach((dot, i) => dot.addEventListener("click", () => { show(i); restart(); }));
  const carousel = document.querySelector(".promo-carousel");
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", restart);
  carousel.addEventListener("focusin", () => clearInterval(timer));
  carousel.addEventListener("focusout", restart);
  restart();
}

function renderProducts() {
  document.querySelector("#product-grid").innerHTML = STORE_CONFIG.products.map(product => `
    <article class="product-card">
      <div class="product-card__image"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-card__tag">${product.tag}</span></div>
      <div class="product-card__body"><h3>${product.name}</h3><p>${product.description}</p>
        <a class="product-card__link" href="${whatsappUrl(product.message)}" target="_blank" rel="noopener">CONSULTAR POR WHATSAPP <span>↗</span></a>
      </div>
    </article>`).join("");
}

function renderServices() {
  document.querySelector("#service-grid").innerHTML = STORE_CONFIG.services.map(service => `
    <article class="service-card"><div class="service-card__icon" aria-hidden="true">${service.icon}</div>
      <h3>${service.title}</h3><p>${service.description}</p>
      <a href="${whatsappUrl(service.message)}" target="_blank" rel="noopener">SOLICITAR INFORMACIÓN ↗</a>
    </article>`).join("");
}

function setupContact() {
  const generalMessage = "Hola, me gustaría recibir información sobre RITUALES VANNE.";
  const url = whatsappUrl(generalMessage);
  document.querySelector("#contact-whatsapp").href = url;
  document.querySelector("#floating-whatsapp").href = url;
  const phone = document.querySelector("#contact-phone");
  const displayPhone = STORE_CONFIG.whatsapp.replace(/^52/, "+52 ");
  phone.textContent = displayPhone;
  phone.href = url;
  document.querySelector("#contact-hours").innerHTML = STORE_CONFIG.hours.map(hour => `<span>${hour}</span>`).join("<br>");
  document.querySelector("#contact-location").textContent = STORE_CONFIG.location;
  document.querySelector("#social-links").innerHTML = STORE_CONFIG.socials.map(social =>
    `<a href="${social.url}" target="_blank" rel="noopener">${social.name} ↗</a>`).join("");
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

function setupNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  const close = () => {
    menu.classList.remove("is-open"); toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
  };
  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", open); toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", open);
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
}

function setupGallery() {
  const lightbox = document.querySelector("#lightbox");
  const image = document.querySelector("#lightbox-image");
  const closeButton = document.querySelector("#lightbox-close");
  const close = () => { lightbox.classList.remove("is-open"); lightbox.setAttribute("aria-hidden", "true"); image.src = ""; document.body.style.overflow = ""; };
  document.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => {
    image.src = item.dataset.full; image.alt = item.querySelector("img").alt;
    lightbox.classList.add("is-open"); lightbox.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; closeButton.focus();
  }));
  closeButton.addEventListener("click", close);
  lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && lightbox.classList.contains("is-open")) close(); });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(item => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  renderPromotions();
  renderProducts();
  renderServices();
  setupContact();
  setupNavigation();
  setupGallery();
  setupReveal();
});
