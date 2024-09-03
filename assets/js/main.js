document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.tranding-main-row');
    const slides = document.querySelectorAll('.tranding-clothe-box');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let cloneSlides = [];

    // Clone slides and append them to the slider for infinite effect
    slides.forEach(slide => {
        let clone = slide.cloneNode(true);
        slider.appendChild(clone);
        cloneSlides.push(clone);
    });

    function slide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            slider.style.transition = 'none'; // Disable transition temporarily
            currentIndex = 0; // Reset index
            slider.style.transform = `translateX(0)`;
            setTimeout(() => {
                slider.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
                currentIndex++;
                slider.style.transform = `translateX(-${currentIndex * (slides[0].offsetWidth + parseInt(getComputedStyle(slider).gap))}px)`;
            }, 0);
        } else {
            slider.style.transform = `translateX(-${currentIndex * (slides[0].offsetWidth + parseInt(getComputedStyle(slider).gap))}px)`;
        }
    }

    setInterval(slide, 3000); // Slide every 3 seconds
});
