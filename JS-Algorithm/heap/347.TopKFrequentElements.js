// array+map o(n*logn)
// var topKFrequent = function(nums, k) {
//     const map = new Map();
//     nums.forEach(num => {
//         map.set(num, map.has(num)? map.get(num)+1 : 1);
//     })
//     console.log(map)
//     //console.log(Array.from(map)) // map to array
//     const list = Array.from(map).sort((a,b)=>b[1]-a[1]); // 从大到小, 排序算法最快o(n*logn)
//     console.log(list.slice(0,k))
//     return list.slice(0,k).map(n=>n[0]);
// };

// heap + map o(nlogk), o(n+k)=>o(n)
class MinHeap {
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor((index-1)/2); // or (index-1) >> 1
    }
    getLeftIndex(index){
        return index*2+1;
    }
    getRightIndex(index){
        return index*2+2;
    }
    swap(i1, i2){
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
    shiftUp(index){ // index为需要上移的节点的index
        if(index == 0) return;
        // 拿到父节点
        const parent = this.getParentIndex(index);
        if(this.heap[parent] && this.heap[parent].value > this.heap[index].value){
            this.swap(index, parent);
            this.shiftUp(parent)
        }
    }
    shiftDown(index){
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        if(this.heap[left] && this.heap[index].value>this.heap[left].value){
            this.swap(index, left);
            this.shiftDown(left)
        };
        if(this.heap[right] && this.heap[index].value>this.heap[right].value){
            this.swap(index, right);
            this.shiftDown(right)
        }

    }
    // 插入元素
    insert(val){
        this.heap.push(val);
        this.shiftUp(this.heap.length-1);
    }
    //删除堆顶
    pop(){
        this.heap[0]=this.heap.pop(); // pop()取出最后一位并返回值；可以保证长度减去一
        this.shiftDown(0);
    }
    //获取堆顶
    peek(){
        return this.heap[0];
    }
    //获取堆的大小
    size(){
        return this.heap.length;
    }
}

var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
        map.set(num, map.has(num)? map.get(num)+1 : 1);
    })
    console.log('map', map);
    const heap = new MinHeap();
    map.forEach((value, key)=>{
        heap.insert({value, key});
        if(heap.size()>k){
            heap.pop();
        }
    })
    console.log('heap', heap)
    return heap.heap.map(a=>a.key);
};
nums = [1,1,1,2,2,3]
console.log(topKFrequent(nums, 2))