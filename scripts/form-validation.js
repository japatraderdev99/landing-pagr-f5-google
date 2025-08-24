// Advanced Form Validation for F5 Google Ads Landing Page

class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.rules = new Map();
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        // Set up validation rules
        this.setupValidationRules();
        
        // Add event listeners
        this.addEventListeners();
        
        // Store original supporting texts
        this.storeOriginalSupportingTexts();
    }
    
    setupValidationRules() {
        this.rules.set('name', {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            message: 'Nome deve ter pelo menos 2 caracteres e conter apenas letras'
        });
        
        this.rules.set('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Por favor, insira um e-mail válido'
        });
        
        this.rules.set('company', {
            required: true,
            minLength: 2,
            message: 'Nome da empresa é obrigatório'
        });
        
        this.rules.set('phone', {
            required: true,
            pattern: /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)(?:9\s?)?\d{4}[-\s]?\d{4}$/,
            message: 'Formato: (11) 99999-9999 ou 11999999999'
        });
        
        this.rules.set('revenue', {
            required: false
        });
    }
    
    storeOriginalSupportingTexts() {
        const fields = this.form.querySelectorAll('md-outlined-text-field, md-outlined-select');
        fields.forEach(field => {
            const originalText = field.getAttribute('supporting-text') || '';
            field.dataset.originalSupporting = originalText;
        });
    }
    
    addEventListeners() {
        // Real-time validation on input
        const textFields = this.form.querySelectorAll('md-outlined-text-field');
        textFields.forEach(field => {
            const input = field.querySelector('input');
            if (input) {
                // Format phone number on input
                if (input.name === 'phone') {
                    input.addEventListener('input', (e) => this.formatPhoneNumber(e));
                }
                
                // Validate on blur
                input.addEventListener('blur', (e) => this.validateField(field, input));
                
                // Clear error on focus if field has error
                input.addEventListener('focus', (e) => {
                    if (field.hasAttribute('error')) {
                        this.clearFieldError(field);
                    }
                });
                
                // Real-time validation after first error
                input.addEventListener('input', (e) => {
                    if (field.hasAttribute('error')) {
                        setTimeout(() => this.validateField(field, input), 300);
                    }
                });
            }
        });
        
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    formatPhoneNumber(event) {
        let value = event.target.value.replace(/\D/g, '');
        
        // Limit to 11 digits (with area code)
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        // Format based on length
        if (value.length >= 11) {
            // (11) 99999-9999
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 7) {
            // (11) 9999-9999
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            // (11) 99
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        
        event.target.value = value;
    }
    
    validateField(field, input) {
        const name = input.name;
        const value = input.value.trim();
        const rule = this.rules.get(name);
        
        if (!rule) return true;
        
        let isValid = true;
        let errorMessage = '';
        
        // Check if required
        if (rule.required && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        } else if (value) {
            // Check minimum length
            if (rule.minLength && value.length < rule.minLength) {
                isValid = false;
                errorMessage = rule.message;
            }
            
            // Check pattern
            if (rule.pattern && !rule.pattern.test(value)) {
                isValid = false;
                errorMessage = rule.message;
            }
            
            // Special validations
            if (name === 'email' && isValid) {
                // Check for common email typos
                const commonDomains = ['gmail.com', 'hotmail.com', 'yahoo.com.br', 'outlook.com'];
                const emailParts = value.split('@');
                if (emailParts.length === 2) {
                    const domain = emailParts[1].toLowerCase();
                    const suggestions = this.getSimilarDomain(domain, commonDomains);
                    if (suggestions.length > 0 && !commonDomains.includes(domain)) {
                        this.showDomainSuggestion(field, suggestions[0]);
                    }
                }
            }
        }
        
        this.updateFieldValidation(field, isValid, errorMessage);
        return isValid;
    }
    
    getSimilarDomain(domain, commonDomains) {
        const suggestions = [];
        
        commonDomains.forEach(commonDomain => {
            const similarity = this.calculateSimilarity(domain, commonDomain);
            if (similarity > 0.6 && similarity < 1) {
                suggestions.push(commonDomain);
            }
        });
        
        return suggestions.sort((a, b) => {
            return this.calculateSimilarity(domain, b) - this.calculateSimilarity(domain, a);
        });
    }
    
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        return (longer.length - this.editDistance(longer, shorter)) / longer.length;
    }
    
    editDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
    
    showDomainSuggestion(field, suggestedDomain) {
        const input = field.querySelector('input');
        const currentEmail = input.value;
        const emailParts = currentEmail.split('@');
        const suggestedEmail = emailParts[0] + '@' + suggestedDomain;
        
        // Create suggestion element
        let suggestion = field.nextElementSibling;
        if (!suggestion || !suggestion.classList.contains('email-suggestion')) {
            suggestion = document.createElement('div');
            suggestion.className = 'email-suggestion';
            field.parentNode.insertBefore(suggestion, field.nextSibling);
        }
        
        suggestion.innerHTML = `
            <p style="font-size: 12px; color: var(--md-sys-color-primary); margin: 4px 0;">
                Você quis dizer: 
                <button type="button" class="suggestion-button" style="background: none; border: none; color: var(--md-sys-color-primary); text-decoration: underline; cursor: pointer; font-size: 12px;">
                    ${suggestedEmail}
                </button>?
            </p>
        `;
        
        suggestion.querySelector('.suggestion-button').addEventListener('click', () => {
            input.value = suggestedEmail;
            suggestion.remove();
            this.validateField(field, input);
        });
    }
    
    updateFieldValidation(field, isValid, errorMessage) {
        if (isValid) {
            field.removeAttribute('error');
            field.setAttribute('supporting-text', field.dataset.originalSupporting || '');
            
            // Remove any email suggestions
            const suggestion = field.nextElementSibling;
            if (suggestion && suggestion.classList.contains('email-suggestion')) {
                suggestion.remove();
            }
        } else {
            field.setAttribute('error', '');
            field.setAttribute('supporting-text', errorMessage);
        }
    }
    
    clearFieldError(field) {
        if (field.hasAttribute('error')) {
            field.removeAttribute('error');
            field.setAttribute('supporting-text', field.dataset.originalSupporting || '');
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        // Validate all fields
        let isFormValid = true;
        const fields = this.form.querySelectorAll('md-outlined-text-field');
        
        fields.forEach(field => {
            const input = field.querySelector('input');
            if (input && !this.validateField(field, input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            this.submitForm();
        } else {
            this.showValidationErrors();
            // Focus on first error field
            const firstErrorField = this.form.querySelector('md-outlined-text-field[error]');
            if (firstErrorField) {
                const input = firstErrorField.querySelector('input');
                if (input) {
                    input.focus();
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    }
    
    showValidationErrors() {
        // Create or update validation summary
        let summary = document.querySelector('.validation-summary');
        if (!summary) {
            summary = document.createElement('div');
            summary.className = 'validation-summary';
            this.form.insertBefore(summary, this.form.firstChild);
        }
        
        summary.innerHTML = `
            <div style="
                background-color: var(--md-sys-color-error-container);
                color: var(--md-sys-color-on-error-container);
                padding: 16px;
                border-radius: var(--md-sys-shape-corner-small);
                margin-bottom: 24px;
                border-left: 4px solid var(--md-sys-color-error);
                font: var(--md-sys-typescale-body-medium);
            ">
                <strong>Por favor, corrija os erros abaixo:</strong>
                <ul style="margin: 8px 0 0 20px;">
                    ${this.getErrorList()}
                </ul>
            </div>
        `;
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (summary.parentElement) {
                summary.remove();
            }
        }, 10000);
    }
    
    getErrorList() {
        const errorFields = this.form.querySelectorAll('md-outlined-text-field[error]');
        const errors = Array.from(errorFields).map(field => {
            const label = field.getAttribute('label') || 'Campo';
            const error = field.getAttribute('supporting-text');
            return `<li>${label}: ${error}</li>`;
        });
        
        return errors.join('');
    }
    
    submitForm() {
        const submitButton = this.form.querySelector('.form-submit');
        const formData = new FormData(this.form);
        
        // Show loading state
        submitButton.setAttribute('disabled', '');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = `
            <span style="display: flex; align-items: center; gap: 8px;">
                <div class="loading-spinner" style="
                    width: 16px; 
                    height: 16px; 
                    border: 2px solid rgba(255,255,255,0.3); 
                    border-top: 2px solid white; 
                    border-radius: 50%; 
                    animation: spin 1s linear infinite;
                "></div>
                ENVIANDO...
            </span>
        `;
        
        // Add spinner animation
        if (!document.querySelector('#spinner-style')) {
            const style = document.createElement('style');
            style.id = 'spinner-style';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Simulate API call
        const submitPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Formulário enviado com sucesso!'
                });
            }, 2000);
        });
        
        submitPromise.then((response) => {
            if (response.success) {
                this.handleSuccess(response.message);
            } else {
                this.handleError(response.message);
            }
        }).catch((error) => {
            this.handleError('Erro ao enviar formulário. Tente novamente.');
        }).finally(() => {
            // Reset button
            submitButton.removeAttribute('disabled');
            submitButton.textContent = originalText;
        });
    }
    
    handleSuccess(message) {
        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
                value: 1497,
                currency: 'BRL'
            });
        }
        
        // Show success message
        this.showSuccessMessage(message);
        
        // Reset form
        this.form.reset();
        
        // Clear any validation states
        const fields = this.form.querySelectorAll('md-outlined-text-field');
        fields.forEach(field => this.clearFieldError(field));
        
        // Remove validation summary if exists
        const summary = document.querySelector('.validation-summary');
        if (summary) summary.remove();
    }
    
    handleError(message) {
        this.showErrorMessage(message);
    }
    
    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }
    
    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }
    
    showMessage(message, type) {
        // Use the toast system from material.js if available
        if (typeof showToast === 'function') {
            showToast(message, type);
        } else {
            alert(message);
        }
    }
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new FormValidator('#leadForm');
});