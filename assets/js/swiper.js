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
var swiperThumbs = new Swiper('.gameplay-swiper-container-thumbs', {
  spaceBetween: 10,
  slidesPerView: 1,
  // loop: true,
  // freeMode: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
});

var swiperMain = new Swiper('.main-swiper', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  thumbs: {
    swiper: swiperThumbs,
  },
});