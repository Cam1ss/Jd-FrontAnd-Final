let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsToShow = 3;

    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow;
    } else if (currentIndex >= totalItems - itemsToShow + 1) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100 / itemsToShow;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex += 3;
    updateCarousel();
}

function prevSlide() {
    currentIndex -= 3;
    updateCarousel();
}

updateCarousel();
