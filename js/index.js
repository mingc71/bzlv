// JavaScript Document
$(document).ready(function(e) {
	banner();
	tab();
	shou();
	tab_hover();
});
function banner(){
	$('#wrap').marquee({
            auto: true,
            interval: 3000,
            speed: 500,
            showNum: 3,
            stepLen: 1
        });
	$(".flexslider").flexslider({
			slideshowSpeed: 4000, //展示时间间隔ms
			animationSpeed: 400, //滚动时间ms
			touch: false //是否支持触屏滑动
		});
	$('#wrap4').marquee({
            auto: false,
            speed: 1000,
            showNum: 4,
            stepLen: 4,
            prevElement: $('#prev4'),
            nextElement: $('#next4')
        });
}
function tab(){
	var num = $(".js_connect>.js_block").length;
	$(".js_connect").css({
		"width":1100*num+"px"
	});
	$(".js_tab_title>ul>li").hover(function(){
		$(this).addClass("active");
		$(this).prevAll("li").removeClass("active");
		$(this).nextAll("li").removeClass("active");
		
		var n = $(this).index();
		var connect = $(this).parent().parent().next();
		/*connect.css({
			"marginLeft":-500*n+"px"
		});*/
		connect.animate({
			"marginLeft":-1100*n+"px"
		},{
			duration:200,queue:false
		});
	},function(){});
}

function shou(){
	$(".tu:first-child").addClass("active1");
	$("#shou").children(".tu").hover(function(){
		$(this).prevAll(".tu").children(".tu_span").fadeOut(200);
		$(this).nextAll(".tu").children(".tu_span").fadeOut(200);
/*		$(this).prevAll(".tu").removeClass("active1");
		$(this).nextAll(".tu").removeClass("active1");
		$(this).addClass("active1");*/
		$(this).prevAll(".tu").animate({"width":"100px"},{
			duration:200,queue:false
		});
		$(this).nextAll(".tu").animate({"width":"100px"},{
			duration:200,queue:false
		});
		$(this).animate({"width":"400px"},{
			duration:200,queue:false
		});
		$(this).children(".tu_span").fadeIn({
			duration:200,queue:false
		});
	},function(){});
}
function tab_hover(){
	$(".css_tab1").hover(function(){
		$(".css_tab5").css("display","none");
		$(".css_tab6").css("display","none");
		$(".css_tab4").css("display","block");
	});
	$(".css_tab2").hover(function(){
		$(".css_tab5").css("display","block");
		$(".css_tab6").css("display","none");
		$(".css_tab4").css("display","none");
	});
	$(".css_tab3").hover(function(){
		$(".css_tab5").css("display","none");
		$(".css_tab6").css("display","block");
		$(".css_tab4").css("display","none");
	});
}

