$(function(){
	//food related display
	
	$(document).on("click", ".food-related-nav li", function(){
		var index = $(".food-related-nav li").index($(this));

		$(this).addClass("active")
					 .siblings("li").removeClass("active");

		var $selectSection = $(".food-related").find("section").eq(index);
		$selectSection.css("display", "block")
								.siblings().css("display", "none");
	})

});