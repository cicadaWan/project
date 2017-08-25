$(".choose_webservice").click(function() {
		$(".webservice_box1").hide();
		$(".webservice_box2").show();
	})
	//选择资源类型中的一级
$(".webservice_styleContent li").click(function() {
	var index = $(this).index();
	$("span", this).addClass("webservice_color");
	$(this).siblings().find("span").removeClass("webservice_color");
	$(".webservice_styleContent1").css("display", "block");

});
//选择资源类型中的二级

$(".webservice_styleContent1 li").click(function() {
	var index = $(this).index();
	$("span", this).addClass("webservice_color");
	$(this).siblings().find("span").removeClass("webservice_color");
	style = $(this).text();
	$(".webservice_form").click(function() {

		$(this).css("background", "#1D9243");
		$("button", this).css("background", "#1D9243");
		setTimeout(function() {
			$(".webservice_box2").hide();
			$(".webservice_box1").show();
			$(".publish_reverse").html(style);
			//					$(".popup_mask").hide()
		}, 1000)
	})
});

// 初始化左边的时间，只能选择今天之后的时间



/********************start*************************/
//选择时间

(function($) {
	$.init();
	var btns = $('.btn');
	/*****************start*********************/
    /**
	 * 这一部分主要是将左边的时间设置成当前时间，将右边的时间设置成48小时后的时间
     */

    // 获取当前时间
    var now=new Date();
    
    // 这是左边时间选择的配置
    var obj1 = opt()

    // 获取左边的时间选择器
    var time = document.getElementById("time");
    // 将设置好的配置出递给 左边的时间选择器的 ‘data-options’属性，方便下面获取
    time.setAttribute('data-options',JSON.stringify(obj1));
    // 将左边的时间选择的初始时间设置为当前时间
    time.innerText = obj1.beginYear + "-" +(obj1.beginMonth >=10 ? obj1.beginMonth : "0" + obj1.beginMonth ) + "-" + obj1.beginDay

	// 将右边的时间设置为当前时间48小时后的时间
//  var initTime = getTime([obj1.beginYear,obj1.beginMonth,obj1.beginDay]);
//
//  document.getElementById("time2").innerText = obj1.beginYear + "-" +(initTime.month >=10 ? initTime.month : "0" + initTime.month) + "-" +initTime.day

	/********************end************************/


	/********************start************************/
	btns.each(function(i, btn) {
		
		btn.addEventListener('tap', function() {
			var optionsJson = this.getAttribute('data-options') || '{}';
			var options = JSON.parse(optionsJson);
			var id = this.getAttribute('id');
			var c = document.getElementById(id);
			var picker = new $.DtPicker(options);
			picker.show(function(rs) {
				c.innerText = rs.text;
				/******************start********************/
                // 在选择左边时间事，给右边的时间选择器加上限制
				if((i+1)<=(btns.length-1)){
					// 获取左边的时间值，并打成数组  rs.text的格式是 2017-06-29
					var arr = rs.text.split("-")
					// 将左边的时间加48小时
					var lateTime = getTime(arr);  // getTime返回值的格式{mouth:7,day:"03"} 这里返回的月份是数字，因为miu必须要数字
					// 将加48 小时后的时间覆盖获取的左边的时间
					arr[1] = lateTime.month;
					arr[2] = lateTime.day;

					// 右边的时间选择器的配置
                    var obj = opt(arr.join("-"),now.getFullYear(),lateTime.month,lateTime.day)
                    console.log(obj)
                    document.getElementById("time2").setAttribute('data-options',JSON.stringify(obj));
					// 月份如果小于10月，前面需要加0;
					arr[1] = arr[1] >=10 ? arr[1] : "0" + arr[1]
                    btns[i+1].innerText = arr.join("-");
				}
				/*******************end***************************/
				picker.dispose();
			});
		}, false);
	});
	/**********************end*************************/
})(mui);


//将左边时间加48小时的处理函数
function getTime(arr) {
	//arr 的格式是["2017","06","29"]

	// 是不是闰年
	var year = 0;
	// 记录加48小时后的日期
	var day = 0;
	// 记录当前的月份
	var month = 0;
	// 一月是 31 天的数组
	var day31 = [1,3,5,7,8,10,12];
	// 一月30天的数组
	var day30 = [4,6,9,11];
	// 判断是不是闰年
    function isLeapYear(year) {
    	return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
    }
    // 闰年二月要加1
    year = isLeapYear(parseInt(arr[0])) ? 1 : 0;

    /**
	 * 1.判断是31天的月份或者是30天的或者是2月
	 * 2.如果是31天或者是30天的月份,判断出入的天数与31或30的大小，如果加上两天大于，就是到了下一个月，日期是传入的日期加2减30或31，月份要加1
	 * 3.如果是二月，要额外的判断是不是闰年，其他的步骤与其他月份一致
     */

	if($.inArray(parseInt(arr[1]),day31) != -1){
		day = parseInt(arr[2]) + 2 > 31 ? (parseInt(arr[2])+2 - 31) : parseInt(arr[2]) + 2;
        month = parseInt(arr[2]) + 2 > 31 ? parseInt(arr[1]) +1 : parseInt(arr[1])
    }else if($.inArray(parseInt(arr[1]),day30) != -1){
		day = parseInt(arr[2]) + 2 > 30 ? (parseInt(arr[2])+2 - 30) : parseInt(arr[2]) + 2;
        month = parseInt(arr[2]) + 2 > 30 ? parseInt(arr[1]) +1 : parseInt(arr[1])
	}else{
        if(year){
        	day = parseInt(arr[2]) + 2 + year > 29 ? parseInt(arr[2]) + 2 + year - 29 : parseInt(arr[2]) +2
            month = parseInt(arr[2]) + 2 + year > 29 ? parseInt(arr[1]) +1 : parseInt(arr[1])
		}else{
            day = parseInt(arr[2]) + 2 + year > 28 ? parseInt(arr[2]) + 2 + year - 28 : parseInt(arr[2]) +2
            month = parseInt(arr[2]) + 2 > 28 ? parseInt(arr[1]) +1 : parseInt(arr[1])
		}
	}

	// 将日给处理成需要的格式
    day = day >= 10 ? day : "0" + day
    return {month:month,day:day};
}

// 格式化时间选择器的配置
function opt(value,year,mouth,day) {
    var obj = {
        type:"date"
    }
    if(arguments[1]){
        obj.value = value;
		obj.beginYear=year;
        obj.beginMonth=parseInt(mouth);
        obj.beginDay=day;
	}else{
    	var now = new Date();
    	
        obj.beginYear=now.getFullYear();
        obj.beginMonth=now.getMonth()+1;;
        obj.beginDay=now.getDate() >= 10 ? now.getDate() : "0" + now.getDate();
        obj.value = obj.beginYear + "-" + obj.beginMonth + "-" + obj.beginDay;
	}


    return obj;
}


/******************end***************************/






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
		   $(this).parent().parent().siblings(".box_right").find("ul").each(function(index,val){
		   		$(this).removeClass("none")
		   })
		} else {
			$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
			$('.box_left ul .publishConsult_Left').addClass("publishConsult_border").removeClass("publishConsult_check");
            $(".box_left .school_name").addClass("color").removeClass("choose_color");
            //取消左边全选，右边出现默认的985/211院校
           $(".school_box ul:gt(0)").hide();
           $(".right_choose").removeClass("publishConsult_check").addClass("publishConsult_border");
           $(".school_box .publishConsult_left").removeClass("publishConsult_check").addClass("publishConsult_border");
		   $(".box_right .school_name").removeClass("choose_color").addClass("color")
		}

	})
//选择全选时候右边的
$(".right_choose").click(function(){
	if($(this).hasClass("publishConsult_border")) {
			$(this).removeClass("publishConsult_border").addClass("publishConsult_check");
			$('.school_box .publishConsult_left').removeClass("publishConsult_border").addClass("publishConsult_check");
		    $(".school_box .school_name").removeClass("color").addClass("choose_color");
		    $(".school_box ul").removeClass("none")
		} else {
			$(this).removeClass("publishConsult_check").addClass("publishConsult_border")
			$('.school_box .publishConsult_left').addClass("publishConsult_border").removeClass("publishConsult_check");
            $(".school_box .school_name").addClass("color").removeClass("choose_color");
            $(".school_box ul:gt(0)").addClass("none")
		}
})
//a为左边全选以下的图标，b为左边这些除了全选以外的图标长度，c为除了全选以外的图标，d为全选所在的图标，f为除全选以外的图标，e为左边每个类别对应的内容
function touch(a,b,c,d,f,e){
	// 记录当前是选择城市还是选择院校
	var aType = a.split(" ")[0];
	var selectQuery = "";
	console.log(aType)
	if(aType == ".city_content"){
		selectQuery =  ".city_content .school_Box .box_left ul li"
	} else {
		selectQuery =  ".school_Content .school_Box .box_left ul li"
	}
    
    // 记录是左选还是右选
	var str = d.split(" ")[1];

	// 记录是城市全选还是院校全选
	var selectCurrent = aType + ' ' + '.right_choose';

	// 防止事件重复绑定，否则事件会重复执行
	$(a).unbind('click').click(function() {
		var count = 1;
		var index = $(this).parent().index();
		if(str === '.left_choose'){
			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this),"publishConsult_border","publishConsult_check");
				$(e).eq(index).removeClass("none").show();
				var num = $(e).eq(index).find('li').length;
				for(i = 0;i<num;i++){
					$($(e).eq(index).find('li')[i]).find('.publishConsult_left').addClass('publishConsult_check').removeClass('publishConsult_border');
						$($(e).eq(index).find('li')[i]).find('.publishConsult_left').siblings(".school_name").removeClass("color").addClass("choose_color");
				}
				$(selectCurrent).addClass("publishConsult_check").removeClass('publishConsult_border');
			} else {
				changeClass($(this),"publishConsult_check","publishConsult_border");
				$(e).eq(index).addClass("none").hide();
				for(i=0;i<b;i++){
					if(c.eq(i).find(f).hasClass('publishConsult_border')){
						count++;
						if(count > b){
					        $(selectCurrent).addClass("publishConsult_border").removeClass('publishConsult_check');
						}
					}
				}
			}
		} else {
			if($(this).hasClass("publishConsult_border")) {
				changeClass($(this),"publishConsult_border","publishConsult_check");
			} else {
			    changeClass($(this),"publishConsult_check","publishConsult_border");
			    var liLen = $(this).parent().parent().find("li").length;

			    // 开关的作用是右边如果的对应子选项全部不选那么对应的左边选项就不选
			    liOnoff = true;
			    for(i = 0;i<liLen;i++){
			    	if($($(this).parent().parent().find("li")[i]).find(".publishConsult_left").hasClass("publishConsult_check")){
			    		liOnoff = false;
			    		break;
			    	}else{
                        liOnoff = true;
			    	}
			    }
			    if(liOnoff){
			    	// 获得当前右边点击的ul的索引，以便操做作右边对应的li
			    	console.log(selectQuery)
			    	var indexNow = $(this).parent().parent().index();
			    	console.log($(selectQuery).eq(indexNow))
                    $(selectQuery).eq(indexNow).find(".publishConsult_Left").removeClass("publishConsult_check").addClass("publishConsult_border")
			    	$(this).parent().parent().addClass("none");
			    	$(this).parent().parent().hide();
			    }
			    var lenLeft = $(".city_content .school_Box .box_left ul li").length
			    for(i=0;i<lenLeft;i++){
			    	
			    	if($(selectQuery).eq(i).find(".publishConsult_Left").hasClass("publishConsult_border")){
			    		$( aType + " .left_choose").addClass("publishConsult_border").removeClass("publishConsult_check")
			    		break;
			    	}
			    }
			}
		}
		//如果是右选按钮要进行函数重构
		if(str === '.right_choose'){
			b = $(this).parent().parent().parent().find('ul').length;
			c = $(this).parent().parent().parent().find('ul');
		}
		var onoff = true;
		for(var i = 0; i < b; i++) {
			if(str === '.left_choose'){
				if(!c.eq(i).find(f).hasClass('publishConsult_check')) {
					$(d).removeClass("publishConsult_check").addClass('publishConsult_border');
					break;
				}else {
					$(d).addClass("publishConsult_check").removeClass('publishConsult_border');
				}
			}else{
				if(!$(c[i]).hasClass('none') && onoff){
	            	var len = $(c[i]).find(f).length;
					for(j=0;j<len;j++){
						if(!$($(c[i]).find(f)[j]).hasClass('publishConsult_check')) {
							$(d).removeClass("publishConsult_check").addClass('publishConsult_border');
							onoff = false;
							break;
						}else {
							$(d).addClass("publishConsult_check").removeClass('publishConsult_border');
						}
					}
				}
			}
		}
	})

}

//加减类名操作，提出公共代码
function changeClass(selectElement,removeClass,addClass){
	selectElement.removeClass(removeClass).addClass(addClass);
	if(addClass === 'publishConsult_border'){
		selectElement.siblings(".school_name").removeClass("choose_color").addClass("color");
	}else{
		selectElement.siblings(".school_name").removeClass("color").addClass("choose_color");
	}
}

////左选
//touch(".publishConsult_Left",$("#city li").length,$(".school_Box .box_left ul li"),".left_choose",".publishConsult_Left",".school_box ul");
////右选
//touch(".publishConsult_left",$(".school_box ul li").length,$(".school_Box .box_right ul li"),".right_choose",".publishConsult_left")



//点击选择活动院校
$(".choose_school").click(function(){
	var mask_height=$(document).height();
	$(".popup_mask").css({"height":mask_height,"display":"block"})
	$(".school_Content").addClass("add_move");
	////左选
    touch(".school_Content .publishConsult_Left",$(".school_Content .box_left ul li").length,$(".school_Content .school_Box .box_left ul li"),".school_Content .left_choose",".publishConsult_Left",".school_Content .school_box ul");
////右选
    touch(".school_Content .publishConsult_left",$(".school_Content .school_box ul li").length,$(".school_Content .school_Box .box_right ul li"),".school_Content .right_choose",".publishConsult_left")


})
$(".school_header span:first-child").click(function(){
	$(".popup_mask").hide();
	$(".school_Content").removeClass("add_move").addClass("add_Move");
	$(".city_content").removeClass("add_move").addClass("add_Move");
})


	var schoolName=""
var cityName=""
//城市选择
sure(".ensure_city",".city_content .school_box li .publishConsult_left",cityName,".city_content",".school_city");
//学校选择
sure(".ensure_school",".school_Content .school_box li .publishConsult_left",schoolName,".school_Content",".choose_school")
//j为点击确定按钮，k为二级选项下的所有左边图标，l为schoolName或者cityName，m为整个弹窗类名，n为选择活动城市或者活动院校
function sure(j,k,l,m,n){
	$(j).click(function(){
	$(k).each(function(){
		if($(this).hasClass("publishConsult_check")){
			l+=$(this).siblings(".school_name").html()+"&nbsp;";
		}
	})
	$(".popup_mask").hide();
	$(m).removeClass("add_move").addClass("add_Move")
	$(n).html(l);

})
}
//选择活动城市
	$(".school_city").click(function(){
	var mask_height=$(document).height();
	$(".popup_mask").css({"height":mask_height,"display":"block"})
	$(".city_content").addClass("add_move");
    //左选
touch(".city_content .publishConsult_Left",$(".city_content .box_left ul li").length,$(".city_content .school_Box .box_left ul li"),".city_content .left_choose",".publishConsult_Left",".city_content .school_box ul");

//右选
touch(".city_content .publishConsult_left",$(".city_content .school_box ul li").length,$(".city_content .school_Box .box_right ul li"),".city_content .right_choose",".publishConsult_left")
})
