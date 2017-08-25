//input
$('.drawback-box input:nth-of-type(2)').focus(function(){
	$('.drawback-box input:nth-of-type(1)').show();
	$('.drawback-box input:nth-of-type(1)').focus();
	$(this).hide();
})
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