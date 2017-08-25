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
//选择主页标签
//var biaoStyle = new mui.PopPicker({
//	layer: 1
//});
//var count = 0;
//biaoStyle.setData([{ value: 0, text: "地推达人" }, { value: 1, text: "路演狂人" }, { value: 2, text: "派单侠" }, { value: 4, text: "兼职狗" }]);
//var showbiaoStyleButton = document.getElementById('biaoStyle');
//showbiaoStyleButton.addEventListener('tap', function(event) {
//	count++;
//	biaoStyle.show(function(items) {
//		var content = items[0].text;
//		console.log(content)
//		var div=document.createElement("div");
//		div.setAttribute("class", "groom groom_green");
//		var span = document.createElement("span");
//		span.setAttribute("class", "label" + count);
//      $(div).append(span)
//		$(".groom_content").append(div)
//		$(".label" + count).html(content);
//		$(".label" + count).addClass("groom_Green");
//		
//	});
//}, false);
//选择主页标签

//var biaoStyle = new mui.PopPicker({
//	layer: 1
//});
//var count = 0;
//biaoStyle.setData([{ value: 0, text: "地推达人" }, { value: 1, text: "路演狂人" }, { value: 2, text: "派单侠" }, { value: 4, text: "兼职狗" }]);
//var showbiaoStyleButton = document.getElementById('biaoStyle');
//showbiaoStyleButton.addEventListener('tap', function(event) {
//	count++;
//	biaoStyle.show(function(items) {
//		var content = items[0].text;
//		console.log(content)
//		var div=document.createElement("div");
//		div.setAttribute("class", "groom groom_green");
//		var span = document.createElement("span");
//		span.setAttribute("class", "label" + count);
//      $(div).append(span)
//		$(".groom_content").append(div)
//		$(".label" + count).html(content);
//		$(".label" + count).addClass("groom_Green");
//		
//	});
//}, false);
////上一版本弹窗选择时候
//选择主页标签
$(".add_biaoqian").click(function(){
	var mask_height=$(document).height();
	$(".popup_mask").css({"height":mask_height,"display":"block"})
	$(".school_Content").addClass("add_move");
	$("body").css("overflow","hidden")
})

var labelValArr=[];

var moveArr2=[];
var text="";
$(".bomb_box li span:first-child").click(function(){
	$(this).toggleClass("enterInfo_round").toggleClass("enterInfo_check").siblings().toggleClass("enterInfo_sizeColor");
	var labelVal = $(this).siblings("input").val();
    if($(this).hasClass("enterInfo_check")){
    	text=$(this).siblings().html();
    	arr.push(text)
    	labelValArr.push(labelVal)
    }else{
    	var text=$(this).siblings().html();
    	arr.splice($.inArray(text,arr),1); 
    	labelValArr.splice($.inArray(text,labelValArr),1);
    	
	}
})
//点击确定时候
var counter=0;
$(".ensure_school").click(function(){
	counter++;
	console.log(counter)
	setTimeout(function(){
		$(".popup_mask").hide();
	},1000);
	$(".school_Content").addClass("add_Move").removeClass("add_move");
	 $(".groom").each(function (index,ele) {
	        $(ele).remove();
	    })
	for(var i=0;i<arr.length;i++){
		
		var div=document.createElement("div");
		div.setAttribute("class", "groom groom_green");
		var span = document.createElement("span");
		span.setAttribute("class", "label" + i+counter);
		
		var inp = document.createElement("input");
		inp.setAttribute("type", "hidden");
		inp.setAttribute("name", "lable");
		inp.setAttribute("value", labelValArr[i]);
		
         $(div).append(span)
         $(div).append(inp)
		$(".groom_content").append(div)
		$(".label" + i+counter).html(arr[i]);
		$(".label" + i+counter).addClass("groom_Green");
	}
	
	var length=$(".groom_content .groom").length;
	for(var j=0;j<length;j++){
		$(".groom_content .groom").eq(j).find(".groom_Green").html();
		moveArr2.push($(".groom_content .groom").eq(j).find(".groom_Green").html());
		
	}
//	arr.splice(0,arr.length)
//	labelValArr.splice(0,labelValArr.length)
	$("body").css("overflow","scroll")
})

//点击取消时候
$(".school_header span:first-child").click(function(){
	setTimeout(function(){
		$(".popup_mask").hide();
	},1000);
	$(".school_Content").addClass("add_Move").removeClass("add_move");
})
//点击是否删除标签
var remove=""; 
$(document).on("click",'.groom_content .groom',function(){
	remove=$(this);
   var removeHeight=$(".remove_box").outerHeight(true);
	$(".remove_box").css({"height":removeHeight,"display":"block"});
	var mask_height=$(document).height();
	$(".popup_mask").css({"height":mask_height,"display":"block"});
});
$(".yes_content span:first-child").click(function(){
	$(".popup_mask").hide();
	$(".remove_box").hide();
})
$(".yes_content span:last-child").click(function(){
	remove.remove();
    arr.splice(arr.indexOf(remove.find("span").text()),1)
    labelValArr.splice(labelValArr.indexOf(remove.find("input").val()),1)
    // 将下方的选中变为非选中
    $(".bomb_box li").each(function(index,val){
        if($(this).find(".enterInfo_size").text() == remove.find("span").text()){
            $(this).find("span:first-child").removeClass("enterInfo_check").addClass("enterInfo_round")
        }
    })
	$(".popup_mask").hide();
	$(".remove_box").hide();
})
//2.4版本优化主页标签选择
//$(document).on("click",".label",function(){
//	
//	$(this).toggleClass("label_border");
//	$(this).children("span").toggleClass("label_color")
//})

//$(".label").click(function(){
//	$(this).toggleClass("label_border");
//	$(this).children("span").toggleClass("label_color")
//})



