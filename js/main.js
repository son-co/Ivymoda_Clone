$(document).ready(function() {
    $('.product_slider').owlCarousel({
        nav: true,
        navSpeed: 1200,
        rewind: true,
        dots: false,
        items: 5,
        margin: 25,
        navText: ["<a class='prev'> <ion-icon name='arrow-back-outline'></ion-icon></a>", "<a class='next'> <ion-icon name='arrow-forward-outline'></ion-icon><a/>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    $('.list-ads').owlCarousel({
        nav: true,
        dots: false,
        items: 2,
        loop: true,
        navText: ["<a class='navleft'> <ion-icon name='arrow-back-outline'></ion-icon></a>", "<a class='navright'> <ion-icon name='arrow-forward-outline'></ion-icon><a/>"],
        margin: 25,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    $('.gallery-slider').owlCarousel({
        nav: false,
        dots: false,
        items: 2,
        loop: true,
        margin: 25,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            500: {
                items: 3,
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
    $('.nav-info_list').owlCarousel({
        nav: false,
        dots: false,
        items: 2,
        loop: true,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                // nav: false
            },
            360: {
                items: 1,
                // nav: true
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    })
})