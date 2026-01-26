document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
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

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 64, 175, 1)';
        } else {
            navbar.style.background = 'rgba(30, 64, 175, 0.95)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .service-card, .pricing-card, .dafo-card, .pestel-card, .team-member').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // CTA button actions
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Esta es una página de presentación.');
        });
    });

    // Add multiple flying planes
    const heroAnimation = document.querySelector('.hero-animation');
    for (let i = 0; i < 3; i++) {
        const plane = document.createElement('div');
        plane.className = 'plane';
        plane.style.animationDelay = `${i * 5}s`;
        plane.style.top = `${20 + i * 20}%`;
        heroAnimation.appendChild(plane);
    }
});