/**
 * Created by Administrator on 2016/9/6 0006.
 */
$("document").ready(function(){
   var methods=["attr()","css()","html()","addClass()","removeClass()","hasClass()","toggleClass()"];
    var list="";
    for(var i= 0,len=methods.length; i<len;i++){
        list+="<li>"+methods[i]+"</li>";
    }
    $("#methods").html(list);
});