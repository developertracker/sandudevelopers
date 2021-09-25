$(document).ready(function() {
    $('.o-grid--left').hover(function () {
        $('.o-grid--3').removeClass('active');
        $(this).parent('.o-grid--3').addClass('active');
        $(this).closest('.o-grid').addClass('open');
        $('.o-grid--right').hide();
        $(this).next('.o-grid--right').show();
    });

    $('.menu-icon').click(function () {
        $('nav').slideToggle();
    })

    $('nav ul li').each(function(index) {
        const count = index;
        $(this).click(function() {
            console.log(count);
            if($(window).width() <= 960) {
                $('nav').slideUp('fast');
            }
            var element = document.querySelector('#section-'+ count)
            element.scrollIntoView({behavior: "smooth"});
        })
    })

})