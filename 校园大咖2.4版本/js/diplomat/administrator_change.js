//验证手机号码
//当文本框失去焦点的时候
$(".phone").blur(function() {
		var val = $(".phone").val()
		var re = /^1[3|4|5|7|8]\d{9}$/;
		if(!re.test(val)) {
			$(".warn_tel").html("输入手机格式有误，请重新输入").css("display", "block")

		}

		if(val == "") {
			$(".warn_tel").html("请输入手机号").css("display", "block");
		}

	})
	//当文本框重新获得焦点的时候
$(".phone").focus(function() {
		var val = $(".phone").val()
		var re = /^1[3|4|5|7|8]\d{9}$/;
		if(!re.test(val)) {
			$(".warn_tel").html("").css("display", "none")
		}

		if(val == "") {
			$(".warn_tel").html("").css("display", "none");
		}
	})
//验证邮箱号

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
		$(".warn_wechat").html("").css("display", "none");
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
		document.querySelector('#activeSchool .result-tips').style.display = "block";
		document.querySelector('#activeSchool .show-result').style.display = "none";
		//返回 false 可以阻止选择框的关闭
		//return false;
	});
}, false);
//选择学校

var shcoolPicker = new mui.PopPicker({
	layer: 2
});
shcoolPicker.setData(shcollData);
var showShcoolPickerButton = document.getElementById('activeSchool');
showShcoolPickerButton.addEventListener('tap', function(event) {
	shcoolPicker.show(function(items) {

		document.querySelector('#activeSchool .result-tips').style.display = "none";
		document.querySelector('#activeSchool .show-result').style.display = "block";
		document.querySelector('#activeSchool .show-result').innerText = items[1].text;
		//返回 false 可以阻止选择框的关闭
		//return false;
	});
}, false);