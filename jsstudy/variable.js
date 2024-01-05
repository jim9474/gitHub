/*변수*/
//변수는 선언, 초기화, 할당의 단계를 거쳐서 사용한다.
//자바 스크립트에서는 선언만한 변수를 자동으로 undefined로 초기화한다.

//1.선언 => var, let, const는 데이터타입이 아님 변수임
var v1;
let l1;

const c1 = null;
//상수는 초기화=> 데이터타입을 이떄 주는거임. 초기화 후에 값 변경 불가능
console.log(v1);
console.log(l1);
console.log(c1);

//2.초기화 => 값을 넣어줌 값을 넣어줘야지만 이때 데이터타입이 지정된다.!
v1 = 1; //숫자 데이터타입이 이렇게 들어옴
l1 = 'Hello'; //문자열데이터타입이 이떄 들어옴
console.log(v1);
console.log(l1);
console.log(c1);

//3. 할당
v1 = 2;
l1 = 'Hi!';
//c1 = "안녕!"; //error 상수는 값할당 불가

//변수의 타입은 값이 초기화되거나 할당 될때 결정된다.
//즉 let, var, const가 타입을 주는게 아님. 1,:'hello'이런게 값=데이터타입을 
let v2= 1;
console.log(`v2=>${v2}, type=>${typeof v2}`);//v2의 값과 v2의 타입을 찍는 템플릿
v2 = 'Hello';
console.log(`v2=>${v2}, type=>${typeof v2}`);
v2 = true;
console.log(`v2=>${v2}, type=>${typeof v2}`);

//호이스팅(Hoisting)
//변수나 함수를 선언하지 않아도 해당 블럭 상단에 선언해 준다.
//즉, 선언문을 끌어올려 준다.
console.log(v6); //밑에 v6없으면 에러가 나옴. 선언도 안하면 어떻게 하냐
var v6;//선언을 밑에서 했지만 console.log위에 한것처럼 끌어올려준다.
//let v6;//==>얘는 호이스팅을 막음. var만 호이스팅이 가능함
//const,let 둘다 호이스팅을 막아버림
//호이스팅 : 코딩실수를 눈감아줌, 코딩편의성을 주기 위해서임
//함수도 호이스팅이 가능함
hello();
function hello() {
    console.log("hello");
}
//1.hello함수를 호출
//2. hello함수가 없네.. 코드안에 hello함수 정의가 있는지 검색
//3. hello함수 정의를 상단으로 끌어오림(호이스팅)

//변수의 스코프(scope) : 변수를 사용 할 수 있는 범위(영역)
//자바에서는 지역변수 / static변수 / non-static변수였음
//스크립트에서는 전역(global), 함수(function), 블럭(block) 3가지 스코프
//함수, 블럭스코프를 지역(local)스코프라 부르기도 한다. = 함수, 블럭의 지역변수다 느낌

//전역스코프 => 함수/블럭안에서 선언하지 모든 것들은 전역스코프
//파일내에서 전부 사용 할 수 있다.
var gv = "gv";
let gl = "gl";
const gc = "gc";

//함수 스코프 : 함수내에서 사용한 변수, 함수내에서만 참조가능
function fscope(){
    var fv = "fv";
    let fl = "fl";
    const fc = "fc";
}

//블럭 스코프 : 블록내에서 사용한 변수, 블록내에서만 참조가능(사용가능)
//블럭은  for문이랑 if문 블록도 해당이 된다.
{
    var bv = "bv"; //!!블럭내에서 var로 선언한것은 전역변수!!!
    let bl = "bl";
    const cl = "cl";
}
console.log(gv);
console.log(gl);
console.log(gc);
//함수안의 것들은 전부 에러
//console.log(fv);
//console.log(fl);
//console.log(fc);
//블럭도 전부 에러지만 var만 빼고 에러나옴
console.log(bv);
//console.log(bl);
//console.log(c1);