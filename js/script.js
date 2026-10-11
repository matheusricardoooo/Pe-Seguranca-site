const carousel = document.querySelector(".solutions-carousel");

if (carousel) {
    const track = carousel.querySelector(".solutions-track");
    const slides = Array.from(carousel.querySelectorAll(".card-solution"));
    const indicators = Array.from(carousel.querySelectorAll(".carousel-indicator"));
    const status = carousel.querySelector(".carousel-status");
    const previousButton = carousel.querySelector("[data-carousel-previous]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const autoplayDelay = 5000;
    let currentIndex = 0;
    let autoplayTimer;

    const showSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;
            slide.setAttribute("aria-hidden", String(!isActive));
            slide.inert = !isActive;
        });

        indicators.forEach((indicator, indicatorIndex) => {
            indicator.setAttribute("aria-current", String(indicatorIndex === currentIndex));
        });

        status.textContent = `Solução ${currentIndex + 1} de ${slides.length}: ${
            slides[currentIndex].querySelector(".title-solution").textContent
        }`;
    };

    const stopAutoplay = () => {
        window.clearInterval(autoplayTimer);
        autoplayTimer = undefined;
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (
            document.hidden ||
            carousel.matches(":hover") ||
            carousel.contains(document.activeElement) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        autoplayTimer = window.setInterval(() => showSlide(currentIndex + 1), autoplayDelay);
    };

    previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", (event) => {
        if (!carousel.contains(event.relatedTarget)) {
            startAutoplay();
        }
    });
    document.addEventListener("visibilitychange", startAutoplay);

    startAutoplay();
}