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
					$(".p").eq(i).html(html.substring(0, 60) + "...")
				}
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

			})(i)
		}
	}
	show();

})
var mySwiper = new Swiper ('.swiper-container', {
    loop: false,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	pagination: '.swiper-pagination',
	paginationClickable: true
  })     
 //点击加入已选
var h=$(document).height();
$(".window_mask").css("height",h);
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
//点击查看价格的
//$(".cooperate_box .look_price").click(function(){
//	var index=$(this).index();
//	console.log(index)
//	$(this).toggleClass("click_green");
//	$(this).find("span").toggleClass("groom_Green");
//	$(this).parent().parent().parent().find(".price_choose .detail_line").eq(index).toggleClass("mask_none");
////	$(".price_choose .detail_line").eq(index).toggleClass("mask_none");
//})

//换成单选
$(".cooperate_box .look_price").click(function(){
	var index=$(this).index();
	console.log(index)
	$(this).addClass("click_green").siblings().removeClass("click_green");
	$(this).find("span").addClass("groom_Green");
	$(this).siblings().find("span").removeClass("groom_Green");
	
	$(this).parent().parent().parent().find(".price_choose .detail_line").eq(index).removeClass("mask_none").siblings().addClass("mask_none")
})
var maskHeight = $(document).height();
$(".popup_mask").css("height", maskHeight);
//获取弹出框的高度
var popupHeight = $(".consult_popup").height() / 2;
$(".consult_popup").css("margin-top", -popupHeight);
//点击立即下单
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
