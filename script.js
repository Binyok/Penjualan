document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);

        const headerOffset = document.querySelector('header').offsetHeight;
        const sectionPosition = section.offsetTop - headerOffset;

        window.scrollTo({
            behavior: 'smooth',
            top: sectionPosition
        });
    });
});
const homeSection = document.getElementById('home');
const homeBackground = homeSection.style.backgroundImage;

window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    homeSection.style.backgroundPositionY = offset * 0.5 + 'px'; // Sesuaikan kecepatan efek parallax
});
