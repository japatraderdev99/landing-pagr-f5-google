// Analytics and Tracking for F5 Google Ads Landing Page

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID
const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM ID

// Initialize Analytics
(function() {
    'use strict';
    
    // Load Google Tag Manager
    loadGTM();
    
    // Load Google Analytics
    loadGA4();
    
    // Initialize tracking when DOM is ready
    document.addEventListener('DOMContentLoaded', initializeTracking);
})();

function loadGTM() {
    // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);
}

function loadGA4() {
    // Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', GA_MEASUREMENT_ID, {
        page_title: 'F5 Google Ads Landing Page',
        page_location: window.location.href,
        content_group1: 'Google Partner Landing',
        custom_map: {
            'custom_parameter_1': 'user_type'
        }
    });
    
    // Make gtag globally available
    window.gtag = gtag;
}

function initializeTracking() {
    // Enhanced ecommerce tracking
    setupEnhancedEcommerce();
    
    // Form tracking
    setupFormTracking();
    
    // Button and CTA tracking
    setupCTATracking();
    
    // Scroll depth tracking
    setupScrollTracking();
    
    // Time on page tracking
    setupTimeTracking();
    
    // Video/interaction tracking
    setupInteractionTracking();
    
    // User engagement tracking
    setupEngagementTracking();
}

function setupEnhancedEcommerce() {
    // Track page view as a potential conversion event
    gtag('event', 'page_view', {
        event_category: 'Landing Page',
        event_label: 'F5 Google Ads',
        value: 1,
        custom_parameter_1: 'prospect'
    });
    
    // Track when user starts viewing services
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gtag('event', 'view_item_list', {
                        event_category: 'Services',
                        event_label: 'Google Ads Services',
                        item_list_id: 'services_section',
                        item_list_name: 'Google Ads Services'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(servicesSection);
    }
}

function setupFormTracking() {
    const form = document.getElementById('leadForm');
    if (!form) return;
    
    const fields = form.querySelectorAll('md-outlined-text-field, md-outlined-select');
    let formStarted = false;
    let fieldInteractions = {};
    
    // Track form start
    fields.forEach(field => {
        const input = field.querySelector('input, select');
        if (input) {
            input.addEventListener('focus', function() {
                if (!formStarted) {
                    gtag('event', 'begin_checkout', {
                        event_category: 'Form',
                        event_label: 'Lead Form Started',
                        value: 1497,
                        currency: 'BRL'
                    });
                    formStarted = true;
                }
                
                // Track field interactions
                const fieldName = input.name;
                if (!fieldInteractions[fieldName]) {
                    fieldInteractions[fieldName] = true;
                    gtag('event', 'form_field_focus', {
                        event_category: 'Form',
                        event_label: `Field: ${fieldName}`,
                        custom_parameter_1: fieldName
                    });
                }
            }, { once: true });
        }
    });
    
    // Track form completion
    form.addEventListener('submit', function() {
        gtag('event', 'purchase', {
            event_category: 'Form',
            event_label: 'Lead Form Submitted',
            transaction_id: 'lead_' + Date.now(),
            value: 1497,
            currency: 'BRL',
            items: [{
                item_id: 'google_ads_service',
                item_name: 'Google Ads Implementation',
                category: 'Digital Marketing',
                quantity: 1,
                price: 1497
            }]
        });
        
        // Facebook Pixel conversion (if available)
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                value: 1497,
                currency: 'BRL',
                content_name: 'Google Ads Service',
                content_category: 'Digital Marketing'
            });
        }
    });
    
    // Track form abandonment
    let formTouched = false;
    fields.forEach(field => {
        const input = field.querySelector('input, select');
        if (input) {
            input.addEventListener('input', () => {
                formTouched = true;
            });
        }
    });
    
    window.addEventListener('beforeunload', function() {
        if (formTouched && !form.querySelector('[type="submit"]').disabled) {
            gtag('event', 'form_abandon', {
                event_category: 'Form',
                event_label: 'Lead Form Abandoned',
                value: 0
            });
        }
    });
}

function setupCTATracking() {
    // Track all CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-cta, .form-submit, md-filled-button, md-outlined-button');
    
    ctaButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonType = this.classList.contains('hero-cta') ? 'Hero CTA' : 
                              this.classList.contains('form-submit') ? 'Form Submit' : 'Button';
            
            gtag('event', 'click', {
                event_category: 'CTA',
                event_label: `${buttonType}: ${buttonText}`,
                value: buttonType === 'Hero CTA' ? 1 : 0,
                custom_parameter_1: `cta_${index + 1}`
            });
        });
    });
    
    // Track external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'click', {
                event_category: 'External Link',
                event_label: this.href,
                transport_type: 'beacon'
            });
        });
    });
}

function setupScrollTracking() {
    let maxScroll = 0;
    let scrollMilestones = [25, 50, 75, 90, 100];
    let trackedMilestones = new Set();
    
    function trackScroll() {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
        
        maxScroll = Math.max(maxScroll, scrollPercent);
        
        scrollMilestones.forEach(milestone => {
            if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                gtag('event', 'scroll', {
                    event_category: 'User Engagement',
                    event_label: `Scroll Depth: ${milestone}%`,
                    value: milestone,
                    custom_parameter_1: `scroll_${milestone}`
                });
            }
        });
    }
    
    // Throttled scroll tracking
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScroll, 100);
    });
    
    // Track max scroll on page unload
    window.addEventListener('beforeunload', function() {
        if (maxScroll > 0) {
            gtag('event', 'max_scroll_depth', {
                event_category: 'User Engagement',
                event_label: `Max Scroll: ${maxScroll}%`,
                value: maxScroll,
                transport_type: 'beacon'
            });
        }
    });
}

function setupTimeTracking() {
    const startTime = Date.now();
    let engagementTracked = false;
    
    // Track engaged users (30+ seconds)
    setTimeout(() => {
        if (!engagementTracked) {
            gtag('event', 'user_engagement', {
                event_category: 'User Engagement',
                event_label: 'Engaged User (30s+)',
                value: 30
            });
            engagementTracked = true;
        }
    }, 30000);
    
    // Track time on page milestones
    const timeMilestones = [30, 60, 120, 300, 600]; // seconds
    const trackedTimes = new Set();
    
    setInterval(() => {
        const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
        
        timeMilestones.forEach(milestone => {
            if (timeOnPage >= milestone && !trackedTimes.has(milestone)) {
                trackedTimes.add(milestone);
                gtag('event', 'time_on_page', {
                    event_category: 'User Engagement',
                    event_label: `Time on Page: ${milestone}s`,
                    value: milestone
                });
            }
        });
    }, 10000);
    
    // Track total time on unload
    window.addEventListener('beforeunload', function() {
        const totalTime = Math.floor((Date.now() - startTime) / 1000);
        if (totalTime > 5) { // Only track if more than 5 seconds
            gtag('event', 'session_duration', {
                event_category: 'User Engagement',
                event_label: `Total Time: ${totalTime}s`,
                value: totalTime,
                transport_type: 'beacon'
            });
        }
    });
}

function setupInteractionTracking() {
    // Track card interactions
    document.querySelectorAll('md-filled-card, md-outlined-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            gtag('event', 'card_click', {
                event_category: 'User Interaction',
                event_label: `Card ${index + 1}`,
                value: index + 1
            });
        });
    });
    
    // Track service card hovers (desktop)
    if (window.innerWidth >= 768) {
        document.querySelectorAll('.service-card').forEach((card, index) => {
            let hoverTimer;
            
            card.addEventListener('mouseenter', function() {
                hoverTimer = setTimeout(() => {
                    gtag('event', 'service_hover', {
                        event_category: 'User Interaction',
                        event_label: `Service Card ${index + 1}`,
                        value: index + 1
                    });
                }, 2000);
            });
            
            card.addEventListener('mouseleave', function() {
                if (hoverTimer) clearTimeout(hoverTimer);
            });
        });
    }
}

function setupEngagementTracking() {
    let mouseMovements = 0;
    let clicks = 0;
    let keyPresses = 0;
    
    // Track user activity
    document.addEventListener('mousemove', () => mouseMovements++);
    document.addEventListener('click', () => clicks++);
    document.addEventListener('keypress', () => keyPresses++);
    
    // Send engagement data every 30 seconds
    setInterval(() => {
        if (mouseMovements > 0 || clicks > 0 || keyPresses > 0) {
            gtag('event', 'user_activity', {
                event_category: 'User Engagement',
                event_label: 'Activity Level',
                custom_parameters: {
                    mouse_movements: mouseMovements,
                    clicks: clicks,
                    key_presses: keyPresses
                }
            });
            
            // Reset counters
            mouseMovements = clicks = keyPresses = 0;
        }
    }, 30000);
}

// Utility functions for custom tracking
window.F5Analytics = {
    trackCustomEvent: function(eventName, category, label, value) {
        gtag('event', eventName, {
            event_category: category,
            event_label: label,
            value: value || 0
        });
    },
    
    trackConversion: function(conversionId, conversionValue) {
        gtag('event', 'conversion', {
            send_to: conversionId,
            value: conversionValue || 1497,
            currency: 'BRL'
        });
    },
    
    identifyUser: function(userId, userProperties) {
        gtag('config', GA_MEASUREMENT_ID, {
            user_id: userId,
            custom_map: userProperties
        });
    }
};

// Debug mode for development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.F5Analytics.debug = true;
    console.log('F5 Analytics loaded in debug mode');
}