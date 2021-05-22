// array: forEach((val, key)=>{})

const json = {
    a: {b: {c:1}},
    d: {e:2},
}

// 求沿着path路径走最后的值
// const path = ['a', 'b', 'c'];
const path = ['d', 'e']
let p = json;
path.forEach((a) => {
    p = p[a];
});
console.log('p', p)



