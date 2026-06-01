/* Autenticação simples do painel ADM */
const ADMIN_AUTH_KEY = "kiyan_admin_authenticated";
const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "admin123";

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

function showAdminPanel() {
  document.body.classList.add("is-authenticated");
}

function showLoginScreen() {
  document.body.classList.remove("is-authenticated");
}

function setupLogin() {
  const loginForm = document.querySelector("#loginForm");
  const loginUser = document.querySelector("#loginUser");
  const loginPassword = document.querySelector("#loginPassword");
  const loginError = document.querySelector("#loginError");
  const logoutButton = document.querySelector("#logoutAdmin");

  if (isAdminAuthenticated()) {
    showAdminPanel();
  } else {
    showLoginScreen();
  }

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = loginUser.value.trim();
    const password = loginPassword.value.trim();

    if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
      loginForm.reset();
      loginError.textContent = "";
      showAdminPanel();
      showToast("Login realizado com sucesso.");
      return;
    }

    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    loginError.textContent = "Usuário ou senha inválidos.";
    loginPassword.value = "";
    loginPassword.focus();
  });

  logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    showLoginScreen();
    showToast("Sessão encerrada.");
  });
}

/* ─────────────────────────────────────────────────────
   admin.js — Painel administrador Kiyan
───────────────────────────────────────────────────── */

const state = window.KIYAN_getData();
const toast = document.querySelector("#toast");

const sections = document.querySelectorAll(".admin-section");
const navButtons = document.querySelectorAll(".admin-nav button");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#tab-${button.dataset.tab}`)?.classList.add("active");
    syncJsonEditor();
  });
});

function showToast(message = "Salvo com sucesso!") {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || `item-${Date.now()}`;
}

function escapeAttr(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function fieldHTML(label, path, value, type = "input", help = "") {
  const safeValue = escapeAttr(value ?? "");
  if (type === "textarea") {
    return `
      <div class="field">
        <label>${label}</label>
        <textarea data-path="${path}">${value ?? ""}</textarea>
        ${help ? `<small>${help}</small>` : ""}
      </div>
    `;
  }
  return `
    <div class="field">
      <label>${label}</label>
      <input data-path="${path}" value="${safeValue}" />
      ${help ? `<small>${help}</small>` : ""}
    </div>
  `;
}


function imageFieldHTML(label, path, value = "") {
  const safeValue = escapeAttr(value || "");
  const preview = value ? `<img class="image-preview" src="${safeValue}" alt="Prévia da foto" />` : `<div class="image-preview empty">Sem foto anexada</div>`;
  return `
    <div class="field image-upload-field">
      <label>${label}</label>
      ${preview}
      <input type="file" accept="image/*" data-image-path="${path}" />
      <input data-path="${path}" value="${safeValue}" placeholder="Caminho ou foto anexada em base64" />
      <small>Anexe uma foto do computador ou cole o caminho da imagem. Ao salvar, ela aparece no site principal.</small>
    </div>
  `;
}

function getByPath(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], state);
}

function setByPath(path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((obj, key) => obj[key], state);
  target[last] = value;
}

function specsToText(specs = []) {
  return specs.map((s) => `${s.label}|${s.value}`).join("\n");
}

function textToSpecs(text = "") {
  return text.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
    const [label, ...rest] = line.split("|");
    return { label: (label || "").trim(), value: rest.join("|").trim() };
  });
}

function featuresToText(features = []) {
  return features.map((f) => `${f.title}|${f.desc}`).join("\n");
}

function textToFeatures(text = "") {
  return text.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
    const [title, ...rest] = line.split("|");
    return { title: (title || "").trim(), desc: rest.join("|").trim() };
  });
}

function certsToText(certs = []) {
  return certs.join(", ");
}

function textToCerts(text = "") {
  return text.split(",").map((item) => item.trim()).filter(Boolean);
}

function renderGeneralEditor() {
  const el = document.querySelector("#generalEditor");
  el.innerHTML = `
    <article class="editor-item">
      <div class="editor-title"><div><strong>Hero</strong><br><span>Primeira dobra do site</span></div></div>
      <div class="form-grid">
        ${fieldHTML("Tag", "hero.tag", state.hero.tag)}
        ${fieldHTML("Botão principal", "hero.primaryButton", state.hero.primaryButton)}
        ${fieldHTML("Título", "hero.title", state.hero.title, "textarea", "Pode usar <strong>, <br> e <em>.")}
        ${fieldHTML("Texto", "hero.text", state.hero.text, "textarea")}
        ${fieldHTML("Botão secundário", "hero.secondaryButton", state.hero.secondaryButton)}
      </div>
    </article>

    <article class="editor-item">
      <div class="editor-title"><div><strong>Sobre a empresa</strong><br><span>Texto institucional e diferenciais</span></div></div>
      <div class="form-grid">
        ${fieldHTML("Tag", "about.tag", state.about.tag)}
        ${fieldHTML("Badge número", "about.badgeNumber", state.about.badgeNumber)}
        ${fieldHTML("Título", "about.title", state.about.title, "textarea", "Pode usar <strong>.")}
        ${fieldHTML("Texto", "about.text", state.about.text, "textarea")}
        ${fieldHTML("Badge texto", "about.badgeText", state.about.badgeText)}
      </div>
      <div class="field" style="margin-top:16px">
        <label>Diferenciais</label>
        <textarea data-special="aboutFeatures">${state.about.features.map((f) => `${f.title}|${f.desc}`).join("\n")}</textarea>
        <small>Formato: título|descrição. Um item por linha.</small>
      </div>
    </article>

    <article class="editor-item">
      <div class="editor-title"><div><strong>Introduções</strong><br><span>Chamadas das áreas de serviços e produtos</span></div></div>
      <div class="form-grid">
        ${fieldHTML("Tag Serviços", "servicesIntro.tag", state.servicesIntro.tag)}
        ${fieldHTML("Título Serviços", "servicesIntro.title", state.servicesIntro.title, "textarea")}
        ${fieldHTML("Texto Serviços", "servicesIntro.text", state.servicesIntro.text, "textarea")}
        ${fieldHTML("Tag Produtos", "productsIntro.tag", state.productsIntro.tag)}
        ${fieldHTML("Título Produtos", "productsIntro.title", state.productsIntro.title, "textarea")}
        ${fieldHTML("Texto Produtos", "productsIntro.text", state.productsIntro.text, "textarea")}
      </div>
    </article>

    <article class="editor-item">
      <div class="editor-title"><div><strong>Contato</strong><br><span>Dados exibidos na seção de contato</span></div></div>
      <div class="form-grid">
        ${fieldHTML("Tag", "contact.tag", state.contact.tag)}
        ${fieldHTML("Título", "contact.title", state.contact.title, "textarea")}
        ${fieldHTML("Texto", "contact.text", state.contact.text, "textarea")}
        ${fieldHTML("Localização", "contact.location", state.contact.location)}
        ${fieldHTML("E-mail", "contact.email", state.contact.email)}
        ${fieldHTML("Telefone", "contact.phone", state.contact.phone)}
      </div>
    </article>
  `;
}

function renderProductsEditor() {
  const el = document.querySelector("#productsEditor");
  el.innerHTML = Object.entries(state.products).map(([id, p]) => `
    <article class="editor-item" data-product-item="${id}">
      <div class="editor-title">
        <div><strong>${p.cardTitle || p.title}</strong><br><span>ID: ${id}</span></div>
        <button class="btn-admin danger" data-remove-product="${id}">Remover</button>
      </div>
      <div class="form-grid">
        ${fieldHTML("Título do card", `products.${id}.cardTitle`, p.cardTitle || "")}
        ${fieldHTML("Descrição do card", `products.${id}.cardDesc`, p.cardDesc || "", "textarea")}
        ${imageFieldHTML("Anexar foto", `products.${id}.image`, p.image || "")}
        ${fieldHTML("Badge", `products.${id}.badge`, p.badge || "")}
        ${fieldHTML("Classe do badge", `products.${id}.badgeClass`, p.badgeClass || "", "input", "Use danger para destaque vermelho ou deixe vazio.")}
        ${fieldHTML("Tag técnica", `products.${id}.tag`, p.tag || "")}
        ${fieldHTML("Título da aba", `products.${id}.title`, p.title || "", "textarea", "Pode usar <strong>.")}
        ${fieldHTML("Descrição da aba", `products.${id}.desc`, p.desc || "", "textarea")}
      </div>
      <div class="form-grid" style="margin-top:16px">
        <div class="field">
          <label>Especificações</label>
          <textarea data-special="productSpecs" data-id="${id}">${specsToText(p.specs)}</textarea>
          <small>Formato: nome|valor. Um item por linha.</small>
        </div>
        <div class="field">
          <label>Diferenciais</label>
          <textarea data-special="productFeatures" data-id="${id}">${featuresToText(p.features)}</textarea>
          <small>Formato: título|descrição. Um item por linha.</small>
        </div>
        <div class="field">
          <label>Certificações</label>
          <input data-special="productCerts" data-id="${id}" value="${escapeAttr(certsToText(p.certs))}" />
          <small>Separar por vírgula.</small>
        </div>
      </div>
    </article>
  `).join("");
}

function renderServicesEditor() {
  const el = document.querySelector("#servicesEditor");
  el.innerHTML = Object.entries(state.services).map(([id, s]) => `
    <article class="editor-item" data-service-item="${id}">
      <div class="editor-title">
        <div><strong>${s.cardTitle || s.title}</strong><br><span>ID: ${id}</span></div>
        <button class="btn-admin danger" data-remove-service="${id}">Remover</button>
      </div>
      <div class="form-grid">
        ${fieldHTML("Título do card", `services.${id}.cardTitle`, s.cardTitle || "")}
        ${fieldHTML("Descrição do card", `services.${id}.cardDesc`, s.cardDesc || "", "textarea")}
        ${fieldHTML("Tag", `services.${id}.tag`, s.tag || "")}
        ${fieldHTML("Título da aba", `services.${id}.title`, s.title || "", "textarea", "Pode usar <strong>.")}
        ${fieldHTML("Descrição da aba", `services.${id}.desc`, s.desc || "", "textarea")}
      </div>
      <div class="form-grid" style="margin-top:16px">
        <div class="field">
          <label>O que oferecemos</label>
          <textarea data-special="serviceFeatures" data-id="${id}">${featuresToText(s.features)}</textarea>
          <small>Formato: título|descrição. Um item por linha.</small>
        </div>
        <div class="field">
          <label>Certificações</label>
          <input data-special="serviceCerts" data-id="${id}" value="${escapeAttr(certsToText(s.certs))}" />
          <small>Separar por vírgula.</small>
        </div>
      </div>
    </article>
  `).join("");
}

function bindInputs() {
  document.body.addEventListener("input", (event) => {
    const input = event.target;

    if (input.dataset.imagePath && input.files?.[0]) {
      const file = input.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Selecione um arquivo de imagem válido.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setByPath(input.dataset.imagePath, reader.result);
        renderProductsEditor();
        syncJsonEditor(false);
        showToast("Foto anexada com sucesso.");
      };
      reader.readAsDataURL(file);
      return;
    }
    if (input.dataset.path) {
      setByPath(input.dataset.path, input.value);
      syncJsonEditor(false);
    }

    if (input.dataset.special === "aboutFeatures") {
      state.about.features = input.value.split("\n").map((line) => line.trim()).filter(Boolean).map((line) => {
        const [title, ...rest] = line.split("|");
        return { title: (title || "").trim(), desc: rest.join("|").trim() };
      });
      syncJsonEditor(false);
    }

    if (input.dataset.special === "productSpecs") {
      state.products[input.dataset.id].specs = textToSpecs(input.value);
      syncJsonEditor(false);
    }
    if (input.dataset.special === "productFeatures") {
      state.products[input.dataset.id].features = textToFeatures(input.value);
      syncJsonEditor(false);
    }
    if (input.dataset.special === "productCerts") {
      state.products[input.dataset.id].certs = textToCerts(input.value);
      syncJsonEditor(false);
    }
    if (input.dataset.special === "serviceFeatures") {
      state.services[input.dataset.id].features = textToFeatures(input.value);
      syncJsonEditor(false);
    }
    if (input.dataset.special === "serviceCerts") {
      state.services[input.dataset.id].certs = textToCerts(input.value);
      syncJsonEditor(false);
    }
  });

  document.body.addEventListener("click", (event) => {
    const removeProduct = event.target.closest("[data-remove-product]");
    if (removeProduct) {
      const id = removeProduct.dataset.removeProduct;
      if (confirm(`Remover o produto "${id}"?`)) {
        delete state.products[id];
        renderProductsEditor();
        showToast("Produto removido.");
      }
    }

    const removeService = event.target.closest("[data-remove-service]");
    if (removeService) {
      const id = removeService.dataset.removeService;
      if (confirm(`Remover o serviço "${id}"?`)) {
        delete state.services[id];
        renderServicesEditor();
        showToast("Serviço removido.");
      }
    }
  });
}

function addProduct() {
  const name = prompt("Nome do novo produto:", "Novo Produto Kiyan");
  if (!name) return;
  const id = slugify(name);
  state.products[id] = {
    badge: "Kiyan",
    badgeClass: "",
    image: "./assets/images/produto.png",
    tag: "KY-00 · Produto",
    title: `${name} <strong>Kiyan</strong>`,
    cardTitle: name,
    cardDesc: "Descrição curta do produto.",
    desc: "Descrição completa do produto para a aba de detalhes.",
    specs: [{ label: "Código", value: "KY-00" }],
    certs: ["ANVISA"],
    features: [{ title: "Diferencial", desc: "Descreva o principal diferencial." }]
  };
  renderProductsEditor();
  showToast("Produto criado.");
}

function addService() {
  const name = prompt("Nome do novo serviço:", "Novo Serviço");
  if (!name) return;
  const id = slugify(name);
  state.services[id] = {
    tag: "Serviço",
    title: `${name} <strong>Kiyan</strong>`,
    cardTitle: name,
    cardDesc: "Descrição curta do serviço.",
    desc: "Descrição completa do serviço para a aba de detalhes.",
    features: [{ title: "Entrega", desc: "Descreva o que esse serviço oferece." }],
    certs: ["ANVISA"]
  };
  renderServicesEditor();
  showToast("Serviço criado.");
}

function saveAll() {
  window.KIYAN_saveData(state);
  window.KIYAN_CMS_DATA = state;
  syncJsonEditor();
  showToast("Alterações salvas!");
  document.querySelector("#previewFrame")?.contentWindow?.location?.reload();
}

function resetAll() {
  if (!confirm("Tem certeza que deseja apagar todas as alterações locais?")) return;
  localStorage.removeItem(window.KIYAN_STORAGE_KEY);
  showToast("Conteúdo padrão restaurado.");
  setTimeout(() => location.reload(), 700);
}

function syncJsonEditor(format = true) {
  const editor = document.querySelector("#jsonEditor");
  if (!editor || (!format && document.activeElement === editor)) return;
  editor.value = JSON.stringify(state, null, 2);
}

function exportJson() {
  syncJsonEditor();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kiyan-conteudo.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importJson() {
  const editor = document.querySelector("#jsonEditor");
  try {
    const imported = JSON.parse(editor.value);
    Object.keys(state).forEach((key) => delete state[key]);
    Object.assign(state, imported);
    window.KIYAN_saveData(state);
    renderAll();
    showToast("JSON importado com sucesso!");
  } catch (error) {
    alert("JSON inválido. Confira vírgulas, aspas e chaves.");
  }
}

function renderAll() {
  renderGeneralEditor();
  renderProductsEditor();
  renderServicesEditor();
  syncJsonEditor();
}

setupLogin();
renderAll();
bindInputs();

document.querySelector("#saveAll")?.addEventListener("click", saveAll);
document.querySelector("#resetAll")?.addEventListener("click", resetAll);
document.querySelector("#addProduct")?.addEventListener("click", addProduct);
document.querySelector("#addService")?.addEventListener("click", addService);
document.querySelector("#exportJson")?.addEventListener("click", exportJson);
document.querySelector("#exportJsonTop")?.addEventListener("click", exportJson);
document.querySelector("#importJson")?.addEventListener("click", importJson);
document.querySelector("#reloadPreview")?.addEventListener("click", () => document.querySelector("#previewFrame").src = "../index.html?preview=" + Date.now());
