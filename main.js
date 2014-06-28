$(function(){
	//food related display	
	$(document).on("click", ".food-related-nav li", function(){
		var index = $(".food-related-nav li").index($(this));

		$(this).addClass("nav-active")
					 .siblings("li").removeClass("nav-active");

		var $selectSection = $(".food-related").find("section").eq(index);
		$selectSection.css("display", "block")
								.siblings().css("display", "none");
	})

	//sample, not in use
	$(".like-food-btn").click(function(){
		var $icon = $(".like-food-btn").find("i");
		if ($icon.hasClass("fa-heart")) {
			$icon.removeClass("fa-heart").addClass("fa-heart-o");
		}else{
			$icon.removeClass("fa-heart-o").addClass("fa-heart heart-trans");
			setTimeout(function(){
				$icon.removeClass("heart-trans");	
			}, 1000);
		}
	});

	// area-select display

	$("#area-select").click(function(event){
		event.stopPropagation();
		var $elem = $(".banner").children("ul"),
				$i = $(this).find("i");
		if($i.hasClass("fa-caret-down")){
			$i.removeClass("fa-caret-down").addClass("fa-caret-up");
			$elem.stop().slideDown();
		}else{
			$i.removeClass("fa-caret-up").addClass("fa-caret-down");
			$elem.stop().slideUp();
		}

		return false;
	})

});