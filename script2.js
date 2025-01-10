let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 50000); // Change slide every 3 seconds
