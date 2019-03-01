// Main

$(document).ready(function() {
    // Show scrollTop
    console.log($(window).scrollTop());
    $(window).scroll(function() {
        var scrolltop = $(window).scrollTop();
        console.log(scrolltop);
        if (scrolltop > 10) {
            $('header ul li a').removeClass('white');
            $('header').css({ 'background': 'white', 'color': 'black!important', 'box-shadow': '0 0.5px 15px 1px black' });
        } else {
            $('header ul li a').addClass('white');
            $('header').css({ 'background': 'initial', 'color': 'initial', 'box-shadow': 'initial' });
        }
    });
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    // Phần Clients
    $('.home-clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});