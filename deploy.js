/**
 * ===========================================
 * F5 GOOGLE ADS - DEPLOY SCRIPT (Node.js)
 * ===========================================
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configurações
const PROJECT_ID = 'lp-f5--621190968';
const SITE_URL = `https://${PROJECT_ID}.web.app`;

// Cores para console
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(colors[color] + message + colors.reset);
}

function checkFileExists(filePath) {
    return fs.existsSync(filePath);
}

function executeCommand(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: options.silent ? 'pipe' : 'inherit',
            ...options 
        });
        return { success: true, output: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

function checkRequiredFiles() {
    const requiredFiles = [
        'index.html',
        'styles/custom.css', 
        'scripts/main.js',
        'firebase.json'
    ];
    
    log('🔍 Verificando arquivos essenciais...', 'blue');
    
    for (const file of requiredFiles) {
        if (checkFileExists(file)) {
            log(`✅ ${file}`, 'green');
        } else {
            log(`❌ ${file} não encontrado`, 'red');
            return false;
        }
    }
    return true;
}

function checkFirebaseCLI() {
    log('🔧 Verificando Firebase CLI...', 'blue');
    
    const result = executeCommand('firebase --version', { silent: true });
    if (!result.success) {
        log('❌ Firebase CLI não encontrado', 'red');
        log('💡 Instale com: npm install -g firebase-tools', 'yellow');
        return false;
    }
    
    log('✅ Firebase CLI encontrado', 'green');
    return true;
}

function checkFirebaseAuth() {
    log('🔐 Verificando autenticação Firebase...', 'blue');
    
    const result = executeCommand('firebase projects:list', { silent: true });
    if (!result.success) {
        log('⚠️  Necessário fazer login no Firebase', 'yellow');
        const loginResult = executeCommand('firebase login');
        return loginResult.success;
    }
    
    log('✅ Autenticado no Firebase', 'green');
    return true;
}

function checkGitStatus() {
    log('📦 Verificando status do Git...', 'blue');
    
    const result = executeCommand('git status --porcelain', { silent: true });
    if (result.success && result.output.trim()) {
        log('⚠️  Existem mudanças não commitadas', 'yellow');
        return false;
    }
    
    log('✅ Repositório limpo', 'green');
    return true;
}

function commitChanges() {
    log('📝 Fazendo commit das mudanças...', 'blue');
    
    // Add all changes
    const addResult = executeCommand('git add .');
    if (!addResult.success) {
        log('❌ Falha ao adicionar arquivos', 'red');
        return false;
    }
    
    // Commit with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const commitMessage = `Deploy ${timestamp}`;
    
    const commitResult = executeCommand(`git commit -m "${commitMessage}"`);
    if (!commitResult.success) {
        log('❌ Falha no commit', 'red');
        return false;
    }
    
    log('✅ Commit realizado', 'green');
    return true;
}

function pushToGitHub() {
    log('📤 Fazendo push para GitHub...', 'blue');
    
    const result = executeCommand('git push origin main', { silent: true });
    if (result.success) {
        log('✅ Push para GitHub concluído', 'green');
    } else {
        log('⚠️  Push falhou, continuando com deploy...', 'yellow');
    }
}

function deployToFirebase() {
    log('🚀 Iniciando deploy para Firebase...', 'blue');
    log(`📍 Projeto: ${PROJECT_ID}`, 'blue');
    
    const result = executeCommand(`firebase deploy --project ${PROJECT_ID}`);
    return result.success;
}

function openInBrowser() {
    const platform = process.platform;
    let command;
    
    switch (platform) {
        case 'darwin':  // macOS
            command = `open ${SITE_URL}`;
            break;
        case 'win32':   // Windows
            command = `start ${SITE_URL}`;
            break;
        default:        // Linux
            command = `xdg-open ${SITE_URL}`;
            break;
    }
    
    executeCommand(command, { silent: true });
}

async function main() {
    try {
        // Header
        log('🔥 F5 Google Ads - Deploy Firebase', 'blue');
        log('=====================================', 'blue');
        
        // Verificar se está no diretório correto
        if (!checkFileExists('index.html')) {
            log('❌ Erro: Execute no diretório raiz do projeto', 'red');
            log('💡 Navegue até o diretório que contém index.html', 'yellow');
            process.exit(1);
        }
        
        // Verificações pré-deploy
        if (!checkFirebaseCLI()) process.exit(1);
        if (!checkFirebaseAuth()) process.exit(1);
        if (!checkRequiredFiles()) process.exit(1);
        
        // Git workflow
        const isClean = checkGitStatus();
        if (!isClean) {
            if (!commitChanges()) {
                log('❌ Falha no commit, abortando deploy', 'red');
                process.exit(1);
            }
        }
        
        // Push to GitHub
        pushToGitHub();
        
        // Deploy to Firebase
        if (deployToFirebase()) {
            // Success
            log('', 'reset');
            log('=====================================', 'green');
            log('🎉 DEPLOY CONCLUÍDO COM SUCESSO! 🎉', 'green');
            log('=====================================', 'green');
            log(`🌐 URL: ${SITE_URL}`, 'green');
            log('📱 Teste no mobile e desktop', 'green');
            log(`📊 Firebase Console: https://console.firebase.google.com/project/${PROJECT_ID}`, 'green');
            log('', 'reset');
            
            // Open in browser
            log('🌐 Abrindo site no navegador...', 'blue');
            openInBrowser();
            
            // Next steps
            log('🔍 Próximos passos recomendados:', 'blue');
            log('   1. Testar site em dispositivos móveis', 'yellow');
            log('   2. Verificar Google PageSpeed Insights', 'yellow');
            log('   3. Testar formulário de contato', 'yellow');
            log('   4. Verificar analytics/tracking', 'yellow');
            log('', 'reset');
            log('✨ Deploy finalizado! ✨', 'green');
            
        } else {
            // Failure
            log('', 'reset');
            log('=====================================', 'red');
            log('❌ FALHA NO DEPLOY', 'red');
            log('=====================================', 'red');
            log('💡 Possíveis soluções:', 'yellow');
            log('   • Verificar conexão com internet', 'yellow');
            log('   • Fazer login novamente: firebase login', 'yellow');
            log('   • Verificar permissões do projeto', 'yellow');
            log('   • Verificar logs de erro', 'yellow');
            process.exit(1);
        }
        
    } catch (error) {
        log(`❌ Erro inesperado: ${error.message}`, 'red');
        process.exit(1);
    }
}

// Executar apenas se chamado diretamente
if (require.main === module) {
    main();
}

module.exports = {
    deploy: main,
    PROJECT_ID,
    SITE_URL
};
