// O(n^2)
Array.prototype.insertionSort = function(){
    for(let i=1;i<this.length;i++){
        const temp = this[i];
        let j = i;
        while(j>0){
            if(this[j-1]>temp){
                this[j] = this[j-1]; // 如果比前一位小，则前一位往后移动
            }else{
                break;
            }
            j--;
        }
        this[j] =temp;
    }
    console.log(this)
}

const arr = [5,4,3,1,2];
arr.insertionSort();