
/**
 * NEXUSAI HOME PAGE - JAVASCRIPT
 * Handles navigation, smooth scrolling, and interactive elements
 */

// ===========================
// DOM ELEMENTS
// ===========================

const navLinks = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.navbar');
const featureCards = document.querySelectorAll('.feature-card');
const missionVisionCards = document.querySelectorAll('.mission-vision-card');
const socialIcons = document.querySelectorAll('.social-icon');

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeScrollAnimations();
    initializeInteractiveElements();
});

// ===========================
// NAVIGATION
// ===========================

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * Handle navigation link click
 */
function handleNavClick(e) {
    e.preventDefault();
    
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);
    
    if (targetSection) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to target
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    let current = '';
    
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

/**
 * Initialize scroll-triggered animations
 */
function initializeScrollAnimations() {
    // Use Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe mission/vision cards
    missionVisionCards.forEach(card => {
        observer.observe(card);
    });
}

/**
 * Animate element when it comes into view
 */
function animateElement(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Trigger animation
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 50);
}

// ===========================
// INTERACTIVE ELEMENTS
// ===========================

/**
 * Initialize interactive elements and event listeners
 */
function initializeInteractiveElements() {
    // Feature card hover effects
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
    
    // Social icon hover effects
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', (e) => {
            e.currentTarget.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(e) {
    // Skip to main content with Tab + 1
    if (e.key === '1' && e.ctrlKey) {
        document.querySelector('.hero-content').focus();
        e.preventDefault();
    }
    
    // Close any open dropdowns/modals on Escape
    if (e.key === 'Escape') {
        // Can be extended for modals/dropdowns
    }
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Smooth scroll to an element
 */
function scrollToElement(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (element) {
        const top = element.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}

/**
 * Debounce function for performance
 */
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

/**
 * Check if element is in viewport
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===========================
// ACCESSIBILITY IMPROVEMENTS
// ===========================

/**
 * Enhance accessibility features
 */
function enhanceAccessibility() {
    // Add focus-visible styles programmatically
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });
}

// Call accessibility enhancements
enhanceAccessibility();

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

/**
 * Lazy load images when they come into view
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

initializeLazyLoading();

// ===========================
// ANALYTICS & TRACKING (Optional)
// ===========================

/**
 * Track user interactions (for analytics)
 * Replace with your actual analytics implementation
 */
function trackInteraction(eventName, eventData = {}) {
    // This can be connected to Google Analytics, Mixpanel, etc.
    console.log(`Event: ${eventName}`, eventData);
    
    // Example implementation:
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
}

// Track card clicks
featureCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        trackInteraction('feature_card_clicked', {
            card_index: index,
            card_title: card.querySelector('.card-title')?.textContent
        });
    });
});

// Track social icon clicks
socialIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        trackInteraction('social_icon_clicked', {
            social_platform: icon.getAttribute('title')
        });
    });
});

// ===========================
// EXPORT FOR TESTING (Optional)
// ===========================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToElement,
        debounce,
        isElementInViewport,
        trackInteraction
    };
}
