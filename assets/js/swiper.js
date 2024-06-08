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

      const activeSlide = document.querySelector('.swiper:not(.gameplay) .swiper-slide-active');
      if (activeSlide) {
        activeSlide.classList.add('zoom-slide');
      }
    }
  }
});

// Gameplay Swiper
const gameplaySwiper = new Swiper('.swiper.gameplay', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  slideActiveClass: 'swiper-slide-active',
  pagination: { el: '.swiper-pagination' },

  on: {
    init: function() {
      const activeSlide = document.querySelector('.swiper.gameplay .swiper-slide-active img');
      if (activeSlide) {
        activeSlide.classList.add('zoom-slide');
      }
    },
    slideChange: function() {
      const slideImages = document.querySelectorAll('.swiper.gameplay .swiper-slide img');
      slideImages.forEach(image => {
        image.classList.remove('zoom-slide');
      });

      const activeSlideImage = document.querySelector('.swiper.gameplay .swiper-slide-active img');
      if (activeSlideImage) {
        activeSlideImage.classList.add('zoom-slide');
      }
    }
  }
});
