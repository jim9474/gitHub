window.onload = function() {
    /*
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function(event) {
        const result = document.getElementById("result");
        result.innerHTML = this.value + '버튼이 클릭됨!';
    });
    */

    // 실습) 버튼 중에서 출력된 버튼의 아이디를 result에 출력
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById("btn" + i);
    
        btn.addEventListener("click", function(event) {
            const result = document.getElementById("result");
            result.innerHTML = this.id + " 버튼이 클릭됨!";
        });
    }

    const btnplus = document.getElementById("btnplus");
    const tr = [];
    btnplus.addEventListener("click", function(event) {
        const result2 = document.getElementById("result2");
        const txt = document.getElementsByClassName("txt");
        for (let i = 0; i < txt.length; i++) {
            tr = txt[i].textContent;
            sum += tr[i];
            
        } 
        result2.innerHTML = sum;
    });


};
