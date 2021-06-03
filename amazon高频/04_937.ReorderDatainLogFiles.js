/**
 * @param {string[]} logs
 * @return {string[]}
 */
/*
知识点: 
1. str.split(' '): 将字符串以空格为标记转化成数组
2. arr.join(' '): 将数组以空格为标记转化成字符串
3. Number.isInteger(parseInt("3")); 将'3'转换为3并判定是否为number
4. /\d/.test(x); 判定x是否为'asdf 22'的格式,22代表某数字
5. isFinite(testValue) // 将'3'转换为3并判定是否为number
6. sort((a,b)=>a>b?1:-1) // a如果为letter，看这两个letter的大小重新排列
*/
 var reorderLogFiles = function(logs) {
    const letters = [];
    const numbers = [];
    for(x of logs){
        const arr = x.split(' ');
        console.log('arr', arr)
        if(Number.isInteger(parseInt(arr[1]))){
            numbers.push(x)
        } else {
            letters.push(x)
        }
    }
    letters.sort((a,b) => {
        let l1 = a.split(' ').slice(1).join(' ');
        let l2 = b.split(' ').slice(1).join(' ');
        if(l1 === l2) return a>b ? 1:-1;
        return l1>l2?1:-1;
    });
    return [...letters, ...numbers];
};

const logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
reorderLogFiles(logs);

// console.log(/ \d/.test('3'))
// const a = '3';
// const b = parseInt(a);
// console.log(Number.isInteger(b))