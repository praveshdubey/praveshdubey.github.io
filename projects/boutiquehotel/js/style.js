$(document).ready(function(){
    $(".happy-family ").owlCarousel({
        nav:false,
        autoplay:true,
        autoplaytimeout:1000,
        dots:false,
        loop:true,
        margin:0,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            994:{
                items:3
            },
            1200:{
                items:3
            }

        }
    });
});