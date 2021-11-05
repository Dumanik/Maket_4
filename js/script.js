
new Swiper('.slideshow_student',{

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay:10000,
        stopOnLastSlide:false,
        disableOnInteraction: false,
    },
    speed: 1000,
});




new Swiper('.block_course_item', {
    pagination: {
        el: '.slider_pointer_course',
        clickable: true,
    },


    autoplay: {
        delay:10000,
        stopOnLastSlide:false,
        disableOnInteraction: false,
    },
    speed: 1000,


    breakpoints: {

        992: {
            slidesPerView: 3,
        },
    },

});



