let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * (slideIndex % slides.length)}%)`;
      });
      slideIndex++;
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();