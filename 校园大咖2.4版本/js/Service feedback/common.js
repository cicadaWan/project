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
								$(".p").eq(i).siblings(".watch").addClass("class_up");
								 $(".p").eq(i).html(html.substring(0,60)+"...");
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
							}
						
						
						})(i)
					}
				}
				show();
		})	