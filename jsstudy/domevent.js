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


    // 실습 4) li를 클릭하면 화면 변경색을 변경하고 result4에 색상명 출력
    const liselector = document.getElementsByClassName('col');
    const rs4 = document.getElementById("result4");
    for (let i = 0; i < liselector.length; i++) {
        liselector[i].addEventListener("click", function (event) {
            
            for (let j = 0; j < liselector.length; j++) {
                liselector[j].style.backgroundColor = "";
            }
            switch (i) {
                case 0:
                    liselector[i].style.backgroundColor = "red";
                    break;
                case 1:
                    liselector[i].style.backgroundColor = "blue";
                    break;
                case 2:
                    liselector[i].style.backgroundColor = "green";
                    break;
            }
            rs4.innerHTML = this.textContent; 
        });
    }


    // 실습 5) 체크한 과일명들을 result5에 출력
    const checkboxes = document.querySelectorAll('input[name="cb"]');
    const result5 = document.getElementById('result5');

    // 초기 출력
    updateResult();

    // 각 체크박스에 대해 change 이벤트 리스너 등록
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            // 체크박스 상태가 변경되면 결과 업데이트
            updateResult();
        });
    });

    // 결과 업데이트 함수
    function updateResult() {
        // 결과를 초기화합니다.
        result5.innerHTML = '';

        // 체크된 체크박스 요소들만 출력합니다.
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                result5.innerHTML += checkbox.value + '<br>';
            }
        });
    }

    // 실습 6) 선택한 숫자의 구구단을 result6에 출력
    
    const selElement = document.getElementById("sel");
    const result6 = document.getElementById("result6");
    
    selElement.addEventListener("change", function (event) {
        const selectedNumber = selElement.value;
        result6.innerHTML = "";
        for(let i=1; i<10; i++){
            result6.innerHTML += selectedNumber+" * "+i+" = "+selectedNumber*i+"<br>";
        }
        
    });
    
        
    // 실습 7) 버튼을 클릭하면 학생데이터를 테이블에 출력
    // 홍길동 100 100 100, 강감찬 90 90 90, 이순신 80, 80, 80
    document.getElementById('btnscore').addEventListener('click', function () {
    // 학생데이터 객체생성
    const studentsData = [
        { name: '홍길동', korean: 100, english: 100, math: 100 },
        { name: '강감찬', korean: 90, english: 90, math: 90 },
        { name: '이순신', korean: 80, english: 80, math: 80 }
    ];
    
    const tableBody = document.getElementById('tbl').getElementsByTagName('tbody')[0];
    
    // 데이터를 테이블에 출력
    for (let i = 0; i < studentsData.length; i++) {
        const student = studentsData[i];
        // tbody행 식별자선언
        const row = tableBody.getElementsByTagName('tr')[i];
        // i행의 td인덱스에 객체값 집어넣기  
        row.getElementsByTagName('td')[0].textContent = student.name;
        row.getElementsByTagName('td')[1].textContent = student.korean;
        row.getElementsByTagName('td')[2].textContent = student.english;
        row.getElementsByTagName('td')[3].textContent = student.math;
        }
    });
    

};
