//选择服务类型

	var servicestyle = new mui.PopPicker({
		layer: 1
	});
	servicestyle.setData([{
		value: 0,
		text: "户外活动"
	}, {
		value: 1,
		text: "活动中心"
	}, {
		value: 2,
		text: "室内活动"
	}]);
	var showservicestyleButton = document.getElementById('serviceStyle');
	showservicestyleButton.addEventListener('tap', function(event) {
		servicestyle.show(function(items) {
			document.querySelector('#serviceStyle .result-tips').style.display = "none";
			document.querySelector('#serviceStyle .show-result').style.display = "block";
			document.querySelector('#serviceStyle .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	
	//选择服务性质
	$(".nature_box .nature").click(function(){
		$(">span:first-child",this).addClass("nature_choose");
		$(">span:last-child",this).addClass("groom_Green");
		$(this).siblings().find("span").eq(0).removeClass("nature_choose");
		$(this).siblings().find("span").eq(1).removeClass("groom_Green");
	})
	//选择单位
	var unitstyle = new mui.PopPicker({
		layer: 1
	});
	unitstyle.setData([{
		value: 0,
		text: "次"
	}, {
		value: 1,
		text: "天"
	}, {
		value: 2,
		text: "小时"
	},{
		value: 3,
		text: "个"
	},{
		value: 4,
		text: "幅"
	},{
		value: 5,
		text: "份"
	},{
		value: 6,
		text: "单"
	},{
		value: 7,
		text: "分钟"
	},{
		value: 8,
		text: "其他"
	}]);
	var showunitstyleButton = document.getElementById('unitStyle');
	showunitstyleButton.addEventListener('tap', function(event) {
		unitstyle.show(function(items) {
			document.querySelector('#unitStyle .result-tips').style.display = "none";
			document.querySelector('#unitStyle .show-result').style.display = "block";
			document.querySelector('#unitStyle .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
//服务介绍
function load() {
	var length = $(".introduce").val().length;
	var html = $(".introduce").val();

	if(length > 199) {
		$(".introduce").val(html.substring(0, 200))

		$("#span Span").html(200);

	} else {
		$("#span Span").html(length)
	}

}