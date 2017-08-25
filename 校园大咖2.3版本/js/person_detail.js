//控制字数显示的
$(document).ready(function() {
	function show() {
		var btn = document.getElementsByClassName("watch");
		var p = document.getElementsByClassName("p");

		var arr = [];
		for(var i = 0; i < btn.length; i++) {
			(function(i) {
				var text = p[i].innerHTML;
				arr.push(text)
				var length = $(".p").eq(i).html().length;
				var html = $(".p").eq(i).html();
				if(length > 60) {
					$(".p").eq(i).siblings(".watch").addClass("class_up")
					$(".p").eq(i).html(html.substring(0, 60) + "...");
					btn[i].onclick = function() {
					var newBox = document.createElement("div");
					$(this).toggleClass("class_up").toggleClass("class_down")
					newBox.innerHTML = arr[i];
					if($(this).hasClass("class_down")) {
						newBox.innerHTML = arr[i];
					} else {
						if($(".p").eq(i).html().length > 60) {
							newBox.innerHTML = arr[i].substring(0, 60) + "...";
						} else {
							newBox.innerHTML = arr[i];
						}
					}
					p[i].innerHTML = "";
					p[i].appendChild(newBox);

				}
				}
				

			})(i)
		}
	}
	show();

})
//展示前30个字
$(".message").each(function() {
	var html = $(this).html().length;
	if(html > 30) {
		var content = $(this).html().substring(0, 30);
		$(this).html(content + "...");
	}
})
//轮播图部分
var mySwiper = new Swiper('.swiper_box0', {
	loop: false,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	pagination: '.swiper-pagination',
	paginationClickable: true
})
var mySwiper = new Swiper('.swiper-box', {
	loop: false,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	pagination: '.swiper-pagination',
	paginationClickable: true
})
//选项卡切换部分
$(".person_title .title_head").click(function() {
	var index = $(this).index();
	$(".title_head span").removeClass("title_active");
	$(this).addClass("title_green");
	$(this).siblings().removeClass("title_green")
	$(this).find("span").addClass("title_active");
	$(this).parent().parent().find(".pic_content .about_pic").eq(index).removeClass("about_pic2").siblings().addClass("about_pic2");
	var mySwiper = new Swiper('.swiper_box' + index, {
		loop: false,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
		paginationClickable: true
	})
})
//点击立即咨询
var maskHeight = $(document).height();
var h=$(document).height();
$(".popup_mask").css("height", maskHeight);
$(".window_mask").css("height",h);
//获取弹出框的高度
var popupHeight = $(".consult_popup").height() / 2;
$(".consult_popup").css("margin-top", -popupHeight);
//点击立即咨询
$(".immediate").click(function() {
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
//点击加入已选
function joinse() {
	$(".success_choose").show();
	$(".window_mask").show();
	$("body,html").css({"overflow":"hidden"});
	setTimeout(function() {
		$(".success_choose").css("display", "none");
		$(".window_mask").hide();
		$("body,html").css({"overflow":"scroll"});
	}, 2000)

}