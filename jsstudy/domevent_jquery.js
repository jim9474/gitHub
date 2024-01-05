$(function() {
    $(".btn").on("click", function() {
        $("#result").text($(this).val());
    });
});

$(function () {
    // $("#btn1").on("click", function() {
    //     $("#result").text($(this).val()+ '뉴스를 잘봐');
    // });
   
        // 합계 버튼 클릭 시 이벤트 처리
        $("#btnplus").click(function() {
            // 입력된 두 숫자를 가져와서 합을 계산
            var num1 = parseFloat($("#num1").val()) || 0;
            var num2 = parseFloat($("#num2").val()) || 0;
            
            // 합을 결과란에 출력
            $("#result2").text("합계: " + (num1 + num2));
        });
    
});