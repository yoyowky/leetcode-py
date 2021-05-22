/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// filter(), includes(),[...set], O(n^2)(include方法o(n)), O(n)
 var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    // const set2 = new Set(nums2);
    const set3 = new Set([...set1].filter(item => nums2.includes(item)));
    return [...set3]
};
