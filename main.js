$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

        items: 3, 
        loop: true, 
        margin: 10,
        nav: true, 
        dots: true, 
        autoplay: true,
        autoplayTimeout: 4000, 
        navText: [

            '<button class="carousel-btn prev"><img src="./IMG/Shape (1).svg" alt=""></button>',
            '<button class="carousel-btn next" ><img src="./IMG/Shape (2).svg" alt=""></button>'

        ],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});

