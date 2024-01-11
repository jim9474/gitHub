/* JSON 코딩평가 : 로컬스토리지를 활용한 메모장 만들기 */
// JS시험은 본 코딩평가로 대체합니다.
// 제출기한 : 1/12(일)
// 제출방법 : 완료 후 소스코드 압축하여 트렐로에 업로드
// jsmemo.html, jsmemo.js

// 화면 : 메모 등록화면, 메모 목록화면
// 기능
//   1. 메모리스트
//   2. 메모등록
//   3. 메모삭제
//   4. 메모수정
//   5. 메모상세
//   6. 메모검색(제목, 내용)

$(function() {

    $("#registBtn").on("click", function() {
        $("#regist")
            .css("display", "block");
    });
    $("#confirm").on("click", function() {
        $("#regist")
          .css("display", "none");
        addMemo();  
    });
    $("#cancel").on("click", function() {
        $("#regist")
        .css("display", "none");
    });
    $("#searchBtn").on("click", function() {
        showMemoList();
    });

});

// 메모 객체 생성자함수
function memo(title, content) {
    this.title = title;
    this.content = content;
}

// 로컬스토리지에서 메모목록 불러오기
function getMemoList() {
    return JSON.parse(localStorage.getItem("list")) || [];
}

// 로컬스토리지에 메모목록 저장하기
function saveMemoList(memoList) {
    localStorage.setItem("list", JSON.stringify(memoList));
}

// 메모 등록
function addMemo() {
    const sj = document.getElementById("subject").value;
    const ct = document.getElementById("content").value;

    if (sj.trim() === "" || ct.trim() === "") {
        alert("제목과 내용을 입력해 주세요!");
        return;
    }

    const newMemo = new memo(sj, ct);
    const memoList = getMemoList();
    memoList.push(newMemo);
    saveMemoList(memoList);

    showMemoList();
}

// 메모 목록 표시
function showMemoList() {
    const searchTxt = document.getElementById("searchTxt").value;
    const memoList = getMemoList();
    const memoItems = $("#list ul");

    memoItems.empty();

    memoList.forEach((memo, index) => {
        if (!searchTxt || memo.title.includes(searchTxt) || memo.content.includes(searchTxt)) {
            const li = $("<li>").text(memo.title);
            const deleteBtn = $("<button>삭제</button>");
            const updateBtn = $("<button>수정</button>");

            li.click(() => showMemoDetail(index));
            memoItems.append(li).append(deleteBtn).append(updateBtn);
        }
    });

}

// 메모 상세 내용 표시
function showMemoDetail(index) {
    const memoList = getMemoList();
    const memo = memoList[index];

    // 상세 내용 표시
    $("#detail").html(`<h3>${memo.title}</h3><p>${memo.content}</p>`);

}