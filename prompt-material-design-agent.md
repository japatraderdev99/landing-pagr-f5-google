# PROMPT ESTRUTURADO PARA MATERIAL DESIGN 3 AGENT
## Landing Page F5 Google Ads - Inspiração Firebase Studio + Google Ads Business

---

## 🎯 **CONTEXTO E OBJETIVO**

Você é o **Material Design 3 Specialist Agent** criado para implementar uma landing page de alta conversão para a F5 Estratégia (agência Google Partner oficial). A página deve seguir rigorosamente os padrões do Material Design 3, inspirando-se nos layouts e elementos visuais do **Firebase Studio** e **Google Ads Business**.

### **Meta de Conversão:** >5% 
### **Público-alvo:** PMEs brasileiras (faturamento até R$ 300k/mês)
### **Proposta de valor:** Implementação Google Ads em 5 dias por R$ 1.497/mês

---

## 🎨 **ANÁLISE VISUAL DOS SITES DE REFERÊNCIA**

### **FIREBASE STUDIO (https://firebase.studio/)**
**Elementos identificados para replicar:**

1. **Layout Hero:**
   - Gradiente sutil azul-verde no fundo
   - Tipografia Google Sans em hierarquia clara
   - CTA primário com destaque (botão filled)
   - Mockups/screenshots de interface como prova visual
   - Espaçamento generoso e clean

2. **Seções de Conteúdo:**
   - Cards com elevação sutil (level 1-2)
   - Ícones Material Design consistentes
   - Layout em grid responsivo (12 colunas desktop, 4 mobile)
   - Animações suaves de entrada (fade in up)

3. **Paleta de Cores:**
   - Azul primário: #4285f4 (Google Blue)
   - Verde secundário: #34a853 (Google Green)
   - Superfícies: #ffffff, #f8f9fa
   - Texto: #202124, #5f6368

### **GOOGLE ADS BUSINESS (https://business.google.com/br/google-ads/)**
**Elementos identificados para replicar:**

1. **Estrutura de Conversão:**
   - Hero com headline orientada a benefício
   - Social proof com números impactantes
   - Seções de "Como funciona" com cards visuais
   - Cases de sucesso com métricas reais
   - CTAs repetidos estrategicamente

2. **Componentes Visuais:**
   - Mockups de anúncios Google Ads
   - Badges e certificações em destaque
   - Comparativos visuais (antes/depois)
   - Seção de ofertas/pricing destacada

3. **Copywriting Pattern:**
   - Headlines com pergunta/benefício
   - Bullets com ícones de check
   - Números e estatísticas em destaque
   - Urgência e escassez controladas

---

## 📋 **ESPECIFICAÇÕES TÉCNICAS MATERIAL DESIGN 3**

### **Design Tokens (OBRIGATÓRIO usar):**
```css
/* Cores - Baseado no Google */
--md-sys-color-primary: #4285f4;
--md-sys-color-secondary: #34a853;
--md-sys-color-surface: #ffffff;
--md-sys-color-surface-variant: #f8f9fa;

/* Tipografia - Google Sans */
--md-sys-typescale-display-large: 400 57px/64px "Google Sans";
--md-sys-typescale-headline-large: 400 32px/40px "Google Sans";
--md-sys-typescale-body-large: 400 16px/24px "Google Sans";

/* Elevação */
--md-sys-elevation-level1: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);
--md-sys-elevation-level2: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15);

/* Cantos arredondados */
--md-sys-shape-corner-small: 8px;
--md-sys-shape-corner-medium: 12px;
--md-sys-shape-corner-large: 16px;
```

### **Componentes Material Web (OBRIGATÓRIO usar):**
```html
<!-- Botões -->
<md-filled-button>CTA Primário</md-filled-button>
<md-outlined-button>CTA Secundário</md-outlined-button>

<!-- Cards -->
<md-filled-card>Conteúdo</md-filled-card>
<md-outlined-card>Conteúdo</md-outlined-card>

<!-- Formulário -->
<md-outlined-text-field label="Campo" required></md-outlined-text-field>
<md-outlined-select label="Seleção"></md-outlined-select>

<!-- Chips -->
<md-chip-set>
  <md-assist-chip label="Benefício"></md-assist-chip>
</md-chip-set>
```

---

## 🏗️ **ESTRUTURA DA LANDING PAGE (ORDEM OBRIGATÓRIA)**

### **1. HEADER**
- Logo F5 (esquerda)
- Navegação: Serviços | Sobre | Cases | Contato
- Google Partner Badge (destaque)
- CTA secundário: "Fale Conosco" (outlined button)

### **2. HERO SECTION**
**Layout:** Grid 2 colunas (conteúdo + visual)
**Background:** Gradiente linear-gradient(135deg, #4285f4 0%, #34a853 100%)

**Conteúdo (coluna esquerda):**
```
H1: "Sua PME Pode Faturar 3x Mais Com Google Ads?"
Subtítulo: "Somos Google Partner Oficial. Implementamos sua campanha em 5 dias e você paga apenas R$ 49/dia para estar na primeira página do Google."

Chips de benefícios:
- ✓ Implementação em 5 dias
- ✓ Google Partner Oficial  
- ✓ Suporte humanizado
- ✓ Sem taxa de setup

CTA: "QUERO FATURAR 3X MAIS" (filled button)
```

**Visual (coluna direita):**
- Google Partner Badge em destaque
- Mockup de dashboard Google Ads (similar ao Firebase Studio)
- Animação sutil de flutuação

### **3. CREDIBILIDADE**
**Layout:** Grid 4 colunas (cards com estatísticas)

```
Card 1: R$ 12M+ | Gerados para clientes
Card 2: 98% | Taxa de satisfação  
Card 3: 5 anos | Google Partner
Card 4: 5 dias | Implementação garantida
```

### **4. PROBLEMA/SOLUÇÃO**
**Layout:** Grid 2 colunas (split screen)

**Coluna Problemas (esquerda):**
- Ícone de erro (Material Icons)
- Lista com ícones X (close)
- Background sutil vermelho

**Coluna Soluções (direita):**
- Ícone de sucesso (Material Icons)
- Lista com ícones ✓ (check)
- Background sutil verde

### **5. COMO FUNCIONA**
**Layout:** Grid 3 colunas (cards de serviços)

```
Card 1: Google Search
- Ícone: search
- Título: "Apareça Quando Seus Clientes Procuram"
- Benefícios em lista

Card 2: Google Display  
- Ícone: display_settings
- Título: "Conquiste Novos Clientes na Web"
- Benefícios em lista

Card 3: YouTube Ads
- Ícone: play_circle_filled
- Título: "Domine o YouTube e Construa Autoridade"  
- Benefícios em lista
```

### **6. TIMELINE 5 DIAS**
**Layout:** Timeline vertical (inspirado no Firebase Studio)

```
Dia 1: Análise Estratégica (ícone: analytics)
Dia 2: Setup de Campanhas (ícone: build)
Dia 3: Criação dos Anúncios (ícone: edit)
Dia 4: Testes e Ajustes (ícone: science)
Dia 5: Campanhas no Ar (ícone: rocket_launch)
```

### **7. CASES DE SUCESSO**
**Layout:** Grid 3 colunas (cards de depoimentos)

```
Case 1: Oral Unic Odontologia
- Resultado: "300% mais agendamentos"
- Métricas: Antes/Depois
- Depoimento com foto

Case 2: Eletroliga  
- Resultado: "ROI de 400%"
- Métricas: Investimento/Retorno
- Depoimento com foto

Case 3: Visual Sacadas
- Resultado: "De 8 para 45 leads"
- Métricas: Crescimento
- Depoimento com foto
```

### **8. GOOGLE PARTNER DIFERENCIAL**
**Layout:** Grid 5 colunas + callout central

```
Benefícios (ícones Material):
- Acesso Antecipado (update)
- Suporte Direto (support)  
- Certificação Contínua (school)
- Melhores Práticas (lightbulb)
- Compliance Total (security)

Callout: "Apenas 3% das agências brasileiras conseguem a certificação Google Partner Premier"
```

### **9. INVESTIMENTO/PRICING**
**Layout:** Card central + comparativo

```
Card Principal:
- Preço: R$ 1.497/mês (R$ 49/dia)
- Lista de inclusos com ícones check
- Badges: "SEM TAXA DE SETUP" | "SEM FIDELIDADE"
- Garantia: 30 dias ou dinheiro de volta

Comparativo:
- Você sozinho (problemas) vs Com a F5 (soluções)
```

### **10. FORMULÁRIO FINAL**
**Layout:** Centralizado com campos Material

```
Campos obrigatórios:
- Nome completo (text field)
- E-mail profissional (email field)
- Nome da empresa (text field)  
- WhatsApp (tel field)
- Faturamento mensal (select - opcional)

CTA: "QUERO COMEÇAR AGORA"
Segurança: "🔒 Seus dados estão seguros. Política LGPD."
Urgência: "⏰ Atendemos apenas 5 empresas por mês"
```

### **11. FOOTER**
- Logo + descrição
- Links úteis
- Contato
- Badges (Google Partner + LGPD)
- Copyright

---

## 🎭 **ANIMAÇÕES MATERIAL MOTION (OBRIGATÓRIO)**

### **Curvas de Animação:**
```css
--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
--md-sys-motion-duration-medium2: 300ms;
```

### **Animações por Seção:**
1. **Hero:** Fade in up sequencial (0.1s delay entre elementos)
2. **Stats:** Counter animation quando visível
3. **Cards:** Slide in up com stagger (0.1s entre cards)
4. **Timeline:** Slide in left sequencial por dia
5. **Cases:** Fade in up com hover effects
6. **Benefits:** Scale in com delay progressivo

### **Interações:**
- **Hover cards:** translateY(-8px) + shadow increase
- **Buttons:** Scale(1.05) + shadow increase  
- **Ripple effect:** Em todos os botões e cards clicáveis

---

## 📱 **RESPONSIVIDADE MATERIAL**

### **Breakpoints:**
```css
/* Mobile: 0-599px */
/* Tablet: 600-839px */  
/* Desktop: 840px+ */
```

### **Adaptações Mobile:**
- Hero: Stack vertical (conteúdo sobre visual)
- Grid 3 colunas → 1 coluna
- Timeline: Ícones centralizados
- Formulário: Full width
- Touch targets: mínimo 44px

---

## 🚀 **PERFORMANCE E ACESSIBILIDADE**

### **Core Web Vitals:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### **Otimizações:**
- Preload Google Fonts
- Lazy loading para imagens
- Critical CSS inline
- WebP para imagens

### **Acessibilidade WCAG 2.1 AA:**
- Contraste mínimo 4.5:1
- Focus indicators visíveis
- Alt text descritivo
- Navegação por teclado
- Screen reader friendly

---

## 📊 **TRACKING E CONVERSÃO**

### **Eventos Google Analytics:**
```javascript
// CTA clicks
gtag('event', 'click', {
  event_category: 'CTA',
  event_label: 'Hero Button',
  event_value: 1
});

// Form submission
gtag('event', 'conversion', {
  event_category: 'Form',
  event_label: 'Lead Generation',
  value: 1497,
  currency: 'BRL'
});
```

### **Elementos de Conversão:**
- CTAs repetidos (hero, timeline, pricing, form)
- Social proof early (credibilidade logo após hero)
- Urgência controlada (5 empresas/mês)
- Garantia clara (30 dias)
- Prova visual (cases com fotos)

---

## ✅ **CHECKLIST DE IMPLEMENTAÇÃO**

### **Design System:**
- [ ] Tokens Material Design 3 implementados
- [ ] Paleta Google oficial (azul/verde)
- [ ] Tipografia Google Sans
- [ ] Componentes Material Web funcionais
- [ ] Elevação e sombras corretas

### **Layout:**
- [ ] Grid responsivo 12/8/4 colunas
- [ ] Seções na ordem especificada
- [ ] Espaçamento consistente (8px base)
- [ ] Hierarquia visual clara

### **Conteúdo:**
- [ ] Copy do guia implementado
- [ ] Cases de sucesso com métricas
- [ ] Google Partner em destaque
- [ ] Timeline 5 dias detalhada

### **Funcionalidades:**
- [ ] Formulário com validação
- [ ] Animações Material Motion
- [ ] Scroll suave entre seções
- [ ] Toast notifications
- [ ] Loading states

### **Performance:**
- [ ] Core Web Vitals > 90
- [ ] Imagens otimizadas
- [ ] CSS/JS minificado
- [ ] Fonts preloaded

### **Acessibilidade:**
- [ ] Contraste WCAG AA
- [ ] Focus management
- [ ] Screen reader support
- [ ] Keyboard navigation

---

## 🎯 **RESULTADO ESPERADO**

Uma landing page que:
1. **Converte >5%** através de design persuasivo
2. **Parece nativa Google** usando Material Design 3
3. **Carrega <2.5s** com otimizações de performance
4. **Funciona perfeitamente** em todos os dispositivos
5. **É acessível** para todos os usuários

**Inspiração visual:** Firebase Studio (layout/componentes) + Google Ads Business (estrutura de conversão)
**Resultado:** Landing page profissional que transmite autoridade Google Partner e gera leads qualificados para PMEs.

---

**🚀 EXECUTE ESTE PROMPT COMO MATERIAL DESIGN 3 SPECIALIST AGENT**
