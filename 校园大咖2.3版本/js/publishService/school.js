	var placestyle = new mui.PopPicker({
		layer: 1
	});
	placestyle.setData([{
		value: 0,
		text: "花粥"
	}, {
		value: 1,
		text: "化空间"
	}, {
		value: 2,
		text: "风采大赛"
	}]);
	var showplacestyleButton = document.getElementById('placeStyle');
	showplacestyleButton.addEventListener('tap', function(event) {
		placestyle.show(function(items) {
			document.querySelector('#placeStyle .result-tips').style.display = "none";
			document.querySelector('#placeStyle .show-result').style.display = "block";
			document.querySelector('#placeStyle .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	//选择基本物资配备
	$(".resource_content .resource").click(function(){
		var index=$(this).index();
		console.log(index)
		$(".shoppe_content .shoppe_box").eq(index).toggleClass("mask_none");
		$(".shoppe_content .shoppe_box").not(".shoppe_content .shoppe_box:first-child").children().addClass("store")
		if($(this).hasClass("resouce_green")){
			$(this).removeClass("resouce_green");
		    $(this).find("span").hide();
		}else{
			$(this).addClass("resouce_green");
		    $(this).find("span").show();
		}
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
	var unitstyle2 = new mui.PopPicker({
		layer: 1
	});
	unitstyle2.setData([{
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
	var showunitstyleButton2 = document.getElementById('unitStyle2');
	showunitstyleButton2.addEventListener('tap', function(event) {
		unitstyle2.show(function(items) {
			document.querySelector('#unitStyle2 .result-tips').style.display = "none";
			document.querySelector('#unitStyle2 .show-result').style.display = "block";
			document.querySelector('#unitStyle2 .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	var unitstyle3 = new mui.PopPicker({
		layer: 1
	});
	unitstyle3.setData([{
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
	var showunitstyleButton3 = document.getElementById('unitStyle3');
	showunitstyleButton3.addEventListener('tap', function(event) {
		unitstyle3.show(function(items) {
			document.querySelector('#unitStyle3 .result-tips').style.display = "none";
			document.querySelector('#unitStyle3 .show-result').style.display = "block";
			document.querySelector('#unitStyle3 .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	var unitstyle4 = new mui.PopPicker({
		layer: 1
	});
	unitstyle4.setData([{
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
	var showunitstyleButton4 = document.getElementById('unitStyle4');
	showunitstyleButton4.addEventListener('tap', function(event) {
		unitstyle4.show(function(items) {
			document.querySelector('#unitStyle4 .result-tips').style.display = "none";
			document.querySelector('#unitStyle4 .show-result').style.display = "block";
			document.querySelector('#unitStyle4 .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	var unitstyle5 = new mui.PopPicker({
		layer: 1
	});
	unitstyle5.setData([{
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
	var showunitstyleButton5 = document.getElementById('unitStyle5');
	showunitstyleButton5.addEventListener('tap', function(event) {
		unitstyle5.show(function(items) {
			document.querySelector('#unitStyle5 .result-tips').style.display = "none";
			document.querySelector('#unitStyle5 .show-result').style.display = "block";
			document.querySelector('#unitStyle5 .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	//门店描述
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