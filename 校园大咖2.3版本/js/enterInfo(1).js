//用户类型选择变化
$(".enterInfo_choose div").click(function() {
	if($(this).find("span").eq(0).hasClass("person")) {
		$(".team").css({ "background": "url(../img/team.png) no-repeat", "background-size": "100% 100%;" });
		$(this).siblings().find("span").eq(1).removeClass("color_green");
		$(this).find("span").eq(1).addClass("color_green");
		$(".person").css({ "background": "url(../img/person_green.png) no-repeat", "background-size": "100% 100%;" });
	} else {
		$(".team").css({ "background": "url(../img/team_green.png) no-repeat", "background-size": "100% 100%;" });
		$(this).siblings().find("span").eq(1).removeClass("color_green");
		$(this).find("span").eq(1).addClass("color_green");
		$(".person").css({ "background": "url(../img/person.png) no-repeat", "background-size": "100% 100%;" });
	}
})
//选择城市
mui.init();
var cityPicker = new mui.PopPicker({
	layer: 2
});
cityPicker.setData(cityData);
var showCityPickerButton = document.getElementById('activeCity');
showCityPickerButton.addEventListener('tap', function(event) {
	cityPicker.show(function(items) {
		document.querySelector('#activeCity .result-tips').style.display = "none";
		document.querySelector('#activeCity .show-result').style.display = "block";
		document.querySelector('#activeCity .show-result').innerText = items[1].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
	});
}, false);
//选择学校

var shcoolPicker = new mui.PopPicker({
	layer: 2
});
shcoolPicker.setData(shcollData);
var showShcoolPickerButton = document.getElementById('activeShcool');
showShcoolPickerButton.addEventListener('tap', function(event) {
	shcoolPicker.show(function(items) {

		document.querySelector('#activeShcool .result-tips').style.display = "none";
		document.querySelector('#activeShcool .show-result').style.display = "block";
		document.querySelector('#activeShcool .show-result').innerText = items[1].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
	});
}, false);
//主页介绍字数控制
function load() {
	//   	 console.log($(".introduce").val().length)
	var length = $(".introduce").val().length;
	var html = $(".introduce").val();

	if(length > 199) {
		$(".introduce").val(html.substring(0, 200))

		$("#span span").html(200);

	} else {
		$("#span span").html(length)
	}

}
//验证手机号码
//当文本框失去焦点的时候
$(".phone").blur(function() {
	var val1 = $(".phone").val()
	var re = /^1[3|4|7|5|8]\d{9}$/;
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
//验证邮箱
//当文本框失去焦点的时候
$(".letter").blur(function() {
	var val1 = $(".letter").val()
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!reg.test(val1)) {
		$(".warn_letter").html("输入邮箱格式有误，请重新输入").css("display", "block")

	}

	if(val1 == "") {
		$(".warn_letter").html("请输入邮箱号").css("display", "block");
	}

})
//当文本框重新获得焦点的时候
$(".letter").focus(function() {
	var val1 = $(".letter").val()
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if(!reg.test(val1)) {
		$(".warn_letter").html("").css("display", "none")
	}

	if(val1 == "") {
		$(".warn_letter").html("").css("display", "none");
	}
})
//验证微信号
//当文本框失去焦点的时候
$(".wechat").blur(function() {
	var val1 = $(".wechat").val()
	var re = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
	if(!re.test(val1)) {
		$(".warn_wechat").html("输入微信号格式有误，请重新输入").css("display", "block")

	}

	if(val1 == "") {
		$(".warn_wechat").html("请输入微信号").css("display", "block");
	}

})
//当文本框重新获得焦点的时候
$(".wechat").focus(function() {
	var val1 = $(".wechat").val()
	var re = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
	if(!re.test(val1)) {
		$(".warn_wechat").html("").css("display", "none")
	}

	if(val1 == "") {
		$(".warn_tel").html("").css("display", "none");
	}
})

//2.4版本新换
var arr = [];
var moveArr1 = [];
var moveArr2 = [];
var text = "";
//选择全选时候左边
$(".left_choose").click(function() {
	if($(this).hasClass("publishConsult_border")) {
		$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
		$('.box_left ul .publishConsult_Left').removeClass("publishConsult_border").addClass("publishConsult_check");
		$(".box_left .school_name").removeClass("color").addClass("choose_color");
		//当点击左边全选以后，右边全选出现
		$(".school_box ul").show();
		$(".right_choose").removeClass("publishConsult_border").addClass("publishConsult_check");
		$(".school_box .publishConsult_left").addClass("publishConsult_check").removeClass("publishConsult_border");
		$(".box_right .school_name").removeClass("color").addClass("choose_color");
		$(this).parent().parent().siblings(".box_right").find("ul").each(function(index, val) {
			$(this).removeClass("none")
		})
        arr=[];
		for(var i = 0; i < $('.school_box .publishConsult_left').length; i++) {
			text = $('.school_box .publishConsult_left').eq(i).siblings().html();
			arr.push(text);
		}
	} else {
		$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
		$('.box_left ul .publishConsult_Left').addClass("publishConsult_border").removeClass("publishConsult_check");
		$(".box_left .school_name").addClass("color").removeClass("choose_color");
		//取消左边全选，右边空白
		$(".school_box ul").hide();
		$(".right_choose").removeClass("publishConsult_check").addClass("publishConsult_border");
		$(".school_box .publishConsult_left").removeClass("publishConsult_check").addClass("publishConsult_border");
		$(".box_right .school_name").removeClass("choose_color").addClass("color");
		arr.splice(0, arr.length)
	}
})
//选择全选时候右边的
$(".right_choose").click(function() {
	if($(this).hasClass("publishConsult_border")) {
		$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
		$('.school_box .publishConsult_left').removeClass("publishConsult_border").addClass("publishConsult_check");
		$(".school_box .school_name").removeClass("color").addClass("choose_color");
		$(".school_box ul").removeClass("none");
		arr=[];
		for(var i = 0; i < $('.school_box .publishConsult_left').length; i++) {
			text = $('.school_box .publishConsult_left').eq(i).siblings().html();
			arr.push(text);
		}
	} else {
		$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
		$('.school_box .publishConsult_left').addClass("publishConsult_border").removeClass("publishConsult_check");
		$(".school_box .school_name").addClass("color").removeClass("choose_color");
		$(".school_box ul:gt(0)").addClass("none");
		arr.splice(0, arr.length)
	}
})

//a为左边全选以下的图标，b为左边这些除了全选以外的图标长度，c为除了全选以外的图标，d为全选所在的图标，f为除全选以外的图标，e为左边每个类别对应的内容
function touch(a, b, c, d, f, e) {
	// 记录当前是选择城市还是选择院校
	var aType = a.split(" ")[0];
	var selectQuery = "";
	console.log(aType)
	if(aType == ".city_content") {
		selectQuery = ".city_content .school_Box .box_left ul li"
	} else {
		selectQuery = ".school_Content .school_Box .box_left ul li"
	}
	// 记录是城市全选还是院校全选
	var selectCurrent = aType + ' ' + '.right_choose';
	// 记录是左选还是右选
	var str = d.split(" ")[1];
	console.log(str)
	// 防止事件重复绑定，否则事件会重复执行
	$(a).unbind('click').click(function() {
		var count = 1;
		var index = $(this).parent().index();
		if(str === '.left_choose') {
			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this), "publishConsult_border", "publishConsult_check");
				$(e).eq(index).removeClass("none").show();
				var num = $(e).eq(index).find('li').length;
				for(i = 0; i < num; i++) {
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').addClass('publishConsult_check').removeClass('publishConsult_border');
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').siblings(".school_name").removeClass("color").addClass("choose_color");
					text = $($(e).eq(index).find('li')[i]).find("span:nth-of-type(2)").html();
					arr.push(text);
				}
				$(selectCurrent).addClass("publishConsult_check").removeClass('publishConsult_border');

			} else {
				changeClass($(this), "publishConsult_check", "publishConsult_border");
				$(e).eq(index).addClass("none").hide();
				var num = $(e).eq(index).find('li').length;
				for(i = 0; i < num; i++) {
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').addClass('publishConsult_border').removeClass('publishConsult_check');
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').siblings(".school_name").removeClass("choose_color").addClass("color");
					
				}
				//b为左边类别的长度，c为左边类别li
				for(i = 0; i < b; i++) {
					if(c.eq(i).find(f).hasClass('publishConsult_border')) {
						count++;
						if(count > b) {
							$(selectCurrent).addClass("publishConsult_border").removeClass('publishConsult_check');
						}
					}
				}
				for(var i = 0; i < $(e).eq(index).find("li").length; i++) {
					var text = $(e).eq(index).find("li").eq(i).find("span:nth-of-type(2)").html();
					console.log(text);
					if(arr.length != 0) {
						for(var j = 0; j < arr.length; j++) {
							if(text == arr[j]) {
								arr.splice(j, $(e).eq(index).find("li").length);
							}
						}
					}
				}

			}

		} else {
			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this), "publishConsult_border", "publishConsult_check");
				text = $(this).siblings().html();
				arr.push(text);
				console.log(arr)
			} else {
				changeClass($(this), "publishConsult_check", "publishConsult_border");
				var liLen = $(this).parent().parent().find("li").length;

				var text = $(this).siblings().html();
				if(arr.length != 0) {
					for(var i = 0; i < arr.length; i++) {
						if(text == arr[i]) {
							arr.splice(i, 1);
						}
					}
				}

				// 开关的作用是右边如果的对应子选项全部不选那么对应的左边选项就不选
				liOnoff = true;
				for(i = 0; i < liLen; i++) {
					if($($(this).parent().parent().find("li")[i]).find(".publishConsult_left").hasClass("publishConsult_check")) {
						liOnoff = false;
						break;
					} else {
						liOnoff = true;
					}
				}
				if(liOnoff) {
					// 获得当前右边点击的ul的索引，以便操做作右边对应的li
					console.log(selectQuery)
					var indexNow = $(this).parent().parent().index();
					console.log($(selectQuery).eq(indexNow))
					$(selectQuery).eq(indexNow).find(".publishConsult_Left").removeClass("publishConsult_check").addClass("publishConsult_border")
					$(this).parent().parent().addClass("none");
					$(this).parent().parent().hide();
				}
				var lenLeft = $(".city_content .school_Box .box_left ul li").length
				for(i = 0; i < lenLeft; i++) {

					if($(selectQuery).eq(i).find(".publishConsult_Left").hasClass("publishConsult_border")) {
						$(aType + " .left_choose").addClass("publishConsult_border").removeClass("publishConsult_check")
						break;
					}
				}
			}
		}
		//如果是右选按钮要进行函数重构
		if(str === '.right_choose') {
			b = $(this).parent().parent().parent().find('ul').length;
			c = $(this).parent().parent().parent().find('ul');
		}
		var onoff = true;
		for(var i = 0; i < b; i++) {
			if(str === '.left_choose') {
				if(!c.eq(i).find(f).hasClass('publishConsult_check')) {
					$(d).removeClass("publishConsult_check").addClass('publishConsult_border');
					break;
				} else {
					$(d).addClass("publishConsult_check").removeClass('publishConsult_border');
				}
			} else {
				if(!$(c[i]).hasClass('none') && onoff) {
					var len = $(c[i]).find(f).length;
					for(j = 0; j < len; j++) {
						if(!$($(c[i]).find(f)[j]).hasClass('publishConsult_check')) {
							$(d).removeClass("publishConsult_check").addClass('publishConsult_border');
							onoff = false;
							break;
						} else {
							$(d).addClass("publishConsult_check").removeClass('publishConsult_border');
						}
					}
				}
			}
		}
	})

}

//加减类名操作，提出公共代码
function changeClass(selectElement, removeClass, addClass) {
	selectElement.removeClass(removeClass).addClass(addClass);
	if(addClass === 'publishConsult_border') {
		selectElement.siblings(".school_name").removeClass("choose_color").addClass("color");
	} else {
		selectElement.siblings(".school_name").removeClass("color").addClass("choose_color");
	}
}

$(".add_biaoqian").click(function() {
	console.log(11111)
	var mask_height = $(document).height();
	$(".popup_mask").css({ "height": mask_height, "display": "block" })
	$(".school_Content").addClass("add_move");
	$("body").css("overflow", "hidden")
	////左选
	touch(".school_Content .publishConsult_Left", $(".school_Content .box_left ul li").length, $(".school_Content .school_Box .box_left ul li"), ".school_Content .left_choose", ".publishConsult_Left", ".school_Content .school_box ul");
	////右选
	touch(".school_Content .publishConsult_left", $(".school_Content .school_box ul li").length, $(".school_Content .school_Box .box_right ul li"), ".school_Content .right_choose", ".publishConsult_left")

})
//点击确定时候
var counter = 0;
$(".ensure_school").click(function() {
	counter++;
	console.log(arr);
	//	console.log(counter)
	setTimeout(function() {

		$(".popup_mask").hide();
	}, 1000);
	$(".school_Content").addClass("add_Move").removeClass("add_move");
	//将元素全部清空
	$(".groom").each(function(index, ele) {
		$(ele).remove();
	})
	for(var i = 0; i < arr.length; i++) {
		//判断这次新选择的标签才进行渲染

		var div = document.createElement("div");
		div.setAttribute("class", "groom groom_green");
		var span = document.createElement("span");
		span.setAttribute("class", "label" + i + counter);
		$(div).append(span)
		$(".groom_content").append(div)
		$(".label" + i + counter).html(arr[i]);
		$(".label" + i + counter).addClass("groom_Green");

	}

	var length = $(".groom_content .groom").length;
	for(var j = 0; j < length; j++) {
		$(".groom_content .groom").eq(j).find(".groom_Green").html();
		moveArr2.push($(".groom_content .groom").eq(j).find(".groom_Green").html());

	}
	$("body").css("overflow", "scroll")
})

//点击取消时候
$(".school_header span:first-child").click(function() {
	setTimeout(function() {
		$(".popup_mask").hide();
	}, 1000);
	$(".school_Content").addClass("add_Move").removeClass("add_move");
})
//点击是否删除标签
var remove = "";
$(document).on("click", '.groom_content .groom', function() {
	remove = $(this);
	var removeHeight = $(".remove_box").outerHeight(true);
	$(".remove_box").css({ "height": removeHeight, "display": "block" });
	var mask_height = $(document).height();
	$(".popup_mask").css({ "height": mask_height, "display": "block" });
});
$(".yes_content span:first-child").click(function() {
	$(".popup_mask").hide();
	$(".remove_box").hide();
})
$(".yes_content span:last-child").click(function() {
	// 删除数组的对应项
	arr.splice(arr.indexOf(remove.find("span").text()), 1)
	remove.remove();
	// 将下方的选中变为非选中
	$(".school_box .left_head li").each(function(index, val) {
		if($(this).find(".color").text() == remove.find("span").text()) {
			$(this).find("span:first-child").removeClass("publishConsult_check").addClass("publishConsult_border")
		}
	})
	$(".popup_mask").hide();
	$(".remove_box").hide();
})