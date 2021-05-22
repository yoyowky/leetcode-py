// Prototype chain

// const obj = {};
// const func = () => {};
// const arr = [];

//如果A沿着原型链能找到B.prototype,则 A instanceof B为true
//如果A对象上没有x属性，则沿着原型链找x属性
// const obj = {};
// Object.prototype.x = "x";
// const func = () => {};
// Function.prototype.y = "y";


// 面试1: How to Implement the instanceof in Javascript?
// https://helloacm.com/how-to-implement-the-instanceof-in-javascript/#:~:text=In%20Javascript%2C%20the%20operator%20instanceof,of%20the%20object's%20prototype%20chain.&text=2%203%204-,console.,))%3B%20%2F%2F%20true%20console.
// const instanceOf = (x,y) => {
//     let p = x;
//     while(p){
//         if(y.prototype === p) return true;
//         p = p.__proto__;
//     }
//     return false;
// }

// 面试2:
var foo = {};
var F = function(){};

Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a); // "value a"
console.log(foo.b); // undefined
console.log(F.a); // "value a"
console.log(F.b); // "value b"