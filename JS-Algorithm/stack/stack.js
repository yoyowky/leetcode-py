class Stack {
    constructor(){
        this.data = [];
        this.top = 0; // length
    }
    push(element){
        // this.data.push(element);
        this.data[this.top] = element; // top 为还么加这个元素之前的length
        this.top ++;
    }
    length(){
        return this.top;
    }
    peek(){
        return this.data[this.top-1];
    }
    isEmpty(){
        return this.top === 0;
    }
    pop(){
        if(!this.isEmpty()){
            this.top --;
            return this.data.pop();
        }
    }
    print(){
        
    }
}


//https://betterprogramming.pub/implementing-a-stack-in-javascript-73d1aa0483c1