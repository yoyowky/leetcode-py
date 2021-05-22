// 去重
const arr = [1,1,2,2];

// array to set
// const arr2 = new Set(arr);

// set to array:
// const arr2 = Array.from(new Set(arr)); // method 1
const arr2 = [...new Set(arr)];  // method 2
console.log('arr2', arr2)

// 判断元素是否在集合中： set.has(val)
const set = new Set(arr);
const has = set.has(1);

//求交集
const set2 = new Set([2,3]);
const set3 = new Set([...set].filter(item => set2.has(item))); // {2}
