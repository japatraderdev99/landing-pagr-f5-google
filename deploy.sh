#!/bin/bash

# ===========================================
# F5 GOOGLE ADS - DEPLOY SCRIPT
# ===========================================

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configurações
PROJECT_ID="lp-f5--621190968"
SITE_URL="https://lp-f5--621190968.web.app"

echo -e "${BLUE}🔥 F5 Google Ads - Deploy Firebase${NC}"
echo -e "${BLUE}=====================================${NC}"

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Erro: Execute no diretório raiz do projeto${NC}"
    echo -e "${YELLOW}💡 Navegue até o diretório que contém index.html${NC}"
    exit 1
fi

# Verificar se Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo -e "${RED}❌ Firebase CLI não encontrado${NC}"
    echo -e "${YELLOW}💡 Instale com: npm install -g firebase-tools${NC}"
    exit 1
fi

# Verificar login no Firebase
echo -e "${BLUE}🔐 Verificando autenticação Firebase...${NC}"
if ! firebase projects:list &> /dev/null; then
    echo -e "${YELLOW}⚠️  Necessário fazer login no Firebase${NC}"
    firebase login
fi

# Verificar se há mudanças para commit
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}📦 Detectadas mudanças não commitadas${NC}"
    read -p "Deseja fazer commit automático? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}📝 Fazendo commit das mudanças...${NC}"
        git add .
        
        # Solicitar mensagem de commit
        echo -e "${YELLOW}✏️  Digite a mensagem do commit:${NC}"
        read -r commit_message
        
        if [ -z "$commit_message" ]; then
            commit_message="Deploy $(date '+%Y-%m-%d %H:%M:%S')"
        fi
        
        git commit -m "$commit_message"
        echo -e "${GREEN}✅ Commit realizado${NC}"
    fi
fi

# Push para GitHub (opcional)
echo -e "${BLUE}📤 Fazendo push para GitHub...${NC}"
if git push origin main; then
    echo -e "${GREEN}✅ Push para GitHub concluído${NC}"
else
    echo -e "${YELLOW}⚠️  Push falhou, continuando com deploy...${NC}"
fi

# Verificar arquivos importantes
echo -e "${BLUE}🔍 Verificando arquivos essenciais...${NC}"

required_files=("index.html" "styles/custom.css" "scripts/main.js" "firebase.json")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file não encontrado${NC}"
        exit 1
    fi
done

# Verificar tamanho dos arquivos (Firebase tem limite)
echo -e "${BLUE}📊 Verificando tamanho dos arquivos...${NC}"
large_files=$(find . -type f -size +10M -not -path "./node_modules/*" -not -path "./.git/*")
if [ -n "$large_files" ]; then
    echo -e "${YELLOW}⚠️  Arquivos grandes encontrados:${NC}"
    echo "$large_files"
    read -p "Continuar mesmo assim? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Fazer deploy
echo -e "${BLUE}🚀 Iniciando deploy para Firebase...${NC}"
echo -e "${BLUE}📍 Projeto: $PROJECT_ID${NC}"

if firebase deploy --project "$PROJECT_ID"; then
    echo
    echo -e "${GREEN}=====================================${NC}"
    echo -e "${GREEN}🎉 DEPLOY CONCLUÍDO COM SUCESSO! 🎉${NC}"
    echo -e "${GREEN}=====================================${NC}"
    echo -e "${GREEN}🌐 URL: $SITE_URL${NC}"
    echo -e "${GREEN}📱 Teste no mobile e desktop${NC}"
    echo -e "${GREEN}📊 Firebase Console: https://console.firebase.google.com/project/$PROJECT_ID${NC}"
    echo
    
    # Abrir site no navegador (opcional)
    read -p "Deseja abrir o site no navegador? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v open &> /dev/null; then
            open "$SITE_URL"  # macOS
        elif command -v xdg-open &> /dev/null; then
            xdg-open "$SITE_URL"  # Linux
        elif command -v start &> /dev/null; then
            start "$SITE_URL"  # Windows
        else
            echo -e "${YELLOW}💡 Acesse manualmente: $SITE_URL${NC}"
        fi
    fi
    
else
    echo
    echo -e "${RED}=====================================${NC}"
    echo -e "${RED}❌ FALHA NO DEPLOY${NC}"
    echo -e "${RED}=====================================${NC}"
    echo -e "${YELLOW}💡 Possíveis soluções:${NC}"
    echo -e "${YELLOW}   • Verificar conexão com internet${NC}"
    echo -e "${YELLOW}   • Fazer login novamente: firebase login${NC}"
    echo -e "${YELLOW}   • Verificar permissões do projeto${NC}"
    echo -e "${YELLOW}   • Verificar logs: firebase debug.log${NC}"
    exit 1
fi

echo
echo -e "${BLUE}🔍 Próximos passos recomendados:${NC}"
echo -e "${YELLOW}   1. Testar site em dispositivos móveis${NC}"
echo -e "${YELLOW}   2. Verificar Google PageSpeed Insights${NC}"
echo -e "${YELLOW}   3. Testar formulário de contato${NC}"
echo -e "${YELLOW}   4. Verificar analytics/tracking${NC}"
echo
echo -e "${GREEN}✨ Deploy finalizado! ✨${NC}"
