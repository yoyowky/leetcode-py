// // 函数作为返回值
// function create(){
//     let a = 100;
//     return function(){
//         console.log(a)
//     }
// }
// let fn = create();
// let a = 200;
// fn(); // 100

// 函数作为参数
function print(fn){
    let a=200;
    fn()
}
let a=100;
function fn(){
    console.log(a)
}
print(fn); // 100
// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不实在执行的地方