/*
  "assets/slide-4.png",
  "assets/slide-5.png",
  "assets/slide-6.png",
*/



let slideIndex = 0;
const slideshowContainer = document.getElementById('slideshow-container');

// Array of image URLs
const imageUrls = [
  "assets/slide-1.png",
  "assets/slide-2.png",
  "assets/slide-3.png",
  "assets/slide-4.png",
  "assets/slide-5.png",
  "assets/slide-6.png",
  // Add more image URLs as needed
];

// Dynamically create slide elements
imageUrls.forEach((url) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const img = document.createElement('img');
  img.src = url;
  img.alt = `Slide ${slideIndex + 1}`;
  slide.appendChild(img);
  slideshowContainer.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
