
	$(".message_content li:last-child").css("margin-bottom","25px");
	
	//点击加号上传头像图标变换部分
		 $(".icon_pic").click(function(){
			 	if($('.icon_pic').hasClass('icon-jiahao')){
				$('.icon_pic').removeClass("icon-jiahao").addClass("icon-del")
			}else{
				$('.icon_pic').removeClass("icon-del").addClass("icon-jiahao")
			}
		 })
		 //验证手机号码
		 //当文本框失去焦点的时候
		 $(".phone").blur(function(){
		 	var val1=$(".phone").val()
    		var re=/^1[3|4|7|5|8]\d{9}$/;
    		if(!re.test(val1)){
    			$(".warn_tel").html("输入手机格式有误，请重新输入").css("display","block")
    			
    		}
    		
    		if(val1==""){
    			$(".warn_tel").html("请输入手机号").css("display","block");
    		}
    		
		 })
        //当文本框重新获得焦点的时候
        $(".phone").focus(function(){
        	var val1=$(".phone").val()
    		var re=/^1[3|4|5|7|8]\d{9}$/;
    		if(!re.test(val1)){
    			$(".warn_tel").html("").css("display","none")
    		}
    		
    		if(val1==""){
    			$(".warn_tel").html("").css("display","none");
    		}
        })
		//验证邮箱
		//当文本框失去焦点的时候
		 $(".letter").blur(function(){
		 	var val1=$(".letter").val()
    		var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    		if(!reg.test(val1)){
    			$(".warn_letter").html("输入邮箱格式有误，请重新输入").css("display","block")
    			
    		}
    		
    		if(val1==""){
    			$(".warn_letter").html("请输入邮箱号").css("display","block");
    		}
    		
		 })
        //当文本框重新获得焦点的时候
        $(".letter").focus(function(){
        	var val1=$(".letter").val()
    		var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    		if(!reg.test(val1)){
    			$(".warn_letter").html("").css("display","none")
    		}
    		
    		if(val1==""){
    			$(".warn_letter").html("").css("display","none");
    		}
        })
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
//  			
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
        //字数限制
	
     function load(){
     	 console.log($(".introduce").val().length)
      	 var length=$(".introduce").val().length;
      	 var html=$(".introduce").val();
      	 
      	 if(length>199){
      	 $(".introduce").val(html.substring(0,200))
      	 	
      	 	 $("#span span").html(200);
      	 	 
      	 }else{
      	 	 $("#span span").html(length)
      	 }
      	
     }
        //选择所在地
        
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
						layer:2
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
  
    
    
    


