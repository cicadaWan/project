//投放对象，最多展示12个
var length=$(".picture_content a").length;


$(".publishLook_more").click(function(){
	if(length>12){
	$(".picture_Content1").toggleClass("put_none");
	$(".picture_Content2").toggleClass("put_none");
	$(".publish_see").toggleClass("put_none");
	$(".publish_see2").toggleClass("put_none");
  }
})
 //控制字数显示的
	$(document).ready(function(){
                 function show(){
					var btn = document.getElementsByClassName("watch");
					var p = document.getElementsByClassName("p");
					
					var arr=[];
					for(var i=0;i<btn.length;i++){
						(function(i) {
							var text = p[i].innerHTML;
							arr.push(text)
							var length=$(".p").eq(i).html().length;
							var html=$(".p").eq(i).html();
							if(length>60){
								 $(".p").eq(i).html(html.substring(0,60)+"...")
							}
						btn[i].onclick = function(){
								var newBox = document.createElement("div");
							 $(this).toggleClass("class_up").toggleClass("class_down")
							newBox.innerHTML=arr[i];
							if($(this).hasClass("class_down")) {
								newBox.innerHTML = arr[i];
							} else{
								if($(".p").eq(i).html().length>60){
									newBox.innerHTML = arr[i].substring(0, 60) + "...";
								}else{
									newBox.innerHTML = arr[i];
								}								
							}
						 	  p[i].innerHTML = ""; 
							 p[i].appendChild(newBox); 
							
						} 
						
						})(i)
					}
				}
				show();
		
	})	