// ===== MAIN JAVASCRIPT - MATERIAL DESIGN 3 INTERACTIONS =====

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Multiple fallback initializations
    setTimeout(() => {
        console.log('Fallback 1: Reinitializing tabs...');
        initializeTabs();
    }, 500);
    
    setTimeout(() => {
        console.log('Fallback 2: Force tab setup...');
        forceTabSetup();
    }, 1000);
});

// Force tab setup function
function forceTabSetup() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    console.log('Force setup - Buttons:', tabButtons.length, 'Panels:', tabPanels.length);
    
    if (tabButtons.length > 0 && tabPanels.length > 0) {
        // Remove all existing event listeners and add fresh ones
        tabButtons.forEach(button => {
            // Clone node to remove all event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
        
        // Re-attach event listeners to cloned buttons
        const freshButtons = document.querySelectorAll('.tab-btn');
        freshButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = this.getAttribute('data-tab');
                console.log('Force click on:', target);
                
                // Update buttons
                freshButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update panels
                tabPanels.forEach(panel => panel.classList.remove('active'));
                const targetPanel = document.getElementById(target);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    console.log('Force activated:', target);
                }
            });
        });
        
        console.log('Force tab setup completed');
    }
}

function initializeApp() {
    // Initialize all components
    initializeTabs();
    initializeFormValidation();
    initializeScrollAnimations();
    initializeNumberAnimations();
    initializeRippleEffects();
    initializeSmoothScrolling();
    initializeHeaderBehavior();
    initializeIntersectionObserver();
    
    console.log('F5 Google Ads Landing Page initialized with Material Design 3');
}

// ===== TAB SYSTEM =====
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    // Debug log to check if elements are found
    console.log('Tab buttons found:', tabButtons.length);
    console.log('Tab panels found:', tabPanels.length);
    console.log('Tab buttons:', Array.from(tabButtons).map(btn => btn.getAttribute('data-tab')));
    console.log('Tab panels:', Array.from(tabPanels).map(panel => panel.id));
    
    if (tabButtons.length === 0 || tabPanels.length === 0) {
        console.warn('Tab elements not found');
        return;
    }
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            const targetTab = this.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);
            
            // Remove active class from all buttons and panels
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Find and activate the corresponding panel
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel && targetPanel.classList.contains('tab-panel')) {
                targetPanel.classList.add('active');
                console.log('Panel activated:', targetTab);
                
                // Trigger reflow to ensure animation works
                targetPanel.offsetHeight;
                
            } else {
                console.error('Target panel not found or invalid:', targetTab, targetPanel);
                
                // Fallback: try to find any panel with matching ID
                const allPanels = document.querySelectorAll('[id="' + targetTab + '"]');
                console.log('Alternative panels found:', allPanels.length);
                allPanels.forEach(panel => {
                    panel.classList.add('active');
                });
            }
            
            // Add ripple effect
            if (typeof createRipple === 'function') {
                createRipple(this, event);
            }
        });
        
        // Add keyboard support
        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });
}

// ===== FORM VALIDATION =====
function initializeFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) {
        console.log('Contact form not found on this page');
        return;
    }
    const inputs = form.querySelectorAll('input[required], select[required]');
    const progressBar = document.getElementById('formProgressBar');
    
    // Update progress bar
    function updateProgress() {
        const validFields = Array.from(inputs).filter(input => validateField(input, true));
        const progress = (validFields.length / inputs.length) * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }
    
    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
            updateProgress();
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
            updateProgress();
        });
        
        // Add success state
        input.addEventListener('input', function() {
            const container = this.closest('.md-text-field') || this.closest('.md-select');
            if (this.value.trim() && !container.classList.contains('error')) {
                container.classList.add('success');
                setTimeout(() => {
                    container.classList.remove('success');
                }, 2000);
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitForm(this);
        } else {
            showFormError('Por favor, corrija os campos destacados.');
        }
    });
}

function validateField(field, silent = false) {
    const value = field.value.trim();
    const fieldContainer = field.closest('.md-text-field') || field.closest('.md-select');
    
    // Remove previous states
    field.classList.remove('error');
    fieldContainer.classList.remove('error', 'success');
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Por favor, insira um e-mail válido.';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Formato: (11) 99999-9999';
        }
    }
    
    // URL validation
    if (field.type === 'url' && value) {
        try {
            new URL(value.startsWith('http') ? value : 'https://' + value);
        } catch {
            isValid = false;
            errorMessage = 'Por favor, insira uma URL válida.';
        }
    }
    
    if (!isValid && !silent) {
        field.classList.add('error');
        fieldContainer.classList.add('error');
        showFieldError(fieldContainer, errorMessage);
    } else if (isValid) {
        hideFieldError(fieldContainer);
        if (value && !silent) {
            fieldContainer.classList.add('success');
        }
    }
    
    return isValid;
}

function showFieldError(container, message) {
    let errorElement = container.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        container.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function hideFieldError(container) {
    const errorElement = container.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFormError(message) {
    // Create or update form error message
    const form = document.querySelector('.contact-form');
    let errorElement = form.querySelector('.form-error');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        form.insertBefore(errorElement, form.firstChild);
    }
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

async function submitForm(form) {
    const submitButton = form.querySelector('.form-submit');
    const originalText = submitButton.innerHTML;
    
    // Show loading state with animation
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success state
        submitButton.classList.remove('loading');
        submitButton.classList.add('success');
        
        // Show success message
        showSuccessMessage('✅ Formulário enviado! Nossa equipe entrará em contato em até 2 horas.');
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            resetFormState(form);
            submitButton.classList.remove('success');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 3000);
        
    } catch (error) {
        submitButton.classList.remove('loading');
        showFormError('❌ Erro ao enviar formulário. Tente novamente.');
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

function resetFormState(form) {
    // Reset all field states
    const fields = form.querySelectorAll('.md-text-field, .md-select');
    fields.forEach(field => {
        field.classList.remove('error', 'success');
    });
    
    // Reset progress bar
    const progressBar = document.getElementById('formProgressBar');
    if (progressBar) {
        progressBar.style.width = '0%';
    }
    
    // Remove error messages
    const errors = form.querySelectorAll('.field-error');
    errors.forEach(error => error.remove());
}
}

function showSuccessMessage(message) {
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.innerHTML = `
        <span class="material-icons">check_circle</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(successElement);
    
    // Animate in
    setTimeout(() => successElement.classList.add('show'), 100);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        successElement.classList.remove('show');
        setTimeout(() => successElement.remove(), 300);
    }, 5000);
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.float-card, .offer-card, .power-card, .story-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== NUMBER ANIMATIONS =====
function initializeNumberAnimations() {
    const numberElements = document.querySelectorAll('.card-value, .metric-value, .metric-big, .amount, .proof-number, .benefit-value');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    numberElements.forEach(element => {
        observer.observe(element);
    });
}

function animateNumber(element) {
    const text = element.textContent;
    const hasPercentage = text.includes('%');
    const hasPlus = text.includes('+');
    const hasX = text.includes('x');
    const hasDecimal = text.includes('.');
    
    // Extract number from text
    let targetNumber = parseFloat(text.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    if (isNaN(targetNumber)) return;
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startNumber = 0;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentNumber = startNumber + (targetNumber - startNumber) * easeOutExpo;
        
        let displayValue = '';
        
        if (hasDecimal && targetNumber < 100) {
            displayValue = currentNumber.toFixed(1);
        } else if (targetNumber >= 1000) {
            displayValue = Math.round(currentNumber).toLocaleString('pt-BR');
        } else {
            displayValue = Math.round(currentNumber).toString();
        }
        
        // Add prefixes/suffixes back
        if (hasPlus) displayValue = '+' + displayValue;
        if (hasPercentage) displayValue += '%';
        if (hasX) displayValue += 'x';
        
        // Special handling for currency
        if (text.includes('R$')) {
            displayValue = 'R$ ' + displayValue.replace('R$ ', '');
        }
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            // Ensure final value is exact
            element.textContent = text;
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// ===== RIPPLE EFFECTS =====
function initializeRippleEffects() {
    const rippleElements = document.querySelectorAll('.md-filled-button, .md-outlined-button, .tab-btn');
    
    rippleElements.forEach(element => {
        element.addEventListener('click', function(e) {
            createRipple(this, e);
        });
    });
}

function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header-premium').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// ===== HEADER BEHAVIOR =====
function initializeHeaderBehavior() {
    const header = document.querySelector('.header-premium');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== INTERSECTION OBSERVER =====
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== PHONE NUMBER FORMATTING =====
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    input.value = value;
}

// Add phone formatting to tel inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
    
    // Additional manual tab initialization for safety
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        // Initialize tabs manually after page load
        setTimeout(() => {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabPanels = document.querySelectorAll('.tab-panel');
            
            if (tabBtns.length > 0 && tabPanels.length > 0) {
                tabBtns.forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = this.getAttribute('data-tab');
                        
                        // Remove all active classes
                        tabBtns.forEach(b => b.classList.remove('active'));
                        tabPanels.forEach(p => p.classList.remove('active'));
                        
                        // Add active to clicked button and target panel
                        this.classList.add('active');
                        const targetPanel = document.getElementById(target);
                        if (targetPanel) {
                            targetPanel.classList.add('active');
                        }
                    });
                });
                console.log('Manual tab initialization completed');
            }
        }, 1000);
    }
});

// ===== PERFORMANCE OPTIMIZATIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initializeAccessibility() {
    // Keyboard navigation for tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const nextIndex = e.key === 'ArrowRight' 
                    ? (index + 1) % tabButtons.length 
                    : (index - 1 + tabButtons.length) % tabButtons.length;
                tabButtons[nextIndex].focus();
                tabButtons[nextIndex].click();
            }
        });
    });
    
    // Focus management for form
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            if (e.defaultPrevented) {
                // Focus first error field
                const firstError = form.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could send error to analytics service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could send error to analytics service
});

// ===== ANALYTICS INTEGRATION =====
function trackEvent(eventName, properties = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, properties);
}

// ===================================
// MOBILE MENU FUNCTIONALITY
// ===================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger to X
            const icon = this.querySelector('.material-symbols-rounded');
            if (mobileNav.classList.contains('active')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
        
        // Close menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('.material-symbols-rounded');
                icon.textContent = 'menu';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('.material-symbols-rounded');
                icon.textContent = 'menu';
            }
        });
    }
}

// Track form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_name: 'contact_form',
                page_location: window.location.href
            });
        });
    }
    
    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('.hero-cta-primary, .cta-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                page_location: window.location.href
            });
        });
    });
});

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);
