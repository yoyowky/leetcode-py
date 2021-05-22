/* 两种特殊情况：
1. num = 0;
2. num < 0;
**/
// base 10 -> base 7
var convertToBase7 = function(num) {
    if(num === 0) return "0"
    const sign = Math.sign(num);
    num = Math.abs(num);
    const stack = [];
    while(num !== 0){
        stack.push(num%7);
        num = Math.floor(num/7);
    }
    let res = '';
    while(stack.length){
        peek = stack.pop().toString(); // 得用变量才能拿到这个pop的元素
        res = res.concat(peek);
    }
    return sign<0? `-${res}` : res;
};

// base 10 -> base 2
var tenToTwo = function(num){
    if(num === 0) return 0;
    const sign = Math.sign(num); // 如果num<0, 把负号提取出来
    num = Math.abs(num);
    const stack = [];
    while(num !== 0){
        stack.push(num%2);
        num = Math.floor(num/2);
    }
    let res = '';
    while(stack.length){
        peek = stack.pop().toString();
        res = res.concat(peek);
    }
    return sign<0 ? `-${res}`:res;
};

console.log(tenToTwo(-35))