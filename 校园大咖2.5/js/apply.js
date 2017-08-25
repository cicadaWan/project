$(".publishConsult_box .nature span:first-child").click(function() {
	var parent = $(this).parent();
	$(this).addClass("nature_choose");
	$(this).siblings().addClass("open_green");
	parent.siblings().find("span:first-child").removeClass("nature_choose");
	parent.siblings().find("span:nth-of-type(2)").removeClass("open_green");
	if(parent.hasClass("nature_success")) {
		$(".apply_success").show();
		$(".textarea").hide();
	}else{
		$(".apply_success").hide();
		$(".textarea").show();
	}

})
//字数检测
//ios系统下字数检测
$(".introduce").on("input propertychange", function() {    
	var length = $(".introduce").val().length;
	var html = $(".introduce").val();

	if(length > 199) {
		$(".introduce").val(html.substring(0, 200))

		$("#span span").html(200);

	} else {
		$("#span span").html(length)
	}
    });  