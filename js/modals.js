/* ─────────────────────────────────────────────────────
   modals.js — Kiyan · Product & Service modal system
───────────────────────────────────────────────────── */

// ── DATA ─────────────────────────────────────────────

const PRODUCTS = {
  "easydrill": {
    badge: "EasyDrill",
    badgeClass: "",
    image: "./assets/images/easydrill.png",
    tag: "KY-01 · Sistema",
    title: "EasyDrill <strong>Pro</strong>",
    desc: `O EasyDrill Pro é o sistema de perfuração de referência da Kiyan, desenvolvido
           para proporcionar controle total ao cirurgião em procedimentos cranianos e ortopédicos.
           Com ergonomia premiada e motor de alta torque, garante precisão milimétrica em cada
           perfuração, reduzindo o tempo cirúrgico e aumentando a segurança do paciente.`,
    specs: [
      { label: "Código", value: "KY-01" },
      { label: "Categoria", value: "Sistema de Perfuração" },
      { label: "Rotação Máx.", value: "80.000 RPM" },
      { label: "Torque", value: "Ajustável 0–4 Nm" },
      { label: "Compatibilidade", value: "Universal" },
      { label: "Esterilização", value: "Autoclave 134°C" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
    features: [
      { title: "Alta Precisão", desc: "Sistema de controle de profundidade com limitador automático." },
      { title: "Ultra Silencioso", desc: "Motor brushless com nível de ruído abaixo de 62 dB." },
      { title: "Bateria de Longa Duração", desc: "Autonomia de até 6 horas de uso contínuo." },
    ],
  },

  "spinedrill": {
    badge: "Lançamento",
    badgeClass: "danger",
    image: "./assets/images/spinedrill.png",
    tag: "SD-05 · Espinal",
    title: "Spine<strong>Drill</strong>",
    desc: `O SpineDrill representa a mais nova fronteira da Kiyan em soluções espinais.
           Desenvolvido em parceria com neurocirurgiões de referência internacional,
           combina leveza estrutural com potência cirúrgica inédita, sendo indicado para
           procedimentos de fusão vertebral, laminectomia e discectomia com máxima segurança.`,
    specs: [
      { label: "Código", value: "SD-05" },
      { label: "Categoria", value: "Sistema Espinal" },
      { label: "Peso", value: "480g (com bateria)" },
      { label: "Velocidade", value: "100–60.000 RPM" },
      { label: "Display", value: "LCD tátil integrado" },
      { label: "Garantia", value: "36 meses" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
    features: [
      { title: "Tecnologia de Ponta", desc: "Algoritmo de proteção tecidual em tempo real." },
      { title: "Conectividade", desc: "Bluetooth integrado para monitoramento intraoperatório." },
      { title: "Premiado", desc: "Vencedor do Prêmio Inovação MedTech Brasil 2025." },
    ],
  },

  "kiyan-surgical": {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produto.png",
    tag: "KY-02 · Precisão",
    title: "Kiyan <strong>Surgical</strong>",
    desc: `O Kiyan Surgical é a solução de maior robustez da linha, projetada para os
           procedimentos mais complexos da neurocirurgia moderna. Seu design monobloco em
           titânio grau médico e sistema de troca rápida de brocas tornam-no indispensável
           em centros de referência em todo o mundo.`,
    specs: [
      { label: "Código", value: "KY-02" },
      { label: "Material", value: "Titânio Ti-6Al-4V" },
      { label: "Pressão Op.", value: "2,5–4,5 bar" },
      { label: "Peso", value: "620g" },
      { label: "Acionamento", value: "Pneumático" },
      { label: "Esterilização", value: "ETO / Autoclave" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
    features: [
      { title: "Extrema Robustez", desc: "Corpo em titânio médico para máxima durabilidade." },
      { title: "Troca Rápida", desc: "Sistema Quick-Release para troca de acessórios em segundos." },
      { title: "Reconhecimento Global", desc: "Utilizado em mais de 30 países em procedimentos críticos." },
    ],
  },

  "kiyan-neuro": {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produtos-coloridos.png",
    tag: "KY-03 · Neuro",
    title: "Kiyan <strong>Neuro</strong>",
    desc: `A linha Kiyan Neuro foi especificamente concebida para os desafios únicos da
           neurocirurgia. Cada instrumento é calibrado para trabalhar em espaços
           extremamente reduzidos com total preservação tecidual, atendendo aos mais
           rigorosos protocolos de segurança neurocirúrgica.`,
    specs: [
      { label: "Código", value: "KY-03" },
      { label: "Aplicação", value: "Neurocirurgia" },
      { label: "Velocidade", value: "Até 100.000 RPM" },
      { label: "Irrigação", value: "Sistema integrado" },
      { label: "Iluminação", value: "LED integrado" },
      { label: "Peças", value: "Kit com 12 acessórios" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark"],
    features: [
      { title: "Foco Neurocirúrgico", desc: "Projetado exclusivamente para procedimentos cerebrais." },
      { title: "Iluminação Integrada", desc: "LEDs de alta luminância no cabezal para melhor visualização." },
      { title: "Irrigação Contínua", desc: "Sistema de irrigação para controle de temperatura tecidual." },
    ],
  },

  "kiyan-spine": {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produtos-inclinados.png",
    tag: "KY-04 · Espinal",
    title: "Kiyan <strong>Spine</strong>",
    desc: `O Kiyan Spine foi desenvolvido para cirurgiões especialistas em coluna vertebral,
           oferecendo um conjunto completo de instrumentos para fixação e estabilização espinal.
           A linha inclui parafusos pediculares, hastes de titânio e sistemas de fusão
           interbody com rastreabilidade completa.`,
    specs: [
      { label: "Código", value: "KY-04" },
      { label: "Categoria", value: "Sistema Espinal" },
      { label: "Material", value: "Ti-6Al-4V ELI" },
      { label: "Compatibilidade", value: "MRI Safe" },
      { label: "Rastreabilidade", value: "QR Code integrado" },
      { label: "Cobertura", value: "L1–S2 completo" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
    features: [
      { title: "Sistema Completo", desc: "Kit de fixação para toda a coluna vertebral." },
      { title: "MRI Compatible", desc: "Todos os implantes compatíveis com ressonância magnética." },
      { title: "Rastreabilidade Digital", desc: "QR Code em cada componente para registro cirúrgico." },
    ],
  },

  "kiyan-drive": {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produto-hero.png",
    tag: "KY-05 · Drive",
    title: "Kiyan <strong>Drive</strong>",
    desc: `O Kiyan Drive é o sistema de acionamento pneumático de alta performance da linha,
           desenvolvido para uso em ambientes de sala operatória com demanda de longa duração.
           Seu regulador de pressão inteligente adapta automaticamente o torque de acordo com
           a resistência encontrada durante o procedimento.`,
    specs: [
      { label: "Código", value: "KY-05" },
      { label: "Tipo", value: "Pneumático" },
      { label: "Pressão", value: "2,0–6,0 bar" },
      { label: "Consumo", value: "35 L/min" },
      { label: "Conector", value: "Universal 6mm" },
      { label: "Peso", value: "395g" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark"],
    features: [
      { title: "Pneumático", desc: "Sem bateria — potência constante durante todo o procedimento." },
      { title: "Regulagem Inteligente", desc: "Ajuste automático de torque conforme resistência." },
      { title: "Compatibilidade Universal", desc: "Funciona com toda a linha de acessórios Kiyan." },
    ],
  },

  "kiyan-micro": {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produto.png",
    tag: "KY-06 · Micro",
    title: "Kiyan <strong>Micro</strong>",
    desc: `O Kiyan Micro é o sistema de última geração para cirurgias minimamente invasivas.
           Com diâmetro reduzido e peso ultralow, permite acesso a regiões de difícil alcance
           sem comprometer a performance cirúrgica. Ideal para procedimentos endoscópicos
           e percutâneos de alta precisão.`,
    specs: [
      { label: "Código", value: "KY-06" },
      { label: "Diâmetro", value: "8mm" },
      { label: "Comprimento", value: "22cm" },
      { label: "Peso", value: "210g" },
      { label: "Resolução", value: "±0.01mm" },
      { label: "Interface", value: "Endoscópica" },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
    features: [
      { title: "Micro Invasivo", desc: "Incisão mínima com máximo controle cirúrgico." },
      { title: "Alta Resolução", desc: "Precisão de ±0.01mm para procedimentos delicados." },
      { title: "Menos Tempo de Recuperação", desc: "Reduz o tempo de internação do paciente." },
    ],
  },
};

const SERVICES = {
  "equipamentos": {
    icon: "",
    tag: "Serviço 01",
    title: "Equipamentos <strong>Cirúrgicos</strong>",
    desc: `A Kiyan oferece uma linha completa de equipamentos cirúrgicos desenvolvidos para
           atender os mais altos padrões de performance e segurança. Cada equipamento é
           projetado em colaboração com cirurgiões especialistas, garantindo ergonomia,
           confiabilidade e resultados consistentes em procedimentos de alta complexidade.`,
    features: [
      { title: "Fabricação Nacional", desc: "100% desenvolvido e produzido no Brasil com insumos de alto padrão." },
      { title: "P&D Avançado", desc: "Centro de pesquisa e desenvolvimento com mais de 50 engenheiros especializados." },
      { title: "Certificações Internacionais", desc: "Aprovação ANVISA, FDA, CE Mark e ISO 13485." },
      { title: "Inovação Contínua", desc: "Linha renovada anualmente com incorporação das últimas tecnologias médicas." },
      { title: "Entrega e Logística", desc: "Distribuição para mais de 40 países com rastreabilidade total." },
      { title: "Treinamento Incluído", desc: "Capacitação da equipe cirúrgica na aquisição de qualquer equipamento." },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485", "INMETRO"],
  },

  "neurocirurgia": {
    icon: "",
    tag: "Serviço 02",
    title: "Neuro<strong>cirurgia</strong>",
    desc: `As soluções Kiyan para neurocirurgia são desenvolvidas em parceria direta com
           neurocirurgiões de referência mundial. Nosso portfólio abrange desde instrumentos
           para cirurgia craniana aberta até sistemas endoscópicos minimamente invasivos,
           sempre com foco na segurança do paciente e na eficiência do procedimento.`,
    features: [
      { title: "Especialidade Neurológica", desc: "Linha exclusiva para procedimentos cerebrais e de coluna vertebral." },
      { title: "Co-desenvolvimento", desc: "Produtos criados em parceria com neurocirurgiões líderes de opinião." },
      { title: "Tecnologia Inteligente", desc: "Sistemas com sensores e feedback em tempo real para maior segurança." },
      { title: "Suporte Científico", desc: "Mais de 120 artigos científicos publicados sobre nossos produtos." },
      { title: "Precisão Milimétrica", desc: "Tolerância de fabricação de ±0.01mm em todos os instrumentos críticos." },
      { title: "Rede de Especialistas", desc: "Acesso a network de mais de 500 neurocirurgiões certificados Kiyan." },
    ],
    certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
  },

  "suporte": {
    icon: "",
    tag: "Serviço 03",
    title: "Suporte <strong>Técnico</strong>",
    desc: `O suporte técnico Kiyan é considerado referência no setor de dispositivos médicos.
           Nossa equipe de especialistas oferece atendimento consultivo completo, desde a
           implantação do equipamento até o acompanhamento contínuo pós-operatório,
           garantindo a máxima disponibilidade e desempenho de cada produto.`,
    features: [
      { title: "Atendimento 24/7", desc: "Suporte técnico disponível todos os dias, 24 horas, incluindo feriados." },
      { title: "Manutenção Preventiva", desc: "Planos de manutenção periódica para maximizar a vida útil dos equipamentos." },
      { title: "Resposta Rápida", desc: "Tempo de resposta máximo de 4 horas para chamados urgentes." },
      { title: "Treinamento Especializado", desc: "Capacitação presencial e remota para equipes cirúrgicas e de enfermagem." },
      { title: "Relatórios e Laudos", desc: "Documentação técnica completa de todas as intervenções realizadas." },
      { title: "Equipamento Substituto", desc: "Equipamento reserva disponível durante manutenções programadas." },
    ],
    certs: ["ISO 9001", "ANVISA", "INMETRO"],
  },
};

// ── MODAL ENGINE ──────────────────────────────────────

const overlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("modal-close");

function openModal(html) {
  modalContent.innerHTML = html;
  overlay.setAttribute("aria-hidden", "false");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  // scroll panel to top
  overlay.querySelector(".modal-panel").scrollTop = 0;
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ── BUILD HTML — PRODUCT ──────────────────────────────

function buildProductModal(id) {
  const p = (window.KIYAN_CMS_DATA?.products || PRODUCTS)[id];
  if (!p) return;

  const specsHTML = p.specs.map(s => `
    <div class="modal-spec-item">
      <span class="modal-spec-label">${s.label}</span>
      <span class="modal-spec-value">${s.value}</span>
    </div>
  `).join("");

  const featuresHTML = p.features.map(f => `
    <div class="modal-feature-item">
      <div class="modal-feature-icon"></div>
      <div class="modal-feature-text">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    </div>
  `).join("");

  const certsHTML = p.certs.map(c => `<span class="modal-cert-tag">${c}</span>`).join("");

  openModal(`
    <div class="modal-hero modal-anim">
      <img src="${p.image}" alt="${p.tag}" />
      <span class="modal-hero-badge ${p.badgeClass}">${p.badge}</span>
    </div>

    <div class="modal-body">
      <div class="modal-tag modal-anim"><span></span> ${p.tag}</div>
      <h2 class="modal-title modal-anim">${p.title}</h2>
      <p class="modal-desc modal-anim">${p.desc}</p>

      <div class="modal-divider modal-anim"></div>

      <p class="modal-section-title modal-anim">Especificações Técnicas</p>
      <div class="modal-specs modal-anim">${specsHTML}</div>

      <div class="modal-divider modal-anim"></div>

      <p class="modal-section-title modal-anim">Diferenciais</p>
      <div class="modal-features modal-anim">${featuresHTML}</div>

      <div class="modal-divider modal-anim"></div>

      <p class="modal-section-title modal-anim">Certificações</p>
      <div class="modal-certs modal-anim">${certsHTML}</div>

      <div class="modal-cta modal-anim">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Solicitar Proposta</a>
        <a href="#contact" class="btn btn-outline" onclick="closeModal()">Falar com Especialista</a>
      </div>
    </div>
  `);
}

// ── BUILD HTML — SERVICE ──────────────────────────────

function buildServiceModal(id) {
  const s = (window.KIYAN_CMS_DATA?.services || SERVICES)[id];
  if (!s) return;

  const featuresHTML = s.features.map(f => `
    <div class="modal-feature-item">
      <div class="modal-feature-icon"></div>
      <div class="modal-feature-text">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    </div>
  `).join("");

  const certsHTML = s.certs.map(c => `<span class="modal-cert-tag">${c}</span>`).join("");

  openModal(`
    <div class="modal-hero-service modal-anim">
      <div class="modal-service-icon">Serviço</div>
    </div>

    <div class="modal-body">
      <div class="modal-tag modal-anim"><span></span> ${s.tag}</div>
      <h2 class="modal-title modal-anim">${s.title}</h2>
      <p class="modal-desc modal-anim">${s.desc}</p>

      <div class="modal-divider modal-anim"></div>

      <p class="modal-section-title modal-anim">O que oferecemos</p>
      <div class="modal-features modal-anim">${featuresHTML}</div>

      <div class="modal-divider modal-anim"></div>

      <p class="modal-section-title modal-anim">Certificações & Conformidade</p>
      <div class="modal-certs modal-anim">${certsHTML}</div>

      <div class="modal-cta modal-anim">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Solicitar Serviço</a>
        <a href="#contact" class="btn btn-outline" onclick="closeModal()">Falar com Especialista</a>
      </div>
    </div>
  `);
}

// ── EVENT DELEGATION ──────────────────────────────────

document.addEventListener("click", (e) => {
  // Product "Conheça o produto" links
  const productLink = e.target.closest(".product-conheca");
  if (productLink) {
    e.preventDefault();
    buildProductModal(productLink.dataset.product);
    return;
  }

  // Service "Saiba mais" links
  const serviceLink = e.target.closest(".service-saiba-mais");
  if (serviceLink) {
    e.preventDefault();
    buildServiceModal(serviceLink.dataset.service);
    return;
  }
});
