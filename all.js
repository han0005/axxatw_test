$(document).ready(function () {
    $('.footer-down li').click(function (e) { 
        e.preventDefault();
        $(this).find('.footer-links').toggleClass('open');
    });

    $('.footer-down li').click(function (e) { 
        e.preventDefault();
        $(this).find('h2').toggleClass('hv');
    });

    $('.aside-btn').click(function (e) { 
        e.preventDefault();
        $('.aside').toggleClass('aside-active');
    });
});



const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'vertical',
loop: true,

// If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
}); 


