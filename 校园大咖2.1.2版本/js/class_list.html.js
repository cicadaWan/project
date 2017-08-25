$(function() {
	var itemIndex = 0;
    var tab1LoadEnd = false;
    var tab2LoadEnd = false;
    var tab3LoadEnd = false;
    var tab4LoadEnd = false;
    var tab5LoadEnd = false;
    var val1=""
    //点击搜索图标
    $(".class_list_a").click(function(){
    	$(".form").css("display","none");
    	$(".class_title").css("display","none");
    	$(".class_choose").css("display","none");
    	$(".lists").css("display","none");
    	$(".dropload-down").css("display","none");
    	$(".ctt_hot").css("display","block");
    	$(".ctt_cancel").css("display","block");
    	$(".list_content").css("display","block")
    })
    $(".ctt_cancel").click(function() {
				$(".hot_inp").val("")
				
			})
	//点击选项卡切换
	$(".class_title1 li").click(function() {
			$(this).addClass("title_active").siblings().removeClass("title_active");

			var index = $(this).index();
			$(".class_title1 span").removeClass("title_color").eq(index).addClass("title_color");
		})
		//ajax请求这一部分
	$(".class_title1 li").click(function() {
		var $this = $(this);
        itemIndex = $this.index();
        $this.addClass('cur').siblings('.item').removeClass('cur');
        $('.lists').eq(itemIndex).show().siblings('.lists').hide();
         // 如果选中菜单一
        if(itemIndex == '0'){
            // 如果数据没有加载完
            if(!tab1LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        // 如果选中菜单二
        }else if(itemIndex == '1'){
            if(!tab2LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }else if(itemIndex == '2'){
            if(!tab3LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }else if(itemIndex == '3'){
            if(!tab4LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }else if(itemIndex == '4'){
            if(!tab5LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        }
        // 重置
        dropload.resetload();
    });

    var counter = 0;
    // 每页展示4个
    var num = 4;
    var pageStart = 0,pageEnd = 0;

    // dropload
    var dropload = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
            // 加载菜单一的数据
            if(itemIndex == '0'){
                $.ajax({
                    type: 'GET',
                    url: 'claass_list.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;

                        if(pageStart <= data[0].catory.length){
                            for(var j = pageStart; j < pageEnd; j++){
                                result +='<li class="class_show">' +
									'<div class="class_bg"></div>' +
									'<a href="personal_details.html">'+
									'<div class="pic_show">' +
									'<div class="class_pic">' +
									'<img src="img/' + data[0].catory[j].photo + '" class="search_pic"/>' +
									'<div class="school_name">' +
									'  <span>' + data[0].catory[j].school + '</span>' +
									'  </div>' +
									'</div>' +
									'<div class="person_pic"><img style="border-radius: 100%;" src="img/' + data[0].catory[j].picture + '" class="search_pic"  /></div>' +
									'<p class="author">' + data[0].catory[j].author + '</p>' +
									'<div class="service_content">' +
									'<span class="class_service">擅长服务：</span>' +
									'<div class="service"><span>' + data[0].catory[j].service + '</span></div>' +
									' <span class="iconfont icon-zuobiao"></span>' +
									'<span class="class_city">' + data[0].catory[j].city + '</span>' +
									'</div>' +
									'</div>' +
									'<div class="sell_content">' +
									'<div class="sell_pic"><img src="img/class_icon.png" class="search_pic" /></div>' +
									'<div class="sell_number">' +
									'<span>[已售</span>' +
									'<span>' + data[0].catory[j].number + ']</span>' +
									'</div>' +
									'<div class="sell_star">' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'</div>' +
									'<div class="diamond">' +
									'<img src="img/icon_diamond.png" class="search_pic"  />' +
									'</div>' +
									'<div class="num"><span>' + data[0].catory[j].num + '</span>元/次</div>' +
									'</div>' +
									'</div>'+
									'</li>';
                                if((j + 1) >= data[0].catory.length){
                                    // 数据加载完
                                    tab1LoadEnd = true;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                    break;
                                }
                            }
                            // 为了测试，延迟1秒加载
                            setTimeout(function(){
                                $('.lists').eq(0).append(result);
                                // 每次数据加载完，必须重置
                                me.resetload();
                            },1000);
                        }
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            // 加载菜单二的数据
            }else if(itemIndex == '1'){
                $.ajax({
                    type: 'GET',
                    url: 'claass_list.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        for(var j = 0; j < data[1].catory.length; j++){
                            result +='<li class="class_show">' +
									'<div class="class_bg"></div>' +
									'<a href="personal_details.html">'+
									'<div class="pic_show">' +
									'<div class="class_pic">' +
									'<img src="img/' + data[1].catory[j].photo + '" class="search_pic"/>' +
									'<div class="school_name">' +
									'  <span>' + data[1].catory[j].school + '</span>' +
									'  </div>' +
									'</div>' +
									'<div class="person_pic"><img style="border-radius: 100%;" src="img/' + data[1].catory[j].picture + '" class="search_pic"  /></div>' +
									'<p class="author">' + data[1].catory[j].author + '</p>' +
									'<div class="service_content">' +
									'<span class="class_service">擅长服务：</span>' +
									'<div class="service"><span>' + data[1].catory[j].service + '</span></div>' +
									' <span class="iconfont icon-zuobiao"></span>' +
									'<span class="class_city">' + data[1].catory[j].city + '</span>' +
									'</div>' +
									'</div>' +
									'<div class="sell_content">' +
									'<div class="sell_pic"><img src="img/class_icon.png" class="search_pic" /></div>' +
									'<div class="sell_number">' +
									'<span>[已售</span>' +
									'<span>' + data[1].catory[j].number + ']</span>' +
									'</div>' +
									'<div class="sell_star">' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'</div>' +
									'<div class="diamond">' +
									'<img src="img/icon_diamond.png" class="search_pic"  />' +
									'</div>' +
									'<div class="num"><span>' + data[1].catory[j].num + '</span>元/次</div>' +
									'</div>' +
									'</div>'+
									'</li>';
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.lists').eq(1).append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
            // 加载菜单3的数据
            else if(itemIndex == '2'){
                $.ajax({
                    type: 'GET',
                    url: 'claass_list.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        for(var j = 0; j < data[2].catory.length; j++){
                            result +='<li class="class_show">' +
									'<div class="class_bg"></div>' +
									'<a href="personal_details.html">'+
									'<div class="pic_show">' +
									'<div class="class_pic">' +
									'<img src="img/' + data[2].catory[j].photo + '" class="search_pic"/>' +
									'<div class="school_name">' +
									'  <span>' + data[2].catory[j].school + '</span>' +
									'  </div>' +
									'</div>' +
									'<div class="person_pic"><img style="border-radius: 100%;" src="img/' + data[2].catory[j].picture + '" class="search_pic"  /></div>' +
									'<p class="author">' + data[2].catory[j].author + '</p>' +
									'<div class="service_content">' +
									'<span class="class_service">擅长服务：</span>' +
									'<div class="service"><span>' + data[2].catory[j].service + '</span></div>' +
									' <span class="iconfont icon-zuobiao"></span>' +
									'<span class="class_city">' + data[2].catory[j].city + '</span>' +
									'</div>' +
									'</div>' +
									'<div class="sell_content">' +
									'<div class="sell_pic"><img src="img/class_icon.png" class="search_pic" /></div>' +
									'<div class="sell_number">' +
									'<span>[已售</span>' +
									'<span>' + data[2].catory[j].number + ']</span>' +
									'</div>' +
									'<div class="sell_star">' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'</div>' +
									'<div class="diamond">' +
									'<img src="img/icon_diamond.png" class="search_pic"  />' +
									'</div>' +
									'<div class="num"><span>' + data[2].catory[j].num + '</span>元/次</div>' +
									'</div>' +
									'</div>'+
									'</li>';
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.lists').eq(2).append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
            // 加载菜单4的数据
            else if(itemIndex == '3'){
                $.ajax({
                    type: 'GET',
                    url: 'claass_list.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        for(var j = 0; j < data[3].catory.length; j++){
                            result +='<li class="class_show">' +
									'<div class="class_bg"></div>' +
									'<a href="personal_details.html">'+
									'<div class="pic_show">' +
									'<div class="class_pic">' +
									'<img src="img/' + data[3].catory[j].photo + '" class="search_pic"/>' +
									'<div class="school_name">' +
									'  <span>' + data[3].catory[j].school + '</span>' +
									'  </div>' +
									'</div>' +
									'<div class="person_pic"><img style="border-radius: 100%;" src="img/' + data[3].catory[j].picture + '" class="search_pic"  /></div>' +
									'<p class="author">' + data[3].catory[j].author + '</p>' +
									'<div class="service_content">' +
									'<span class="class_service">擅长服务：</span>' +
									'<div class="service"><span>' + data[3].catory[j].service + '</span></div>' +
									' <span class="iconfont icon-zuobiao"></span>' +
									'<span class="class_city">' + data[3].catory[j].city + '</span>' +
									'</div>' +
									'</div>' +
									'<div class="sell_content">' +
									'<div class="sell_pic"><img src="img/class_icon.png" class="search_pic" /></div>' +
									'<div class="sell_number">' +
									'<span>[已售</span>' +
									'<span>' + data[3].catory[j].number + ']</span>' +
									'</div>' +
									'<div class="sell_star">' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'</div>' +
									'<div class="diamond">' +
									'<img src="img/icon_diamond.png" class="search_pic"  />' +
									'</div>' +
									'<div class="num"><span>' + data[3].catory[j].num + '</span>元/次</div>' +
									'</div>' +
									'</div>'+
									'</li>';
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.lists').eq(3).append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
            // 加载菜单5的数据
            else if(itemIndex == '4'){
                $.ajax({
                    type: 'GET',
                    url: 'claass_list.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        for(var j = 0; j < data[4].catory.length; j++){
                            result +='<li class="class_show">' +
									'<div class="class_bg"></div>' +
									'<a href="personal_details.html">'+
									'<div class="pic_show">' +
									'<div class="class_pic">' +
									'<img src="img/' + data[4].catory[j].photo + '" class="search_pic"/>' +
									'<div class="school_name">' +
									'  <span>' + data[4].catory[j].school + '</span>' +
									'  </div>' +
									'</div>' +
									'<div class="person_pic"><img style="border-radius: 100%;" src="img/' + data[4].catory[j].picture + '" class="search_pic"  /></div>' +
									'<p class="author">' + data[4].catory[j].author + '</p>' +
									'<div class="service_content">' +
									'<span class="class_service">擅长服务：</span>' +
									'<div class="service"><span>' + data[4].catory[j].service + '</span></div>' +
									' <span class="iconfont icon-zuobiao"></span>' +
									'<span class="class_city">' + data[4].catory[j].city + '</span>' +
									'</div>' +
									'</div>' +
									'<div class="sell_content">' +
									'<div class="sell_pic"><img src="img/class_icon.png" class="search_pic" /></div>' +
									'<div class="sell_number">' +
									'<span>[已售</span>' +
									'<span>' + data[4].catory[j].number + ']</span>' +
									'</div>' +
									'<div class="sell_star">' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'<span class="iconfont icon-xingxing"></span>' +
									'</div>' +
									'<div class="diamond">' +
									'<img src="img/icon_diamond.png" class="search_pic"  />' +
									'</div>' +
									'<div class="num"><span>' + data[4].catory[j].num + '</span>元/次</div>' +
									'</div>' +
									'</div>'+
									'</li>';
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                            $('.lists').eq(4).append(result);
                            // 每次数据加载完，必须重置
                            me.resetload();
                        },1000);
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            }
        }
    });

	//点击排序出来的那一部分
	$(".choose_sort").click(function(){
		$(".class_sortContent").toggleClass("show");
		if($('.icon_sort').hasClass('icon-triangle')){
			$('.icon_sort').removeClass("icon-triangle").addClass("icon-triangle-copy")
		}else{
			$('.icon_sort').removeClass("icon-triangle-copy").addClass("icon-triangle")
		}
		
	})
	$(".class_sort li").click(function(){
		$(this).addClass("class_active").siblings().removeClass("class_active");
		var index=$(this).index();
		$(".class_sort span").removeClass("icon-gou").eq(index).addClass("icon-gou");
		var v=$(this).html()
		console.log(v)
	})
	//点击筛选出来的
$('.choose2').on('click', function(e) {
	var wh = $(document).height();
	var h = $(".ctt_headerSearch").outerHeight(true) + $(".searchSource_content").outerHeight(true) + $(".class_choose").outerHeight(true) + 9;
	console.log(h)
	$('.mask').css({ 'height': wh, "top": h + "px" }).toggle();
	$('.class_filterContent').css("top", h + "px").toggle();
});
$('.mask').on('click', function() {
	$('.mask').hide();
	$('.class_filterContent').toggle();
});
	
	//点击右侧标签部分
	$(".label_content a").click(function(){
		$(this).css({"border":"1px solid #1d9243","border-radius":"5px"});
		var index=$(this).index();
		$(".green_cha").eq(index).css("display","block")
	});
	$(".service_style div").click(function(){
		$(this).addClass("line_style").siblings().removeClass("line_style")
	})

      //选择所在地
        
        	mui.init();
        	var cityPicker = new mui.PopPicker({
						layer: 2
					});
					cityPicker.setData(cityData);
					var showCityPickerButton = document.getElementById('chooseCity');
					showCityPickerButton.addEventListener('tap', function(event) {
						cityPicker.show(function(items) {
							document.querySelector('#chooseCity .result-tips').style.display = "none";
							document.querySelector('#chooseCity .show-result').style.display = "block";
							document.querySelector('#chooseCity .show-result').innerText = items[1].text;
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);

	//选择学校类型
		mui.init();
			var picker = new mui.PopPicker({
				
						layer:2
					});
			 picker.setData([{value:'0',text:'985'},{value:'1',text:'211'},{"value":'2',text:'本科'},{"value":'3',text:'专科'}]);  
 var showCityPickerButton = document.getElementById('chooseSchool');
					showCityPickerButton.addEventListener('tap', function(event) {
						picker.show(function(selectItems) {
							document.querySelector('#chooseSchool .result-tips').style.display = "none";
							document.querySelector('#chooseSchool .show-result').style.display = "block";
							document.querySelector('#chooseSchool .show-result').innerText = selectItems[0].text;							
						});
					}, false);
})