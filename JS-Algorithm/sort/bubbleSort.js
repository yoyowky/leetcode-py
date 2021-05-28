// O(n^2)
Array.prototype.bubbleSort = function(){
    // console.log(this) // this为function前面的数组
    for(let i=0;i<this.length-1;i++){
        for(let j=0; j<this.length-1-i;j++){ //第n轮的时候最后n-1位不用执行， j<this.length-1-i
            if(this[j]>this[j+1]){
                const temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    console.log(this)
}

const arr = [5,4,3,1,2];
arr.bubbleSort();