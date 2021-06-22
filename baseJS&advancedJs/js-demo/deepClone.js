// deep clone

const obj = {
    age:20,
    name: 'xxx',
    address: {
        city: "beijing"
    },
    arr: ['a','b','c']
}

const arr = [1,2,4,3,2,[2,2]];
const obj1 = obj;
obj.address.city = 'shanghai'
console.log(obj.address.city);


const deepClone = (obj={})=>{
    // 如果不是 对象或者数组，直接返回
    if(typeof obj !== 'object' || obj == null) return obj;
    let result;
    // 设置result的初始值，数组和对象不一个类型
    if(obj instanceof Array){
        result = [];
    } else {
        result = {};
    }

    for(let key in obj){
        // 保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}

// console.log(deepClone(obj))

const obj2 = deepClone(obj);
obj.address = 'chengdu';
console.log(obj.address);
