document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds

    function nextSlide() {
        goToSlide(currentSlide+1);
    }

    function previousSlide() {
        goToSlide(currentSlide-1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length) % slides.length;
        slides[currentSlide].className = 'slide active';
    }

    let next = document.querySelector('.next-slide');
    let previous = document.querySelector('.prev-slide');

    next.onclick = function() {
        nextSlide();
    };
    previous.onclick = function() {
        previousSlide();
    };

    let dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
});
