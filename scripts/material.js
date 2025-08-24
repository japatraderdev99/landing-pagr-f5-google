document.addEventListener('DOMContentLoaded', () => {
    // Ripple Effect for buttons
    const buttons = document.querySelectorAll('.md-filled-button, .md-outlined-button');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - rect.left - radius}px`;
            ripple.style.top = `${e.clientY - rect.top - radius}px`;
            ripple.classList.add('ripple');

            // Remove existing ripples
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }

            this.appendChild(ripple);
        });
    });

    // Text Field animations
    const textFields = document.querySelectorAll('.md-text-field input');
    textFields.forEach(input => {
        // Check on load if field is pre-filled
        if (input.value) {
            input.classList.add('has-value');
        }
        input.addEventListener('focus', () => {
            input.classList.add('has-value');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.classList.remove('has-value');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add ripple style to head
const style = document.createElement('style');
style.innerHTML = `
.md-filled-button, .md-outlined-button {
    position: relative;
    overflow: hidden;
}
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
}
@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
