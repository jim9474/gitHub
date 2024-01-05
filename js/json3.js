let jsonObjstr = `
    {
        "firstname": "길동",
        "lastname": "홍",
        "age": 20,
        "hobby": ["축구", "야구", "농구"]
    }
`;
// 역직렬화메소드 : 문자열 > 객체
const jsonObj = JSON.parse(jsonObjstr);
console.log(jsonObj.firstname);
jsonObj.firstname = "길순";
console.log(jsonObj.firstname);
console.log(jsonObj.hobby[1]);

// 직렬화메소드 : 객체 > 문자열
let jsonObjstr2 = JSON.stringify(jsonObj);
console.log(jsonObjstr2);

const jsonArr = [
    {"name": "홍길동", "age": 30},
    {"name": "이순신", "age": 20},
    {"name": "강감찬", "age": 40},
];
let jsonArrstr = JSON.stringify(jsonArr);
console.log(jsonArrstr);

const jsonArr2 = JSON.parse(jsonArrstr);
console.log(jsonArr2[1].age);

