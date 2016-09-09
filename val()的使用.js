/**
 * Created by Administrator on 2016/9/9 0009.
 */
$(document).ready(function(){
   $("#address").on("focus",function(){//此句还可以改为$("#address").focus(function(){... ...});
       var txtValue=$(this).val();//获取地址文本框的值
       if(txtValue=="请输入邮箱地址"){
           $(this).val("");
       }
   });

$("#address").blur(function(){
    var txt_value = $(this).val();//获取文本的值
    if (txt_value == "") {
        $(this).val("请输入邮箱地址");
    }
  });

    $("#password").on("focus",function(){//此句还可以改为$("#address").focus(function(){... ...});
        var txtValue=$(this).val();//获取地址文本框的值
        if(txtValue=="请输入邮箱密码"){
            $(this).val("");
        }
    });

    $("#password").blur(function(){
        var txt_value = $(this).val();//获取文本的值
        if (txt_value == "") {
            $(this).val("请输入邮箱密码");
        }
    });
});
