AOS.init();


$('.owl-theme').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaytime:500,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        768:{
            items:1
        },
        994:{
            items:1
        },
        1200:{
            items:1
        }
    }
})