// O(N)
Array.prototype.sequentialSearch = function(item){
    for(let i=0;i<this.length;i++){
        if(this[i]===item){
            return i;
        }
    }
    return -1;
}

const res = [1,1,2,3,4,2,5].sequentialSearch(3);
console.log(res)