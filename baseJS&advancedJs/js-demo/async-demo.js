// 异步， callback回调函数
console.log(100);
setTimeout(()=>{
    console.log(200)
}, 1000);
console.log(300)

// 同步
console.log(100);
alert(200)
console.log(300)