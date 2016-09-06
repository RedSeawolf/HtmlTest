/**
 * Created by Administrator on 2016/9/6 0006.
 */
$("document").ready(function(){
    var newLI;
   $("#contact a").attr({
       "href":"https://www.baidu.com",
       "title":"访问百度了解更多",
       "rel":"me",
       "id":"baidu"
   });
    newLI=$("<li>").text($("#contact a").attr("title"));
     $("ul").append(newLI);

});