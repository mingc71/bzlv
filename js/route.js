// JavaScript Document
$(document).ready(function(e) {
	filterFun();
});

/*路线选择*/
function filterFun(){
	$(".type").find("li").find("a").click(function(){
		$(this).addClass("click");
		$(this).parents("li").prevAll("li").find("a").removeClass("click");
		$(this).parents("li").nextAll("li").find("a").removeClass("click");
/*		$(this).css("clear"," none");
		$(this).parents("li").prevAll("li").css("clear"," none");
		$(this).parents("li").nextAll("li").css("clear"," none");
		$(this).parents("li").next("li").css("clear"," both");*/
	})
	$(".type").each(function() {
       var num = Number($(this).find("li").find("a").length);
	   var wid = Number($(this).find("li").width());
	   var Swid = num*wid;
	   if(Swid>650){
			$(this).find(".tpmore").find(".unfold").show();
		}
    });
	$(".unfold").click(function(){
		$(this).parents(".tpmore").prevAll("ul").css("max-height","100px");
		$(this).hide();
		$(this).nextAll(".away").show();
	})
	$(".away").click(function(){
		$(this).parents(".tpmore").prevAll("ul").css("max-height","30px");
		$(this).hide();
		$(this).prevAll(".unfold").show();
	})
}
