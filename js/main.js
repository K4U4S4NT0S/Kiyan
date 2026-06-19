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

// ===== Kiyan interactive hero and products =====
const kiyanProducts = [
  {
    title: 'Perfect<span>Drill</span><br />Neurologia',
    cardTitle: 'Perfect<span>Drill</span>',
    badge: '• Broca engates — neurologia',
    desc: 'Onde a precisão encontra a segurança.',
    image: './assets/images/drill-azul-3d.png',
    specsBase: {
      'Material': 'Aço cirúrgico ASTM F899',
      'Uso': 'Único estéril',
      'Profundidade': 'Controlada auto-stop',
      'Compatibilidade': 'Hudson ou Smith engates',
      'Esterilização': 'ETO validado'
    },
    variants: [
      { label: '8mm', name: 'PerfectDrill Azul', tone: 'blue', diameter: '8 mm nominal', image: './assets/images/drill-azul-3d.png' },
      { label: '12mm', name: 'PerfectDrill Laranja', tone: 'orange', diameter: '12 mm nominal', image: './assets/images/drill-laranja-3d.png' },
      { label: '14mm', name: 'PerfectDrill Verde', tone: 'green', diameter: '14 mm nominal', image: './assets/images/drill-verde-3d.png' }
    ]
  },
  {
    title: 'Spine<span>Drill</span><br />Coluna',
    cardTitle: 'Spine<span>Drill</span>',
    badge: '• Linha espinal — precisão',
    desc: 'Solução para procedimentos espinais com controle e segurança.',
    image: './assets/images/spinedrill.png',
    specsBase: {
      'Material': 'Titânio Ti-6Al-4V',
      'Uso': 'Ambiente hospitalar',
      'Profundidade': 'Controle progressivo',
      'Compatibilidade': 'Sistema Kiyan Spine',
      'Esterilização': 'Autoclave / ETO'
    },
    variants: [
      { label: 'Curta', name: 'SpineDrill Curta', tone: 'blue', diameter: 'Curta' },
      { label: 'Média', name: 'SpineDrill Média', tone: 'orange', diameter: 'Média' },
      { label: 'Longa', name: 'SpineDrill Longa', tone: 'green', diameter: 'Longa' }
    ]
  },
  {
    title: 'Easy<span>Drill</span><br />Cirúrgico',
    cardTitle: 'Easy<span>Drill</span>',
    badge: '• Sistema cirúrgico — controle',
    desc: 'Perfuração precisa com ergonomia e alta performance.',
    image: './assets/images/easydrill.png',
    specsBase: {
      'Material': 'Aço inoxidável médico',
      'Uso': 'Reutilizável controlado',
      'Profundidade': 'Ajuste manual',
      'Compatibilidade': 'Acessórios Kiyan',
      'Esterilização': 'Autoclave validada'
    },
    variants: [
      { label: 'Azul', name: 'EasyDrill Azul', tone: 'blue', diameter: 'Padrão azul' },
      { label: 'Laranja', name: 'EasyDrill Laranja', tone: 'orange', diameter: 'Padrão laranja' },
      { label: 'Verde', name: 'EasyDrill Verde', tone: 'green', diameter: 'Padrão verde' }
    ]
  },
  {
    title: 'Em <span>breve</span>',
    cardTitle: 'Em <span>breve</span>',
    badge: '• Em desenvolvimento',
    desc: 'Estamos preparando uma nova linha de produtos com a mesma precisão e segurança da PerfectDrill.',
    image: './assets/images/produto-hero.png',
    comingSoon: true,
    specsBase: {
      'Novidade': 'A caminho',
      'Status': 'Em desenvolvimento',
      'Disponibilidade': 'Em breve',
      'Variações': 'A confirmar',
      'Contato': 'Seja avisado no lançamento'
    },
    variants: [
      { label: 'Aviso', name: 'Receber lançamento', tone: 'blue', diameter: 'Em breve' }
    ]
  }
];

let currentProduct = 0;
let currentVariant = 0;
const heroVariationButtons = document.querySelectorAll('#hero-variations .variation-btn');
const heroDrills = document.querySelectorAll('#hero-drills .drill-option');
const measureSelected = document.querySelector('#measure-selected');

function setHeroVariant(index) {
  const labels = ['8mm', '12mm', '14mm'];
  heroVariationButtons.forEach((btn) => btn.classList.toggle('active', Number(btn.dataset.variant) === index));
  heroDrills.forEach((btn) => btn.classList.toggle('active', Number(btn.dataset.variant) === index));
  if (measureSelected) measureSelected.textContent = labels[index] || '8mm';
}
heroVariationButtons.forEach((btn) => btn.addEventListener('click', () => setHeroVariant(Number(btn.dataset.variant))));
heroDrills.forEach((btn) => btn.addEventListener('click', () => setHeroVariant(Number(btn.dataset.variant))));

function renderProduct() {
  const product = kiyanProducts[currentProduct];
  currentVariant = Math.min(currentVariant, product.variants.length - 1);
  const variant = product.variants[currentVariant];
  const title = document.querySelector('#product-title');
  const counter = document.querySelector('#product-counter');
  const image = document.querySelector('#product-image');
  const visualCard = document.querySelector('#product-visual-card');
  const cardTitle = document.querySelector('#product-card-title');
  const cardDesc = document.querySelector('#product-card-desc');
  const badge = document.querySelector('#product-badge');
  const techGrid = document.querySelector('#tech-grid');
  const variantBox = document.querySelector('#product-variants');

  if (title) title.innerHTML = product.title;
  if (counter) counter.textContent = `${currentProduct + 1} / ${kiyanProducts.length}`;
  if (image) image.src = variant.image || product.image;
  if (visualCard) visualCard.dataset.tone = variant.tone;
  if (cardTitle) cardTitle.innerHTML = product.cardTitle;
  if (cardDesc) cardDesc.textContent = product.desc;
  if (badge) badge.textContent = product.badge;

  if (techGrid) {
    const specs = { ...product.specsBase, 'Diâmetro': variant.diameter };
    techGrid.innerHTML = Object.entries(specs).map(([label, value]) => `<div><small>${label}</small><strong>${value}</strong></div>`).join('');
  }

  if (variantBox) {
    variantBox.innerHTML = product.variants.map((item, index) => `
      <button class="variant-row ${index === currentVariant ? 'active' : ''}" data-variant-index="${index}">
        <span class="dot ${item.tone === 'orange' ? 'orange' : item.tone === 'green' ? 'green' : ''}"></span>
        <span><strong>${item.label}</strong><small>${item.name}</small></span>
        <span class="arrow">→</span>
      </button>
    `).join('');
    variantBox.querySelectorAll('.variant-row').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentVariant = Number(btn.dataset.variantIndex);
        renderProduct();
      });
    });
  }
}

document.querySelector('#prev-product')?.addEventListener('click', () => {
  currentProduct = (currentProduct - 1 + kiyanProducts.length) % kiyanProducts.length;
  currentVariant = 0;
  renderProduct();
});
document.querySelector('#next-product')?.addEventListener('click', () => {
  currentProduct = (currentProduct + 1) % kiyanProducts.length;
  currentVariant = 0;
  renderProduct();
});
renderProduct();


// Interação premium em tempo real na HOME
const premiumHero = document.querySelector('.kiyan-hero');
const premiumDrills = document.querySelectorAll('.drill-option');
if (premiumHero) {
  premiumHero.addEventListener('mousemove', (event) => {
    const rect = premiumHero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    premiumHero.style.setProperty('--mx', `${x * 100}%`);
    premiumHero.style.setProperty('--my', `${y * 100}%`);
    premiumDrills.forEach((drill, idx) => {
      const strength = idx === 0 ? 20 : idx === 1 ? 12 : 8;
      drill.style.setProperty('--tiltX', `${(0.5 - y) * strength}deg`);
      drill.style.setProperty('--tiltY', `${(x - 0.5) * strength}deg`);
    });
  });
}
