# 🔥 Guia Completo de Deploy Firebase Hosting

## F5 Google Ads Landing Page - Deploy Guide

Este guia fornece instruções detalhadas para fazer deploy no Firebase Hosting, tanto para o projeto atual (HTML/CSS/JS) quanto para futuras migrações para frameworks modernos.

---

## 📋 **Informações do Projeto Atual**

- **Projeto Firebase**: `lp-f5--621190968`
- **URL de Produção**: https://lp-f5--621190968.web.app
- **Tipo**: Site estático (HTML/CSS/JavaScript puro)
- **Diretório público**: `.` (raiz do projeto)

---

## 🚀 **Deploy Atual (HTML/CSS/JS)**

### **Pré-requisitos**
```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Fazer login no Firebase
firebase login

# 3. Verificar projetos disponíveis
firebase projects:list
```

### **Deploy Simples**
```bash
# Deploy direto (já configurado)
firebase deploy --project lp-f5--621190968

# Ou definir projeto padrão uma vez
firebase use lp-f5--621190968
firebase deploy
```

### **Configuração Atual (`firebase.json`)**
```json
{
  "hosting": {
    "public": "./",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "README.md",
      "**/*.md",
      "Agents Claude-code template/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(eot|otf|ttf|ttc|woff|font.css)",
        "headers": [
          {
            "key": "Access-Control-Allow-Origin",
            "value": "*"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=7200"
          }
        ]
      }
    ]
  }
}
```

---

## ⚡ **Migração para Frameworks**

### **1. Next.js (React)**

#### **Instalação e Setup**
```bash
# Criar novo projeto Next.js
npx create-next-app@latest f5-landing-nextjs --typescript --tailwind --eslint

# Navegar para o projeto
cd f5-landing-nextjs

# Inicializar Firebase
firebase init hosting
```

#### **Configuração Firebase (`firebase.json`)**
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### **Scripts de Build (`package.json`)**
```json
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "firebase:build": "npm run build && npm run export",
    "firebase:deploy": "npm run firebase:build && firebase deploy"
  }
}
```

#### **Deploy Next.js**
```bash
# Build e deploy
npm run firebase:deploy

# Ou manual
npm run build
npm run export
firebase deploy
```

### **2. React (Create React App)**

#### **Setup**
```bash
# Criar projeto React
npx create-react-app f5-landing-react --template typescript
cd f5-landing-react

# Inicializar Firebase
firebase init hosting
```

#### **Configuração Firebase**
```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### **Deploy React**
```bash
# Build e deploy
npm run build
firebase deploy
```

### **3. Vue.js**

#### **Setup**
```bash
# Criar projeto Vue
npm create vue@latest f5-landing-vue
cd f5-landing-vue
npm install

# Inicializar Firebase
firebase init hosting
```

#### **Configuração Firebase**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### **Deploy Vue**
```bash
# Build e deploy
npm run build
firebase deploy
```

### **4. Svelte/SvelteKit**

#### **Setup**
```bash
# Criar projeto SvelteKit
npm create svelte@latest f5-landing-svelte
cd f5-landing-svelte
npm install

# Instalar adapter para sites estáticos
npm install -D @sveltejs/adapter-static
```

#### **Configuração SvelteKit (`svelte.config.js`)**
```javascript
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};
```

#### **Configuração Firebase**
```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

### **5. Angular**

#### **Setup**
```bash
# Criar projeto Angular
ng new f5-landing-angular
cd f5-landing-angular

# Adicionar Firebase
ng add @angular/fire
```

#### **Configuração Firebase**
```json
{
  "hosting": {
    "public": "dist/f5-landing-angular",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### **Deploy Angular**
```bash
# Build e deploy
ng build --prod
firebase deploy
```

---

## 🔧 **Scripts Utilitários**

### **Deploy Script (`deploy.sh`)**
```bash
#!/bin/bash
echo "🔥 Deploy F5 Landing Page"

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute no diretório raiz do projeto"
    exit 1
fi

# Fazer backup do último deploy
echo "📦 Criando backup..."
git add .
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"

# Deploy no Firebase
echo "🚀 Fazendo deploy..."
firebase deploy --project lp-f5--621190968

echo "✅ Deploy concluído!"
echo "🌐 URL: https://lp-f5--621190968.web.app"
```

### **Script Node.js (`deploy.js`)**
```javascript
const { execSync } = require('child_process');
const path = require('path');

const PROJECT_ID = 'lp-f5--621190968';
const BUILD_DIR = './';

function deploy() {
    try {
        console.log('🔥 Iniciando deploy Firebase...');
        
        // Verificar se Firebase CLI está instalado
        execSync('firebase --version', { stdio: 'ignore' });
        
        // Fazer login se necessário
        try {
            execSync('firebase projects:list', { stdio: 'ignore' });
        } catch {
            console.log('🔐 Fazendo login no Firebase...');
            execSync('firebase login', { stdio: 'inherit' });
        }
        
        // Deploy
        console.log('🚀 Fazendo deploy...');
        execSync(`firebase deploy --project ${PROJECT_ID}`, { 
            stdio: 'inherit',
            cwd: BUILD_DIR 
        });
        
        console.log('✅ Deploy concluído!');
        console.log(`🌐 URL: https://${PROJECT_ID}.web.app`);
        
    } catch (error) {
        console.error('❌ Erro no deploy:', error.message);
        process.exit(1);
    }
}

deploy();
```

---

## 🔍 **Troubleshooting**

### **Problemas Comuns**

#### **1. "No currently active project"**
```bash
# Solução
firebase use lp-f5--621190968
# ou
firebase deploy --project lp-f5--621190968
```

#### **2. "Permission denied"**
```bash
# Fazer login novamente
firebase logout
firebase login
```

#### **3. "Build directory not found"**
```bash
# Verificar configuração no firebase.json
# Confirmar se o diretório público existe
ls -la build/  # ou dist/ ou out/
```

#### **4. "File upload failed"**
```bash
# Verificar tamanho dos arquivos
# Firebase tem limite de 2GB por deploy
find . -type f -size +10M
```

### **Comandos Úteis**

```bash
# Ver status do projeto
firebase projects:list

# Ver informações do hosting
firebase hosting:sites:list

# Ver logs de deploy
firebase hosting:logs

# Rollback para versão anterior
firebase hosting:rollback

# Visualizar antes do deploy
firebase serve
```

---

## 📊 **Monitoramento e Analytics**

### **Performance Monitoring**
```bash
# Habilitar Performance Monitoring
firebase init performance

# Configurar no código
import { getPerformance } from 'firebase/performance';
const perf = getPerformance(app);
```

### **Analytics**
```bash
# Habilitar Analytics
firebase init analytics

# Configurar eventos customizados
gtag('event', 'form_submit', {
  event_category: 'engagement',
  event_label: 'contact_form'
});
```

---

## 🔐 **Segurança e Configurações**

### **Headers de Segurança**
```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
```

### **Domínio Customizado**
```bash
# Adicionar domínio personalizado
firebase hosting:sites:create f5estrategia
firebase target:apply hosting main f5estrategia
firebase deploy --only hosting:main
```

---

## 📝 **Checklist de Deploy**

### **Antes do Deploy**
- [ ] ✅ Código testado localmente
- [ ] ✅ Build sem erros
- [ ] ✅ Assets otimizados
- [ ] ✅ SEO meta tags atualizadas
- [ ] ✅ Analytics configurado
- [ ] ✅ Formulários testados

### **Após o Deploy**
- [ ] ✅ Site carregando corretamente
- [ ] ✅ Mobile responsivo
- [ ] ✅ Formulários funcionando
- [ ] ✅ Analytics tracking
- [ ] ✅ PageSpeed > 90
- [ ] ✅ Links internos funcionando

---

## 📞 **Suporte**

- **Firebase Console**: https://console.firebase.google.com/project/lp-f5--621190968
- **Documentação**: https://firebase.google.com/docs/hosting
- **Status Firebase**: https://status.firebase.google.com/

---

**🔥 Deploy Firebase configurado e funcionando!**  
**📱 Landing page otimizada para todos os dispositivos**  
**🚀 Pronto para futuras migrações de framework**
