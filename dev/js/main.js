$(".menu__btn").on("click", function(){
	$(this).toggleClass("menu__btn_active");
	$(".menu__list").slideToggle(500)
});

$(".btn-search").on("click", function(){
	$(".menu__input").animate({width: "toggle"});
});
$('.range-slider').jRange({
		from:1000,
		to: 10000,
		step: 100,
		scale: [1000,5000],
		format: '%s',
		width: '100%',
		showLabels: true,
		isRange : true
		}).jRange('setValue', '1000,5000');
$(document).ready(function() {
   var slider = $(".lightSlider_clients").lightSlider({
        item:6,
        loop:false,
        slideMove:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:500,
        controls:false,
        responsive : [
            {
                breakpoint:820,
                settings: {
                    item:4,
                    slideMove:2,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:650,
                settings: {
                    item:3,
                    slideMove:1
                  }
            },
            {
                breakpoint:450,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ] 
    });

    $('.slider-arrow_prev').on('click', function (e) {
        slider.goToPrevSlide();
        e.preventDefault();
    });
    $('.slider-arrow_next').on('click', function (e) {
        e.preventDefault();
        slider.goToNextSlide();
    });  
});
$(document).ready(function() {
    $("#lightSlider_products").lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:500,
        responsive : [
            {
                breakpoint:820,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:650,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:400,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });


var howMany = 1;
$("#order_more1").click(function(){
    howMany += 1;
    $("#order_counter1").text(howMany);
    $("#order_sum1").text(howMany*2450 + " руб.");
});
$("#order_less1").click(function(){
    howMany -= 1;
    $("#order_counter1").text(howMany);
    $("#order_sum1").text(howMany*2450 + " руб.");
});

var howMany2 = 1;
$("#order_more2").click(function(){
    howMany2 += 1;
    $("#order_counter2").text(howMany2);
    $("#order_sum2").text(howMany2*1200 + " руб.");
});
$("#order_less2").click(function(){
    howMany2 -= 1;
    $("#order_counter2").text(howMany2);
    $("#order_sum2").text(howMany2*1200 + " руб.");
});
$("#online").on("click", function(){
    $(".payment").toggleClass("payment__active");
    $(".payment__active").css("display","inline-block")
});
$("#cash").on("click", function(){
    $('.payment__active').removeClass('payment__active').addClass('payment');
    $(".payment").css("display","none")
});