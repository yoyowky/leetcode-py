const MinHeap = require('./MinHeap');
console.log('MinHeap', MinHeap)

// O(n*logk), O(k)
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();
    nums.forEach(num => {
        minHeap.insert(num);
        if(minHeap.size()>k){
           minHeap.pop();
        }
    })
    return minHeap.peek();
};
console.log(findKthLargest([3,2,1,5,6,4],2));