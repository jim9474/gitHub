//리터럴(literal) : 코드에 쓰여있는 값
//모든 리터럴에는 각자의 타입이 있다!!!
//1.숫자(정수, 부동소수점수(=실수), 2진수, 8진ㅅ, 16진수)
//2.문자열
//3.불리언
//4.null
//5.undefined
//6.객체
//7.배열
//8.함수
//9.정규표현식

let v1 = 100;
console.log(v1, typeof v1);
let v6 = "hello";
console.log(v6, typeof v6);
let v7 = true;
console.log(v7, typeof v7);
let v8 = null;
console.log(v8, typeof v8);
let v9;
console.log(v9, typeof v9);
let v10 = {};
console.log(v10, typeof v10);
console.log(v10 instanceof Object);

let v11 = [];
console.log(v11, typeof v11);
console.log(v11 instanceof Array);

let v12 = function(){};
console.log(v12, typeof v12);
console.log(v12 instanceof Function);

let v13 = /abc/;
console.log(v13, typeof v13);
console.log(v13 instanceof RegExp);

let v14 = ``;
console.log(v14, typeof v14);
//console.log(v14 instanceof backtick);

//표현식(expression): 값으로 평가될 수 있는 모든것
//문장(statement) : 프로그램의 구성단위 / 최소실행단위
//토큰(token) : 문장의 구성단위, 문법적으로 더이상 쪼갤 수 없는 코드 요소

let vlet = 1+3;
//표현식 : 1+3, vlet, 1 , 3, vlet=1+3
//문장 : let vlet, , let vlet = 1+3(=>;이 없어서 값이 안됨)
//토큰 : let, vlet, =, 1, +,  3, ;
if(vlet2=1+3){ 
    //자바에서는 0이아닌 모든 숫자는 true봄
    //+if문 안에 true가 된다? => 값으로 인식이 된다.
    //값으로 쓸수 있다 = 표현식이다.
    console.log("vlet2=1+3은 표현식!");
}