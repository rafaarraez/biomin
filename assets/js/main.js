(function ($) {

    /*	$(document).ready(function() {
        $('.team-item').hover(function(){
                $('.hh').removeClass('team-img');
                $('.top').animate({opacity:0});
                $("p").css("display","");
                
        },function(){
                    $('.hh').addClass('team-img');
                    $('.top').animate({opacity:1});
                    $("p").css("display","none");
        });
        });*/

    /*===============SCROLL!!!!!=========================*/
    // if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    // window.onmousewheel = document.onmousewheel = wheel;

    // function wheel(event) {
    // 	var delta = 0;
    // 	if (event.wheelDelta) delta = event.wheelDelta / 120;
    // 	else if (event.detail) delta = -event.detail / 3;

    // 	handle(delta);
    // 	if (event.preventDefault) event.preventDefault();
    // 	event.returnValue = false;
    // }

    // function handle(delta) {
    // 	var time 	= 500;
    // 	var distance = 300;

    // 	$('html, body').stop().animate({
    // 		scrollTop: $(window).scrollTop() - (distance * delta)
    // 	}, time );
    // }
    /*==================FIIINNN SCROLL!!!!!=====================*/
    $(document).ready(function() {
        $('a[href^="#"]').click(function() {
          var destino = $(this.hash);
          if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
          }
          if (destino.length == 0) {
            destino = $('html');
          }
          $('html, body').animate({ scrollTop: destino.offset().top }, 500);
          return false;
        });
    });

    "use strict";

    $(window).on('load', function () {

        /*Page Loader active
          ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        /* slicknav mobile menu active  */
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
        });

        // Search Nav
        $('.search-btn').on('click', function () {
            $('.search-form').addClass('active');
        });

        $('.search-close').on('click', function () {
            $('.search-form').removeClass('active');
        });

        "use strict"

        // Fixed Nav
        var lastScrollTop = 0;
        $(window).on('scroll', function () {
            var wScroll = $(this).scrollTop();
            if (wScroll > $('#nav').height()) {
                if (wScroll < lastScrollTop) {
                    $('#nav-fixed').removeClass('slide-up').addClass('slide-down');
                } else {
                    $('#nav-fixed').removeClass('slide-down').addClass('slide-up');
                }
            }
            lastScrollTop = wScroll
        });

        // Search Nav
        $('.search-btn').on('click', function () {
            $('.search-form').addClass('active');
        });

        $('.search-close').on('click', function () {
            $('.search-form').removeClass('active');
        });

        $(document).ready(function(){
            $(".menu > .drop").click(function(){
                $(".menu > .drop").toggleClass("open");
                $(".menu > nav").toggleClass("open");
            });
        });
        
        // Aside Nav

        $(document).click(function (event) {
            if (!$(event.target).closest($('#nav-aside')).length) {
                if ($('#nav-aside').hasClass('active')) {
                    $('#nav-aside').removeClass('active');
                    $('#nav').removeClass('shadow-active');
                } else {
                    if ($(event.target).closest('.aside-btn').length) {
                        $('#nav-aside').addClass('active');
                        $('#nav').addClass('shadow-active');
                    }
                }
            }
        });

        $('.nav-aside-close').on('click', function () {
            $('#nav-aside').removeClass('active');
            $('#nav').removeClass('shadow-active');
        });

        // Sticky Shares
        var $shares = $('.sticky-container .sticky-shares'),
            $sharesHeight = $shares.height(),
            $sharesTop,
            $sharesCon = $('.sticky-container'),
            $sharesConTop,
            $sharesConleft,
            $sharesConHeight,
            $sharesConBottom,
            $offsetTop = 80;

        function setStickyPos() {
            if ($shares.length > 0) {
                $sharesTop = $shares.offset().top
                $sharesConTop = $sharesCon.offset().top;
                $sharesConleft = $sharesCon.offset().left;
                $sharesConHeight = $sharesCon.height();
                $sharesConBottom = $sharesConHeight + $sharesConTop;
            }
        }

        function stickyShares(wScroll) {
            if ($shares.length > 0) {
                if ($sharesConBottom - $sharesHeight - $offsetTop < wScroll) {
                    $shares.css({ position: 'absolute', top: $sharesConHeight - $sharesHeight, left: 0 });
                } else if ($sharesTop < wScroll + $offsetTop) {
                    $shares.css({ position: 'fixed', top: $offsetTop, left: $sharesConleft });
                } else {
                    $shares.css({ position: 'absolute', top: 0, left: 0 });
                }
            }
        }

        $(window).on('scroll', function () {
            stickyShares($(this).scrollTop());
        });

        $(window).resize(function () {
            setStickyPos();
            stickyShares($(this).scrollTop());
        });

        setStickyPos();
        /* WOW Scroll Spy
      ========================================================*/
        let wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();

        /* Nivo Lightbox 
        ========================================================*/
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });

        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Back Top Link active
        ========================================================*/
        let offset = 200;
        let duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        $(document).ready(function () {
            $("#cambia").click(function () {
                $("#texto").toggle(1000);
            });
        });

        $(document).ready(function () {
            $("#mas").click(function () {
                $("#texto").toggle(1000);
            });
        });

    });

    let pluginName = 'nivoLightbox';
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new NivoLightbox(this, options));
            }
        });
    };

    function mostrarInfo() {
        if ($("#cambia").html() == "Leer más") {
            setTimeout(function () {
                $("#cambia").html("Ocultar");
            }, 310);
        }
        else {
            setTimeout(function () {
                $("#cambia").html("Leer más");
            }, 310);
        }
    }

    $('.flip').click(function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return true;
    });

    // Open thumbs view straight away for demo purposes
    $.fancybox.defaults.thumbs.autoStart = true;

    // Init fancybox
    // =============
    var selector = '.slick-slide:not(.slick-cloned)';

    // Skip cloned elements
    $().fancybox({
        selector: selector,
        backFocus: false,
        animationEffect: "fade"
    });

    // Attach custom click event on cloned elements, 
    // trigger click event on corresponding link
    $(document).on('click', '.slick-cloned', function (e) {
        $(selector)
            .eq(($(this).attr("data-slick-index") || 0) % $(selector).length)
            .trigger("click.fb-start", {
                $trigger: $(this)
            });

        return false;
    });

    // Init Slick
    // ==========
    $(".main-slider").slick({
        slidesToShow: 3,
        infinite: true,
        dots: false,
        arrows: false
    });


    $(document).ready(function () {
        var submitBtn = $(':submit').prop('disabled', true);
        var requiredInputs = $(':input').not(submitBtn);

        requiredInputs.keyup(function () {
            var emptyInputs = requiredInputs.filter(function () {
                return !this.value;
            });

            submitBtn.prop('disabled', emptyInputs.length > 0);
        });
    });


    $('a[download]').each(function () {
        var $a = $(this),
            fileUrl = $a.attr('href');

        $a.attr('href', 'data:application/octet-stream,' + encodeURIComponent(fileUrl));
    });

}(jQuery));

var valor = true
function FbotonOn() {
    var uno = document.getElementById('cambia');
    valor ? uno.innerText = "Mostrar más" : uno.innerText = "Mostrar menos";
    valor = !valor
}


function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
            '0','1','2','3','4','5','6','7','8','9');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
                     }
        var code = a + b +  c +  d + e + f  + g;
        document.getElementById("mainCaptcha").innerHTML = code
        document.getElementById("mainCaptcha").value = code
      }
function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2){
           return true;
    }else{        
         return false;
         }
}
function removeSpaces(string){
    return string.split(' ').join('');
}


var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}