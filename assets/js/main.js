$(document).ready(function(){
    
    // Burger accordeon
    $('#burger').on('click', function() {
        $('#menu').slideToggle(500)
    });


    // work
    $('#work-photo-slider').slick({
        arrows: false,

        centerMode: true,
        variableWidth: true,

        lazyLoad: 'ondemand',
    });

    // promotion
    $('#promotion-slides').slick({
        arrows: false,
        dots: true,

        centerMode: true,
        variableWidth: true,

        lazyLoad: 'ondemand',
        infinite: false,
    });
});