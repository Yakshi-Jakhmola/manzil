function initDomik() {
    "use strict";
    $("body").append('<div class="l-line"><span></span></div>');
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
        contanimshow();
    });
	// center content ------------------
    function a() {
        $(" .fullheight-carousel .item").css({
            height: $(".fullheight-carousel").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $("footer").outerHeight(true)
        });
        $(".team-social").css({
            "margin-top": -1 * $(".team-social").height() / 2 + "px"
        });
        $(".minus-wrap").css({
            "margin-top": -$("footer").outerHeight(true)
        });
        $(".srtp ul").css({
            "margin-top": -1 * $(".srtp ul").height() / 2 + "px"
        });
 
 
    }
    a();
    $(window).resize(function() {
        a();
        var b = $(window).width();
        if (b > 1024) $(".nav-holder").css({
            display: "block"
        });
    });
    $(".show-hidden-info").on("click", function() {
        $(this).toggleClass("vhi");
        $(this).closest(".resume-box").find(".hidden-info").slideToggle(500);
    });
    var b = $(".full-width");
    b.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullwidth-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullwidth-slider-holder").find(b).trigger("owl.next");
    });
    $(".fullwidth-slider-holder  a.prev-slide").on("click", function() {
        $(this).closest(".fullwidth-slider-holder").find(b).trigger("owl.prev");
    });
    var c = $(".fullscreen-slider");
    c.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullscreen-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(c).trigger("owl.next");
    });
    $(".fullscreen-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullscreen-slider-holder").find(c).trigger("owl.prev");
    });
    function d() {
        var a = document.querySelectorAll(".intense");
        Intense(a);
    }
    d();
	//swiper  ------------------
    var f = new Swiper("#horizontal-slider", {
        speed: 1900,
        loop: true,
        grabCursor: true,
          mousewheel: true,
             navigation: {
                nextEl: '.hor a.arrow-right',
                prevEl: '.hor a.arrow-left',
            },
            pagination: {
                el: '.pagination',
                clickable: true,
            },
            autoplay: {
                delay: 232325000,
                disableOnInteraction: false
            },
    });
	
	
	
	
	
	
	
 
	
	// popups  ------------------
        $(".image-popup ,.popup-youtube , .popup-vimeo").lightGallery({
            selector: "this",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            counter: false
        });
        $(".popup-gallery").lightGallery({
            selector: "a",
            cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
            download: false,
            loop: true,
            counter: false
        });	
	
	
	
	
	
    $(".hide-column").on("click", function() {
        $(".not-vis-column").animate({
            right: "-100%"
        }, 900);
    });
    $(".show-info , .sdet_btn").on("click", function() {
        $(".not-vis-column").animate({
            right: "0"
        }, 900);
    });
	// owl carousel ------------------
    var g = $(".fullheight-carousel");
    g.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items:3
    });
    $(".fullheight-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(g).trigger("owl.next");
    });
    $(".fullheight-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".fullheight-carousel-holder").find(g).trigger("owl.prev");
    });
    $(".carousel-link-holder").hover(function() {
        $(this).parent(".carousel-item").addClass("vis-decor");
    }, function() {
        $(this).parent(".carousel-item").removeClass("vis-decor");
    });
    var h = $(".single-slider");
    h.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1
 	
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".portfolio-slider-holder").find(h).trigger("owl.next");
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(h).trigger("owl.prev");
    });
	//counter ------------------
    var i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === i) k(2600);
        i++;
    });
    function j(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function k(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            j(c, d, b, a);
        });
    }
    $(".animaper").appear();
 
 
     //   Video------------------	
    if ($(".video-holder-wrap").length > 0) {
        function videoint() {
           var w = $(".background-vimeo").data("vim"),
                bvc = $(".background-vimeo"),
                bvmc = $(".media-container"),
                bvfc = $(".background-vimeo iframe "),
                vch = $(".video-container");
            bvc.append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
            $(".video-holder").height(bvmc.height());
            if ($(window).width() > 1024) {
                if ($(".video-holder").length > 0)
                    if (bvmc.height() / 9 * 16 > bvmc.width()) {
                        bvfc.height(bvmc.height()).width(bvmc.height() / 9 * 16);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            top: "-75px",
                            "margin-top": "0px"
                        });
                    } else {
                        bvfc.width($(window).width()).height($(window).width() / 16 * 9);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            "margin-top": -1 * $("iframe").height() / 2 + "px",
                            top: "50%"
                        });
                    }
            } else if ($(window).width() < 760) {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            } else {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            }
            vch.css("width", $(window).width() + "px");
            vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
            if (vch.height() < $(window).height()) {
                vch.css("height", $(window).height() + "px");
                vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
            }
        }
        videoint();
    }	
	// isotope ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
			    transformsEnabled: true,
                transitionDuration: "700ms"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                $('html, body').animate({
                    scrollTop: $('.gallery-items').offset().top - 90
                }, 600);
                var c = $(this).attr("data-filter");
                setTimeout(function () {
                    a.isotope({
                        filter: c
                    });
                }, 700);				
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    n();
	$('.slide-title a , .box-item a.ajax , .carousel-link-holder').on('click',function(){
		$('nav a').removeClass('act-link');
		$('.pp').addClass('act-link');
	});
	$('.single-title a').on('click',function(){
		$('nav a').removeClass('act-link');
		$('.pa').addClass('act-link');
	});
	// content functions ------------------
    $(".team-box").hover(function() {
        $(this).find("ul.team-social").fadeIn();
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1,
                    top: "0"
                }, 400);
            }, 150 * a);
        });
    }, function() {
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0,
                    top: "50px"
                }, 400);
            }, 150 * a);
        });
        setTimeout(function() {
            $(this).find("ul.team-social").fadeOut();
        }, 150);
    });
    $(".to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    function o() {
        $(".gallery-filters").removeClass("vis-filter").fadeIn(10);
        setTimeout(function() {
            $(".gallery-filters a").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    b.animate({
                        opacity: 1,
                        top: 0
                    }, 600, "easeOutCubic");
                }, 150 * a);
            });
        }, 250);
    }
    function p() {
        $(".gallery-filters").addClass("vis-filter");
        $(".gallery-filters a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0,
                    top: "30px"
                }, 600, "easeOutCubic");
            }, 150 * a);
        });
        setTimeout(function() {
            $(".gallery-filters").fadeOut(100);
        }, 650);
    }
    $(".filter-button").on("click", function() {
        if ($(".gallery-filters").hasClass("vis-filter")) o(); else p();
        return false;
    });
    $.fn.duplicate = function(a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<div class='scale-callback'></div>").duplicate(12).appendTo(".img-wrap");
    $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 800,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
 
// contact form ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                subject: $('#subject').val(),
                comments: $("#comments").val(),
                verify: $('#verify').val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
	// IMPORTANT   INIT YOUR FUNCTIONS HERE ------------------

    var ww3 = $(window).width();
	if (ww3 < 1036){
		$(".box-item a").on("click", function(e) {
		e.preventDefault();
			return false;
    });
	}

    $(window).on("scroll", function () {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(this).scrollTop();
        var d = c / (a - b) * 100;
        $('.img-wrap .bg').css('transform', 'translate3d(0, ' + +(c * 0.4) + 'px, 0)');
    });
	
	
    //   mailchimp------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    $.ajaxChimp.translations.eng = {
        submit: "Submitting...",
        0: '<i class="fal fa-check"></i> We will be in touch soon!',
        1: '<i class="fal fa-exclamation-circle"></i> You must enter a valid e-mail address.',
        2: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        3: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        4: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.',
        5: '<i class="fal fa-exclamation-circle"></i> E-mail address is not valid.'
    };	
 //  Map init------------------	
    if ($("#map-canvas").length > 0) {
        var latlog = $('#map-canvas').data('latlog'),
            popupTextit = $('#map-canvas').data('popuptext'),
            map = L.map('map-canvas').setView(latlog, 10);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: ''
        }).addTo(map);
 	
		
        var greenIcon = L.icon({
            iconUrl: 'images/marker.png',
            iconSize: [40, 40],
            popupAnchor: [0, -26]
        });
        L.marker(latlog, {
            icon: greenIcon
        }).addTo(map).bindPopup(popupTextit);
 }	
	
	
}
// if mobile remove parallax and video  ------------------
 
// show hide content and init functions  ------------------
function contanimshow() {
    $(".elem").removeClass("scale-bg2");
    setTimeout(function() {
        $(".scale-callback").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.addClass("scale-bg5");
            }, 80 * a);
        });
    }, 450);
    setTimeout(function() {
        $(".wrapper-inner").animate({
            opacity: 1
        }, 1500);
    }, 550);
    setTimeout(function() {
        $("footer").animate({
            opacity: 1
        }, 1500);
		 $(".bg-animate ").animate({
            opacity: 0.6
        }, 1500);
    }, 650);
}

function contanimhide() {
    setTimeout(function() {
        $(".elem").addClass("scale-bg2");
    }, 650);
}
// share ------------------
	$(".share-container").share({
		networks: ['facebook', 'pinterest', 'twitter', 'linkedin']
	});
var shrcn = $(".share-container") ;
function showShare() {
    shrcn.fadeIn(400);
 	$(".selectMe").addClass("vissharebtn");
    shrcn.removeClass("isShare");
 
}
function hideShare() {
    shrcn.addClass("isShare");
	shrcn.fadeOut(400);
 	$(".selectMe").removeClass("vissharebtn");
 
}
$(".selectMe").on("click", function(a) {
    a.preventDefault();
    if ($(".share-container").hasClass("isShare")) showShare(); else hideShare();
});
$('nav li a').on('click',function(){
	$('nav li a').removeClass('act-link');
	$(this).addClass('act-link');
});
	            $("<div class='progress-bar'></div>").appendTo("header"); 
    $(window).on("scroll", function () {
        var a2 = $(document).height();
        var b2 = $(window).height();
        var c2 = $(this).scrollTop();
        var d2 = c2 / (a2 - b2) * 100;
        $(".progress-bar").css({
            width: d2 + "%"
        });
    });
// mobile menu ------------------
	//  menu    ------------------
	$(".nav-holder").addClass("main-menu");
     $(".nav-button-holder").on("click", function() {
         $(".main-menu").toggleClass("vismobmenu");
     });
     function mobMenuInit() {
         var ww = $(window).width();
         if (ww < 1064) {
             $(".menusb").remove();
             $(".main-menu").removeClass("nav-holder");
             $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
             $(".menusb").menu();
         } else {
             $(".menusb").remove();
             $(".main-menu").addClass("nav-holder");
         }
     }
     mobMenuInit();
     //   css ------------------
     $(window).on("resize", function() {
         mobMenuInit();
     });
     $("#menu").menu();
//=============== init ajax  ==============
$(function() {
    $.coretemp({
        reloadbox: "#wrapper",
		loadErrorMessage: "<h2>404</h2> <br> page not found.", // 404 error text
        loadErrorBacklinkText: "Back to the last page", // 404 back button  text
        outDuration: 250,
        inDuration: 150
    });
    readyFunctions();
    $(document).on({
        ksctbCallback: function() {
            readyFunctions();
        }
    });
});
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
}); 
//=============== init all functions  ==============
function readyFunctions() {
    initDomik();
 
}


$('.projeect-slider').slick({
    dots: false,
    arrows: true,
	prevArrow: "<i class='a-left control-c prev slick-prev fa-solid fa-arrow-left'>",
	nextArrow: "<i class='a-right control-c next slick-next fa-solid fa-arrow-right'>",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });