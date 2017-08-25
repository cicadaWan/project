//选择普通或者专用发票
$(".invoicePic_box .invoice_pic").click(function(){
	$(".special_content").toggleClass("mask_none");
	$(".normal_content").toggleClass("mask_none");
	if($(this).hasClass("invoice_photo")){
		$(">span:first-child",this).removeClass("special").addClass("special_green");
		$(">span:last-child",this).addClass("groom_Green");
		$(this).siblings().find("span").eq(0).removeClass("normal_green").addClass("normal");
		$(this).siblings().find("span").eq(1).removeClass("groom_Green");
	}else{
		$(">span:first-child",this).removeClass("normal").addClass("normal_green");
		$(">span:last-child",this).addClass("groom_Green");
		$(this).siblings().find("span").eq(0).removeClass("special_green").addClass("special");
		$(this).siblings().find("span").eq(1).removeClass("groom_Green");
	}
	
})
//选择是个人还是单位
function choose(object){
	$(object).click(function(){
	$(">span:first-child",this).addClass("nature_choose");
	$(">span:last-child",this).addClass("groom_Green");
	$(this).siblings().children().removeClass("nature_choose groom_Green");
})
}
choose(".nature_Box .nature");
choose(".express_Box .nature");
choose(".express_Box2 .nature")

//验证手机号码
function proving(call,warn){

 //当文本框失去焦点的时候
$(call).blur(function() {
		var val1 = $(call).val()
		var re = /^1[3|4|5|7|8]\d{9}$/;
		if(!re.test(val1)) {
			$(warn).html("输入手机格式有误，请重新输入").css("display", "block")

		}
		if(val1 == "") {
			$(warn).html("请输入手机号").css("display", "block");
		}

	})
	//当文本框重新获得焦点的时候
$(call).focus(function() {
	var val1 = $(call).val()
	var re = /^1[3|4|5|7|8]\d{9}$/;
	if(!re.test(val1)) {
		$(warn).html("").css("display", "none")
	}

	if(val1 == "") {
		$(warn).html("").css("display", "none");
	}
})
}
proving(".phone",".warn_tel");
proving(".telphone",".warn_phone");
proving(".special_phone",".warn_special");
//字数控制
function load() {
	var length = $(".introduce").val().length;
	var html = $(".introduce").val();

	if(length > 199) {
		$(".introduce").val(html.substring(0, 200))

		$("#span span").html(200);

	} else {
		$("#span span").html(length)
	}

}
function load2() {
	var length = $(".introduce2").val().length;
	var html = $(".introduce2").val();

	if(length > 199) {
		$(".introduce2").val(html.substring(0, 200))

		$("#span2 span").html(200);

	} else {
		$("#span2 span").html(length)
	}

}
function load3() {
	var length = $(".introduce3").val().length;
	var html = $(".introduce3").val();

	if(length > 199) {
		$(".introduce3").val(html.substring(0, 200))

		$("#span3 span").html(200);

	} else {
		$("#span3 span").html(length)
	}

}
//点击提交
var maskHeight = $(document).height();
$(".popup_mask").css("height", maskHeight);
var popupHeight = $(".consult_popup").height() / 2;
$(".consult_popup").css("margin-top", -popupHeight);
$(".write_foot").click(function(){
	$(".popup_mask").show();
	$(".consult_popup").show();
	$("body,html").css({"overflow":"hidden"});
})
$(".popup_mask").click(function() {
	$(".popup_mask").hide();
	$(".consult_popup").hide();
	$("body,html").css({"overflow":"scroll"});
})
$(".close").click(function() {
	$(this).parent().hide();
	$(".popup_mask").hide();
	$("body,html").css({"overflow":"scroll"});
})
