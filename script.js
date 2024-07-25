// Tambahkan animasi smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);

        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop - 50 // Sesuaikan dengan tinggi header jika ada fixed header
        });
    });
});
