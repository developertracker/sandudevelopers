$(document).ready(function() {
    $('.o-grid--left').hover(function () {
        $('.o-grid--3').removeClass('active');
        $(this).parent('.o-grid--3').addClass('active');
        $(this).closest('.o-grid').addClass('open');
        $('.o-grid--right').hide();
        $(this).next('.o-grid--right').show();
    });

    $('.o-grid').mouseleave(function () {
        $('.o-grid').removeClass('open');
        $('.o-grid--3').removeClass('active');
        $('.o-grid--right').hide();
    });

    $('.menu-icon').click(function () {
        $('nav').slideToggle();
    })


    $('nav ul li').each(function(index) {
        const count = index + 1;
        $(this).click(function() {
            if($(window).width() <= 960) {
                $('nav').slideUp('fast');
            }
            var element = document.querySelector('#section-'+ count)
            element.scrollIntoView({behavior: "smooth"});
            $('nav > ul > li').removeClass('active');
            $(this).addClass('active');
        })
    });

    $('.close-btn').click(function(){
        $('.media__form').hide();
    })

    $('.o-slider').bxSlider({
        pager: false,
    });

    $(window).scroll(function() {
        var position = $(this).scrollTop();
        var headerHeight = $('header').outerHeight() +10;

        $('section').each(function() {
            var target = $(this).offset().top - headerHeight;
            var id = $(this).attr('id');

            if (position >= target) {
                $('nav > ul > li').removeClass('active');
               $('nav > ul > li[data-url=' + id + ']').addClass('active');
            }
        });
    })

})