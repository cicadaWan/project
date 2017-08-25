//选择社群类型
	var associationstyle = new mui.PopPicker({
		layer: 1
	});
	associationstyle.setData([{
		value: 0,
		text: "a"
	}, {
		value: 1,
		text: "b"
	}, {
		value: 2,
		text: "b"
	}, {
		value: 3,
		text: "b"
	}, {
		value: 4,
		text: "自媒体"
	}]);
	var showassociationButton = document.getElementById('associationStyle');
	showassociationButton.addEventListener('tap', function(event) {
		associationstyle.show(function(items) {
			document.querySelector('#associationStyle .result-tips').style.display = "none";
			document.querySelector('#associationStyle .show-result').style.display = "block";
			document.querySelector('#associationStyle .show-result').innerText = items[0].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
			if(items[0].text=="自媒体"){
				$(".association_content ul:last-child").removeClass("association_none");
				$(".association_content ul:first-child").addClass("association_none");
				$(".li span:first-child").addClass("community_enterName spacing");
			}else{
				$(".association_content ul:first-child").removeClass("association_none");
				$(".association_content ul:last-child").addClass("association_none");
				$(".li span:first-child").removeClass("community_enterName spacing");
			}
		});

	}, false);
//介绍
function load() {
	var length = $(".introduce").val().length;
	var html = $(".introduce").val();

	if(length > 199) {
		$(".introduce").val(html.substring(0, 200))

		$("#span span").html(200);

	} else {
		$("#span span").html(length)
	}

}
function load2() {
	var length = $(".Introduce").val().length;
	var html = $(".Introduce").val();

	if(length > 199) {
		$(".Introduce").val(html.substring(0, 200))

		$("#span2 span").html(200);

	} else {
		$("#span2 span").html(length)
	}

}
//微信号
//验证微信号
         //当文本框失去焦点的时候
		 $(".wechat").blur(function(){
		 	var val1=$(".wechat").val()
    		var re=/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
    		if(!re.test(val1)){
    			$(".warn_wechat").html("输入微信号格式有误，请重新输入").css("display","block")
    			
    		}
    		
//  		if(val1==""){
//  			$(".warn_wechat").html("请输入微信号").css("display","block");
//  		} 
    		
		 })
        //当文本框重新获得焦点的时候
        $(".wechat").focus(function(){
        	var val1=$(".wechat").val()
    		var re=/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
    		if(!re.test(val1)){
    			$(".warn_wechat").html("").css("display","none")
    		}
    		
    		if(val1==""){
    			$(".warn_tel").html("").css("display","none");
    		}
        })