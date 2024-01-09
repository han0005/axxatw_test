$(document).ready(function () {
    $('.footer-down li').click(function (e) { 
        e.preventDefault();
        $(this).find('.footer-links').toggleClass('open').parent().siblings().find('.footer-links').removeClass('open');
    });


    $('.footer-down li').click(function (e) { 
        e.preventDefault();
        $(this).find('h2').toggleClass('hv').parent().siblings().find('h2').removeClass('hv');
    });

    $('.aside-btn').click(function (e) { 
        e.preventDefault();
        $('.aside').toggleClass('aside-active');
        $('.bar').toggleClass('b-open');
        $('body').toggleClass('aside-open');
    });

    $('.gotop').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},1000);
    })
});






