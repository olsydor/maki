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