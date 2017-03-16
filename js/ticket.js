// JavaScript Document
$(document).ready(function(e) {
	moreFun();
	mchiceFun();
	hotFun();
});

//更多是否出现
function moreFun(){
	$(".tmore").each(function(){
		var num = $(this).prevAll(".detail_ticket").find("ul").length;
		if(num<6){
			$(this).find("a").hide();
		}
	})
	
	var $a = $(".tmore").find("a");
	//var Ytext = $a.html();
		$a.each(function(){
			var Ytext = $(this).html();
			$(this).click(function(){
				if($(this).html()=="收起▲"){
					$(this).parents(".tmore").prevAll(".detail_ticket").animate({"max-height":"305"},100);
					$(this).html(Ytext);
				}else{
					$(this).parents(".tmore").prevAll(".detail_ticket").animate({"max-height":"10000px"},500);
					$(this).html("收起▲");
				}
			});
		})
}

//多选切换
function mchiceFun(){
	$(".mchice").click(function(){
		$(this).parents(".more").css("display","none");
		$(this).parents(".more").nextAll(".check").css("display","block");
		$(this).parents(".more").prevAll(".start").addClass("hide");
		$(this).parents(".more").prevAll(".then").removeClass("hide");
	});
	$(".res").click(function(){
		$(this).parents(".check").css("display","none");
		$(this).parents(".check").prevAll(".more").css("display","block");
		$(this).parents(".check").prevAll(".start").removeClass("hide");
		$(this).parents(".check").prevAll(".then").addClass("hide");
	})
	//单选赋值
	$(".start").find("a").click(function(e) {
        $(this).parents(".start").nextAll(".end").removeClass("hide");
		$(this).parents(".start").addClass("hide");
		$(this).parents(".start").nextAll(".more").hide();
		var nr = $(this).html();
		$(this).parents(".start").nextAll(".end").find(".end_bor").html(nr);
    });	
	$(".away").click(function(e) {
        $(this).parents(".end").addClass("hide");
		$(this).parents(".end").prevAll(".start").removeClass("hide");
		$(this).parents(".end").nextAll(".more").show();
    });
	//多选赋值
	$(".T_checked").click(function(e) {
        if($(this).attr("data-checked")=="no"){
			$(this).attr("data-checked","yes");
		}else{
			$(this).attr("data-checked","no");
		}
		
		if($(this).attr("data-checked")=="yes"){
			$(this).css("color","red");
		}else{
			$(this).css("color","#333");
		}
    });
	
	$(".sub").click(function(e) {
		var Dnr=" "; 
		$(this).parents(".check").prevAll(".then").find("span").each(function() {
            if($(this).attr("data-checked")=="yes"){
			Dnr=Dnr+" "+$(this).html();
			}
        });
		console.log(Dnr);
		$(this).parents(".check").prevAll(".end").find(".end_bor").html(Dnr);
        $(this).parents(".check").prevAll(".then").addClass("hide");
		$(this).parents(".check").prevAll(".end").removeClass("hide");
		$(this).parents(".check").hide();
		//$(this).parents(".check").prevAll(".more").show();
    });
}

//热门排行切换
function hotFun(){
	$(".view").hover(function(e) {
/*        $(this).find("img").css("width","60px");
		$(this).find(".view_text").css("width","140px");*/
		$(this).find("img").animate({"width":"60px"},200);
		$(this).find(".view_text").animate({"width":"140px"},200);
    },function(){
		$(this).find("img").animate({"width":"0px"},200);
		$(this).find(".view_text").animate({"width":"185px"},200);
		});
}


