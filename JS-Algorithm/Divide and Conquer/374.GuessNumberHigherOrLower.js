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
// o(logn),o(logn) 
 var guessNumber = function(n) {
    const rec = (low,high)=>{
        if(low>high) return;
        const mid = Math.floor((low+high)/2);
        console.log(guess(mid))
        if(guess(mid)===0){
            return mid;
        } else if(guess(mid)===-1){
            return rec(low, mid-1);
        } else{
            return rec(mid+1, high);
        }
    }
    return rec(1,n);
};