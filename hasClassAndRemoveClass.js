/**
 * Created by 田 on 2016.09.05.0005.
 */
$(document).ready(function(){
        $("#home").addClass("selected");
    $("button").click(function(){
     $("#home").removeClass("selected");
  });
    var itemClass=$("ul").hasClass("item");
    alert(itemClass);
});