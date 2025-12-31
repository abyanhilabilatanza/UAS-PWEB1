// 1. Fungsi Hamburger Menu untuk Mobile (Agar Fleksibel/Responsif)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Efek Mengetik Nama (Dinamis Sederhana)
const textElement = document.getElementById('typing-name');
const myName = "Nama Anda"; // Ganti dengan nama Anda
let index = 0;

function typeWriter() {
    if (index < myName.length) {
        textElement.innerHTML += myName.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Kecepatan mengetik
    }
}

// Jalankan efek mengetik saat halaman dimuat
window.onload = typeWriter;

// 3. Smooth Scroll saat klik menu (Supaya tidak loncat kasar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Tutup menu mobile jika sedang terbuka
        navLinks.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
