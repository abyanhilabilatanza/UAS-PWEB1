// 1. Smooth Scroll untuk Menu Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Animasi Muncul saat Scroll (Reveal effect)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-padding');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});

// 3. Efek Log di Console (Untuk pamer skill ke dosen)
console.log("UAS PWEB 1 Loaded Successfully!");
