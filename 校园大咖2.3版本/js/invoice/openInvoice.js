var height = $(".openInvoice_box li").outerHeight(true);
var Height = (height - $(".openInvoice_left").height()) / 2;
$(".openInvoice_left").css("margin-top", Height);
//判断是选择已开发票还是未开发票
$(".openInvoice .open").click(function(){
var index=$(this).index();console.log(index);
$("section ul").eq(index).removeClass("mask_none").siblings().addClass("mask_none");
	if($(".alredyInvoice_box").hasClass("mask_none")){
		$(".openInvoice_foot").show()
	}else{
		$(".openInvoice_foot").hide();
		
	}
	$(this).addClass("open_border");
	$(this).find("span").addClass("open_green");
	$(this).siblings().removeClass("open_border");
	$(this).siblings().find("span").removeClass("open_green");
})

var counter = 0;
var sum = 0;
var number = $(".openInvoice_box li").length;
console.log(number)
$(".foot_border").click(function() {
		if($(this).hasClass("openInvoice_border")) {
			sum = 0;
			counter = 0;
			$(this).removeClass("openInvoice_border").addClass("openInvoice_check");
			$('.openInvoice_box .openInvoice_left').removeClass("openInvoice_border").addClass("openInvoice_check");
		} else {
			$(this).removeClass("openInvoice_check").addClass("openInvoice_border")
			$('.openInvoice_box .openInvoice_left').addClass("openInvoice_border").removeClass("openInvoice_check");

		}
		if($(".openInvoice_box .openInvoice_left").hasClass("openInvoice_check")) {
			$(".number").html(number);
			for(i = 0; i < $(".openInvoice_left").length; i++) {
				sum += parseFloat($('.openInvoice_left').eq(i).parent().find($(".total_yuan")).html());
			}
			
			console.log(sum)
		} else {
			$(".number").html(0)
			sum = 0;
		}
		var totleText = "￥" + sum + "元";
		$(".summation").html(totleText);
	})
$(".openInvoice_left").click(function() {
	if($(this).hasClass('foot_border')) {
		return;
	}
	if($(this).hasClass("openInvoice_border")) {
		$(this).removeClass("openInvoice_border").addClass("openInvoice_check");
		sum += parseFloat($(this).parent().find($(".total_yuan")).html());
		counter++;
         
	} else {
		
		sum -= Number($(this).parent().find($(".total_yuan")).html()).toFixed(2);
		console.log(sum)
		$(this).addClass("openInvoice_border").removeClass("openInvoice_check");
		counter=parseInt($(".number").html());
		counter--;
	}
	for(i = 0; i < $('.openInvoice_box .openInvoice_left').length; i++) {
		if(!$('.openInvoice_box .openInvoice_left').eq(i).hasClass('openInvoice_check')) {
			$(".foot_border").removeClass("openInvoice_check").addClass('openInvoice_border');
			break;
		} else {
			$(".foot_border").addClass("openInvoice_check").removeClass('openInvoice_border');
		}
	}
	sumText = "￥" + sum + "元";
	$(".summation").html(sumText);
	$(".number").html(counter)
})


