//选择场地类型
	var placestyle = new mui.PopPicker({
		layer: 1
	});
	placestyle.setData([{
		value: 0,
		text: "户外活动"
	}, {
		value: 1,
		text: "活动中心"
	}, {
		value: 2,
		text: "室内活动"
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
//选择场地规模
var scopestyle = new mui.PopPicker({
		layer: 1
	});
	scopestyle.setData([{
		value: 0,
		text: "大"
	}, {
		value: 1,
		text: "中"
	}, {
		value: 2,
		text: "小"
	}]);
	var showscopestyleButton = document.getElementById('scopeStyle');
	showscopestyleButton.addEventListener('tap', function(event) {
		scopestyle.show(function(items) {
			document.querySelector('#scopeStyle .result-tips').style.display = "none";
			document.querySelector('#scopeStyle .show-result').style.display = "block";
			document.querySelector('#scopeStyle .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
	//选择基本物资配备
	$(".resource_content .resource").click(function(){
		if($(this).hasClass("resouce_green")){
			$(this).removeClass("resouce_green");
		    $(this).find("span").hide();
		}else{
			$(this).addClass("resouce_green");
		    $(this).find("span").show();
		}
	})
	//提供兼职
	var providestyle = new mui.PopPicker({
		layer: 1
	});
	providestyle.setData([{
		value: 0,
		text: "是"
	}, {
		value: 1,
		text: "否"
	}]);
	var showprovideButton = document.getElementById('provide');
	showprovideButton.addEventListener('tap', function(event) {
		providestyle.show(function(items) {
			document.querySelector('#provide .result-tips').style.display = "none";
			document.querySelector('#provide .show-result').style.display = "block";
			document.querySelector('#provide .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});

	}, false);
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
	//场地介绍
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
//选择时间
var arr=[];
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
				
				arr.push(rs.text)
				console.log(arr)
				c.value = rs.text
				picker.dispose();
//				for(var j=0;j<arr.length;j++){
//					if(arr[2*j]==arr[2*j+1]){
//					alert(1)
//				}
//				}
				
			});
			
		}, false);
	});
})(mui);



