// O(n^2)
Array.prototype.selectionSort = function(){
    for(let i=0; i<this.length;i++){
        let minIndex = i;
        for(let j=i;j<this.length;j++){
            if(this[j]<this[minIndex]){
                minIndex=j;
            }
        }
        const temp = this[i];
        this[i]=this[minIndex];
        this[minIndex]=temp;
    }
    console.log(this)
}

const arr = [5,4,3,1,2];
arr.selectionSort();