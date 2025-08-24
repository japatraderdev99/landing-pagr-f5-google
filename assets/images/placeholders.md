# Assets Necessários para a Landing Page

## 📁 Imagens Requeridas

### Logo e Branding
- `logo-f5.svg` - Logo F5 Estratégia (formato SVG preferencial)
  - Dimensões: 200x60px
  - Fundo transparente
  - Cores: azul/branco compatível com header

### Google Partner Badges
- `google-partner-badge.svg` - Badge oficial Google Partner
  - Obtido diretamente do Google Partner Center
  - Formato SVG ou PNG alta resolução
  - Dimensões originais mantidas

- `google-partner-badge-small.svg` - Versão footer
  - Mesma fonte, redimensionada
  - 100x30px aproximadamente

### Hero Section
- `hero-dashboard.png` - Screenshot Google Ads dashboard
  - Dimensões: 800x600px
  - Format WebP + PNG fallback
  - Dashboard real com dados mascarados
  - Qualidade alta, otimizada para web

### Referência Mobile
- `mobile-reference.png` - ✅ JÁ EXISTE
  - Referência visual para responsividade
  - Layout mobile da landing page

### Complementares (Opcionais)
- `selo-lgpd.svg` - Selo LGPD compliance
- `cases/` - Fotos dos cases de sucesso
  - `oral-unic-case.jpg`
  - `eletroliga-case.jpg`
  - `visual-sacadas-case.jpg`

## 📐 Especificações Técnicas

### Formatos Otimizados
1. **SVG** - Logos e ícones vetoriais
2. **WebP** - Imagens fotográficas modernas
3. **PNG** - Fallback e transparências
4. **JPG** - Fotos com compressão otimizada

### Otimização para Web
- **Lazy loading** implementado
- **Responsive images** com srcset
- **Compression** sem perda de qualidade
- **Alt text** descritivo para SEO

### Fontes de Imagens Google
- **Google Partner Center** - Badges oficiais
- **Google Ads Interface** - Screenshots dashboard
- **Material Design Gallery** - Ícones e patterns

## 🔗 Como Obter Assets

### Google Partner Badge
1. Acesse [Google Partner Center](https://www.google.com/partners/)
2. Login com conta Google Partner
3. Vá em "Marketing Assets"
4. Download do badge oficial em alta resolução

### Dashboard Screenshots
1. Acesse Google Ads com dados reais
2. Screenshot de campanhas performance
3. Mascarar dados sensíveis
4. Otimizar para web (WebP + compressão)

### Logo F5
- Solicitar à equipe de design F5
- Formato vetorial (SVG) preferencial
- Variações: normal, invertida, monocromática

## ⚡ Implementação

### HTML Structure
```html
<img src="assets/images/logo-f5.svg" alt="F5 Estratégia" class="logo">
<img src="assets/images/google-partner-badge.svg" alt="Google Partner" class="partner-badge">
<img src="assets/images/hero-dashboard.png" alt="Google Ads Dashboard" class="hero-image">
```

### CSS Optimization
```css
.hero-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: var(--md-sys-shape-corner-large);
    box-shadow: var(--f5-shadow-hero);
}
```

### Performance
- **Critical images** carregam primeiro
- **Below-fold images** com lazy loading
- **WebP detection** com fallback automático
- **CDN delivery** para assets pesados