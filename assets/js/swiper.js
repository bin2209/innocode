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



// Initialize Swiper for the main slides
var swiperMain = new Swiper('.map-main-swiper', {
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.map-swiper-button-next',
    prevEl: '.map-swiper-button-prev',
  }
});

// Log the translate3d values of each swiper slide
var swiperWrapper = document.querySelector('.map-main-swiper .swiper-wrapper');
var slides = swiperWrapper.querySelectorAll('.swiper-slide');

slides.forEach(function(slide, index) {
  var transformValue = getTranslateValue(slide.style.transform);
  console.log('item ' + (index + 1) + ' translate3d(' + transformValue + ')');
});

// Function to extract X translation from transform value
function getTranslateValue(transformString) {
  var match = transformString.match(/translate3d\((-?\d+px), 0px, 0px\)/);
  if (match && match.length > 1) {
    return match[1];
  }
  return '0px'; // Default value if no match found
}