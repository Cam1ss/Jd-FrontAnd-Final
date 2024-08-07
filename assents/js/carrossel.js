let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelector('.slides');
    let dots = document.querySelectorAll('.dot');
    if (n > dots.length) {slideIndex = 1}
    if (n < 1) {slideIndex = dots.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides.style.transform = 'translateX(' + (-(slideIndex - 1) * 100 / dots.length) + '%)';
    dots[slideIndex-1].className += ' active';
}