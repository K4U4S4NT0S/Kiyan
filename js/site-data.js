/* ─────────────────────────────────────────────────────
   site-data.js — Kiyan CMS local para conteúdo editável
   Admin: /adm-kiyan/
───────────────────────────────────────────────────── */

(function () {
  const STORAGE_KEY = "kiyanCMS";

  const DEFAULT_DATA = {
    hero: {
      tag: "Brocas para perfuração engates",
      title: "Perfect <strong>Drill</strong>",
      text: "Onde a precisão encontra a segurança. Tecnologia brasileira criada para entregar controle, estabilidade e confiança em procedimentos hospitalares.",
      primaryButton: "Solicite uma demonstração",
      secondaryButton: "Conheça o produto"
    },
    about: {
      tag: "Sobre a Kiyan",
      title: "Tecnologia brasileira com <strong>padrão internacional</strong>",
      text: "Atuamos no desenvolvimento de soluções cirúrgicas de precisão, unindo engenharia, segurança e inovação para apoiar profissionais da saúde em procedimentos complexos.",
      badgeNumber: "35+",
      badgeText: "anos de inovação",
      features: [
        { title: "Qualidade", desc: "Processos focados em segurança e alta performance." },
        { title: "Inovação", desc: "Produtos pensados para evolução cirúrgica." },
        { title: "Precisão", desc: "Detalhes técnicos que fazem diferença no procedimento." },
        { title: "Confiança", desc: "Reconhecimento em dezenas de países." }
      ]
    },
    servicesIntro: {
      tag: "Serviços",
      title: "Soluções para diferentes <strong>necessidades cirúrgicas</strong>",
      text: "Do desenvolvimento técnico ao suporte especializado, entregamos soluções completas para instituições e cirurgiões."
    },
    productsIntro: {
      tag: "Linha de Produtos",
      title: "Perfect <strong>Drill</strong>",
      text: "Broca Engates — Neurologia. Produto desenvolvido para precisão controlada, compatibilidade com engates cirúrgicos e rastreabilidade no uso hospitalar."
    },
    contact: {
      tag: "Fale conosco",
      title: "Vamos criar<br /><strong>algo juntos</strong>",
      text: "Nossa equipe técnica está pronta para entender suas necessidades e apresentar a solução ideal.",
      location: "São Paulo, Brasil",
      email: "contato@kiyan.com.br",
      phone: "+55 (11) 99999-9999"
    },
    products: {
      "easydrill": {
        badge: "EasyDrill",
        badgeClass: "",
        image: "./assets/images/easydrill.png",
        tag: "KY-01 · Sistema",
        title: "EasyDrill <strong>Pro</strong>",
        cardTitle: "EasyDrill Pro",
        cardDesc: "Perfuração precisa e segurança em cada detalhe.",
        desc: "O EasyDrill Pro é o sistema de perfuração de referência da Kiyan, desenvolvido para proporcionar controle total ao cirurgião em procedimentos cranianos e ortopédicos. Com ergonomia premiada e motor de alta torque, garante precisão milimétrica em cada perfuração, reduzindo o tempo cirúrgico e aumentando a segurança do paciente.",
        specs: [
          { label: "Código", value: "KY-01" },
          { label: "Categoria", value: "Sistema de Perfuração" },
          { label: "Rotação Máx.", value: "80.000 RPM" },
          { label: "Torque", value: "Ajustável 0–4 Nm" },
          { label: "Compatibilidade", value: "Universal" },
          { label: "Esterilização", value: "Autoclave 134°C" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
        features: [
          { title: "Alta Precisão", desc: "Sistema de controle de profundidade com limitador automático." },
          { title: "Ultra Silencioso", desc: "Motor brushless com nível de ruído abaixo de 62 dB." },
          { title: "Bateria de Longa Duração", desc: "Autonomia de até 6 horas de uso contínuo." }
        ]
      },
      "spinedrill": {
        badge: "Lançamento",
        badgeClass: "danger",
        image: "./assets/images/spinedrill.png",
        tag: "SD-05 · Espinal",
        title: "Spine<strong>Drill</strong>",
        cardTitle: "SpineDrill",
        cardDesc: "Nova linha para procedimentos espinais com tecnologia de ponta.",
        desc: "O SpineDrill representa a mais nova fronteira da Kiyan em soluções espinais. Desenvolvido em parceria com neurocirurgiões de referência internacional, combina leveza estrutural com potência cirúrgica inédita, sendo indicado para procedimentos de fusão vertebral, laminectomia e discectomia com máxima segurança.",
        specs: [
          { label: "Código", value: "SD-05" },
          { label: "Categoria", value: "Sistema Espinal" },
          { label: "Peso", value: "480g (com bateria)" },
          { label: "Velocidade", value: "100–60.000 RPM" },
          { label: "Display", value: "LCD tátil integrado" },
          { label: "Garantia", value: "36 meses" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
        features: [
          { title: "Tecnologia de Ponta", desc: "Algoritmo de proteção tecidual em tempo real." },
          { title: "Conectividade", desc: "Bluetooth integrado para monitoramento intraoperatório." },
          { title: "Premiado", desc: "Vencedor do Prêmio Inovação MedTech Brasil 2025." }
        ]
      },
      "kiyan-surgical": {
        badge: "Kiyan",
        badgeClass: "",
        image: "./assets/images/produto.png",
        tag: "KY-02 · Precisão",
        title: "Kiyan <strong>Surgical</strong>",
        cardTitle: "Kiyan Surgical",
        cardDesc: "Solução robusta para procedimentos de alta complexidade.",
        desc: "O Kiyan Surgical é a solução de maior robustez da linha, projetada para os procedimentos mais complexos da neurocirurgia moderna. Seu design monobloco em titânio grau médico e sistema de troca rápida de brocas tornam-no indispensável em centros de referência em todo o mundo.",
        specs: [
          { label: "Código", value: "KY-02" },
          { label: "Material", value: "Titânio Ti-6Al-4V" },
          { label: "Pressão Op.", value: "2,5–4,5 bar" },
          { label: "Peso", value: "620g" },
          { label: "Acionamento", value: "Pneumático" },
          { label: "Esterilização", value: "ETO / Autoclave" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
        features: [
          { title: "Extrema Robustez", desc: "Corpo em titânio médico para máxima durabilidade." },
          { title: "Troca Rápida", desc: "Sistema Quick-Release para troca de acessórios em segundos." },
          { title: "Reconhecimento Global", desc: "Utilizado em mais de 30 países em procedimentos críticos." }
        ]
      },
      "kiyan-neuro": {
        badge: "Kiyan",
        badgeClass: "",
        image: "./assets/images/produtos-coloridos.png",
        tag: "KY-03 · Neuro",
        title: "Kiyan <strong>Neuro</strong>",
        cardTitle: "Kiyan Neuro",
        cardDesc: "Linha de instrumentos para neurocirurgia avançada.",
        desc: "A linha Kiyan Neuro foi especificamente concebida para os desafios únicos da neurocirurgia. Cada instrumento é calibrado para trabalhar em espaços extremamente reduzidos com total preservação tecidual, atendendo aos mais rigorosos protocolos de segurança neurocirúrgica.",
        specs: [
          { label: "Código", value: "KY-03" },
          { label: "Aplicação", value: "Neurocirurgia" },
          { label: "Velocidade", value: "Até 100.000 RPM" },
          { label: "Irrigação", value: "Sistema integrado" },
          { label: "Iluminação", value: "LED integrado" },
          { label: "Peças", value: "Kit com 12 acessórios" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark"],
        features: [
          { title: "Foco Neurocirúrgico", desc: "Projetado exclusivamente para procedimentos cerebrais." },
          { title: "Iluminação Integrada", desc: "LEDs de alta luminância no cabezal para melhor visualização." },
          { title: "Irrigação Contínua", desc: "Sistema de irrigação para controle de temperatura tecidual." }
        ]
      },
      "kiyan-spine": {
        badge: "Kiyan",
        badgeClass: "",
        image: "./assets/images/produtos-inclinados.png",
        tag: "KY-04 · Espinal",
        title: "Kiyan <strong>Spine</strong>",
        cardTitle: "Kiyan Spine",
        cardDesc: "Soluções para fixação e estabilização espinal.",
        desc: "O Kiyan Spine foi desenvolvido para cirurgiões especialistas em coluna vertebral, oferecendo um conjunto completo de instrumentos para fixação e estabilização espinal. A linha inclui parafusos pediculares, hastes de titânio e sistemas de fusão interbody com rastreabilidade completa.",
        specs: [
          { label: "Código", value: "KY-04" },
          { label: "Categoria", value: "Sistema Espinal" },
          { label: "Material", value: "Ti-6Al-4V ELI" },
          { label: "Compatibilidade", value: "MRI Safe" },
          { label: "Rastreabilidade", value: "QR Code integrado" },
          { label: "Cobertura", value: "L1–S2 completo" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
        features: [
          { title: "Sistema Completo", desc: "Kit de fixação para toda a coluna vertebral." },
          { title: "MRI Compatible", desc: "Todos os implantes compatíveis com ressonância magnética." },
          { title: "Rastreabilidade Digital", desc: "QR Code em cada componente para registro cirúrgico." }
        ]
      },
      "kiyan-drive": {
        badge: "Kiyan",
        badgeClass: "",
        image: "./assets/images/produto-hero.png",
        tag: "KY-05 · Drive",
        title: "Kiyan <strong>Drive</strong>",
        cardTitle: "Kiyan Drive",
        cardDesc: "Sistema de acionamento pneumático para cirurgias de precisão.",
        desc: "O Kiyan Drive é o sistema de acionamento pneumático de alta performance da linha, desenvolvido para uso em ambientes de sala operatória com demanda de longa duração. Seu regulador de pressão inteligente adapta automaticamente o torque de acordo com a resistência encontrada durante o procedimento.",
        specs: [
          { label: "Código", value: "KY-05" },
          { label: "Tipo", value: "Pneumático" },
          { label: "Pressão", value: "2,0–6,0 bar" },
          { label: "Consumo", value: "35 L/min" },
          { label: "Conector", value: "Universal 6mm" },
          { label: "Peso", value: "395g" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark"],
        features: [
          { title: "Pneumático", desc: "Sem bateria — potência constante durante todo o procedimento." },
          { title: "Regulagem Inteligente", desc: "Ajuste automático de torque conforme resistência." },
          { title: "Compatibilidade Universal", desc: "Funciona com toda a linha de acessórios Kiyan." }
        ]
      },
      "kiyan-micro": {
        badge: "Kiyan",
        badgeClass: "",
        image: "./assets/images/produto.png",
        tag: "KY-06 · Micro",
        title: "Kiyan <strong>Micro</strong>",
        cardTitle: "Kiyan Micro",
        cardDesc: "Microssistema para procedimentos minimamente invasivos.",
        desc: "O Kiyan Micro é o sistema de última geração para cirurgias minimamente invasivas. Com diâmetro reduzido e peso ultralow, permite acesso a regiões de difícil alcance sem comprometer a performance cirúrgica. Ideal para procedimentos endoscópicos e percutâneos de alta precisão.",
        specs: [
          { label: "Código", value: "KY-06" },
          { label: "Diâmetro", value: "8mm" },
          { label: "Comprimento", value: "22cm" },
          { label: "Peso", value: "210g" },
          { label: "Resolução", value: "±0.01mm" },
          { label: "Interface", value: "Endoscópica" }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"],
        features: [
          { title: "Micro Invasivo", desc: "Incisão mínima com máximo controle cirúrgico." },
          { title: "Alta Resolução", desc: "Precisão de ±0.01mm para procedimentos delicados." },
          { title: "Menos Tempo de Recuperação", desc: "Reduz o tempo de internação do paciente." }
        ]
      }
    },
    services: {
      "equipamentos": {
        tag: "Serviço 01",
        title: "Equipamentos <strong>Cirúrgicos</strong>",
        cardTitle: "Equipamentos Cirúrgicos",
        cardDesc: "Alta performance, precisão e segurança para procedimentos complexos.",
        desc: "A Kiyan oferece uma linha completa de equipamentos cirúrgicos desenvolvidos para atender os mais altos padrões de performance e segurança. Cada equipamento é projetado em colaboração com cirurgiões especialistas, garantindo ergonomia, confiabilidade e resultados consistentes em procedimentos de alta complexidade.",
        features: [
          { title: "Fabricação Nacional", desc: "100% desenvolvido e produzido no Brasil com insumos de alto padrão." },
          { title: "P&D Avançado", desc: "Centro de pesquisa e desenvolvimento com mais de 50 engenheiros especializados." },
          { title: "Certificações Internacionais", desc: "Aprovação ANVISA, FDA, CE Mark e ISO 13485." },
          { title: "Inovação Contínua", desc: "Linha renovada anualmente com incorporação das últimas tecnologias médicas." },
          { title: "Entrega e Logística", desc: "Distribuição para mais de 40 países com rastreabilidade total." },
          { title: "Treinamento Incluído", desc: "Capacitação da equipe cirúrgica na aquisição de qualquer equipamento." }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485", "INMETRO"]
      },
      "neurocirurgia": {
        tag: "Serviço 02",
        title: "Neuro<strong>cirurgia</strong>",
        cardTitle: "Neurocirurgia",
        cardDesc: "Soluções especializadas para aplicações neurocirúrgicas.",
        desc: "As soluções Kiyan para neurocirurgia são desenvolvidas em parceria direta com neurocirurgiões de referência mundial. Nosso portfólio abrange desde instrumentos para cirurgia craniana aberta até sistemas endoscópicos minimamente invasivos, sempre com foco na segurança do paciente e na eficiência do procedimento.",
        features: [
          { title: "Especialidade Neurológica", desc: "Linha exclusiva para procedimentos cerebrais e de coluna vertebral." },
          { title: "Co-desenvolvimento", desc: "Produtos criados em parceria com neurocirurgiões líderes de opinião." },
          { title: "Tecnologia Inteligente", desc: "Sistemas com sensores e feedback em tempo real para maior segurança." },
          { title: "Suporte Científico", desc: "Mais de 120 artigos científicos publicados sobre nossos produtos." },
          { title: "Precisão Milimétrica", desc: "Tolerância de fabricação de ±0.01mm em todos os instrumentos críticos." },
          { title: "Rede de Especialistas", desc: "Acesso a network de mais de 500 neurocirurgiões certificados Kiyan." }
        ],
        certs: ["ANVISA", "FDA", "CE Mark", "ISO 13485"]
      },
      "suporte": {
        tag: "Serviço 03",
        title: "Suporte <strong>Técnico</strong>",
        cardTitle: "Suporte Técnico",
        cardDesc: "Atendimento consultivo para uso, manutenção e orientação técnica.",
        desc: "O suporte técnico Kiyan é considerado referência no setor de dispositivos médicos. Nossa equipe de especialistas oferece atendimento consultivo completo, desde a implantação do equipamento até o acompanhamento contínuo pós-operatório, garantindo a máxima disponibilidade e desempenho de cada produto.",
        features: [
          { title: "Atendimento 24/7", desc: "Suporte técnico disponível todos os dias, 24 horas, incluindo feriados." },
          { title: "Manutenção Preventiva", desc: "Planos de manutenção periódica para maximizar a vida útil dos equipamentos." },
          { title: "Resposta Rápida", desc: "Tempo de resposta máximo de 4 horas para chamados urgentes." },
          { title: "Treinamento Especializado", desc: "Capacitação presencial e remota para equipes cirúrgicas e de enfermagem." },
          { title: "Relatórios e Laudos", desc: "Documentação técnica completa de todas as intervenções realizadas." },
          { title: "Equipamento Substituto", desc: "Equipamento reserva disponível durante manutenções programadas." }
        ],
        certs: ["ISO 9001", "ANVISA", "INMETRO"]
      }
    }
  };

  function deepMerge(base, override) {
    if (!override || typeof override !== "object") return structuredClone(base);
    const output = Array.isArray(base) ? [...base] : { ...base };
    Object.keys(override).forEach((key) => {
      if (override[key] && typeof override[key] === "object" && !Array.isArray(override[key])) {
        output[key] = deepMerge(base?.[key] || {}, override[key]);
      } else {
        output[key] = override[key];
      }
    });
    return output;
  }

  function getStoredData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      console.warn("Não foi possível ler o CMS local:", error);
      return {};
    }
  }

  function getData() {
    return deepMerge(DEFAULT_DATA, getStoredData());
  }

  function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function sanitizeHTML(value = "") {
    return String(value).trim();
  }

  function setHTML(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.innerHTML = sanitizeHTML(value);
  }

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.textContent = String(value);
  }

  function renderProducts(products) {
    const track = document.querySelector(".products-track");
    if (!track) return;

    track.innerHTML = Object.entries(products).map(([id, p], index) => `
      <article class="product-card reveal ${index ? "delay-1" : ""}" data-product="${id}">
        <div class="product-image">
          <img src="${p.image}" alt="${p.cardTitle || p.title}" />
          <span class="${p.badgeClass || ""}">${p.badge || "Kiyan"}</span>
        </div>
        <div class="product-body">
          <small>${p.tag || "Produto Kiyan"}</small>
          <h3>${p.cardTitle || p.title}</h3>
          <p>${p.cardDesc || p.desc}</p>
          <a href="#" class="product-conheca" data-product="${id}">Conheça o produto →</a>
        </div>
      </article>
    `).join("");
  }

  function renderServices(services) {
    const grid = document.querySelector(".services-grid");
    if (!grid) return;

    grid.innerHTML = Object.entries(services).map(([id, s], index) => `
      <article class="service-card reveal ${index ? `delay-${Math.min(index, 3)}` : ""}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div class="service-icon">${String(index + 1).padStart(2, "0")}</div>
        <h3>${s.cardTitle || s.title}</h3>
        <p>${s.cardDesc || s.desc}</p>
        <a href="#" class="service-saiba-mais" data-service="${id}">Saiba mais →</a>
      </article>
    `).join("");
  }

  function renderAbout(about) {
    setHTML("#about .section-tag", `<span></span> ${about.tag}`);
    setHTML("#about .section-title", about.title);
    setText("#about .section-text", about.text);
    const badge = document.querySelector(".about-badge");
    if (badge) badge.innerHTML = `<strong>${about.badgeNumber}</strong> ${about.badgeText}`;

    const featureGrid = document.querySelector(".feature-grid");
    if (featureGrid) {
      featureGrid.innerHTML = (about.features || []).map((f) => `
        <article class="feature-card">
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
        </article>
      `).join("");
    }
  }

  function renderSiteContent() {
    const data = getData();
    window.KIYAN_CMS_DATA = data;

    setHTML(".hero-tag", `<span></span> ${data.hero.tag}`);
    setHTML(".hero-title", data.hero.title);
    setText(".hero-text", data.hero.text);
    setText(".hero-actions .btn-primary", data.hero.primaryButton);
    setText(".hero-actions .btn-outline", data.hero.secondaryButton);

    renderAbout(data.about);

    setHTML("#services .section-header .section-tag", `<span></span> ${data.servicesIntro.tag}`);
    setHTML("#services .section-title", data.servicesIntro.title);
    setText("#services .section-header .section-text", data.servicesIntro.text);
    renderServices(data.services);

    setHTML("#products .section-tag", `<span></span> ${data.productsIntro.tag}`);
    setHTML("#products .section-title", data.productsIntro.title);
    setText("#products .section-text", data.productsIntro.text);
    renderProducts(data.products);

    setHTML("#contact .section-tag", `<span></span> ${data.contact.tag}`);
    setHTML("#contact .section-title", data.contact.title);
    setText("#contact .section-text", data.contact.text);
    const info = document.querySelectorAll(".contact-info p");
    if (info[0]) info[0].innerHTML = `<strong>Localização</strong>${data.contact.location}`;
    if (info[1]) info[1].innerHTML = `<strong>E-mail</strong>${data.contact.email}`;
    if (info[2]) info[2].innerHTML = `<strong>Telefone</strong>${data.contact.phone}`;

    if (typeof window.KIYAN_refreshAnimations === "function") {
      window.KIYAN_refreshAnimations();
    }
  }

  window.KIYAN_STORAGE_KEY = STORAGE_KEY;
  window.KIYAN_DEFAULT_DATA = DEFAULT_DATA;
  window.KIYAN_getData = getData;
  window.KIYAN_saveData = saveData;
  window.KIYAN_renderSiteContent = renderSiteContent;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSiteContent);
  } else {
    renderSiteContent();
  }
})();
