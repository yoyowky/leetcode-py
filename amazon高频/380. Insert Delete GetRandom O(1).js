// map+array
/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.list = [];
    this.map = new Map();
    this.lastIndex = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;
    this.map.set(val, this.lastIndex);
    this.list.push(val);
    this.lastIndex+=1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;
    const lastVal = this.list[this.list.length-1];
    const delIndex = this.map.get(val);
    this.map.set(lastVal, delIndex);
    this.map.delete(val)
    this.list[delIndex]=lastVal;
    this.list.pop();
    this.lastIndex-=1;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random()*this.list.length);
    return this.list[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */