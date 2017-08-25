var itemIndex = 0;
var tab1LoadEnd = false;
var tab2LoadEnd = false;

//点击取消清空搜索框
$(".ctt_cancel,.icon_remove").click(function() {
	$(".hot_inp").val("");
});

//输入框输入内容搜索
$(".ctt_hot a").click(function() {
	$(".list_content").addClass("ctt_none");
	$(".search_content").show();
	if($(".searchSource_content span:first-child").hasClass("searchSource_border")) {
		$(".ctt_searchBox").eq(0).show().siblings(".ctt_searchBox").hide();
		//第一个搜资源走dropload事件
		dropload.resetload();
	} else {
		$(".ctt_searchBox").eq(1).show().siblings(".ctt_searchBox").hide();
		//搜大咖走dropload事件
		dropload.resetload();
	}
})
//点击确定
$(".enure_box").click(function() {
	$(".class_filterContent").hide();
	$(".mask").hide();
	alert(1)
})
//切换搜资源和搜索大咖
$(".searchSource_content .searchSource_left").click(function() {
	var $this = $(this);
	itemIndex = $this.index();
	console.log(itemIndex)

	$(this).addClass("searchSource_border");
	$(this).find("span").addClass("searchSource_green");
	$(this).siblings().removeClass("searchSource_border");
	$(this).siblings().find("span").removeClass("searchSource_green");

	$(".ctt_searchBox").eq(itemIndex).show().siblings(".ctt_searchBox").hide();

	// 如果选中校园资源
	if(itemIndex == '0') {
		// 如果数据没有加载完
		if(!tab1LoadEnd) {
			// 解锁
			dropload.unlock();
			dropload.noData(false);
		} else {
			// 锁
			dropload.lock('down');
			dropload.noData();
		}
		// 如果选中校园大咖
	} else if(itemIndex == '1') {

		if(!tab2LoadEnd) {
			// 解锁
			dropload.unlock();
			dropload.noData(false);
		} else {
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
var pageStart = 0,
	pageEnd = 0;

var count = 0;
// 每页展示2个
var num2 = 4;
var pageStart2 = 0,
	pageEnd2 = 0;

var dropload = $('.search_content').dropload({
	scrollArea: window,
	domDown: {
		domClass: 'dropload-down',
		domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
		domNoData: '<div class="dropload-noData">没有更多内容</div>'
	},
	loadDownFn: function(me) {
		//这里需要判断来回切换的是搜索热点还是搜索结果页，只有当搜索热点消失，搜索结果页出现的时候才走dropload事件
		if($(".list_content").hasClass("ctt_none")) {
			console.log(1)
			// 加载搜资源的数据
			if(itemIndex == '0') {

				$.ajax({
					type: 'GET',
					url: 'search.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						counter++;
						pageEnd = num * counter;
						pageStart = pageEnd - num;
						if(pageStart <= data[0].catory.length) {
							console.log(data[0].catory.length);
							console.log(pageStart);
							console.log(pageEnd);
							for(var j = pageStart; j < pageEnd; j++) {
								result += '<li>' +
									'<div class="search_bg"></div>' +
									'<div class="searchList_content">' +
									'<div class="searchList_title">' +
									'<span class="searchList_pic"><img src="img/class_picture.png" class="search_pic" /></span>' +
									'<span class="searchList_name">咕噜咕噜08</span>' +
									'<div class="searchList_city">' +
									'<span class="iconfont icon-zuobiao"></span>' +
									'<span>广州</span>' +
									'</div>' +
									'</div>' +
									'<div class="ctt_Piccontent">' +
									'<div class="ctt_pic">' +
									'<img src="img/' + data[0].catory[j].picture + '" class="search_pic">' +
									'<span class="ctt_consult"><span>' + data[0].catory[j].school + '</span></span>' +
									'</div>' +
									'<span class="ctt_serviceTitle"><span>服务标题&nbsp;:&nbsp;精准咨询，答您所需</span></span>' +
									'</div>' +
									'</div>' +
									'<div class="ctt_Pricecontent">' +
									'<div class="Pricecontent_left">' +
									'<span>￥' + data[0].catory[j].num + '元/次</span>' +
									'<span>[已售2687]</span>' +
									'</div>' +
									'<span class="Pricecontent_right">加入已选</span>' +
									'</div>' +
									'</li>';
								if((j + 1) >= data[0].catory.length) {
									// 数据加载完
									tab1LoadEnd = true;
									// 锁定
									me.lock();
									// 无数据
									me.noData();
									break;
								}
							}
							// 为了测试，延迟2秒加载
							setTimeout(function() {
								$('.search_content .searchResource_content').append(result);
								$(".dropload-down").css("margin-bottom", 0)
								// 每次数据加载完，必须重置
								me.resetload();
							}, 2000);
						}
					},
					error: function(xhr, type) {
						alert('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});

				// 加载搜大咖的数据
			} else if(itemIndex == '1') {
				$.ajax({
					type: 'GET',
					url: 'search.json',
					dataType: 'json',
					success: function(data) {
						var result = '';
						count++;
						pageEnd2 = num2 * count;
						pageStart2 = pageEnd2 - num2;
						//改的是下面这个字符串拼接
						if(pageStart2 <= data[1].catory.length) {
							for(var j = pageStart2; j < pageEnd2; j++) {
								console.log(data[1].catory.length);
								console.log(pageStart2);
								console.log(pageEnd2);
								result += '<li class="recommend">' +
									'<div class="recommend_left ctt_recommendLeft">' +
									'<img src="img/per_banner01.jpg" class="search_pic">' +
									'</div>' +
									'<div class="ctt_recommendRight">' +
									'<div class="recommend_title1">' +
									'<span class="recommend_name2">北京大学-郭测试用户录入</span>' +
									'</div><p class="recommend_p">关于欧if阿快递费哈萨克的发哈</p>' +
									'</div>' +
									'</li>'
								if((j + 1) >= data[1].catory.length) {
									// 数据加载完
									tab2LoadEnd = true;
									// 锁定
									me.lock();
									// 无数据
									me.noData();
									break;
								}

							}
							// 为了测试，延迟2秒加载
							setTimeout(function() {
								$('.search_content .cttRecommend_content').append(result);
								// 每次数据加载完，必须重置
								me.resetload();
							}, 2000);
						}
					},
					error: function(xhr, type) {
						alert('Ajax error!');
						// 即使加载出错，也得重置
						me.resetload();
					}
				});
			}
		}
	}
})
//}
//点击搜索热词
$(".search_list a").click(function() {
	$(".list_content").addClass("ctt_none");
	$(".search_content").show();
	if($(".searchSource_content span:first-child").hasClass("searchSource_border")) {
		$(".ctt_searchBox").eq(0).show().siblings(".ctt_searchBox").hide();
	} else {
		$(".ctt_searchBox").eq(1).show().siblings(".ctt_searchBox").hide();
	}
	dropload.resetload(); //这个重载
})
$(".class_choose li").click(function() {
	var index = $(this).index(".class_choose li");
//	if(index==1){
//	
//		
//		$(".searchResource_content").html("");
//		 
//		 dropload.unlock();
//	     dropload.noData(false);
//	     dropload.resetload();
//	}
	if($(this).index()!=0&&$(this).index()!=1){
		$(this).find("span:first-child").toggleClass("class_active");
	}else{
		$(this).find("span:first-child").addClass("class_active");
	}
	$(this).siblings().find("span:first-child").removeClass("class_active");
   if(index!=2){
	   $(".choose2 span:nth-of-type(2)").removeClass("filter_green").addClass("filter");
	   $(".class_filterContent").hide();
	   $(".mask").hide();
   }
   if($(".choose_sort span:first-child").hasClass("class_active")){
	   $(".choose_sort span:last-child").removeClass("icon_black").toggleClass("icon_down").toggleClass("icon_up")
   }else{
	   $(".choose_sort span:last-child").removeClass("icon_up").removeClass("icon_down").addClass("icon_black") 
	   $(".class_sortContent").hide();
   }
})

//点击排序出来的那一部分
$(".choose_sort").click(function() {
	$(">span:nth-of-type(2)",this).toggleClass("icon_down").toggleClass("icon_up");
	if($(".choose_sort span:nth-of-type(2)").hasClass("icon_down")){
		 $(".choose_sort span:nth-of-type(2)").removeClass("icon_down").addClass("icon_up");
		$(".class_sortContent").show();
	}else{
		$(".choose_sort span:nth-of-type(2)").removeClass("icon_up").addClass("icon_down");
		$(".class_sortContent").hide();
	}
	
})
$(".class_sort li").click(function() {
	$(this).addClass("class_active").siblings().removeClass("class_active");
	var index = $(this).index();
	$(".class_sort span").removeClass("icon-gou").eq(index).addClass("icon-gou");
	setTimeout(function() {
		$(".class_sortContent").hide();
		$('.icon_sort').removeClass("icon_up").addClass("icon-down")
	}, 3000)
})
//点击筛选出来的
$('.choose2').on('click', function(e) {
	$(">span:nth-of-type(2)",this).toggleClass('filter').toggleClass("filter_green")
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
//06-22新增

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
//06-19加入已选出来的
var popupWindow_height = $(".popupWindow_content").height();
$(".popupWindow_content").css({
	"WebkitTransform": "translateY(" + popupWindow_height + "px)",
	"position": "fixed",
	"left": 0,
	"bottom": 0,
	"zIndex": 1000,
	"background": "#fff"
})
var count=0;
$(document).on("click", ".Pricecontent_right", function() {
	$(".popupWindow_content").removeClass("add_Move").addClass("add_move");
	count++;
	console.log(count)
})
$(".popupWindow_title span").click(function() {
	$(".popupWindow_content").removeClass("add_move").addClass("add_Move")
})
$(".popupWindow_more").click(function() {
	$(this).toggleClass("popupWindow_up").toggleClass("popupWindow_down");
	if($(this).hasClass("popupWindow_down")) {

		$(".poopupWindow_box li:nth-of-type(2)").show();

	} else {
		$(".poopupWindow_box li:nth-of-type(2)").hide()
	}
})
$('.reduce').on('click', function() {
	var html = $(this).next('.value')
	var value = html.text()
	value = parseInt(value)
	value -= 1
	html.text(value)
	if(value<1){
		value=1;
		html.text(1)
	}
})
$('.add').on('click', function() {
	var html = $(this).prev('.value')
	var value = html.text()
	value = parseInt(value)
	value += 1
	html.text(value)
})
//超过16个字省略号显示
var arr=[];
for(var i=0;i<$(".popupWindow_content li").length;i++){
    var message=$(".popupWindow_content li").eq(i).find(".popupWindow_message span:nth-of-type(2)").html()
    arr.push(message);
    var length=arr[i].length;
	if(length>16){
		$(".popupWindow_content li").eq(i).find(".popupWindow_message span:nth-of-type(2)").html($(".popupWindow_content li").eq(i).find(".popupWindow_message span:nth-of-type(2)").html().substring(0,16)+"...")
	}

}

