// General Swiper
const swiper = new Swiper('.swiper:not(.gameplay)', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 10,
  slideActiveClass: 'swiper-slide-active',
  pagination: { el: '.swiper-pagination' },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },

  on: {
    slideChange: function() {
      const slides = document.querySelectorAll('.swiper:not(.gameplay) .swiper-slide');
      slides.forEach(slide => {
        slide.classList.remove('zoom-slide');
      });

     
    }
  }
});






// Gameplay Swiper
// Initialize Swiper for thumbnails
var swiperThumbs = new Swiper('.gameplay-swiper-container-thumbs', {
  spaceBetween: 0,
  slidesPerView: 1,
});

// Initialize Swiper for main slides
var swiperMain = new Swiper('.main-swiper', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

