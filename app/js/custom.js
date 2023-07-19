jQuery(function ($) {
    "use strict";

	var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $body = $("body");

    /* Scroll Function
    ============================================== */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
		   $('#header .navbar').addClass('header-fix');
		} else {
		   $('#header .navbar').removeClass('header-fix');
		}
	});

	$(".navbar-nav li").hover(function() {
		var isHovered = $(this).is(":hover");
		if (isHovered) {
		  $(this).children("ul").stop().slideDown(300);
		} else {
		  $(this).children("ul").stop().slideUp(300);
		}
	});

	/* Full Screen
    ============================================== */
    function resizebanner() {
        $(".fullscreen").css("height", $(window).height());
        $(".fullscreen").css("width", $(window).width());
    }
    $(window).resize(function () {
        resizebanner();
    });
    resizebanner();

	/* Owl Slider
	============================================== */
    $(".banner-slider").owlCarousel({
		autoplay:true,
		loop:true,
		margin:0,
		dots: true,
		nav: false,
		responsive:{
			0:{
				items:1
			}
		}
	})

});


