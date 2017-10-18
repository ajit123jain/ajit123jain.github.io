/*
* Author : Prem Chand Saini
* website : https://www.pcsaini.in
*
* */

/*-----------Header on-scroll Animation*/
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header").addClass("small-header")
    } else {
        $("#header").removeClass("small-header")
    }
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('ul.navbar-nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('ul.navbar-nav a').removeClass("active");
            currentLink.addClass("active");
            console.log(refElement);
        }
        else{
            currentLink.removeClass("active");
        }
    });
}



$(function() {
    var owl = $('.owl-carousel').owlCarousel({
        loop	:true,
        margin	:10,
        autoplay:false,
        nav:true,
        dots:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        navText:['<div class="btn-pre">&#10092;</div>','<div class="btn-next">&#10093;</div>']
    });

    /* animate filter */
    var owlAnimateFilter = function(even) {
        $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
    };

    $('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        owl.owlFilter(filter_data, function(_owl) {
            $(_owl).find('.item').each(owlAnimateFilter);
        });
    })
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(23.259094, 72.650371),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID,

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map
    });

}