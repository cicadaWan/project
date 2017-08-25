var h = $("body").height();
var height = $(".publishConsult_box li").outerHeight(true);
var Height = (height - $(".publishConsult_Left").height()) / 2;
$(".publishConsult_Left").css("margin-top", Height);
var foot_height = $(".publishConsult_foot").outerHeight(true) + 12;
var filter_height = "";

$(window).scroll(function() {
	filter_height = $(".filter").offset().top - $(this).scrollTop() + $(".filter").outerHeight(true) - 10;
	console.log(filter_height)
})

filter_height = $(".filter").offset().top + $(".filter").outerHeight(true) - 10;
console.log(filter_height)
$(".publishConsult_box li:last-child").css("margin-bottom", foot_height);
//点击筛选以后

$(".filter").click(function() {
	console.log(filter_height)
	$(".popup_mask").css({
		"height": h,
		"display": "block"
	});
	$(".filter_content").css({
		"display": "block",
		"top": filter_height
	});
	$(".filter").hide();
	$(".Filter").show();
	$(".Filter span:last-child").removeClass("filter_pic").addClass("filter_picture");
	$("body,html").css({
		"overflow": "hidden"
	});
})

$(".Filter").click(function() {
	$(".popup_mask").hide();
	$(".filter_content").hide();
	$(".filter").show();
	$(".Filter").hide();
	$(".filter span:last-child").hasClass("filter_pic");
	$("body,html").css({
		"overflow": "scroll"
	});
})

function ensure(a) {
	$(a).click(function() {
		$(".popup_mask").hide();
		$(".filter_content").hide();
		$(".filter").show();
		$(".Filter").hide();
		$(".filter span:last-child").hasClass("filter_pic");
		$("body,html").css({
			"overflow": "scroll"
		});
	})
};
ensure(".Filter");
ensure(".add_bgColor");
//$(".publishConsult_style").click(function() {
//		$(".webservice_box2").show().css("z-index", 2000);
//		$("section").hide();
//		$("footer").hide();
//		$(".popup_mask").hide();
//		$(".filter_content").hide()
//	})
//	//选择资源类型中的一级换个方式，这个不需要
//$(".webservice_styleContent li").click(function() {
//	var index = $(this).index();
//	$("span", this).addClass("webservice_color");
//	$(this).siblings().find("span").removeClass("webservice_color");
//	$(".webservice_styleContent1").css("display", "block");
//
//});
////选择资源类型中的二级
//
//$(".webservice_styleContent1 li").click(function() {
//	var index = $(this).index();
//	$("span", this).addClass("webservice_color");
//	$(this).siblings().find("span").removeClass("webservice_color");
//	style = $(this).text();
//	$(".webservice_form").click(function() {
//
//		$(this).css("background", "#1D9243");
//		$("button", this).css("background", "#1D9243");
//		setTimeout(function() {
//			$(".webservice_box2").hide();
//			$(".webservice_box1").show();
//			$("section").show();
//			$("footer").show();
//			$(".popup_mask").show();
//			$(".filter_content").show()
//			$(".publish_style").html(style);
//
//		}, 1000)
//	})
//});
var counter = 0;
var sum = 0;
$(".publishConsult_left").click(function() {
	if($(this).hasClass('foot_border')) {
		return;
	}
	if($(this).hasClass("publishConsult_border")) {
		$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
		sum += parseFloat($(this).parent().find($(".publishconsult_price")).html());
		counter++;
console.log(sum)
	} else {
		sum -= parseFloat($(this).parent().find($(".publishconsult_price")).html());
		$(this).addClass("publishConsult_border").removeClass("publishConsult_check")
		counter=parseInt($(".choose_num").html());
        counter--;
        console.log(sum)
	}
	for(i = 0; i < $('.publishConsult_box .publishConsult_left').length; i++) {
		if(!$('.publishConsult_box .publishConsult_left').eq(i).hasClass('publishConsult_check')) {
			$(".foot_border").removeClass("publishConsult_check").addClass('publishConsult_border');
			break;
		} else {
			$(".foot_border").addClass("publishConsult_check").removeClass('publishConsult_border');
		}
	}
	sumText = "￥" + sum + "元";
	$(".publishConsult_total .summation .total_price").html(sumText);
	$(".choose_num").html(counter)
})

//选择全选时候
var number = $(".publishConsult_box li").length;
$(".foot_border").click(function() {
		if($(this).hasClass("publishConsult_border")) {
			sum = 0;
			counter = 0;
			$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
			$('.publishConsult_box .publishConsult_left').removeClass("publishConsult_border").addClass("publishConsult_check");
		} else {
			$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
			$('.publishConsult_box .publishConsult_left').addClass("publishConsult_border").removeClass("publishConsult_check");

		}
		if($(".publishConsult_box .publishConsult_left").hasClass("publishConsult_check")) {
			$(".choose_num").html(number);
			for(i = 0; i < $(".publishConsult_left").length - 1; i++) {
				sum += parseFloat($('.publishConsult_left').eq(i).parent().find($(".publishconsult_price")).html());
			}
			console.log(sum)
		} else {
			$(".choose_num").html(0)
			sum = 0;
		}
		var totleText = "￥" + sum + "元";
		$(".publishConsult_total .summation .total_price").html(totleText);
	})
	//选择学校等级
var schoolD = new mui.PopPicker({
	layer: 1
});
schoolD.setData([{
	value: 0,
	text: "985/211"
}, {
	value: 1,
	text: "本科"
}, {
	value: 2,
	text: "专科"
}]);
var showschoolStyleButton = document.getElementById('schoolStyle');
showschoolStyleButton.addEventListener('tap', function(event) {
	schoolD.show(function(items) {
		document.querySelector('#schoolStyle .result-tips').style.display = "none";
		document.querySelector('#schoolStyle .show-result').style.display = "block";
		document.querySelector('#schoolStyle .show-result').innerText = items[0].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
		schoolD.hide(function(items) {
			if(document.querySelector('#schoolStyle .show-result').innerText = "") {
				$(".mui-backdrop").css("display", "none")
			}

		})
	});

}, false);
//选择所在地

mui.init();
var cityPicker = new mui.PopPicker({
	layer: 2
});
cityPicker.setData(cityData);
var showCityPickerButton = document.getElementById('chooseCity');
showCityPickerButton.addEventListener('tap', function(event) {
	cityPicker.show(function(items) {
		document.querySelector('#chooseCity .result-tips').style.display = "none";
		document.querySelector('#chooseCity .show-result').style.display = "block";
		document.querySelector('#chooseCity .show-result').innerText = items[1].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
	});
}, false);

//点击立即支付
var popupHeight = $(".consult_popup").height() / 2;
$(".consult_popup").css("margin-top", -popupHeight);
$(".go_consult").click(function() {
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
//选择资源类型
var resourcelD = new mui.PopPicker({
	layer: 2
});
 resourcelD.setData([{
        value: '0',
        text: '高校社团',
        children: [{
                value: "0",
                text: "高校社团a"
        },
        {
        	value:"1",
        	text:"高校社团b"
        },
        {
        	value:"2",
        	text:"高校社团c"
        }
        
        ]
    }, {
        value: '1',
        text: '社区服务',
        children: [{
	        value: "0",
            text: "社区服务a"
        }, {
            value: "1",
            text: "社区服务b"
        }, {
            value: "2",
            text: "社区服务c"
        }
        ]
    },
    {
        value: '2',
        text: '校内商家',
        children: [{
	        value: "0",
            text: "校内商家a"
        }, {
            value: "1",
            text: "校内商家b"
        }, {
            value: "2",
            text: "校内商家c"
        }
        ]
    }
 ]);
var showresourceStyleButton = document.getElementById('resourceStyle');
showresourceStyleButton.addEventListener('tap', function(event) {
	
	$(".mui-backdrop").css("zIndex",1001 +"!important");
	resourcelD.show(function(items) {
		document.querySelector('#resourceStyle .result-tips').style.display = "none";
		document.querySelector('#resourceStyle .show-result').style.display = "block";
		document.querySelector('#resourceStyle .show-result').innerText = items[1].text;
		
		//返回 false 可以阻止选择框的关闭
		//return false;
		resourcelD.hide(function(items) {
			if(document.querySelector('#resourceStyle .show-result').innerText = "") {
				$(".mui-backdrop").css("display", "none")
			}

		})
	});

}, false);