/*함수*/
//자바스크립트는 태생적으로 함수기반언어
//함수는 객체.. 호출 할 수 있는 객체
//함수는 값(리터럴)이다. 
//=>변수에 저장도 가능 + 파라미터에 인자로 전달 할 수 있음
//선언식 함수는 값이 아니다.(문이다) 이 경우는 변수저장이나 인자전달 불가
//함수표현식은 앞에 const tr = function(){ } 이건 익명함수. function abc ()
//선언식함수는 function func () { }// 즉 변수부분에는 값이 없었음

//함수는 값이다. 함수표현식 func0
const func0 =function(a=3, b=5){
    return a+b;
}
console.log(func0); // [function : func0]//web에서 찍으면 코드가나옴
//function(a=3, b=5){return a+b;} 이렇게 출력된다는 말이 나옴

const str = ''+func0;//+접합연산이 되니까 문자열이됨
                        //+접합연산은 문자열이 최고
console.log(str);//web대신에 여기서 확인하려고 찍어본거

//1.함수선언문 = 선언적함수 =!!전역함수 =global function
//전역적으로 참조할 수 있다.
//가급적 최소로 만들어 사용하는게 좋음. 메모리 절약
function func1(a,b){
    return a-b;
}
console.log(func1(100,43));

//2.함수리터럴(값인 함수) 매개변수가 그대로 리터럴로 사용
const func2 = function(a,b){
    return a+b;
};
//호출은 func3. f3은 함수리터럴 내에서 사용하는 함수의 이름
//func3은 전역변수, f3은 함수의 지역변수, 스코프가 다르다.
const func3 = function f3(a,b) {
    return a+b;
};

//3.함수 생성자 : 사용 X
const func4 = new Function("a", "b", "return a+b");//인자2개, 바디부분
console.log(func4(3,5));

//4. 화살표 함수 (arrow funcion) :es6
const func5 = (a,b) => a+b;
//const func5 = function(a,b) {
//    return a+b;
//};

//함수 문장 vs 함수표현식
function func6() {
    console.log("func6");
}
func6(); //호출가능 위에는 전역함수임

(function func7() {
    console.log("func7");
});//이건 function이 아니라 function func7(){}을 둘러싸고 있는 값일 뿐
//func7();//따라서 이렇게 호출하지 못함.

(function (a,b) { //이름을 지운건 어차피 이름을 못부르니까 지움
    console.log(a+b);
})(3,5); //이렇게 출력을 해야함

let shit = function () {};
//리터럴이 무엇일까 ? = 코드상에 존재할 수 있는 값이다.

if((function() {return 1;})()) console.log("함수표현식");

//IIFE:즉시 호출 함수표현식
let result = (function() {
    return 1;
})();

//함수의 인자(arguments)
//arguments : 현재 실행중인 함수에 전달된 인자 배열
//arguments.lenght : 전달받은 인자 배열의 개수
//arguments.callee : 인자를 전달받아 현재 실행중인 함수
function func8() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.callee);
    console.log(''+arguments.callee);//callee는 호출당한 애
}
func8(3,5);
func8(3,5,7,9);

//함수 매개변수와 인자
function func9(a, b, c){
    return a+b;
}
//즉 인자가 많으면 자기가 알아서 무시해줌
//하지만 인자가 적은경우에는 안된다 라는 말임
console.log(func9(3,5,7,9));//8
console.log(func9(3,5,7));//8
console.log(func9(3,5));//8
console.log(func9(3));//3+undefined = Nan

//하지만 기본값을 주면 제대로 출력이 된다라는것
function func92(a=0, b=0, c=0){
    return a+b;
}
console.log(func92(3));//3

//가변인자 함수(Rest Parameter Function) :ES6
//인자가 몇개가 들어오던 하나의 배열로 받는다.
function func10(...args){
    console.log(args);
    //arguments : 현재 실행중인 함수에 전달된 인자 배열
    console.log(arguments);
    //arguments.lenght : 전달받은 인자 배열의 개수

    console.log(arguments.length);
}
func10(3);
func10(3,5);
func10(3,5,7);







//@@@@@@@@@@@@@@@@@@@@@@@@@@@여기서 부터는 정리를 해야한다@@@@@@@@@@@@@@

//콜백함수(Callback function)
//j/s에서는 파라미터에 값으로 전달되는 함수리터럴을 콜백함수라고 한다.
function hof(a,f){
    return a + f(a);
}//함수 선언문 :
const cb = function(a){
    return a ** 2;
};//함수 리터럴

console.log(hof(3,cb));//12

//예시2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const fa = function(a,f){
    return a+f();
};
const fb = function(a){
    return fa(a, function () {
        return a**2;//a의2승
    });
}
console.log(fb(3));//12@@@@@@@@@@@@@@@@@

//배열고차 함수 sort(정렬), map(), 
//filter(조건주고 추출), reduce
const arr = [1 ,2, 3, 4, 5];
console.log(arr);//1,2,3,4,5

//sort(function(a, b){return a-b}) : 오름차순 정렬
//sort(function(a, b){return b-a}) : 내림차순 정렬
const arrsort = arr.sort(function(a,b) {
    return b-a;
});
console.log(arrsort);//5,4,3,2,1

//map(function(ele){...}) : 각 에리먼트에 function의 작업을 수행
//arr이라는 배열이 이미 존재합니다.
//arr.map() 메서드가 호출되었습니다. 
//이 메서드는 새로운 배열을 생성하고, 배열의 각 요소에 대해 
//주어진 함수를 호출하여 새로운 값을 만듭니다.
//function(ele) { return ele * 2; } 함수는 각 배열 요소 ele를 받아서 
//해당 요소를 2배로 만들어 반환합니다.
//map() 메서드는 이 함수를 배열의 각 요소에 대해 호출하고, 
//각 요소를 2배로 만든 결과를 새로운 배열인 arr2x에 담습니다.
//최종적으로 arr2x에는 arr의 각 요소를 
//2배로 만든 값들이 담긴 새로운 배열이 생성되었습니다
const arr2x = arr.map(function(ele){
    return ele*2;
});
console.log(arr2x);

 //filter
 const arrlt6 = arr2x.filter(function(ele){
    return ele<6;
    //2배된 애들중 필터링 하겠다는 코드
 });
console.log(arrlt6);//[4,2]

//reduce : 배열요소들의 값을 누적
//첫번째인자 : 콜백함수, 두번재인자: 누적시작인덱스
//acc 누적값,  curr : 현재값
const arrsum = arrlt6.reduce(function(acc, curr){
    return acc+curr;
},0); //index0번째 부터 누적, 1
console.log(arrsum);


//함수체이닝(function chaining) : 함수를 연결해서 사용
//함수의 반환값이 다시 함수일때 
const arr2 = [1,2,3,4,5];
//그냥문법임 내림차수 //함수의 매개변수는 지역변수
console.log(
    arr2.sort(function(a,b){
        return b-a;//5,4,3,2,1 
    }).map(function(ele){
        return ele**2;//25,16,9,4,1 ele의 2승
    }).filter(function(ele){
        return ele>10; //25,16,
    }).reduce(function(acc, curr){
        return acc+curr;//25+16 = > 41
    }, 0)  
);
//화살표 코드로 만든 arr2임
const arr3 = [1,2,3,4,5];
console.log(
    arr3.sort((a,b) => b - a)
    .map(ele => ele**2)
    .filter(ele => ele>10)
    .reduce((acc, curr) => acc+curr, 0)  
);

//아스키 코드값 뽑기 a부터 e까지 97,98,99,100,101
const arr4value = arr4[0];
const ascvalue = arr4value.charCodeAt(0);
console.log(ascvalue);
const asciiValue = 'b'.charCodeAt(0);
console.log(asciiValue);
const asciiValue2 = 'c'.charCodeAt(0);
console.log(asciiValue2);

//함수체이닝 실습
//abcde => edcba로 변경
//sort b-a내림 // a-b가 오름
const arr41 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4.sort(function(a, b) {
    return b.charCodeAt(0) - a.charCodeAt(0);
}));



// 함수 체이닝 실습 1)
// ['a', 'b', 'c', 'd', 'e']를 ['e', 'd', 'c', 'b', 'a']로 변경
const arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(
    arr4.sort((a, b) => b.charCodeAt() - a.charCodeAt())
);

// 함수 체이닝 실습 2)
// ['a', 'b', 'c', 'd', 'e']를 ['33', '34', '35', '36', '37']로 변경
const arr5 = ['a', 'b', 'c', 'd', 'e'];
console.log(
    arr5.map(ele => ele.charCodeAt()-64)
);

// 함수 체이닝 실습 3)
// ['a', 'b', 'c', 'd', 'e']를 ['a', 'bb', 'ccc', 'dddd', 'eeeee']로 변경
const arr6 = ['a', 'b', 'c', 'd', 'e'];
console.log(
    arr6.map((ele, inx) => ele.repeat(inx+1))
)

// 함수 체이닝 실습 4)
// ['a', 'b', 'c', 'd', 'e']를 ['마', '라', '다', '나', '가']로 변경
const arr7 = ['a', 'b', 'c', 'd', 'e'];
const arr7Kor = {
     'a': '마',
     'b': '라',
     'c': '다',
     'd': '나',
     'e': '가',
};
console.log(
    arr7.map(kor => arr7Kor[kor])
);
 

// 함수 체이닝 실습 5)
// ['a', 'b', 'c', 'd', 'e']의 ASCII코드값의 총합 구하기
const arr8 = ['a', 'b', 'c', 'd', 'e'];
console.log(
    arr8.map(ele => ele.charCodeAt())
        .reduce((acc, curr) => acc + curr, 0)   
);