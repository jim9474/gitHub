$(function() {
    $("*").css("font-size","1em");
    $("#ul1").css("background-color","orange");
    $(".lis").css("font-weight","bold");
    $("#ul1 .lis").css("background-color","#ccc");
    $("p:first").css("background-color","green");
    $("[style]").css("font-size","1.1em");
    $("p[id='p1']").css("font-size","1.5em");
    $("p[id!='p1']").css("font-size","1.5em");
    $(":button").css("background-color","red");
    $("#table1 tr:even").css("background-color","#efefef");
    $("#table1 tr:odd").css("background-color","#333333");
});