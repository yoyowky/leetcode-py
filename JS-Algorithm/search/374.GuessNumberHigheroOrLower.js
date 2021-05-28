/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//o(logn), o(1)
 var guessNumber = function(n) {
    // 1~n中选择
    let l = 1;
    let r = n;
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        const res = guess(mid);
        if(res===-1){
            r=mid-1;
        } else if(res===1){
            l=mid+1
        }else{
            return mid;
        }
    }
};