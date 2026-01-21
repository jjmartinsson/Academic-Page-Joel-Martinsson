// ============================================
// JOEL MARTINSSON - ACADEMIC WEBSITE
// Clean, Minimal JavaScript with Language Support
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initHeaderScroll();
    initScrollReveal();
    initLanguageSwitcher();
    initContactForm();
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
// HEADER SHADOW ON SCROLL
// ============================================
function initHeaderScroll() {
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// ============================================
// SUBTLE SCROLL REVEAL
// ============================================
function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.work-card, .pub-item, .social-card, .contact-item, .meta-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ============================================
// LANGUAGE SWITCHER
// ============================================
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('preferredLang') || 'en';

    // Set initial language
    setLanguage(savedLang);

    // Update button states
    langBtns.forEach(btn => {
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('preferredLang', lang);

            // Update button states
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-en and data-sv attributes
    const translatableElements = document.querySelectorAll('[data-en][data-sv]');

    translatableElements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            // Check if it contains HTML
            if (text.includes('<') && text.includes('>')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update select options
    const selectOptions = document.querySelectorAll('select option[data-en][data-sv]');
    selectOptions.forEach(option => {
        const text = option.getAttribute(`data-${lang}`);
        if (text) {
            option.textContent = text;
        }
    });

    // Update page title based on language
    if (lang === 'sv') {
        document.title = 'Joel Martinsson — Statsvetare';
    } else {
        document.title = 'Joel Martinsson — Political Scientist';
    }
}

// ============================================
// CONTACT FORM (FormSubmit.co handles submission)
// ============================================
function initContactForm() {
    // Form submission is handled by FormSubmit.co
    // No custom JavaScript needed
}
