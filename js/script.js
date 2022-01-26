$(function(){
    'use strict';
    // banner part
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
   // about
   $('.venobox').venobox();

// banner part
$('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});
//counter start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//icon slider
$('.icon_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
        dots: false,
});

 //   sticky manu
 var navOff = $('.navigation').offset().top;

 $(window).scroll(function () {

     var scrolling = $(this).scrollTop();
     
     if (scrolling > navOff) {
         $('.navigation').addClass('manu-fix');
     } else {
         $('.navigation').removeClass('manu-fix');
     }
 });

 // back to top

 $('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: 0,
    });
});

$(window).scroll(function () {
    var scrolling2 = $(this).scrollTop();

    if (scrolling2 > 150) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut()
    }
});












});