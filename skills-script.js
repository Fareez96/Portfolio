// Skills Page JavaScript

// Check for saved theme on page load and apply it
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('portfolioTheme');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && systemDarkMode);
    
    // Apply theme immediately
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
    }
    
    // Create and setup theme toggle
    createThemeToggle();
    
    // Initialize skills page functionality
    initializeSkillsPage();
});

// Initialize skills page
function initializeSkillsPage() {
    // Animate skill progress bars when they come into view
    const skillProgressBars = document.querySelectorAll('.skill-progress .progress-bar');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                
                // Stop observing this element
                progressObserver.unobserve(progressBar);
            }
        });
    }, observerOptions);

    // Start observing all progress bars
    skillProgressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Animate skill cards entrance
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (index % 4) * 100 + 300);
    });

    // Add hover effect for skill cards
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const progressBar = card.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.background = 'linear-gradient(135deg, #ffd700, #ff6b35)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const progressBar = card.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            }
        });
    });

    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.skill-section .section-header');
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        headerObserver.observe(header);
    });

    console.log('🚀 Skills page loaded successfully with theme sync!');
}

// Theme Toggle Function
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.setAttribute('title', 'Toggle theme');
    
    // Set initial icon based on current theme
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
    
    // Toggle functionality
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        
        // Update button icon with smooth transition
        themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        
        setTimeout(() => {
            themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        }, 150);
        
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
}

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
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Shift + T for theme toggle
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        document.querySelector('.theme-toggle').click();
    }
    
    // Escape to go back
    if (e.key === 'Escape') {
        window.history.back();
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('portfolioTheme')) {
        if (e.matches && !document.body.classList.contains('dark-theme')) {
            document.querySelector('.theme-toggle').click();
        } else if (!e.matches && document.body.classList.contains('dark-theme')) {
            document.querySelector('.theme-toggle').click();
        }
    }
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
