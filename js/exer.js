const obj = {};
const parent = { x: 1 };
obj.__proto__;
obj.__proto__ = parent;
console.log(obj.x);
console.log(parent.__proto__ === Object.prototype);

console.log();

const str = Object.create(null);
console.log(str.__proto__);
console.log(Object.getPrototypeOf(str));

console.log();

const obj1 = {};
const parent1 = { x: 1 };
Object.getPrototypeOf(obj1);
Object.setPrototypeOf(obj1, parent1);
console.log(obj1.x);

console.log();

console.log((function() {}).hasOwnProperty('prototype'));
console.log({}.hasOwnProperty('prototype'));
