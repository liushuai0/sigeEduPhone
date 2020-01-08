$(function(){
	//滚动文字
	var index = 0;
	function topScroll() {
		if (index > 2) {
			index = 0
		}
		$(".recome_slow").css({
			"transform": "translate3d(0px, " + index * -30 + "px, 0px)"
		})
		index++;
	}
	setInterval(topScroll, 2000)
	//轮播图处理
	$.ajax({
		type: "post", //请求方式
		url: "http://admin.jrjl.net/api/home/mobile/index",
		dataType: "json",
		data: {
	
		}, //请求参数
		beforeSend: function() {
			//请求前的处理
		},
		success: function(res) {
			console.log(res);
			
			//快讯处理
			let kuaixunList=res.data.kuaixunlist.data
			$("#kuaixun").append(res.data.kuaixunlist.title)
			$.each(kuaixunList,function(index,value){
				$("#kuaixunList").append("<div><a class='kuaixuntext' href='detail.html?id="+kuaixunList[index].id+"'>"+kuaixunList[index].title+"</a></div>")
			})
			//顶部轮播
			let luoboList=res.data.lunbolist
			$.each(luoboList,function(index,value){
				$("#luoboList").append("<div class='swiper-slide'><img src='"+luoboList[index].thumbnail+"' onclick='swiperTo("+luoboList[index].id+")' style='width: 100%;height:auto'></div>")
			})
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction : false,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
					
			})
			//底部轮播
			
			$.each(luoboList,function(index,value){
				
				$("#luoboListbottom").append("<div class='swiper-slide'><img src='"+luoboList[index].thumbnail+"' onclick='swiperTo("+luoboList[index].id+")' style='width: 100%;height:auto'><div class='luobotitle'><a class='lunbobottom_title' href='detail.html?id="+luoboList[index].id+"'>"+luoboList[index].title+"</div></div>")
			})
			var mySwiper = new Swiper('.swiper-containerbottom', {
				autoplay: 2000,//可选选项，自动滑动
				loop: true,
				autoplayDisableOnInteraction : false,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
					
			})
			
		},
	})
})