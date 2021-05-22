// add
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("hello");
let o = {a:1, b:2};
mySet.add(o);
mySet.add({a:1, b:2}); // 这个新添加的对象和o不一样！！

// has
const has = mySet.has(5);
const has1 = mySet.has(o);

// delete
mySet.delete(5);

// size
const size = mySet.size;
console.log('mySet', mySet)

// 遍历set
for(let item of mySet) console.log("item", item);
// for(let item of mySet.keys()) console.log("item", item);
// for(let item of mySet.values()) console.log("item", item); // set中key和value一样


// set to array
const myArray = [...mySet];
const myArray2 = Array.from(mySet);

// array to set
const mySet2 = new Set([1,2,3,4]);

//intersection 求交集
const set = new Set([...mySet].filter(item => mySet2.has(item)));

// 求差集
const diff = new Set([...mySet].filter(item => !mySet2.has(item)));