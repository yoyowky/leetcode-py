/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// map
// O(N), O(N)
 var intersection = function(nums1, nums2) {
    let map = new Map();
    nums1.forEach(item => map.set(item,true));
    const res = [];
    nums2.forEach((item) => {
        // map.get()
        if(map.get(item) === true){
            res.push(item);
            map.delete(item);
        }
    })
    return res;
};
