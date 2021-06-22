function f1(a,b){
    console.log('this',this);
    console.log(a,b);
    return 'this is f1'
}
// const f2 = f1.bind({x:100}, 10, 20); // bind的第一个参数是this， 第二个参数的f1的参数
// const res = f2();
// console.log(res);

// 手写bind， 绑定在Function的prototype上
Function.prototype.bind1 = function(){
    const args = [...arguments]; //将所有的arg转换成数组
    console.log(args);
    // 获取this（数组的第一项并取出）
    const t = args.shift();
    const self = this; // this为fn1
    //返回一个函数
    return function(){
        return self.apply(t,args)
    }
}

const f2 = f1.bind1({x:100}, 10, 20);
const res = f2();
console.log(res);