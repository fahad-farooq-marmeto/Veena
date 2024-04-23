document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-slider__slide');
    const dots = document.querySelectorAll('.hero-slider__dot');
    let currentSlide = 0;

    function navigateSlide(targetIndex, direction) {
        const targetSlideIndex = (targetIndex + slides.length) % slides.length;
        resetCurrentSlide(slides[currentSlide]);
        prepareNextSlide(slides[targetSlideIndex], direction);
        updateActiveDot(dots[currentSlide], dots[targetSlideIndex]);
        currentSlide = targetSlideIndex;
    }

    function resetCurrentSlide(slide) {
        slide.className = 'hero-slider__slide'; // Reset class to default
    }

    function prepareNextSlide(slide, direction) {
        slide.className = 'hero-slider__slide active'; // Activate next slide
        slide.style.transform = direction === "right" ? "translateX(100%)" : "translateX(-100%)"; // Position offscreen appropriately
        setTimeout(() => {
            slide.style.transform = "translateX(0)"; // Slide into view
        }, 20); // A short delay to ensure transform applies
    }

    function updateActiveDot(currentDot, targetDot) {
        currentDot.className = 'hero-slider__dot';
        targetDot.className = 'hero-slider__dot active-dot';
    }

    function setupNavigation() {
        const nextButton = document.querySelector('.hero-slider__next');
        const prevButton = document.querySelector('.hero-slider__prev');

        if (nextButton) {
            nextButton.addEventListener('click', () => navigateSlide(currentSlide + 1, "right"));
        }
        if (prevButton) {
            prevButton.addEventListener('click', () => navigateSlide(currentSlide - 1, "left"));
        }
    }

    function setupDots() {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => navigateSlide(index, index > currentSlide ? "right" : "left"));
        });
    }

    setupNavigation();
    setupDots();
});
