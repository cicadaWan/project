//点击取消清空搜索框
$(".ctt_cancel").click(function() {
	$(".hot_inp").val("");
});

//输入框输入内容搜索
$(".ctt_hot a").click(function() {
	$(".list_Content").hide();
	$(".search_content").show();
	drop();
})
//点击推荐热词
$(".search_list a").click(function() {
	$(".list_Content").hide();
	$(".search_content").show();
	drop();
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
//点击确定
$(".enure_box").click(function() {
	$(".class_filterContent").hide();
	$(".mask").hide();
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

	layer: 1
});
picker.setData([{ value: '0', text: '985' }, { value: '1', text: '211' }, { "value": '2', text: '本科' }, { "value": '3', text: '专科' }]);
var showCityPickerButton = document.getElementById('chooseSchool');
showCityPickerButton.addEventListener('tap', function(event) {
picker.show(function(selectItems) {
	document.querySelector('#chooseSchool .result-tips').style.display = "none";
	document.querySelector('#chooseSchool .show-result').style.display = "block";
	document.querySelector('#chooseSchool .show-result').innerText = selectItems[0].text;
});
}, false);
   function drop(){
   	//下拉刷新
var counter = 0;
    // 每页展示3个
    var num = 3;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.search_content').dropload({
        scrollArea : window,
          domDown : {
         domClass   : 'dropload-down',
         domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
          domNoData  : '<div class="dropload-noData">没有更多内容</div>'
      },
        loadDownFn : function(me){
            $.ajax({
                type: 'GET',
                url: 'searchSecond.json',
                dataType: 'json',
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    for(var i = pageStart; i < pageEnd; i++){
	                        result +=  '<li>'+
										'<div class="search_bg"></div>'+
										'<div class="searchList_content">'+
											'<div class="searchList_title">'+
												'<span class="searchList_pic"><img src="img/class_picture.png" class="search_pic" /></span>'+
												'<span class="searchList_name">咕噜咕噜08</span>'+
												'<div class="searchList_city">'+
													'<span class="iconfont icon-zuobiao"></span>'+
													'<span>'+data[i].city+'</span>'+
												'</div>'+
											'</div>'+
											'<div class="ctt_Piccontent">'+
												'<div class="ctt_pic">'+
													'<img src="img/personal_bg.png" class="search_pic">'+
													'<span class="ctt_consult"><span>广州大学</span></span>'+
												'</div>'+
												'<span class="ctt_serviceTitle"><span>服务标题&nbsp;:&nbsp;精准咨询，答您所需</span></span>'+
											'</div>'+
										'</div>'+
										'<div class="ctt_Pricecontent">'+
											'<div class="Pricecontent_left">'+
												'<span>￥20元/次</span>'+
												'<span>[已售2687]</span>'+
											'</div>'+
											'<span class="Pricecontent_right">加入已选</span>'+
										'</div>'+
									'</li>';
                        if((i + 1) >= data.length){
                        	$(".dropload-noData").html("没有更多内容")
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                          
                            break;
                        }
                    }
                      
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.searchResource_content').append(result);
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
});
   }
