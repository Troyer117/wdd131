// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        link.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Footer links functionality
const footerLinks = document.querySelectorAll('.footer-link');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'translateY(-2px)';
        }, 150);
    });
});

// Interactive elements
const interactiveElements = document.querySelectorAll('.interactive-element');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 2000);
    });
});

// Card hover effects
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Add ripple effect to buttons
const rippleEffect = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
};

// Add ripple to interactive elements
navLinks.forEach(link => {
    link.addEventListener('click', rippleEffect);
});

footerLinks.forEach(link => {
    link.addEventListener('click', rippleEffect);
});

// Page load animations
window.addEventListener('load', () => {
    // Animate header content
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = '0';
    headerContent.style.transform = 'translateY(-20px)';
    headerContent.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate featured section
    const featuredContent = document.querySelector('.featured-content');
    featuredContent.style.opacity = '0';
    featuredContent.style.transform = 'translateY(20px)';
    featuredContent.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        featuredContent.style.opacity = '1';
        featuredContent.style.transform = 'translateY(0)';
    }, 300);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        // Add focus indicators for keyboard navigation
        const focusableElements = document.querySelectorAll('a, button, [tabindex]');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #4facfe';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = 'none';
            });
        });
    }
});

// Add performance optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset;
    const container = document.querySelector('.container');
    
    if (scrollTop > 100) {
        container.style.transform = 'translateY(-5px)';
    } else {
        container.style.transform = 'translateY(0)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Add swipe feedback
        const container = document.querySelector('.container');
        container.style.transform = `translateY(${diff > 0 ? -2 : 2}px)`;
        
        setTimeout(() => {
            container.style.transform = 'translateY(0)';
        }, 200);
    }
};

// Initialize tooltips (if needed)
const initTooltips = () => {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.9em;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
            
            element.addEventListener('mouseleave', () => {
                tooltip.remove();
            });
        });
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initTooltips();
    console.log('Card Finder initialized successfully!');
});