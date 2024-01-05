/* 빌트인 객체 */

// global or globalThis (in nodejs)
// console.log(globalThis);    // global object (node의 전역객체)
// console.log(this);  // {}
// console.log(globalThis === this);   // false
// console.log(module.exports === this);   // node 전역스코프에서의 this

// window (in browser)
// console.log(window);
// console.log(this);
// console.log(window === this);

let uri = 'http://www.google.com?name=홍길동';
let encodeUri = encodeURI(uri);
console.log(encodeUri); // http://www.google.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99
let decodeUri = decodeURI(encodeUri);
console.log(decodeUri); // http://www.google.com?name=홍길동
let encodeUriIComponent = encodeURIComponent(uri);
console.log(encodeUriIComponent);   // http%3A%2F%2Fwww.google.com%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99
let decodeUriIComponent = decodeURIComponent(encodeUriIComponent);
console.log(decodeUriIComponent);   // http://www.google.com?name=홍길동
