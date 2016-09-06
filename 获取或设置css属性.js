/**
 * Created by Administrator on 2016/9/6 0006.
 */
$("document").ready(function(){
   $("h1").css({
       "font-size":"200%",
       "color":"#ffffff",
       "height":"100px",
       "width":"500px",
       "background-color":"#61b7ff",
       "border":"10px solid #003366"
   }) ;/*设置h1的属性*/
    $("#result").text($("h1").css("border"));/*将h1的属性赋给span元素并插入border的属性值*/

    $("h2").css({
        "font-size":"100%",
        "color":"#ffffff",
        "height":"100px",
        "width":"500px",
        "background-color":"orange"
    }) ;
    $("#another").append("this is another paragraph");
    $("h1").before("<em>这是加在h1前面的text文本</em>");
});;