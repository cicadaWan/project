function load() {
	var length = $(".Introduce").val().length;
	var html = $(".Introduce").val();

	if(length > 499) {
		$(".Introduce").val(html.substring(0, 500))

		$("#span Span").html(500);

	} else {
		$("#span Span").html(length)
	}

}

function load2() {
	var length = $(".Introduce2").val().length;
	var html = $(".Introduce2").val();

	if(length > 499) {
		$(".Introduce2").val(html.substring(0, 500))
		$("#span2 Span").html(500);
	} else {
		$("#span2 Span").html(length)
	}

}
//验证手机号码
//当文本框失去焦点的时候
$(".phone").blur(function() {
		var val1 = $(".phone").val()
		var re = /^1[3|4|5|7|8]\d{9}$/;
		if(!re.test(val1)) {
			$(".warn_tel").html("输入手机格式有误，请重新输入").css("display", "block")

		}

		if(val1 == "") {
			$(".warn_tel").html("请输入手机号").css("display", "block");
		}

	})
	//当文本框重新获得焦点的时候
$(".phone").focus(function() {
	var val1 = $(".phone").val()
	var re = /^1[3|4|5|7|8]\d{9}$/;
	if(!re.test(val1)) {
		$(".warn_tel").html("").css("display", "none")
	}

	if(val1 == "") {
		$(".warn_tel").html("").css("display", "none");
	}
})
//选投放时间
$(document).ready(function(){
	(function($) {
				$.init();
				var result = $('#time')[0];
				var btns = $('.Btn');
				btns.each(function(i, Btn) {
					Btn.addEventListener('tap', function() {
						var optionsJson = this.getAttribute('data-options') || '{}';
						var options = JSON.parse(optionsJson);
						var id = this.getAttribute('id');
						
						var picker = new $.DtPicker(options);
						picker.show(function(rs) {
							
							result.innerText = rs.text;
							
							picker.dispose();
						});
					}, false);
				});
			})(mui);
})
//点击提交订单
var h = $("body").height();
var popupHeight = $(".consult_popup").height() / 2;
$(".consult_popup").css("margin-top", -popupHeight);
$(".footer").click(function() {
	$(".popup_mask").css({
		"height": h,
		"display": "block"
	});
	$(".consult_popup").show();

})
$(".popup_mask").click(function() {
	$(".popup_mask").hide();
	$(".consult_popup").hide();
})
$(".close").click(function() {
	$(this).parent().hide();
	$(".popup_mask").hide();
})
