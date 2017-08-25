//点亮星星
var onoff = true;
$(".star_content span").click(function() {
	var index = $(this).index();
	var span = $(this).parent().find("span")
	if($(this).hasClass("star")) {
		$(this).removeClass("star").addClass("already_star");
		$(this).prevAll().removeClass("star").addClass("already_star");

	} else {
		if($(this).next().hasClass("already_star")) {
			$(this).removeClass("star").addClass("already_star");
			$(this).nextAll().removeClass("already_star").addClass("star");
		} else {
			$(this).removeClass("already_star").addClass("star");
			$(this).prevAll().removeClass("already_star").addClass("star");
		}

	}
	onoff = true;
	$(".star_content span").each(function(i, ele) {
		if(onoff) {
			if(!$(this).hasClass("already_star")) {

				onoff = false;
				$(".star_numer").removeClass("alraedyChoose_pic").addClass("choose_pic");

			} else {
				$(".star_numer").removeClass("choose_pic").addClass("alraedyChoose_pic");
			}
		} else {
			return false;
		}

	})
})
$(".star_numer").click(function() {
	if($(this).hasClass("choose_pic")) {
		$(this).removeClass("choose_pic").addClass("alraedyChoose_pic");
		$(".star_content span").each(function() {
			$(".star_content span").removeClass("star").addClass("already_star");

		})
	} else {
		$(this).removeClass("alraedyChoose_pic").addClass("choose_pic");
		$(".star_content span").each(function() {
			$(".star_content span").removeClass("already_star").addClass("star");

		})
	}

})