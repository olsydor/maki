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
    $(".lightSlider_clients").lightSlider({
         item:6,
        loop:false,
        slideMove:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:500,
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
                breakpoint:400,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
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

  $(document).ready(function() {
    $('.imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        controls: false,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.imageGallery .lslide'
            });
        }   
    });  
  });