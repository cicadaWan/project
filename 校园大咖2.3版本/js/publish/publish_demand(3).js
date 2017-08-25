//$(".choose_webservice").click(function() {
//		$(".webservice_box1").hide();
//		$(".webservice_box2").show();
//	})
//	//选择资源类型中的一级
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
//			$(".publish_reverse").html(style);
//			//					$(".popup_mask").hide()
//		}, 1000)
//	})
//});
//选择时间
(function($) {
	$.init();
	var btns = $('.btn');
	btns.each(function(i, btn) {
		btn.addEventListener('tap', function() {
			var optionsJson = this.getAttribute('data-options') || '{}';
			var options = JSON.parse(optionsJson);
			var id = this.getAttribute('id');
			var c = document.getElementById(id)
			var picker = new $.DtPicker(options);
			picker.show(function(rs) {
				c.innerText = rs.text;
				picker.dispose();
			});
		}, false);
	});
})(mui);
//投入量级
var putStyle = new mui.PopPicker({
	layer: 1
});
putStyle.setData([{
	value: 0,
	text: "1000"
}, {
	value: 1,
	text: "2000"
}, {
	value: 2,
	text: "3000"
}]);
var showplaceStyleButton = document.getElementById('publishDemand_price');
showplaceStyleButton.addEventListener('tap', function(event) {
	putStyle.show(function(items) {
		document.querySelector('#publishDemand_price .result-tips').style.display = "none";
		document.querySelector('#publishDemand_price .show-result').style.display = "block";
		document.querySelector('#publishDemand_price .show-result').innerText = items[0].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
		putStyle.hide(function(items) {
			if(document.querySelector('#publishDemand_price .show-result').innerText = "") {
				$(".mui-backdrop").css("display", "none")
			}

		})
	});

}, false);

function load() {
	var length = $(".Introduce").val().length;
	var html = $(".Introduce").val();

	if(length > 199) {
		$(".Introduce").val(html.substring(0, 200))

		$("#span Span").html(200);

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
var arr = [];
var arr2 = [];
var moveArr1 = [];
var moveArr2 = [];
var text1 = "";
var $this = "";
/**
 * 这个type用来保存你当前的选择类型，也就是aType
 */
var type = "";
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
		//		   arr=[];
		$this = $(this).parent().parent().siblings().children(".school_box").find(".publishConsult_left").length
		//console.log($this)
		for(var i = 0; i < $this; i++) {
			text1 = $(this).parent().parent().siblings().children(".school_box").find(".publishConsult_left").eq(i).siblings().html();
			moveArr1.push(text1);

		}
		console.log(moveArr1)

	} else {
		$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
		$('.box_left ul .publishConsult_Left').addClass("publishConsult_border").removeClass("publishConsult_check");
		$(".box_left .school_name").addClass("color").removeClass("choose_color");
		//取消左边全选，右边出现默认的985/211院校
		$(".school_box ul").hide();
		$(".right_choose").removeClass("publishConsult_check").addClass("publishConsult_border");
		$(".school_box .publishConsult_left").removeClass("publishConsult_check").addClass("publishConsult_border");
		$(".box_right .school_name").removeClass("choose_color").addClass("color");
		moveArr1.splice(0, arr.length)
	}

	/**
	 * 在左全选的时候进行赋值，arr2 用来保存城市数据，arr用来保存学校数据，moveArr1用来保存显示的内容
	 * */
    if(type ==".city_content"){
        arr2 = moveArr1
    }else{
        arr = moveArr1
    }
})
//选择全选时候右边的
$(".right_choose").click(function() {
	if($(this).hasClass("publishConsult_border")) {
		$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
		$('.school_box .publishConsult_left').removeClass("publishConsult_border").addClass("publishConsult_check");
		$(".school_box .school_name").removeClass("color").addClass("choose_color");
		$(".school_box ul").removeClass("none");
		//	        arr=[];
		$this = $(this).parent().parent().children(".school_box").find(".publishConsult_left").length
		for(var i = 0; i < $this; i++) {
			text1 = $(this).parent().parent().children(".school_box").find(".publishConsult_left").eq(i).siblings().html();
			moveArr1.push(text1);
		}


	} else {
		$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
		$('.school_box .publishConsult_left').addClass("publishConsult_border").removeClass("publishConsult_check");
		$(".school_box .school_name").addClass("color").removeClass("choose_color");
		$(".school_box ul:gt(0)").addClass("none");
		moveArr1.splice(0, arr.length)
	}
    if(type ==".city_content"){
		arr2 = moveArr1
    }else{
    	arr = moveArr1
	}
})
//a为左边全选以下的图标，b为左边这些除了全选以外的图标长度，c为除了全选以外的图标，d为全选所在的图标，f为除全选以外的图标，e为左边每个类别对应的内容
function touch(shuzu, a, b, c, d, f, e) {
	// 记录当前是选择城市还是选择院校
	var aType = a.split(" ")[0];
	var selectQuery = "";
	type = aType;
	if(aType == ".city_content") {
		selectQuery = ".city_content .school_Box .box_left ul li"
	} else {
		selectQuery = ".school_Content .school_Box .box_left ul li"
	}

	// 记录是左选还是右选
	var str = d.split(" ")[1];

	// 记录是城市全选还是院校全选
	var selectCurrent = aType + ' ' + '.right_choose';

	//点击全选时候

	// 防止事件重复绑定，否则事件会重复执行
	$(a).unbind('click').click(function() {
		var count = 1;
		var index = $(this).parent().index();

		if(str === '.left_choose') {

			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this), "publishConsult_border", "publishConsult_check");
				$(e).eq(index).removeClass("none").show().siblings().hide();
				var num = $(e).eq(index).find('li').length;

				for(i = 0; i < num; i++) {
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').addClass('publishConsult_check').removeClass('publishConsult_border');
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').siblings(".school_name").removeClass("color").addClass("choose_color");
					var text = $($(e).eq(index).find('li')[i]).find("span:nth-of-type(2)").html();
					console.log(text)
					shuzu.push(text);
				}
				console.log(shuzu)
				$(selectCurrent).addClass("publishConsult_check").removeClass('publishConsult_border');
			} else {
				changeClass($(this), "publishConsult_check", "publishConsult_border");
				$(e).eq(index).addClass("none").hide();
				for(i = 0; i < b; i++) {
					if(c.eq(i).find(f).hasClass('publishConsult_border')) {
						count++;
						if(count > b) {
							$(selectCurrent).addClass("publishConsult_border").removeClass('publishConsult_check');
						}

					}
				}
				for(var i = 0; i < $(e).eq(index).find("li").length; i++) {
					text1 = $(e).eq(index).find("li").eq(i).find("span:nth-of-type(2)").html();

					if(shuzu.length != 0) {
						for(var j = 0; j < shuzu.length; j++) {
							if(text1 == shuzu[j]) {
								shuzu.splice(j, $(e).eq(index).find("li").length);
							}
						}
					}
				}
			}
		} else {
			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this), "publishConsult_border", "publishConsult_check");
				text1 = $(this).siblings().html();
				shuzu.push(text1);
				console.log(shuzu)
			} else {
				changeClass($(this), "publishConsult_check", "publishConsult_border");
				var liLen = $(this).parent().parent().find("li").length;
				text1 = $(this).siblings().html();
				if(shuzu.length != 0) {
					for(var i = 0; i < shuzu.length; i++) {
						if(text1 == shuzu[i]) {
							shuzu.splice(i, 1);
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

//点击选择活动院校
$(".choose_school").click(function() {

	var mask_height = $(document).height();
	$(".popup_mask").css({ "height": mask_height, "display": "block" })
	$(".school_Content").addClass("add_move");
	////左选
	touch(arr, ".school_Content .publishConsult_Left", $(".school_Content .box_left ul li").length, $(".school_Content .school_Box .box_left ul li"), ".school_Content .left_choose", ".publishConsult_Left", ".school_Content .school_box ul");
	////右选
	touch(arr, ".school_Content .publishConsult_left", $(".school_Content .school_box ul li").length, $(".school_Content .school_Box .box_right ul li"), ".school_Content .right_choose", ".publishConsult_left")

})
$(".school_header span:first-child").click(function() {
	$(".popup_mask").hide();
	$(".school_Content").removeClass("add_move").addClass("add_Move");
	$(".city_content").removeClass("add_move").addClass("add_Move");
})

var schoolName = ""
var cityName = ""
//城市选择
sure(".ensure_city", ".city_content .school_box li .publishConsult_left", cityName, ".city_content", ".school_city", "个城市");
//学校选择
sure(".ensure_school", ".school_Content .school_box li .publishConsult_left", schoolName, ".school_Content", ".choose_school", "所高校")
//j为点击确定按钮，k为二级选项下的所有左边图标，l为schoolName或者cityName，m为整个弹窗类名，n为选择活动城市或者活动院校,Arr为数组,name为名字
function sure(j, k, l, m, n, name) {
	$(j).click(function() {
		//将元素全部清空
		$(n).html("");
        if(moveArr1.length>1){
        	l = moveArr1[0] + "等" + moveArr1.length + name
        }else{
        	l = moveArr1[0]
        }
		
		$(".popup_mask").hide();
		$(m).removeClass("add_move").addClass("add_Move")
		$(n).html(l);

	})
}
//选择活动城市
$(".school_city").click(function() {

	var mask_height = $(document).height();
	$(".popup_mask").css({ "height": mask_height, "display": "block" })
	$(".city_content").addClass("add_move");
	//左选
	touch(arr2, ".city_content .publishConsult_Left", $(".city_content .box_left ul li").length, $(".city_content .school_Box .box_left ul li"), ".city_content .left_choose", ".publishConsult_Left", ".city_content .school_box ul");

	//右选
	touch(arr2, ".city_content .publishConsult_left", $(".city_content .school_box ul li").length, $(".city_content .school_Box .box_right ul li"), ".city_content .right_choose", ".publishConsult_left")
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
				value: "1",
				text: "高校社团b"
			},
			{
				value: "2",
				text: "高校社团c"
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
		}]
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
		}]
	}
]);
var showresourceStyleButton = document.getElementById('resourceStyle');
showresourceStyleButton.addEventListener('tap', function(event) {
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