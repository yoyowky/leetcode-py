// // 值类型， Values
// let a = 10;
// let b = a;
// b=300;
// console.log(a) // 10

// 引用类型， References
let a = {age:20};
let b = a;
b.age = 32;
console.log(a.age); // 32

let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]


