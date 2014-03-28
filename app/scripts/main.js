$('.logo-intro').removeClass('hidden').addClass('animated flipInY');
$('.jumbo-text').removeClass('hidden').addClass('animated fadeInDown');

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    'use strict';
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});
