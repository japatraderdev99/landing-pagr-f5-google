# F5 Google Ads - Landing Page Material Design 3

Landing page desenvolvida com **Material Web Components** oficial do Google para a agência F5 Estratégia, especializada em Google Ads para PMEs.

## 🎯 Objetivos

- **Conversão >5%** para leads qualificados PME
- **Performance >90** Google PageSpeed
- **Design System** Material Design 3 oficial
- **Mobile First** responsivo total
- **Tracking completo** GA4 + conversões

## 🚀 Tecnologias

### Core
- **HTML5** semântico
- **Material Web Components** (oficial Google)
- **CSS3** com Custom Properties
- **JavaScript ES6+** vanilla

### Design System
- **Material Design 3** tokens e componentes
- **Google Sans** tipografia oficial
- **Paleta Google** (#4285F4, #34A853)
- **Elevação** e sombras Material

### Performance
- **CDN** para Material Components
- **Lazy Loading** de imagens
- **CSS Critical Path** inline
- **Web Vitals** otimizados

## 📁 Estrutura do Projeto

```
f5-landing-material/
├── index.html                    # Landing page principal
├── styles/
│   ├── material-tokens.css      # Tokens Material Design 3
│   ├── layout.css              # Sistema de grid responsivo
│   ├── components.css          # Customização componentes
│   └── custom.css             # Estilos específicos F5
├── scripts/
│   ├── material.js            # Funcionalidades interativas
│   ├── form-validation.js     # Validação avançada formulário
│   └── analytics.js          # Tracking GA4 + conversões
├── assets/
│   ├── images/               # Logos, mockups, badges
│   └── icons/               # Material Icons
└── README.md
```

## 🎨 Design System

### Paleta de Cores
```css
--md-sys-color-primary: #4285f4;        /* Google Blue */
--md-sys-color-secondary: #34a853;      /* Google Green */
--md-sys-color-error: #ea4335;          /* Google Red */
--md-sys-color-warning: #fbbc04;        /* Google Yellow */
```

### Tipografia
- **Google Sans** como fonte principal
- **Material Typography Scale** completa
- **Hierarquia visual** otimizada para conversão

### Componentes Material
- `md-filled-button` - CTAs principais
- `md-outlined-button` - Ações secundárias
- `md-outlined-text-field` - Campos de formulário
- `md-filled-card` - Cards de estatísticas
- `md-outlined-card` - Cards de serviços
- `md-assist-chip` - Benefícios em destaque

## 📱 Responsividade

### Breakpoints Material Design
```css
--md-sys-breakpoint-compact: 0px;        /* Mobile */
--md-sys-breakpoint-medium: 600px;       /* Tablet */
--md-sys-breakpoint-expanded: 840px;     /* Desktop */
--md-sys-breakpoint-large: 1200px;       /* Desktop grande */
```

### Grid System
- **Mobile First** approach
- **CSS Grid** nativo
- **Flexbox** para componentes
- **Container** responsivo com max-width

## ⚡ Performance

### Core Web Vitals Targets
- **LCP** < 2.5s
- **FID** < 100ms
- **CLS** < 0.1
- **Performance Score** > 90

### Otimizações Implementadas
- Material Components via CDN
- CSS crítico inline
- Lazy loading de imagens
- Intersection Observer para animações
- JavaScript assíncrono

## 📊 Tracking & Analytics

### Google Analytics 4
```javascript
// Eventos principais trackados
- page_view: Visualização da landing
- begin_checkout: Início do formulário
- purchase: Envio do formulário
- scroll: Profundidade de scroll (25%, 50%, 75%, 100%)
- user_engagement: Usuários engajados (30s+)
```

### Conversões
- **Formulário de Lead** → GA4 Enhanced Ecommerce
- **Facebook Pixel** integração
- **Google Ads** conversions tracking
- **WhatsApp** cliques

## 🔧 Instalação & Deploy

### Desenvolvimento Local
```bash
# Clonar projeto
git clone [repository-url]
cd f5-landing-material

# Servir localmente (Python)
python -m http.server 8000

# Ou Node.js
npx serve .

# Acessar: http://localhost:8000
```

### Deploy Produção
1. **Hospedagem estática** (Netlify, Vercel, GitHub Pages)
2. **CDN** para assets globais
3. **HTTPS** obrigatório
4. **Domínio personalizado** recomendado

## 📋 Checklist de Launch

### ✅ Design & UX
- [x] Material Design 3 implementado
- [x] Paleta Google oficial aplicada
- [x] Tipografia Google Sans
- [x] Componentes Material funcionais
- [x] Grid responsivo
- [x] Mobile-first approach

### ✅ Performance
- [x] Core Web Vitals otimizados
- [x] CSS crítico inline
- [x] JavaScript assíncrono
- [x] Lazy loading implementado
- [x] Imagens otimizadas

### ✅ Funcionalidades
- [x] Formulário com validação avançada
- [x] Smooth scroll
- [x] Animações Material
- [x] Estados hover/focus
- [x] Feedback visual completo

### ✅ SEO & Analytics
- [x] Meta tags otimizadas
- [x] Schema markup
- [x] GA4 configurado
- [x] Tracking de conversões
- [x] Facebook Pixel

### ⚠️ Pendente (Configuração de Produção)
- [ ] IDs reais Google Analytics
- [ ] Pixel ID Facebook
- [ ] Domínio e DNS
- [ ] SSL/HTTPS
- [ ] Testes A/B

## 🎯 Conversão & Copy

### Headlines Otimizadas
- **Principal**: "Sua PME Pode Faturar 3x Mais Com Google Ads?"
- **Social Proof**: "Mais de 500 PMEs Confiam na F5"
- **Urgência**: "Apenas 5 empresas por mês"

### CTAs Estratégicos
- **Hero**: "QUERO FATURAR 3X MAIS"
- **Form**: "QUERO COMEÇAR AGORA"
- **Header**: "Fale Conosco"

### Elementos de Credibilidade
- Google Partner Badge oficial
- Estatísticas reais (R$ 12M+ gerados)
- Cases de sucesso com nomes
- Garantia 30 dias

## 🤖 Compatibilidade

### Navegadores Suportados
- **Chrome** 90+ ✅
- **Firefox** 88+ ✅  
- **Safari** 14+ ✅
- **Edge** 90+ ✅

### Dispositivos Testados
- **Desktop** 1920x1080, 1366x768
- **Tablet** 768x1024, 834x1194
- **Mobile** 375x667, 414x896

## 📞 Suporte

Para dúvidas sobre implementação:
- **Email**: contato@f5estrategia.com.br
- **WhatsApp**: (48) 99999-9999

---

**🎯 Meta**: Landing page Material Design 3 com >5% conversão, Performance Score >90 e experiência mobile otimizada para PMEs brasileiras.