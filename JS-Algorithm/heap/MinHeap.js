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
        if(this.heap[parent] > this.heap[index]){
            this.swap(index, parent);
            this.shiftUp(parent)
        }
    }
    shiftDown(index){
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        if(this.heap[index]>this.heap[left]){
            this.swap(index, left);
            this.shiftDown(left)
        };
        if(this.heap[index]>this.heap[right]){
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
        if(this.heap.length === 1){
            this.heap.pop();
        } else {
            this.heap[0]=this.heap.pop(); // pop()取出最后一位并返回值；可以保证长度减去一
            this.shiftDown(0);
        }
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

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
console.log('h',h);
h.pop();
console.log('111',h.peek());
h.pop();
console.log('2222',h.peek());
console.log(h.size());


module.exports = MinHeap;