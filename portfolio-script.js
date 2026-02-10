// Portfolio JavaScript - Advanced Interactive Features

// DOM Elements
const loadingScreen = document.getElementById('loading');
const scrollProgress = document.getElementById('scrollProgress');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const filterBtns = document.querySelectorAll('.filter-btn');
const skillProgressBars = document.querySelectorAll('.progress-bar');

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger lines
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', throttle(updateScrollProgress, 16));

// Enhanced Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
            
            // Animate section title
            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle && !sectionTitle.classList.contains('animate')) {
                sectionTitle.classList.add('animate');
            }
        }
    });
});

// Navbar Background on Scroll - Theme Aware
function updateNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    const isDark = document.body.classList.contains('dark-theme');
    
    if (window.scrollY > 100) {
        if (isDark) {
            navbar.style.background = 'rgba(15, 15, 15, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        }
    } else {
        if (isDark) {
            navbar.style.background = 'rgba(15, 15, 15, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
}

window.addEventListener('scroll', throttle(updateNavbarBackground, 16));

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger skill progress bars animation
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
            
            // Trigger stats counter animation
            if (entry.target.classList.contains('about')) {
                animateStats();
            }
        }
    });
}, observerOptions);

// Observe sections for animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Skill Progress Bars Animation
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
}

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat h4');
    stats.forEach(stat => {
        const targetValue = parseInt(stat.textContent.replace('+', ''));
        let currentValue = 0;
        const increment = targetValue / 50;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            stat.textContent = Math.ceil(currentValue) + '+';
        }, 30);
    });
}

// Project Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter project cards
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.remove('hidden');
                }, 10);
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Typing Animation for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title .gradient-text');
        if (heroTitle) {
            typeWriter(heroTitle, 'Fareez Raza', 150);
        }
    }, 3000);
    
    // Add entrance animations stagger effect
    const animatedElements = document.querySelectorAll('.testimonial-card, .achievement');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Parallax for floating elements
    floatingElements.forEach((element, index) => {
        const rate = scrolled * (0.2 + index * 0.1);
        element.style.transform = `translateY(${rate}px) rotate(${rate * 0.5}deg)`;
    });
});

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Cursor Trail Effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Theme-aware cursor trail
function createTrailDot() {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    const isDark = document.body.classList.contains('dark-theme');
    
    dot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: ${isDark ? 
            'linear-gradient(135deg, #ffd700, #ffa500)' : 
            'linear-gradient(135deg, #667eea, #764ba2)'};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.3s ease;
    `;
    
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    
    document.body.appendChild(dot);
    
    setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'scale(0)';
        setTimeout(() => {
            if (document.body.contains(dot)) {
                document.body.removeChild(dot);
            }
        }, 300);
    }, 100);
}

// Create trail dots periodically
setInterval(createTrailDot, 50);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.click();
        }
    }
});

// Page Visibility API for animations
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.querySelectorAll('.floating-element').forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when tab becomes visible
        document.querySelectorAll('.floating-element').forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});

// Theme Toggle (Dark/Light Mode)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.setAttribute('title', 'Toggle theme');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('portfolioTheme');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && systemDarkMode);
    
    // Set initial theme
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Set initial navbar background based on theme
    setTimeout(() => {
        updateNavbarBackground();
    }, 100);
    
    // Style the toggle button
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Toggle functionality
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        
        // Update button icon with smooth transition
        themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        
        setTimeout(() => {
            themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        }, 150);
        
        // Immediately update navbar background for current scroll position
        updateNavbarBackground();
        
        // Save theme preference
        localStorage.setItem('portfolioTheme', isDark ? 'dark' : 'light');
        
        // Show notification
        showNotification(`${isDark ? 'Dark' : 'Light'} mode activated! ${isDark ? '🌙' : '☀️'}`, 'info');
    });
    
    // Hover effects
    themeToggle.addEventListener('mouseenter', () => {
        if (!themeToggle.style.transform.includes('scale(0.8)')) {
            themeToggle.style.transform = 'scale(1.1)';
        }
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        if (!themeToggle.style.transform.includes('scale(0.8)')) {
            themeToggle.style.transform = 'scale(1)';
        }
    });
    
    document.body.appendChild(themeToggle);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('portfolioTheme')) {
            if (e.matches && !document.body.classList.contains('dark-theme')) {
                themeToggle.click();
            } else if (!e.matches && document.body.classList.contains('dark-theme')) {
                themeToggle.click();
            }
        }
    });
}

// Initialize theme toggle
createThemeToggle();

// Add keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + T)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        document.querySelector('.theme-toggle').click();
    }
});

// Theme-aware cursor trail
function createTrailDot() {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    const isDark = document.body.classList.contains('dark-theme');
    
    dot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: ${isDark ? 
            'linear-gradient(135deg, #ffd700, #ffa500)' : 
            'linear-gradient(135deg, #667eea, #764ba2)'};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.3s ease;
    `;
    
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    
    document.body.appendChild(dot);
    
    setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = 'scale(0)';
        setTimeout(() => {
            if (document.body.contains(dot)) {
                document.body.removeChild(dot);
            }
        }, 300);
    }, 100);
}

// Performance optimization: Throttle scroll events
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
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Existing scroll functionality
}, 16)); // ~60fps

// Initialize all animations and interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    initializeEmailJS();
    
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('.hero-title .line, .hero-description, .hero-buttons');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Initialize project cards
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('Portfolio loaded successfully! 🚀');
});

// Add some Easter eggs
let clickCount = 0;
document.querySelector('.logo').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        showNotification('🎉 You found an Easter egg! Thanks for exploring!', 'success');
        clickCount = 0;
    }
});

// Console message for developers
console.log(`
    🌟 Welcome to Fareez Raza's Portfolio! 🌟
    
    Built with:
    ✨ HTML5 & CSS3
    🚀 Vanilla JavaScript
    💫 Love and passion
    🎨 Advanced animations
    📱 Responsive design
    🌙 Dark/Light mode
    
    Feel free to explore the code!
    GitHub: https://github.com/fareezraza
    Portfolio: https://fareezraza.dev
    
    "Code is poetry written for machines to understand and humans to admire."
`);
