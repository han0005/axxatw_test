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

