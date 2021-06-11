/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)

LRU: Least Recently Used (LRU) cache.



/**
 * @param {number} capacity
 */
// constructer function
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.head = null;
    this.tail = null;
    this.hashTable = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hashTable[key]){
        // 把该元素移到头部
    const {value} =  this.hashTable[key]; // 要和下面一行分开写 ？？？
    const {prev, next} = this.hashTable[key];
    // 如果元素不在头部和尾部
    if(prev) {prev.next=next};
    if(next) {next.prev = prev || next.prev};
    //如果元素在尾部
    if(this.tail === this.hashTable[key]){
        this.tail = prev || this.hashTable[key]; // 如果没有prev，说明当前元素是head
    }

    // redefine prev
    this.hashTable[key].prev = null;

    //把元素放在head前面
    if(this.head !== this.hashTable[key]){
        this.hashTable[key].next = this.head;
        this.head.prev = this.hashTable[key];
    }
    this.head = this.hashTable[key];
    // 返回元素
    return value;
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if(this.hashTable[key]){ // key有值
        this.hashTable[key].value=value;
        this.get(key); // 移动这个key到尾部
    } else { // key没有值
        this.hashTable[key] = {
            key,
            value,
            prev: null,
            next: null
        }
        if(this.head){ // 有head
            this.hashTable[key].next = this.head;
            this.head.prev = this.hashTable[key]; // 将这个元素放在原来的head前面
        }
        this.head = this.hashTable[key]; // 改变head
        if(!this.tail){ // 如果没有tail，则把tail变成这个元素
            this.tail = this.hashTable[key];
        }
        this.count+=1;
    }
    if(this.count>this.capacity){
        // 移除尾部
        let removeKey = this.tail.key;
        if(this.tail.prev){
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.hashTable[removeKey].prev = null;
        }
        delete this.hashTable[removeKey]; //  delete object的方法
        this.count-=1;
    }
};




let cache = new LRUCache(2);
cache.put(2,1)
cache.put(2,2)
cache.get(2)
cache.put(1,1)
cache.put(4,1)
get(2)