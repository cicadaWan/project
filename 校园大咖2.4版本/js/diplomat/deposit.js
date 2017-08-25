var price = "";
var money = parseFloat($(".money_deposit").html())

$(".deposit_money input").on("input", function() {
	price = $(this).val();

	var length = $(this).val().length
	if(length != 0) {
		$(this).css({
			"fontSize": "9.6vw",
			"margin": "2px 0 8px"
		})
		$(".deposit_money span").css("margin", "18px 0 0")
	} else {
		$(this).css({
			"fontSize": "3.733vw",
			"marginTop": "6px"
		})
		$(".deposit_money span").css("margin", "0 0 11px")
	}

	if(parseInt(price) > parseInt(money)) {
		$(".warn_money").show();
		$(".money_yu").hide();
	} else {
		$(".warn_money").hide();
		$(".money_yu").show();
	}
});
var h=$(document).height();
$(".deposit_foot").click(function() {

	if(parseInt(price) <= parseInt(money) && parseInt(price) != 0) {
		$(".deposit_foot").addClass("deposit_green");
		$(".mask_common").css("height",h).show()
		$(".deposit_popup").show();

	} else {
		$(".deposit_foot").removeClass("deposit_green");

	}
})
$(".ensure").click(function(){
	$(".deposit_popup").hide()
	$(".mask_common").hide()
})
//点击全部提现
$(".total_deposit").click(function(){
	$(".deposit_money input").val(money);
	
	$(".deposit_foot").addClass("deposit_green");
		$(".mask_common").css("height",h).show()
		$(".deposit_popup").show();
	$(".deposit_money input").css({
			"fontSize": "9.6vw",
			"margin": "2px 0 8px"
		})
		$(".deposit_money span").css("margin", "18px 0 0")	
})
