const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 30,
    centeredSlides:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
          centeredSlides:true,
        },
        // when window width is >= 480px
        520: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1116: {
            slidesPerView: 4,
          spaceBetween: 30
        } 
    }
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
