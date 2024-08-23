import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

var swiper = new Swiper(".clients", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    speed: 1000,

    navigation: {
      nextEl: '#clientsNextBtn',
      prevEl: '#clientsPrevBtn',
    },

    breakpoints: {
        480: {

        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },

    
  });
