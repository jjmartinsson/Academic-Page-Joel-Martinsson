// Smooth scrolling for navigation links
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

// Handle missing profile image gracefully
window.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-photo');

    if (profileImage) {
        profileImage.addEventListener('error', function() {
            // Create a placeholder with initials if image fails to load
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-placeholder';
            placeholder.textContent = 'JM';
            this.parentNode.replaceChild(placeholder, this);
        });
    }

    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('.content-section, .hero');
    const navLinks = document.querySelectorAll('.main-nav a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.getAttribute('id')) {
            observer.observe(section);
        }
    });
});
