# 🚀 Deploy Rápido - F5 Google Ads

## 📋 Informações do Projeto

- **🌐 URL Produção**: https://lp-f5--621190968.web.app
- **🔥 Projeto Firebase**: `lp-f5--621190968`
- **📱 Status**: Otimizado para mobile ✅

---

## ⚡ Deploy Rápido (1 comando)

### **Opção 1: Script Node.js (Recomendado)**
```bash
npm run deploy
```

### **Opção 2: Script Bash**
```bash
./deploy.sh
```

### **Opção 3: Manual**
```bash
firebase deploy --project lp-f5--621190968
```

---

## 🛠️ Comandos Úteis

### **Desenvolvimento Local**
```bash
# Servidor Python
npm run serve

# Servidor Node.js
npm run serve:node

# Firebase Emulator
npm run firebase:serve
```

### **Deploy e Git**
```bash
# Deploy automático (commit + push + deploy)
npm run deploy

# Apenas Firebase deploy
npm run firebase:deploy

# Commit e push para GitHub
npm run git:push
```

### **Testes e Otimização**
```bash
# Verificar arquivos
npm run build:check

# Lighthouse audit
npm run lighthouse

# PageSpeed Insights
npm run pagespeed

# Teste mobile
npm run test:mobile
```

---

## 📱 Links Importantes

- **🌐 Site**: https://lp-f5--621190968.web.app
- **🔥 Firebase Console**: https://console.firebase.google.com/project/lp-f5--621190968
- **📊 PageSpeed**: https://pagespeed.web.dev/analysis?url=https://lp-f5--621190968.web.app
- **📂 GitHub**: https://github.com/japatraderdev99/landing-pagr-f5-google

---

## 🔧 Primeiro Deploy (Setup)

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Login no Firebase
firebase login

# 3. Deploy
npm run deploy
```

---

## 📝 Deploy para Outros Frameworks

### **Next.js**
```bash
# 1. Criar projeto
npx create-next-app@latest f5-nextjs

# 2. Build estático
echo 'output: "export"' >> next.config.js

# 3. Configurar Firebase
{
  "hosting": {
    "public": "out"
  }
}

# 4. Deploy
npm run build && firebase deploy
```

### **React**
```bash
# 1. Criar projeto
npx create-react-app f5-react

# 2. Configurar Firebase
{
  "hosting": {
    "public": "build"
  }
}

# 3. Deploy
npm run build && firebase deploy
```

### **Vue.js**
```bash
# 1. Criar projeto
npm create vue@latest f5-vue

# 2. Configurar Firebase
{
  "hosting": {
    "public": "dist"
  }
}

# 3. Deploy
npm run build && firebase deploy
```

---

## 🆘 Problemas Comuns

### **❌ "No currently active project"**
```bash
firebase use lp-f5--621190968
```

### **❌ "Permission denied"**
```bash
firebase logout
firebase login
```

### **❌ "Build failed"**
```bash
# Verificar arquivos necessários
npm run build:check
```

---

## ✅ Checklist Deploy

- [ ] 🔍 Arquivos essenciais presentes
- [ ] 🔐 Login Firebase OK
- [ ] 📝 Mudanças commitadas
- [ ] 🚀 Deploy executado
- [ ] 🌐 Site funcionando
- [ ] 📱 Mobile responsivo
- [ ] 📊 Performance > 90
- [ ] 📝 Formulário testado

---

**🎉 Deploy configurado e funcionando!**  
**⚡ Use `npm run deploy` para deploys futuros**
