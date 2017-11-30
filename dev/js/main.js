<script>
	$(".menu__btn").on("click", function(){
		 $(this).toggleClass("menu__btn_active");
		 $(".menu__list").slideToggle(500)

	});
	$(".btn-search").on("click", function(){
		 $(".menu__input").animate({width: "toggle"});
	});
</script>