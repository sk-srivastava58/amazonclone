document.addEventListener('DOMContentLoaded', () => {
    // Carousel
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    setInterval(nextSlide, 3000); // Automatically switch slides every 3 seconds

    // Show the first slide initially
    showSlide(currentSlide);

    // Toggle Menu for small screens
    const allLogo = document.querySelector('.all-logo');
    const navOptions = document.querySelector('.nav-options .options');

    allLogo.addEventListener('click', () => {
        navOptions.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!allLogo.contains(event.target) && !navOptions.contains(event.target)) {
            navOptions.classList.remove('show');
        }
    });
});
