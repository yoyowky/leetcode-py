/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums) return 0;
    if(nums.lenth === 1) return nums[0];
    if(nums.length === 2) return nums[0]>nums[1]? nums[0]:nums[1];
    const max = [nums[0], nums[0]>nums[1]? nums[0]:nums[1]];
    for(let i=2; i<nums.length;i++){
        max[i] = max[i-2]+nums[i]>max[i-1]?max[i-2]+nums[i]:max[i-1];
    }
    return max[nums.length-1]
};

nums = [1,2,3,1];
console.log(rob(nums))
