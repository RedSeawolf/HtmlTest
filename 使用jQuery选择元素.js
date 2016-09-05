$(document).ready(function(){
	$(".item").css("color","blue");
	$("#menu").find("li .item p").css("color","red");
	//$("item p").css("color","red");//同上
	//$("#menu .item p").css("color","red");//在此处会报错
	$("#email").css("border","10px solid blue");
	$("#text").css("border","20px solid  orange");/*使用input中的id为text来改变css样式*/
	$("body").css("background","gray");
	$("li:eq(2)").css("font-family","微软雅黑");/*用数组中的概念来改变li中的第3个元素*/
});