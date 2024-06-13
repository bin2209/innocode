// Glass navbar when scroll navbar fixed

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('legends-nav');
    var navOffset = nav.offsetTop; // Get the initial offset position of the navbar

    function onScroll() {
        if (window.pageYOffset > 0) {
            nav.classList.add('fixed');
            if (window.pageYOffset >= navOffset) {
                nav.classList.add('overplay-blur');
            }
        } else {
            nav.classList.remove('fixed');
            nav.classList.remove('overplay-blur');
        }
    }

    window.addEventListener('scroll', onScroll);

   
});



   