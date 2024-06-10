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
 
  thumbs: {
    swiper: swiperThumbs,
  },
});



document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper for the main slides
  var swiperMain = new Swiper('.map-main-swiper', {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.map-swiper-button-next',
      prevEl: '.map-swiper-button-prev',
    },
    on: {
      init: function () {
        updateSectionBackground();
      },
      slideChangeTransitionEnd: function () {
        updateSectionBackground();
      }
    }
  });

  // Update the background image of .section-map based on the active slide
  function updateSectionBackground() {
    var activeSlide = document.querySelector('.map-main-swiper .swiper-slide-active');
    if (activeSlide) {
      var bgData = activeSlide.getAttribute('bg-data');
      if (bgData) {
        var sectionMap = document.getElementById('section-map');
        sectionMap.style.backgroundImage = 'url(' + bgData + ')';
      } else {
        console.error('bg-data attribute not found on the active slide');
      }
    } else {
      console.error('Active slide not found');
    }
  }
});

