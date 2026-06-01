const nav = document.querySelector("#nav");
const cursor = document.querySelector("#cur");
const cursorRing = document.querySelector("#cur-r");
const bannerBg = document.querySelector("#bannerBg");

window.addEventListener("scroll", () => {
  nav?.classList.toggle("scrolled", window.scrollY > 40);
  revealOnScroll();
  animateBanner();
  animateStats();
});

window.addEventListener("mousemove", (event) => {
  if (!cursor || !cursorRing) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  cursorRing.style.left = `${event.clientX}px`;
  cursorRing.style.top = `${event.clientY}px`;
});

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.92;
  document.querySelectorAll(".reveal").forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerPoint) item.classList.add("active");
  });
}

function animateStats() {
  document.querySelectorAll(".stat-number").forEach((number) => {
    if (number.dataset.animated === "true") return;

    const numberTop = number.getBoundingClientRect().top;
    if (numberTop > window.innerHeight * 0.92) return;

    number.dataset.animated = "true";
    const target = Number(number.dataset.target || 0);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 80));

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      number.textContent = current;
    }, 18);
  });
}

function animateBanner() {
  if (!bannerBg) return;
  const bannerTop = bannerBg.getBoundingClientRect().top;
  bannerBg.style.transform = `translateY(${bannerTop * -0.08}px)`;
}

const contactForm = document.querySelector(".contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
  contactForm.reset();
});

window.KIYAN_refreshAnimations = () => {
  requestAnimationFrame(() => {
    revealOnScroll();
    animateStats();
  });
};

window.addEventListener("load", window.KIYAN_refreshAnimations);
document.addEventListener("DOMContentLoaded", window.KIYAN_refreshAnimations);
window.KIYAN_refreshAnimations();

const LOVABLE_VARIATIONS = {
  "8mm": { name: "8 mm", depth: "0–20mm", img: "./assets/images/produto.png", color: "PerfectDrill Azul" },
  "12mm": { name: "12 mm", depth: "0–25mm", img: "./assets/images/produtos-coloridos.png", color: "PerfectDrill Laranja" },
  "14mm": { name: "14 mm", depth: "0–30mm", img: "./assets/images/produtos-inclinados.png", color: "PerfectDrill Verde" }
};

const PRODUCT_SHOWCASE = {
  perfectdrill: {
    counter: "1",
    image: "./assets/images/produto.png",
    category: "Broca Engates — Neurologia",
    title: "Perfect Drill",
    text: "Onde a precisão encontra a segurança.",
    specs: [
      ["Material", "Aço cirúrgico ASTM F899"],
      ["Uso", "Único estéril"],
      ["Diâmetro", "8 mm nominal"],
      ["Profundidade", "Controlada auto-stop"],
      ["Compatibilidade", "Hudson ou Smith engates"],
      ["Esterilização", "ETO validado"]
    ]
  },
  easydrill: {
    counter: "2",
    image: "./assets/images/easydrill.png",
    category: "KY-01 · Sistema de Perfuração",
    title: "EasyDrill Pro",
    text: "Perfuração precisa, ergonomia e segurança em cada detalhe do procedimento.",
    specs: [
      ["Código", "KY-01"],
      ["Categoria", "Sistema de Perfuração"],
      ["Rotação", "Até 80.000 RPM"],
      ["Torque", "Ajustável 0–4 Nm"],
      ["Compatibilidade", "Universal"],
      ["Esterilização", "Autoclave 134°C"]
    ]
  },
  spinedrill: {
    counter: "3",
    image: "./assets/images/spinedrill.png",
    category: "SD-05 · Sistema Espinal",
    title: "SpineDrill",
    text: "Nova linha para procedimentos espinais com tecnologia de ponta e controle operacional.",
    specs: [
      ["Código", "SD-05"],
      ["Categoria", "Sistema Espinal"],
      ["Peso", "480g com bateria"],
      ["Velocidade", "100–60.000 RPM"],
      ["Display", "LCD tátil integrado"],
      ["Garantia", "36 meses"]
    ]
  }
};

function selectLovableVariation(key) {
  const data = LOVABLE_VARIATIONS[key] || LOVABLE_VARIATIONS["8mm"];
  document.querySelectorAll(".variation-btn, .variation-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.variation === key);
  });
  const name = document.querySelector("#variationName");
  const depth = document.querySelector("#variationDepth");
  const featuredImage = document.querySelector("#featuredProductImage");
  if (name) name.textContent = data.name;
  if (depth) depth.textContent = data.depth;
  if (featuredImage && document.querySelector(".product-tab.active")?.dataset.productShowcase === "perfectdrill") {
    featuredImage.src = data.img;
    featuredImage.alt = data.color;
  }
}

function renderProductShowcase(key) {
  const data = PRODUCT_SHOWCASE[key] || PRODUCT_SHOWCASE.perfectdrill;
  document.querySelectorAll(".product-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.productShowcase === key);
  });
  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };
  setText("#productCounter", data.counter);
  setText("#featuredProductCategory", data.category);
  setText("#featuredProductTitle", data.title);
  setText("#featuredProductText", data.text);
  const img = document.querySelector("#featuredProductImage");
  if (img) {
    img.src = data.image;
    img.alt = data.title;
  }
  const specs = document.querySelector("#featuredSpecs");
  if (specs) {
    specs.innerHTML = data.specs.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  }
}

document.addEventListener("click", (event) => {
  const variationButton = event.target.closest("[data-variation]");
  if (variationButton) selectLovableVariation(variationButton.dataset.variation);

  const productTab = event.target.closest("[data-product-showcase]");
  if (productTab) renderProductShowcase(productTab.dataset.productShowcase);
});

document.addEventListener("DOMContentLoaded", () => {
  selectLovableVariation("8mm");
  renderProductShowcase("perfectdrill");
});

const DRILL_VARIATIONS = {
  azul: {
    name: "Broca Azul",
    mm: "8 mm",
    title: "PerfectDrill Azul",
    image: "./assets/images/broca-azul.png",
    description: "Variação azul indicada para perfuração cranial com profundidade controlada de 8 mm.",
    specs: [
      ["Categoria", "Neurocirurgia"],
      ["Cor", "Azul"],
      ["Diâmetro", "8 mm"],
      ["Aplicação", "Perfuração cranial"]
    ]
  },
  verde: {
    name: "Broca Verde",
    mm: "12 mm",
    title: "PerfectDrill Verde",
    image: "./assets/images/broca-verde.png",
    description: "Variação verde para procedimentos que exigem alcance intermediário com precisão e estabilidade.",
    specs: [
      ["Categoria", "Neurocirurgia"],
      ["Cor", "Verde"],
      ["Diâmetro", "12 mm"],
      ["Aplicação", "Perfuração cranial"]
    ]
  },
  vermelho: {
    name: "Broca Vermelha",
    mm: "10 mm",
    title: "PerfectDrill Vermelha",
    image: "./assets/images/broca-vermelha.png",
    description: "Variação vermelha indicada para procedimentos com profundidade intermediária, mantendo controle visual e precisão.",
    specs: [
      ["Categoria", "Neurocirurgia"],
      ["Cor", "Vermelho"],
      ["Diâmetro", "10 mm"],
      ["Aplicação", "Perfuração cranial"]
    ]
  },
  dourado: {
    name: "Broca Dourada",
    mm: "14 mm",
    title: "PerfectDrill Dourada",
    image: "./assets/images/broca-dourada.png",
    description: "Variação dourada indicada para perfuração cranial com maior alcance, mantendo controle e segurança.",
    specs: [
      ["Categoria", "Neurocirurgia"],
      ["Cor", "Dourado"],
      ["Diâmetro", "14 mm"],
      ["Aplicação", "Perfuração cranial"]
    ]
  }
};

const DRILL_ORDER = ["azul", "verde", "vermelho", "dourado"];
let currentHomeDrillColor = "azul";
let currentProductDrillColor = "dourado";

function getCarouselDirection(previous, next) {
  const prevIndex = DRILL_ORDER.indexOf(previous);
  const nextIndex = DRILL_ORDER.indexOf(next);
  if (prevIndex === -1 || nextIndex === -1 || prevIndex === nextIndex) return "right";
  const forward = (nextIndex - prevIndex + DRILL_ORDER.length) % DRILL_ORDER.length;
  return forward <= DRILL_ORDER.length / 2 ? "right" : "left";
}

function updateHomeCarouselClasses(color, direction = "right") {
  const activeIndex = DRILL_ORDER.indexOf(color);
  document.querySelectorAll(".drill-option").forEach((el) => {
    const itemIndex = DRILL_ORDER.indexOf(el.dataset.drillColor);
    const diff = (itemIndex - activeIndex + DRILL_ORDER.length) % DRILL_ORDER.length;
    el.classList.remove("is-active", "is-prev", "is-next", "is-far", "carousel-enter-right", "carousel-enter-left");
    if (diff === 0) {
      el.classList.add("is-active", direction === "left" ? "carousel-enter-left" : "carousel-enter-right");
    } else if (diff === 1) {
      el.classList.add("is-next");
    } else if (diff === DRILL_ORDER.length - 1) {
      el.classList.add("is-prev");
    } else {
      el.classList.add("is-far");
    }
  });
}

function setHomeDrillVariation(color) {
  const data = DRILL_VARIATIONS[color] || DRILL_VARIATIONS.azul;
  const previousColor = currentHomeDrillColor || "azul";
  const direction = getCarouselDirection(previousColor, color);
  currentHomeDrillColor = color;

  const hero = document.querySelector("#hero");
  if (hero) hero.dataset.selectedColor = color;

  document.querySelectorAll("[data-drill-color]").forEach((el) => {
    el.classList.toggle("active", el.dataset.drillColor === color);
  });

  updateHomeCarouselClasses(color, direction);

  const mm = document.querySelector("#homeVariationMm");
  const name = document.querySelector("#homeVariationName");
  const desc = document.querySelector("#homeVariationDescription");
  [mm, name, desc].forEach((el) => {
    if (!el) return;
    el.classList.remove("text-swap");
    void el.offsetWidth;
    el.classList.add("text-swap");
  });
  if (mm) mm.textContent = data.mm;
  if (name) name.textContent = data.name;
  if (desc) desc.textContent = data.description;
}

function setIndividualProductVariation(color) {
  const data = DRILL_VARIATIONS[color] || DRILL_VARIATIONS.dourado;
  const previousColor = currentProductDrillColor || "dourado";
  const direction = getCarouselDirection(previousColor, color);
  currentProductDrillColor = color;

  const section = document.querySelector("#products");
  if (section) section.dataset.productColor = color;

  document.querySelectorAll("[data-product-color]").forEach((el) => {
    el.classList.toggle("active", el.dataset.productColor === color);
  });

  const image = document.querySelector("#individualProductImage");
  if (image) {
    image.classList.remove("swap-animate", "carousel-from-right", "carousel-from-left");
    void image.offsetWidth;
    image.src = data.image;
    image.alt = data.title;
    image.classList.add(direction === "left" ? "carousel-from-left" : "carousel-from-right");
  }

  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) {
      el.classList.remove("text-swap");
      void el.offsetWidth;
      el.textContent = text;
      el.classList.add("text-swap");
    }
  };
  setText("#individualProductTitle", data.title);
  setText("#individualProductText", data.description);
  setText("#productInfoName", `${data.name.replace("Broca ", "")} · ${data.mm}`);
  setText("#productInfoDescription", data.description);
  setText("#productInfoMm", data.mm);

  const specs = document.querySelector("#individualProductSpecs");
  if (specs) {
    specs.innerHTML = data.specs.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  }
}


function getActiveProductColor() {
  const section = document.querySelector("#products");
  return section?.dataset.productColor || "dourado";
}

function openDrillInfoTab() {
  const color = getActiveProductColor();
  const data = DRILL_VARIATIONS[color] || DRILL_VARIATIONS.dourado;
  const specsHTML = data.specs.map(([label, value]) => `
    <div class="modal-spec-item">
      <span class="modal-spec-label">${label}</span>
      <span class="modal-spec-value">${value}</span>
    </div>
  `).join("");

  const features = [
    { title: "Controle de profundidade", desc: `Variação ${data.mm} pensada para manter estabilidade durante a perfuração.` },
    { title: "Identificação por cor", desc: `Acabamento ${data.name.replace("Broca ", "").toLowerCase()} para facilitar a seleção rápida da milimetragem.` },
    { title: "Uso em neurocirurgia", desc: "Aplicação voltada para procedimentos cranianos com foco em precisão e segurança." },
  ];
  const featuresHTML = features.map(f => `
    <div class="modal-feature-item">
      <div class="modal-feature-icon"></div>
      <div class="modal-feature-text"><h4>${f.title}</h4><p>${f.desc}</p></div>
    </div>
  `).join("");

  const html = `
    <div class="modal-hero modal-anim drill-modal-hero">
      <img src="${data.image}" alt="${data.title}" />
      <span class="modal-hero-badge">${data.mm}</span>
    </div>
    <div class="modal-body">
      <div class="modal-tag modal-anim"><span></span> PerfectDrill · ${data.name}</div>
      <h2 class="modal-title modal-anim">${data.title}</h2>
      <p class="modal-desc modal-anim">${data.description}</p>
      <div class="modal-divider modal-anim"></div>
      <p class="modal-section-title modal-anim">Informações da variação</p>
      <div class="modal-specs modal-anim">${specsHTML}</div>
      <div class="modal-divider modal-anim"></div>
      <p class="modal-section-title modal-anim">Diferenciais</p>
      <div class="modal-features modal-anim">${featuresHTML}</div>
      <div class="modal-divider modal-anim"></div>
      <div class="modal-cta modal-anim">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Solicitar demonstração</a>
        <button type="button" class="btn btn-outline" onclick="closeModal()">Fechar</button>
      </div>
    </div>
  `;

  if (typeof openModal === "function") openModal(html);
}


document.addEventListener("click", (event) => {
  const infoButton = event.target.closest("[data-open-drill-info]");
  if (infoButton) {
    event.preventDefault();
    openDrillInfoTab();
    return;
  }

  const homeButton = event.target.closest("[data-drill-color]");
  if (homeButton) setHomeDrillVariation(homeButton.dataset.drillColor);

  const productButton = event.target.closest("[data-product-color]");
  if (productButton) setIndividualProductVariation(productButton.dataset.productColor);
});

document.addEventListener("DOMContentLoaded", () => {
  setHomeDrillVariation("azul");
  setIndividualProductVariation("dourado");
});
