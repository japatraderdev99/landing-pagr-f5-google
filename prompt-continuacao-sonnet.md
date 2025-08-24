# PROMPT PARA CONTINUAÇÃO COM CLAUDE SONNET
## Landing Page F5 Google Ads - Desenvolvimento Contínuo

### CONTEXTO DO PROJETO
Você está trabalhando em uma landing page premium para a F5 Estratégia, uma agência Google Partner Premier (top 3% Brasil). A página já possui:

1. **Design implementado**: Inspirado no Firebase Studio com glassmorphism, gradientes mesh animados e Material Design 3
2. **Comunicação alinhada**: Tom e estrutura baseados no site oficial Google Ads
3. **Arquivos principais**:
   - `index.html` - Estrutura HTML completa
   - `styles/custom.css` - Estilos CSS sofisticados
   - `copywriting-guide-f5-google-ads.md` - Diretrizes de copy

### ESTADO ATUAL
✅ Design visual sofisticado implementado
✅ Comunicação e copywriting refinados
✅ Material Design 3 aplicado
✅ Responsividade básica configurada
⏳ JavaScript para interações pendente
⏳ Formulário de contato funcional pendente
⏳ Otimizações de performance pendentes

### PRÓXIMAS TAREFAS PRIORITÁRIAS

#### 1. IMPLEMENTAR JAVASCRIPT (scripts/main.js)
```javascript
// Funcionalidades necessárias:
- Tabs de soluções (Pesquisa, Display, Shopping, YouTube)
- Animação de números nos cards de métricas
- Smooth scroll para navegação
- Validação de formulário
- Header sticky com mudança de estilo ao scroll
- Lazy loading de imagens
```

#### 2. COMPLETAR SEÇÕES FALTANTES NO HTML
```html
<!-- Adicionar após success-stories -->
- Seção Google Partner Premier (benefícios exclusivos)
- Seção de Investimento (planos e preços)
- Seção CTA Final com formulário
- Footer completo com links e informações
```

#### 3. OTIMIZAÇÕES CRÍTICAS
- Comprimir imagens e converter para WebP
- Adicionar meta tags para SEO
- Implementar Schema.org para rich snippets
- Configurar Google Analytics e Tag Manager
- Adicionar favicon e manifest.json para PWA

### DIRETRIZES TÉCNICAS

#### Material Design 3 - Componentes a manter:
- **Buttons**: Filled, Outlined, Text (border-radius: 100px)
- **Cards**: Elevação com box-shadow sutil
- **Colors**: --google-blue: #4285F4, --google-green: #34A853
- **Typography**: Google Sans para títulos, Roboto para corpo
- **Spacing**: Usar variáveis CSS (--spacing-sm, --spacing-md, etc)

#### Padrões de Código:
```css
/* Sempre usar variáveis CSS */
padding: var(--spacing-md);
color: var(--google-blue);

/* Transições suaves */
transition: var(--transition-smooth);

/* Glassmorphism */
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.7);
```

### INSTRUÇÕES ESPECÍFICAS PARA SONNET

1. **FOCO NA EFICIÊNCIA**: 
   - Implemente uma funcionalidade por vez
   - Use o código existente como base
   - Não reescreva o que já funciona

2. **PRIORIDADE DE IMPLEMENTAÇÃO**:
   ```
   ALTA: JavaScript para tabs e formulário
   MÉDIA: Animações e micro-interações
   BAIXA: Otimizações de performance
   ```

3. **TESTES ESSENCIAIS**:
   - Verificar responsividade em 360px, 768px, 1024px
   - Testar formulário de contato
   - Validar navegação smooth scroll
   - Confirmar funcionamento das tabs

4. **EVITAR**:
   - Mudanças no design visual já aprovado
   - Alterações nas cores e tipografia
   - Modificar estrutura de copywriting
   - Adicionar bibliotecas externas pesadas

### EXEMPLO DE IMPLEMENTAÇÃO RÁPIDA

Para implementar as tabs de soluções:
```javascript
// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Update buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update panels
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === targetTab) {
          panel.classList.add('active');
        }
      });
    });
  });
});
```

### RESULTADO ESPERADO
Landing page 100% funcional com:
- Todas interações JavaScript funcionando
- Formulário enviando dados
- Performance otimizada (Lighthouse > 90)
- SEO configurado
- Pronta para produção

### COMANDO INICIAL SUGERIDO
"Continue o desenvolvimento da landing page F5 Google Ads implementando o JavaScript para as tabs de soluções e o smooth scroll da navegação, mantendo o padrão de código existente."

---

**NOTA**: Este prompt foi otimizado para economia de tokens. Use referências diretas aos arquivos existentes em vez de reescrevê-los. Foque em adicionar funcionalidades incrementais.
