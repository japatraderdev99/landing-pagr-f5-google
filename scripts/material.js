// Material Web Components Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize form interactions
    initFormInteractions();
    
    // Initialize CTA buttons
    initCTAButtons();
});

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(
        'md-filled-card, md-outlined-card, .service-card, .stat-card'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form interactions and enhancements
function initFormInteractions() {
    const form = document.getElementById('leadForm');
    const textFields = document.querySelectorAll('md-outlined-text-field');
    const selectFields = document.querySelectorAll('md-outlined-select');
    
    // Add real-time validation feedback
    textFields.forEach(field => {
        const input = field.querySelector('input');
        if (input) {
            input.addEventListener('blur', function() {
                validateField(field, input);
            });
            
            input.addEventListener('input', function() {
                if (field.hasAttribute('error')) {
                    validateField(field, input);
                }
            });
        }
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Field validation
function validateField(field, input) {
    const value = input.value.trim();
    const type = input.type;
    const required = input.hasAttribute('required');
    
    let isValid = true;
    let errorMessage = '';
    
    if (required && !value) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório';
    } else if (value) {
        switch (type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um e-mail válido';
                }
                break;
            case 'tel':
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                    isValid = false;
                    errorMessage = 'Por favor, insira um telefone válido';
                }
                break;
        }
    }
    
    updateFieldValidation(field, isValid, errorMessage);
    return isValid;
}

// Update field validation state
function updateFieldValidation(field, isValid, errorMessage) {
    if (isValid) {
        field.removeAttribute('error');
        field.setAttribute('supporting-text', field.dataset.originalSupporting || '');
    } else {
        field.setAttribute('error', '');
        field.setAttribute('supporting-text', errorMessage);
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.form-submit');
    
    // Validate all fields
    let isFormValid = true;
    const textFields = form.querySelectorAll('md-outlined-text-field');
    
    textFields.forEach(field => {
        const input = field.querySelector('input');
        if (input && !validateField(field, input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showToast('Por favor, corrija os erros no formulário', 'error');
        return;
    }
    
    // Show loading state
    submitButton.setAttribute('disabled', '');
    submitButton.textContent = 'ENVIANDO...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                event_category: 'Form',
                event_label: 'Lead Generation',
                value: 1497,
                currency: 'BRL'
            });
        }
        
        // Show success message
        showToast('Formulário enviado com sucesso! Entraremos em contato em até 2 horas.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.removeAttribute('disabled');
        submitButton.textContent = 'QUERO COMEÇAR AGORA';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, 2000);
}

// Initialize CTA buttons
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.hero-cta, .form-submit');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track CTA clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: this.textContent.trim(),
                    event_value: 1
                });
            }
        });
    });
}

// Utility function to scroll to form
function scrollToForm() {
    const form = document.getElementById('contato');
    if (form) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = form.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Toast notification system
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                <span class="material-icons">close</span>
            </button>
        </div>
    `;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1000;
        background: ${type === 'success' ? 'var(--md-sys-color-secondary)' : 'var(--md-sys-color-error)'};
        color: white;
        padding: 16px 20px;
        border-radius: var(--md-sys-shape-corner-small);
        box-shadow: var(--md-sys-elevation-level3);
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font: var(--md-sys-typescale-body-medium);
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// Add toast animations to page
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    
    .toast-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        transition: background-color 0.2s;
    }
    
    .toast-close:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(toastStyles);