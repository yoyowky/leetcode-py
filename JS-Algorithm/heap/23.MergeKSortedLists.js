/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// O(nlogk), O(k)
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
        if(this.heap[parent] && this.heap[parent].val > this.heap[index].val){
            this.swap(index, parent);
            this.shiftUp(parent)
        }
    }
    shiftDown(index){
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        if(this.heap[left] && this.heap[index].val>this.heap[left].val){
            this.swap(index, left);
            this.shiftDown(left)
        };
        if(this.heap[right] && this.heap[index].val>this.heap[right].val){
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
        if(this.size() === 1) return this.heap.shift();
        const n = this.heap[0];
        this.heap[0]=this.heap.pop(); // pop()取出最后一位并返回值；可以保证长度减去一
        this.shiftDown(0);
        return n;
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
var mergeKLists = function(lists) {
    const res = new ListNode(0);
    const heap = new MinHeap();
    let p = res;
    lists.forEach(l => {
        if(l){
            heap.insert(l);
        }
    });
    while(heap.size()){
        const n = heap.pop();
        p.next = n;
        p=p.next;
        if(n.next) heap.insert(n.next);
    }
    return res.next;
};