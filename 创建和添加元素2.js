/**
 * Created by Administrator on 2016/9/5 0005.
 */
$(document).ready(function(){
   $("<h2>").text("这是添加的另一个段落").hide();
    $("#tyr").after("<h2>");
    $("<h2>").insertAfter("#tyr");
    $("<h2>").show(slow);
});