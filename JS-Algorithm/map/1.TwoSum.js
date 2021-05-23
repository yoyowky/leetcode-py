/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// map
 var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(!map.has(target-nums[i])){
            map.set(nums[i], i);
        } else {
            return [i,map.get(target-nums[i])];
        }
    }
    return [];
};