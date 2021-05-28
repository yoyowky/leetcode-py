// O(logN)
Array.prototype.binarySearch = function(item){
     let low = 0;
     let hight = this.length-1;
     while(low<=hight){
         const mid = Math.floor((low+hight)/2);
         if(item<this[mid]){
            hight=mid-1;
         } else if(item>this[mid]){
            low=mid+1;
         } else {
             return mid;
         }
     }
     return -1;
}

const res = [1,2,3,4,6].binarySearch(21);
console.log(res)