var itemIndex = 0;
    var tab1LoadEnd = false;
    var tab2LoadEnd = false;

$(window).scroll(function(){
	if(!tab1LoadEnd){
		dropload.unlock();
    	dropload.noData(false);	
	} 
})


//点击取消清空搜索框
$(".ctt_cancel").click(function() {
	$(".hot_inp").val("");
});

//输入框输入内容搜索
$(".ctt_hot a").click(function() {
	$(".list_content").hide();
	$(".search_content").show();
})

var dropload;
//切换搜资源和搜索大咖
$(".searchSource_content .searchSource_left").click(function() {
	if(!dropload){
		dropload = drop();
	}
	var index = $(this).index();
	if(index==0){
		$(".ctt_searchBox").show();
		$(".ctt_searchBox2").hide();
		$(".ctt_none").hide();
	}else{
		$(".ctt_searchBox2").show();
		$(".ctt_searchBox").hide();
		$(".ctt_none").show();
	}
	$(this).addClass("searchSource_border");
	$(this).find("span").addClass("searchSource_green");
	$(this).siblings().removeClass("searchSource_border");
	$(this).siblings().find("span").removeClass("searchSource_green");
	
	
	var $this = $(this);
        itemIndex = $this.index();
        console.log( itemIndex)
       
         // 如果选中校园资源
        if(  itemIndex == '0'){
            // 如果数据没有加载完
            console.log(tab1LoadEnd)
            if(!tab1LoadEnd){
                // 解锁
                dropload.unlock();
                dropload.noData(false);
            }else{
                // 锁定
                dropload.lock('down');
                dropload.noData();
            }
        // 如果选中校园大咖
        }else if( itemIndex == '1'){
            if(!tab2LoadEnd){
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
    // 每页展示2个
    var num = 2;
    var pageStart = 0,pageEnd = 0;

    // dropload
    
    	var dropload = $('.search_content').dropload({
        scrollArea : window,
        initFn : function(me){
	        me.opts.initFnBefore();//必须执行
	        // some code ...
	        me.opts.initFnAfter();//必须执行
	    },
        loadDownFn : function(me){
            // 加载搜资源的数据
            if(  itemIndex == '0'){
            	
                $.ajax({
                    type: 'GET',
                    url: 'search.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;
                        var page = data[0].catory.length % num ? data[0].catory.length % num : num;
                        //var  = data[1].catory.length % num ? data[0].catory.length % num : num;
                        if(pageStart <= (data[0].catory.length - page )){
                        	console.log(data[0].catory.length)
                        	console.log(pageStart);
                        	console.log(pageEnd)
                            for(var j = pageStart; j < pageEnd; j++){
                               result+='<li>'+
									'<div class="search_bg"></div>'+
									'<div class="searchList_content">'+
										'<div class="searchList_title">'+
											'<span class="searchList_pic"><img src="img/class_picture.png" class="search_pic" /></span>'+
											'<span class="searchList_name">咕噜咕噜08</span>'+
											'<div class="searchList_city">'+
												'<span class="iconfont icon-zuobiao"></span>'+
												'<span>广州</span>'+
											'</div>'+
										'</div>'+
										'<div class="ctt_Piccontent">'+
											'<div class="ctt_pic">'+
												'<img src="img/'+data[0].catory[j].picture+'" class="search_pic">'+
												'<span class="ctt_consult"><span>'+data[0].catory[j].school+'</span></span>'+
											'</div>'+
											'<span class="ctt_serviceTitle"><span>服务标题&nbsp;:&nbsp;精准咨询，答您所需</span></span>'+
										'</div>'+
									'</div>'+
									'<div class="ctt_Pricecontent">'+
										'<div class="Pricecontent_left">'+
										'<span>￥'+data[0].catory[j].num+'元/次</span>'+
											'<span>[已售2687]</span>'+
										'</div>'+
										'<span class="Pricecontent_right">加入已选</span>'+
									'</div>'+
						       '</li>';
                                if((j + 1) >= pageEnd){
                                    // 数据加载完
                                    console.log(121112323)
                                    tab1LoadEnd = false;
                                  
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData(true);
                                    
                                    break;
                                }
                            }
                            // 为了测试，延迟1秒加载
                            setTimeout(function(){
                                $('.search_content .ctt_searchBox').append(result);
                                // 每次数据加载完，必须重置
                                me.resetload();
                            },1000);
                            
                            if( ( pageStart + num ) >= data[0].catory.length ){
                            	tab1LoadEnd = true;
                            }
                        } 
                        
                    },
                    error: function(xhr, type){
                        alert('Ajax error!');
                        // 即使加载出错，也得重置
                        me.resetload();
                    }
                });
            
           
            
            // 加载搜大咖的数据
           }else if(itemIndex== '1'){
           	
                $.ajax({
                    type: 'GET',
                    url: 'search.json',
                    dataType: 'json',
                    success: function(data){
                        var result = '';
                        for(var j = 0; j < data[1].catory.length; j++){
                        	console.log(data[1].catory.length)
                            result+= '<li class="recommend">'+
											'<div class="recommend_left ctt_recommendLeft">'+
												'<img src="img/per_banner01.jpg" class="search_pic">'+
											'</div>'+
											'<div class="ctt_recommendRight">'+
												'<div class="recommendRight_left">'+
													'<span>'+data[1].catory[j].name+'</span>'+
													'<span><strong class="searchSource_green">北京</strong>师范大学</span>'+
												'</div>'+
												'<div class="recommendRight_right">'+
													'<div class="ctt_address">'+
														'<span><img src="img/address.png" class="search_pic"></span>'+
														'<span>广州</span>'+
													'</div>'+
													'<div class="ctt_address ctt_Address">'+
														'<span><img src="img/flg.png" class="search_pic"></span>'+
														'<span>技能达人</span>'+
													'</div>'+
												'</div>'+
											'</div>'+
										'</li>'
										 if((j + 1) >= data[1].catory.length){
                                    // 数据加载完
                                    tab2LoadEnd = false;
                                    // 锁定
                                    me.lock();
                                    // 无数据
                                    me.noData();
                                    break;
                                }
							      
                        }
                        // 为了测试，延迟1秒加载
                        setTimeout(function(){
                             $('.search_content .ctt_searchBox2').append(result);
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
   })

//点击搜索热词
$(".search_list a").click(function() {
	$(".list_content").hide();
	$(".search_content").show();
	dropload.unlock();
    dropload.noData(false);
})
$(".class_choose li").click(function() {
	$(this).find("span:first-child").addClass("class_active");
	$(this).siblings().find("span:first-child").removeClass("class_active");

})
//点击排序出来的那一部分
$(".choose_sort").click(function() {
	$(".class_sortContent").toggle();
	if($('.icon_sort').hasClass('icon-triangle')) {
		$('.icon_sort').removeClass("icon-triangle").addClass("icon-triangle-copy")
	} else {
		$('.icon_sort').removeClass("icon-triangle-copy").addClass("icon-triangle")
	}

})
$(".class_sort li").click(function() {
	$(this).addClass("class_active").siblings().removeClass("class_active");
	var index = $(this).index();
	$(".class_sort span").removeClass("icon-gou").eq(index).addClass("icon-gou");
	setTimeout(function() {
		$(".class_sortContent").hide();
		$('.icon_sort').removeClass("icon-triangle-copy").addClass("icon-triangle")
	}, 3000)
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
$(".label_content a").click(function() {
	$(this).css({ "border": "1px solid #1d9243", "border-radius": "5px" });
	var index = $(this).index();
	$(".green_cha").eq(index).css("display", "block")
});
$(".service_style div").click(function() {
	$(this).addClass("line_style").siblings().removeClass("line_style")
})
//点击重置
$(".reset_box").click(function() {
	$(".price_box input").val("");
	$(".result-tips").show();
	$(".show-result").hide();
	$(".service_style div").removeClass("line_style");
})
//点击重置
$(".enure_box").click(function() {
	$(".class_filterContent").hide();
	$(".mask").hide();
})

////dropload事件搜索资源
//function dropload_resource(){
//	var count = 0;
//  // 每页展示2个
//  var number = 2;
//  var pagestart = 0,pageend = 0;
//  $('.searchResource_Content').dropload({
//      scrollArea : window,
//      loadDownFn : function(me){
//          $.ajax({
//              type: 'GET',
//              url: 'search.json',
//              dataType: 'json',
//              success: function(data){
//              	console.log(data.length)
//                  var result = '';
//                  count++;
//                  pageend = number * count;
//                  pagestart = pageend - number;
//
//                  for(var i = pagestart; i < pageend; i++){
//	                        result+='<li>'+
//							'<div class="search_bg"></div>'+
//							'<div class="searchList_content">'+
//								'<div class="searchList_title">'+
//									'<span class="searchList_pic"><img src="img/class_picture.png" class="search_pic" /></span>'+
//									'<span class="searchList_name">咕噜咕噜08</span>'+
//									'<div class="searchList_city">'+
//										'<span class="iconfont icon-zuobiao"></span>'+
//										'<span>广州</span>'+
//									'</div>'+
//								'</div>'+
//								'<div class="ctt_Piccontent">'+
//									'<div class="ctt_pic">'+
//										'<img src="img/'+data[i].picture+'" class="search_pic">'+
//										'<span class="ctt_consult"><span>'+data[i].school+'</span></span>'+
//									'</div>'+
//									'<span class="ctt_serviceTitle"><span>服务标题&nbsp;:&nbsp;精准咨询，答您所需</span></span>'+
//								'</div>'+
//							'</div>'+
//							'<div class="ctt_Pricecontent">'+
//								'<div class="Pricecontent_left">'+
//								'<span>￥'+data[i].num+'元/次</span>'+
//									'<span>[已售2687]</span>'+
//								'</div>'+
//								'<span class="Pricecontent_right">加入已选</span>'+
//							'</div>'+
//				       '</li>';
//                     if((i + 1) >= data.length){
//                          // 锁定
//                          me.lock();
//                          // 无数据
//                          me.noData();
//                          break;
//                      }
//                  }
//                  // 为了测试，延迟1秒加载
//                  setTimeout(function(){
//                      $('.searchResource_content').append(result);
//                      // 每次数据加载完，必须重置
//                      me.resetload();
//                  },1000);
//              },
//              error: function(xhr, type){
//                  alert('Ajax error!');
//                  // 即使加载出错，也得重置
//                  me.resetload();
//              }
//          });
//      }
//});
//}
//dropload_resource();
////dropload搜大咖
//function dropload_shot(){
//	
//var counter = 0;
//  // 每页展示2个
//  var num = 2;
//  var pageStart = 0,pageEnd = 0;
//$('.cttRecommend_content').dropload({
//      scrollArea : window,
//      loadDownFn : function(me){
//          $.ajax({
//              type: 'GET',
//              url: 'search2.json',
//              dataType: 'json',
//              success: function(data){
//                  var result = '';
//                  counter++;
//                  pageEnd = num * counter;
//                  pageStart = pageEnd - num;
//
//                  for(var j = pageStart; j < pageEnd; j++){
//	                        result+='<li>'+
//							'<div class="search_bg"></div>'+
//							'<div class="searchList_content">'+
//								'<div class="searchList_title">'+
//									'<span class="searchList_pic"><img src="img/class_picture.png" class="search_pic" /></span>'+
//									'<span class="searchList_name">咕噜咕噜08</span>'+
//									'<div class="searchList_city">'+
//										'<span class="iconfont icon-zuobiao"></span>'+
//										'<span>广州</span>'+
//									'</div>'+
//								'</div>'+
//								'<div class="ctt_Piccontent">'+
//									'<div class="ctt_pic">'+
//										'<img src="img/'+data[i].picture+'" class="search_pic">'+
//										'<span class="ctt_consult"><span>'+data[i].school+'</span></span>'+
//									'</div>'+
//									'<span class="ctt_serviceTitle"><span>服务标题&nbsp;:&nbsp;精准咨询，答您所需</span></span>'+
//								'</div>'+
//							'</div>'+
//							'<div class="ctt_Pricecontent">'+
//								'<div class="Pricecontent_left">'+
//								'<span>￥'+data[i].num+'元/次</span>'+
//									'<span>[已售2687]</span>'+
//								'</div>'+
//								'<span class="Pricecontent_right">加入已选</span>'+
//							'</div>'+
//				       '</li>';
//                     if((j + 1) >= data.length){
//                          // 锁定
//                          me.lock();
//                          // 无数据
//                          me.noData();
//                          break;
//                      }
//                  }
//                  // 为了测试，延迟1秒加载
//                  setTimeout(function(){
//                      $('.ctt_lists').append(result);
//                      // 每次数据加载完，必须重置
//                      me.resetload();
//                  },1000);
//              },
//              error: function(xhr, type){
//                  alert('Ajax error!');
//                  // 即使加载出错，也得重置
//                  me.resetload();
//              }
//          });
//      }
//});
//}
//dropload_shot()




	//ajax请求这一部分
	$(".class_title1 li").click(function() {
		
    });