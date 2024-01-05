$(function() {
    // var btn1 = document.getElementById("btn1"); - dom 코드
    // btn1.addEventListener("click", function() {
    //      btn1.value = "변경됨!";
    // });
    
   $("#btn1").click(function(){
        $(this).val('변경됨!'); 
   });
   
   // DOM => document.createElement("P")
   // jQuery => $("P")
});