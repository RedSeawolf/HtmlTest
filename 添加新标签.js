/**
 * Created by Administrator on 2016.09.05.0005.
 */
$(document).ready(function(){
    $("h1").prepend("<em>加在前面</em>");//在被选元素的结尾插入内容
    $("h1").append("<em>加在后面</em>");//在被选元素的开头插入内容
   $("h1").after("<h2>这是添加在后的标签</h2>");//在被选元素之后插入内容
    $("h1").before("<h3>这是添加在前的标签</h3>");//在被选元素之前插入内容
});