# PLAYBOOK MATERIAL DESIGN 3 - LANDING PAGE F5 GOOGLE ADS

## 🎯 **CONTEXTO DO PROJETO**

### **Objetivo:**
Criar landing page F5 Google Ads usando Material Design 3 (Material You) como base, adaptando os padrões oficiais do Google para uma agência Google Partner oficial que atende PMEs brasileiras.

### **Produto:**
- **Nome:** F5 Google Ads - "A ferramenta que mais vende no mundo"
- **Público:** PMEs brasileiras (faturamento até R$ 300k/mês)
- **Investimento:** R$ 1.497 - R$ 2.497/mês (R$ 49-83/dia)
- **Diferencial:** Google Partner oficial + implementação em 5 dias
- **Meta conversão:** >5% (benchmark PME marketing)

---

## 🎨 **MATERIAL DESIGN 3 - ESPECIFICAÇÕES**

### **Paleta de Cores (Material You):**
```css
/* Baseado na página oficial Google Ads Business */
:root {
  /* Primary - Azul Google */
  --md-sys-color-primary: #4285f4;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #e8f0fe;
  --md-sys-color-on-primary-container: #001d35;
  
  /* Secondary - Verde Google */
  --md-sys-color-secondary: #34a853;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #e8f5e8;
  
  /* Surface & Background */
  --md-sys-color-surface: #ffffff;
  --md-sys-color-surface-variant: #f8f9fa;
  --md-sys-color-surface-container-low: #fefbff;
  --md-sys-color-surface-container: #f3f4f6;
  --md-sys-color-surface-container-high: #e6e7e9;
  
  /* Text Colors */
  --md-sys-color-on-surface: #202124;
  --md-sys-color-on-surface-variant: #5f6368;
  --md-sys-color-outline: #dadce0;
  --md-sys-color-outline-variant: #e8eaed;
  
  /* Error - Vermelho Google */
  --md-sys-color-error: #ea4335;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #fce8e6;
  
  /* Warning - Amarelo Google */
  --md-sys-color-warning: #fbbc04;
  --md-sys-color-on-warning: #000000;
}
```

### **Tipografia Material Design 3:**
```css
/* Fonte oficial Google Sans (ou fallback System UI) */
:root {
  --md-sys-typescale-display-large: 400 57px/64px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-display-medium: 400 45px/52px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-display-small: 400 36px/44px "Google Sans", system-ui, sans-serif;
  
  --md-sys-typescale-headline-large: 400 32px/40px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-headline-medium: 400 28px/36px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-headline-small: 400 24px/32px "Google Sans", system-ui, sans-serif;
  
  --md-sys-typescale-title-large: 400 22px/28px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-title-medium: 500 16px/24px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-title-small: 500 14px/20px "Google Sans", system-ui, sans-serif;
  
  --md-sys-typescale-body-large: 400 16px/24px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-body-medium: 400 14px/20px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-body-small: 400 12px/16px "Google Sans", system-ui, sans-serif;
  
  --md-sys-typescale-label-large: 500 14px/20px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-label-medium: 500 12px/16px "Google Sans", system-ui, sans-serif;
  --md-sys-typescale-label-small: 500 11px/16px "Google Sans", system-ui, sans-serif;
}
```

### **Elevação e Sombras Material:**
```css
:root {
  /* Material Elevation Levels */
  --md-sys-elevation-level0: none;
  --md-sys-elevation-level1: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);
  --md-sys-elevation-level2: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15);
  --md-sys-elevation-level3: 0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.3);
  --md-sys-elevation-level4: 0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px rgba(0,0,0,0.3);
  --md-sys-elevation-level5: 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.3);
}
```

### **Shape System Material:**
```css
:root {
  /* Corner Radius */
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-full: 50%;
}
```

---

## 🧩 **COMPONENTES MATERIAL DESIGN 3**

### **1. Botões (Material Buttons):**
```html
<!-- Botão Primário (Filled Button) -->
<button class="md-filled-button" type="button">
  <span class="md-button__label">QUERO FATURAR 3X MAIS</span>
</button>

<!-- Botão Secundário (Outlined Button) -->
<button class="md-outlined-button" type="button">
  <span class="md-button__label">Fale Conosco</span>
</button>

<!-- Botão Texto (Text Button) -->
<button class="md-text-button" type="button">
  <span class="md-button__label">Saiba mais</span>
</button>
```

```css
/* CSS para Botões Material */
.md-filled-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  font: var(--md-sys-typescale-label-large);
  box-shadow: var(--md-sys-elevation-level1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
}

.md-filled-button:hover {
  box-shadow: var(--md-sys-elevation-level2);
  background-color: color-mix(in srgb, var(--md-sys-color-primary) 92%, black);
}

.md-outlined-button {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  font: var(--md-sys-typescale-label-large);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
}
```

### **2. Cards Material:**
```html
<!-- Card de Serviço -->
<div class="md-card md-card--filled">
  <div class="md-card__content">
    <div class="md-card__header">
      <div class="md-card__media">
        <img src="assets/icons/search-icon.svg" alt="Google Ads Search">
      </div>
      <h3 class="md-card__title">Google Ads Search</h3>
    </div>
    <p class="md-card__supporting-text">
      Apareça quando clientes procuram produtos como o seu
    </p>
    <div class="md-card__actions">
      <button class="md-text-button">Saiba mais</button>
    </div>
  </div>
</div>
```

```css
.md-card {
  background-color: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-level1);
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
}

.md-card:hover {
  box-shadow: var(--md-sys-elevation-level3);
}

.md-card__content {
  padding: 16px;
}

.md-card__title {
  font: var(--md-sys-typescale-title-large);
  color: var(--md-sys-color-on-surface);
  margin: 0 0 8px 0;
}
```

### **3. Formulário Material:**
```html
<form class="md-form">
  <!-- Campo de texto Material -->
  <div class="md-text-field md-text-field--filled">
    <input type="text" id="name" class="md-text-field__input" required>
    <label for="name" class="md-text-field__label">Nome completo</label>
    <div class="md-text-field__active-indicator"></div>
    <div class="md-text-field__supporting-text">
      <span class="md-text-field__error">Campo obrigatório</span>
    </div>
  </div>
  
  <!-- Campo de email -->
  <div class="md-text-field md-text-field--filled">
    <input type="email" id="email" class="md-text-field__input" required>
    <label for="email" class="md-text-field__label">E-mail profissional</label>
    <div class="md-text-field__active-indicator"></div>
  </div>
  
  <!-- Select Material -->
  <div class="md-select md-select--filled">
    <select id="revenue" class="md-select__input">
      <option value="">Faturamento mensal</option>
      <option value="ate-50k">Até R$ 50.000</option>
      <option value="50k-150k">R$ 50.001 - R$ 150.000</option>
      <option value="150k-300k">R$ 150.001 - R$ 300.000</option>
      <option value="acima-300k">Acima de R$ 300.000</option>
    </select>
    <label for="revenue" class="md-select__label">Faturamento mensal atual</label>
  </div>
</form>
```

### **4. Navigation Material:**
```html
<header class="md-top-app-bar">
  <div class="md-top-app-bar__content">
    <!-- Logo -->
    <div class="md-top-app-bar__leading">
      <img src="assets/images/logo-f5.svg" alt="F5 Estratégia" class="app-bar__logo">
    </div>
    
    <!-- Navigation -->
    <nav class="md-top-app-bar__center">
      <a href="#servicos" class="md-navigation__link">Serviços</a>
      <a href="#sobre" class="md-navigation__link">Sobre</a>
      <a href="#contato" class="md-navigation__link">Contato</a>
    </nav>
    
    <!-- Trailing actions -->
    <div class="md-top-app-bar__trailing">
      <img src="assets/images/google-partner-badge.svg" alt="Google Partner" class="partner-badge">
      <button class="md-outlined-button">Fale Conosco</button>
    </div>
  </div>
</header>
```

---

## 📱 **LAYOUT RESPONSIVO MATERIAL**

### **Breakpoints Material Design:**
```css
/* Material Design Breakpoints */
:root {
  --md-sys-breakpoint-compact: 0px;      /* Mobile */
  --md-sys-breakpoint-medium: 600px;     /* Tablet */
  --md-sys-breakpoint-expanded: 840px;   /* Desktop pequeno */
  --md-sys-breakpoint-large: 1200px;     /* Desktop grande */
  --md-sys-breakpoint-extra-large: 1600px; /* Desktop extra grande */
}
```

### **Grid System Material:**
```css
.md-layout-grid {
  display: grid;
  gap: 16px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Compact (Mobile) */
@media (max-width: 599px) {
  .md-layout-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
  }
}

/* Medium (Tablet) */
@media (min-width: 600px) and (max-width: 839px) {
  .md-layout-grid {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
    padding: 24px;
  }
}

/* Expanded (Desktop) */
@media (min-width: 840px) {
  .md-layout-grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    padding: 24px;
  }
}
```

---

## 🏗️ **ESTRUTURA DE SEÇÕES MATERIAL**

### **1. Hero Section Material:**
```html
<section class="hero-section md-surface">
  <div class="md-layout-grid">
    <div class="hero-content md-grid-span-6">
      <h1 class="hero-headline" style="font: var(--md-sys-typescale-display-medium);">
        Sua PME Pode Faturar 3x Mais Com Google Ads?
      </h1>
      <p class="hero-supporting-text" style="font: var(--md-sys-typescale-body-large);">
        Somos Google Partner Oficial. Implementamos sua campanha em 5 dias e você paga apenas R$ 49/dia para estar na primeira página do Google.
      </p>
      
      <!-- Chips de benefícios -->
      <div class="hero-benefits">
        <div class="md-assist-chip">
          <span class="md-chip__label">✓ Implementação em 5 dias</span>
        </div>
        <div class="md-assist-chip">
          <span class="md-chip__label">✓ Google Partner Oficial</span>
        </div>
        <div class="md-assist-chip">
          <span class="md-chip__label">✓ Suporte humanizado</span>
        </div>
      </div>
      
      <button class="md-filled-button hero-cta">
        <span class="md-button__label">QUERO FATURAR 3X MAIS</span>
      </button>
    </div>
    
    <div class="hero-visual md-grid-span-6">
      <div class="hero-badge-container">
        <img src="assets/images/google-partner-badge.svg" alt="Google Partner Badge" class="hero-badge">
      </div>
      <img src="assets/images/hero-dashboard.svg" alt="Google Ads Dashboard" class="hero-image">
    </div>
  </div>
</section>
```

### **2. Cards de Credibilidade:**
```html
<section class="credibility-section">
  <div class="md-layout-grid">
    <h2 class="section-title md-grid-span-12" style="font: var(--md-sys-typescale-headline-large);">
      Por Que Mais de 500 PMEs Confiam na F5?
    </h2>
    
    <!-- Stats Cards -->
    <div class="md-card md-grid-span-3">
      <div class="stat-content">
        <div class="stat-number" style="font: var(--md-sys-typescale-display-small);">R$ 12M+</div>
        <div class="stat-label" style="font: var(--md-sys-typescale-body-medium);">Gerados para clientes</div>
      </div>
    </div>
    
    <div class="md-card md-grid-span-3">
      <div class="stat-content">
        <div class="stat-number" style="font: var(--md-sys-typescale-display-small);">98%</div>
        <div class="stat-label" style="font: var(--md-sys-typescale-body-medium);">Taxa de satisfação</div>
      </div>
    </div>
    
    <div class="md-card md-grid-span-3">
      <div class="stat-content">
        <div class="stat-number" style="font: var(--md-sys-typescale-display-small);">5 anos</div>
        <div class="stat-label" style="font: var(--md-sys-typescale-body-medium);">Google Partner</div>
      </div>
    </div>
    
    <div class="md-card md-grid-span-3">
      <div class="stat-content">
        <div class="stat-number" style="font: var(--md-sys-typescale-display-small);">5 dias</div>
        <div class="stat-label" style="font: var(--md-sys-typescale-body-medium);">Implementação garantida</div>
      </div>
    </div>
  </div>
</section>
```

### **3. Seção de Serviços (Grid de Cards):**
```html
<section class="services-section">
  <div class="md-layout-grid">
    <h2 class="section-title md-grid-span-12">Como o Google Ads Funciona Para Sua PME</h2>
    
    <!-- Card Search Ads -->
    <div class="md-card md-card--filled md-grid-span-4">
      <div class="service-icon">
        <img src="assets/icons/search.svg" alt="Google Search">
      </div>
      <h3 class="service-title">Apareça na Busca</h3>
      <p class="service-description">
        Seus anúncios aparecem quando clientes procuram produtos como o seu no Google
      </p>
      <ul class="service-benefits">
        <li>Clientes com alta intenção de compra</li>
        <li>Resultados imediatos</li>
        <li>Controle total do orçamento</li>
      </ul>
    </div>
    
    <!-- Card Display Ads -->
    <div class="md-card md-card--filled md-grid-span-4">
      <div class="service-icon">
        <img src="assets/icons/display.svg" alt="Google Display">
      </div>
      <h3 class="service-title">Conquiste Novos Clientes</h3>
      <p class="service-description">
        Alcance pessoas navegando em sites e apps da rede do Google
      </p>
      <ul class="service-benefits">
        <li>Milhões de sites disponíveis</li>
        <li>Segmentação precisa</li>
        <li>Branding + performance</li>
      </ul>
    </div>
    
    <!-- Card YouTube Ads -->
    <div class="md-card md-card--filled md-grid-span-4">
      <div class="service-icon">
        <img src="assets/icons/youtube.svg" alt="YouTube Ads">
      </div>
      <h3 class="service-title">Domine o YouTube</h3>
      <p class="service-description">
        Construa autoridade enquanto vende através de anúncios em vídeo
      </p>
      <ul class="service-benefits">
        <li>2 bilhões de usuários mensais</li>
        <li>Engajamento alto</li>
        <li>Constrói marca pessoal</li>
      </ul>
    </div>
  </div>
</section>
```

---

## 🔧 **IMPLEMENTAÇÃO TÉCNICA**

### **Estrutura de Arquivos:**
```
f5-landing-material/
├── index.html
├── styles/
│   ├── material-tokens.css      /* Variáveis Material Design */
│   ├── material-components.css  /* Componentes Material */
│   ├── layout.css              /* Grid e responsividade */
│   └── custom.css              /* Customizações F5 */
├── scripts/
│   ├── material-components.js  /* JS dos componentes Material */
│   ├── form-validation.js      /* Validação de formulário */
│   └── analytics.js            /* Tracking e eventos */
├── assets/
│   ├── fonts/
│   │   └── google-sans/        /* Google Sans font files */
│   ├── images/
│   └── icons/                  /* Material Icons */
└── README.md
```

### **Meta Tags Essenciais:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>F5 Google Ads - Agência Google Partner Oficial | Fature 3x Mais</title>
  <meta name="description" content="Agência Google Partner oficial. Implementamos Google Ads para PMEs em 5 dias. A partir de R$ 1.497/mês. Cases comprovados de ROI 3x maior.">
  
  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Material Design CSS -->
  <link rel="stylesheet" href="styles/material-tokens.css">
  <link rel="stylesheet" href="styles/material-components.css">
  <link rel="stylesheet" href="styles/layout.css">
  <link rel="stylesheet" href="styles/custom.css">
</head>
```

### **JavaScript Material Components:**
```javascript
// material-components.js
class MaterialTextField {
  constructor(element) {
    this.element = element;
    this.input = element.querySelector('.md-text-field__input');
    this.label = element.querySelector('.md-text-field__label');
    this.init();
  }
  
  init() {
    this.input.addEventListener('focus', () => this.handleFocus());
    this.input.addEventListener('blur', () => this.handleBlur());
    this.input.addEventListener('input', () => this.handleInput());
  }
  
  handleFocus() {
    this.element.classList.add('md-text-field--focused');
  }
  
  handleBlur() {
    if (!this.input.value) {
      this.element.classList.remove('md-text-field--focused');
    }
  }
  
  handleInput() {
    if (this.input.value) {
      this.element.classList.add('md-text-field--populated');
    } else {
      this.element.classList.remove('md-text-field--populated');
    }
  }
}

// Inicializar componentes
document.addEventListener('DOMContentLoaded', () => {
  // Text Fields
  const textFields = document.querySelectorAll('.md-text-field');
  textFields.forEach(field => new MaterialTextField(field));
  
  // Ripple Effect para botões
  const buttons = document.querySelectorAll('.md-filled-button, .md-outlined-button');
  buttons.forEach(button => addRippleEffect(button));
});
```

---

## 📊 **TRACKING E PERFORMANCE**

### **Core Web Vitals Otimizados:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1
- **Performance Score:** > 90 (Google PageSpeed)

### **Implementação de Tracking:**
```javascript
// Google Analytics 4 + Google Tag Manager
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'F5 Google Ads Landing Page',
  page_location: window.location.href,
  content_group1: 'Google Partner Landing'
});

// Eventos de conversão
function trackConversion(eventName, value = null) {
  gtag('event', eventName, {
    event_category: 'F5 Google Ads',
    event_label: 'PME Lead Generation',
    value: value,
    currency: 'BRL'
  });
}

// Tracking automático
document.addEventListener('DOMContentLoaded', () => {
  // CTA clicks
  const ctaButtons = document.querySelectorAll('.hero-cta, .form-submit');
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => trackConversion('cta_click'));
  });
  
  // Form submission
  const leadForm = document.getElementById('leadForm');
  leadForm.addEventListener('submit', () => trackConversion('form_submit', 1497));
  
  // Scroll depth
  let scrollDepth = 0;
  window.addEventListener('scroll', throttle(() => {
    const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (depth > scrollDepth && depth % 25 === 0) {
      scrollDepth = depth;
      trackConversion('scroll_depth', depth);
    }
  }, 100));
});
```

---

## ✅ **CHECKLIST DE IMPLEMENTAÇÃO**

### **Design System:**
- [ ] Variáveis CSS Material Design 3 implementadas
- [ ] Paleta de cores Google oficial aplicada
- [ ] Tipografia Google Sans configurada
- [ ] Sistema de elevação/sombras Material
- [ ] Componentes Material (botões, cards, forms) funcionais

### **Responsividade:**
- [ ] Grid Material Design implementado
- [ ] Breakpoints Material configurados
- [ ] Mobile-first approach
- [ ] Touch targets ≥ 44px
- [ ] Formulário otimizado para mobile

### **Performance:**
- [ ] Google Fonts otimizado (display=swap)
- [ ] Imagens WebP + lazy loading  
- [ ] CSS crítico inline
- [ ] JavaScript assíncrono
- [ ] Core Web Vitals > 90

### **Compliance:**
- [ ] Badge Google Partner com link oficial
- [ ] LGPD: política de privacidade
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Schema markup LocalBusiness
- [ ] Meta tags SEO otimizadas

### **Funcionalidades:**
- [ ] Formulário com validação Material
- [ ] Smooth scroll para âncoras
- [ ] Ripple effects nos botões
- [ ] Estados hover/focus Material
- [ ] Tracking GA4 + eventos customizados

---

## 🚀 **COMANDOS PARA CLAUDE CODE**

```bash
# Estrutura inicial
"Crie a estrutura de arquivos do projeto f5-landing-material conforme especificado no playbook"

# Implementação Material Design
"Implemente os tokens CSS do Material Design 3 com as variáveis de cor, tipografia e elevação especificadas"

# Componentes Material
"Crie os componentes Material Design (botões, cards, text fields) seguindo as especificações do playbook"

# Layout responsivo
"Implemente o grid system Material Design com os breakpoints e layout responsivo especificado"

# JavaScript funcional
"Adicione o JavaScript para componentes Material, validação de formulário e tracking de eventos"

# Otimizações de performance
"Configure lazy loading, otimizações CSS/JS e implementação dos Core Web Vitals"
```

---

**🎯 Meta Final:** Landing page Material Design 3 com >5% de conversão, 100% compliance Google Partner, Performance Score >90 e experiência mobile otimizada para PMEs brasileiras.