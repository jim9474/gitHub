// 실습 1) 키보드 r키를 누르면 화면 배경을 red로 변경
//         키보드 b키를 누르면 화면 배경을 blue로 변경
//         키보드 g키를 누르면 화면 배경을 green로 변경
window.onkeyup = e => {
    if (e.key === "r") {
        document.body.style.backgroundColor = "red";
    } else if (e.key === "b") {
        document.body.style.backgroundColor = "blue";
    } else if (e.key === "g") {
        document.body.style.backgroundColor = "green";
    }
};

// 실습 2) #txt1에 글자를 입력하면 #sp1에 똑같이 출력되도록
const txt1 = document.querySelector("#txt1");
txt1.addEventListener('input', function (e) {
    const sp1 = document.getElementById("sp1");
    sp1.innerHTML = e.target.value;
});

// 실습 3) 마우스를 클릭하면 #sp2에 클릭한 x, y 좌표를 출력
const sp2 = document.getElementById("sp2");
function clickMouse(e) {
    sp2.textContent = `X: ${e.clientX}, Y: ${e.clientX}`;
}
window.onclick = clickMouse;

// 실습 4) 화면의 클릭한 곳에 가로10px, 세로10px 노란색 상자를 표시
function clickSquare(e) {
    square(e.clientX, e.clientY);
}
function square(x, y) {
    const sqaure = document.createElement("div");
    sqaure.style.backgroundColor = "yellow";
    sqaure.style.width = "10px";
    sqaure.style.height = "10px";
    sqaure.style.position = "absolute";
    sqaure.style.left = x + "px";
    sqaure.style.top = y + "px";
    document.body.appendChild(sqaure); 
}
document.onclick = clickSquare;