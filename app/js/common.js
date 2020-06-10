

//hover

$(document).ready(function(){
  $(".fifth-item").hover(
  function(){
    $( this ).addClass( "fifth-item--hover" );
    $(this).next().addClass("fifth-item--sibling");
    $(this).prev().addClass("fifth-item--sibling");
  }, 
  function(){
    $( this ).removeClass( "fifth-item--hover" );
    $(this).next().removeClass("fifth-item--sibling");
    $(this).prev().removeClass("fifth-item--sibling");
  }
);
});

//sliders start 
$('.bxslider-test').bxSlider({
    wrapperClass: 'bx-custom',
    mode: 'fade',
    speed: 500,
    auto: false,
    pager: false,
    infiniteLoop:false,
    nextText:"",
    prevText:""
});

$('.bxslider-review').bxSlider({
    wrapperClass: 'bx-custom',
    auto: false,
    pager: true,
    infiniteLoop:true,
    nextText:"",
    prevText:""
});

$('.bxslider-non-responsive').bxSlider({
    wrapperClass: 'bx-custom',
    auto: true,
    pager: false,
    nextText:"",
    prevText:""
});
$(function () {

    function sliderInit() {

        var sliders = [];

        var slider_opt = {
          wrapperClass: 'bx-custom',
                    pager: false,
                    auto:true,
                    nextText:"",
                    prevText:"",
                    responsive: false
        };
        if ($(window).width() < 992) {
           $('.bxslider').each(function (i, el) {
              sliders.push($(el).bxSlider(slider_opt))
            });
        }

        $(window).on("resize", function () {
          
          if ($(window).width() < 992 && !sliders.length) {
            
            $('.bxslider').each(function (i, el) {
              sliders.push($(el).bxSlider(slider_opt))
            });
            return;
          }

          if ($(window).width() >= 992 && sliders.length) {

            sliders.forEach(function (slider) {
              slider.destroySlider()
            });
            
            sliders = [];
            return;
          }
        });

      }
    sliderInit();

    //scrolls
    $(".js-scroll").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //modal close
    $(".modal-close").on("click", function (event) {
        event.preventDefault();
        $(".modal").hide();
    });
    $(".modal-btn").on("click", function (event) {
        event.preventDefault();
        $(".modal").hide();
    });
    $(".modal").on("click",function(event){
      if($(event.target).hasClass("modal")) {
         $(this).hide();
      }
    });
    
    //test result
    var i = 1;
    $(".test").find(".bx-next").on("click touchstart", function(){
        i++;
        if (i==6) { 
            $(this).addClass("test-result");
        }
        if (i==7) {
            $(this).hide();
        }
    });
    
    
    //modal
    function modalPrinterInit() {
    var n = 1;
    $(document).mouseleave(function (e) {
        if (e.clientY < 50 && n > 0) {
            $(".js_quit_modal").show(0);
            n--;
          }
        })
    }
//    modalPrinterInit();

//    function countersInit() {
//        var w_city = ['Beograd', 'Valjevo', 'Vranje', 'Zaječar', 'Zrenjanin', 'Jagodina', 'Kragujevac', 'Kraljevo', 'Kruševac', 'Leskovac', 'Loznica', 'Niš', 'Novi Pazar', 'Pančevo', 'Požarevac', 'Priština', 'Smederevo', 'Sombor', 'Subotica', 'Užice', 'Čačak', 'Šabac'];
//        var w_names = ['Milica', 'Angela', 'Jovan', 'Mari', 'Christina', 'Anastasia', 'Katharina', 'Aleksandra', 'Theodora', 'Sarah', 'Nevena', 'Tiiana', 'Elena', 'Ana', 'Iana', 'Sofija', 'Tamara', 'Mina', 'Nina', 'Emilia', 'Ivana', 'Nikolina', 'Natalia', 'Villov', 'Nadia', 'Najah'];
//
//        function initCounter() {
//            var start = 54;
//            var end = 10;
//            var current = start;
//
//
//            var clock = $('.container2').FlipClock(start, {
//              clockFace: 'Counter'
//            });
//
//
//            function initBuying() {
//              clock.decrement();
//              current--;
//              showBuyWidget();
//              if (current >= end) {
//                setTimeout(initBuying, randomInteger(6000, 18000));
//              }
//            }
//
//            function showBuyWidget() {
//              $(".js_buy-widget_name").text(w_names[Math.floor(Math.random() * w_names.length)]);
//              $(".js_buy-widget_city").text(w_city[Math.floor(Math.random() * w_city.length)]);
//
//              $(".js_buy-widget").fadeIn(300).fadeOut(4000);
//            }
//
//            setTimeout(initBuying, randomInteger(6000, 18000));
//
//        }
//
//        initCounter()
//
//        function randomInteger(min, max) {
//            var rand = min + Math.random() * (max + 1 - min);
//            rand = Math.floor(rand);
//            return rand;
//        }
//
//
//    }
//    countersInit()

  
});
