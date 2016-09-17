$(document).ready(function(){
    $("#address").focus(function() {
        var txtValue=$(this).val();//获取地址文本框的值
        if (txtValue=="请输入邮箱地址") {
            $(this).val("");
        }
    });

    $("#address").blur(function(){
       var txtValue=$(this).val();//获取文本框的值
        if(txtValue==""){
            $(this).val("请输入邮箱地址");
        }
    });

    $("#password").focus(function() {
        var txtValue=$(this).val();//获取地址文本框的值
        if (txtValue=="请输入邮箱密码") {
            $(this).val("");
        }
    });

    $("#password").blur(function(){
        var txtValue=$(this).val();//获取文本框的值
        if(txtValue==""){
            $(this).val("请输入邮箱密码");
        }
    });
});