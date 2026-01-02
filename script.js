document.addEventListener("DOMContentLoaded", function () {
   
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        const phrases = ["Websites.", "Applications.", "Experiences."];
        let pIdx = 0, cIdx = 0, isDeleting = false;
        function type() {
            const current = phrases[pIdx];
            textElement.textContent = isDeleting ? current.substring(0, cIdx - 1) : current.substring(0, cIdx + 1);
            cIdx = isDeleting ? cIdx - 1 : cIdx + 1;
            if (!isDeleting && cIdx === current.length) { isDeleting = true; setTimeout(type, 2000); }
            else if (isDeleting && cIdx === 0) { isDeleting = false; pIdx = (pIdx + 1) % phrases.length; setTimeout(type, 500); }
            else { setTimeout(type, isDeleting ? 70 : 150); }
        }
        type();
    }

   
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50 ? "rgba(15, 12, 41, 0.95)" : "rgba(0, 0, 0, 0.3)";
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, h1, .hero-text').forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.1}s`;
        observer.observe(el);
    });
});
