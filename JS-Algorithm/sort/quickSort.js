// Chrome用的是这个方法
// O(NlogN)
Array.prototype.quickSort = function(){
    const rec = (arr)=>{
        if(arr.length === 1 || arr.length === 0) return arr;
        // 分区：左中右。mid为基准
        const left = [];
        const right = [];
        const mid = arr[0];
        for(let i=1; i<arr.length;i++){
            // 比mid小放左边，比mid大放右边
            if(arr[i]<mid){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        return [...rec(left),mid,...rec(right)];// 合并左中右
    }
    const res = rec(this);
    res.forEach((val, i)=>{
        this[i]=val
    });
}

const arr = [5,7,8,10,4,3,1,2];
arr.quickSort();
console.log(arr)