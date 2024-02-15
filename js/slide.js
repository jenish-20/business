$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:2000,
        navSpeed:4000,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        animateIn:['animate__fadeInUp'],
        animateOut:['animate__fadeOutLeft']
    });
  });