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
});
