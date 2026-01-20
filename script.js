// ============================================
// JOEL MARTINSSON - INTERACTIVE SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    initSmoothScroll();

    // Animated counters
    initCounters();

    // Publication filters
    initPubFilters();

    // Profile image fallback
    initProfileFallback();

    // Scroll animations
    initScrollAnimations();
});

// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 24;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, duration / steps);
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// PUBLICATION FILTERS
// ============================================
function initPubFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pubCards = document.querySelectorAll('.pub-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            pubCards.forEach(card => {
                const year = card.dataset.year;

                if (filter === 'all' || year === filter) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PROFILE IMAGE FALLBACK
// ============================================
function initProfileFallback() {
    const profileImage = document.querySelector('.profile-photo');

    if (profileImage) {
        profileImage.addEventListener('error', function() {
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-placeholder';
            placeholder.textContent = 'JM';
            this.parentNode.replaceChild(placeholder, this);
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const animateOnScroll = document.querySelectorAll(
        '.research-card, .pub-card, .timeline-item, .fun-facts, .quote-card, .contact-card, .social-card'
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
                entry.target.style.opacity = '0';
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ============================================
// TYPING EFFECT (Optional enhancement)
// ============================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================
// PARALLAX EFFECT FOR FLOATING SHAPES
// ============================================
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

console.log('🎓 Joel Martinsson - Academic Website Loaded');
console.log('📚 Research: Political Ethics | Democratic Governance | Teaching Innovation');
