/**
 * @param {number[]} time
 * @return {number}
 */
// map方法: map.set(key, val); map.get(key)
 var numPairsDivisibleBy60 = function(time) {
    const map = new Map();
    let ans = 0
    time.forEach(time =>{
        let theOther = (60 - time % 60) % 60; // 得到相加和等于60倍数的值%60
        console.log('theOther', theOther)
        if(map.has(theOther)){
            ans+=map.get(theOther);
        };
        if(!map.has(time % 60)) map.set(time % 60, 0);
        map.set(time % 60, map.get(time % 60)+1); // 当前数%60放入map，如果不止一个value+1
    })
    return ans;
};

/**
 * 
Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
 */
const time = [30,20,150,100,40];
const res = numPairsDivisibleBy60(time)
console.log(res)