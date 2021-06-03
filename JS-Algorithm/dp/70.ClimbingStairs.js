/**
 * @param {number} n
 * @return {number}
 */
// O(n),O(n)
var climbStairs = function(n) {
    const dp = [1,1];
    for(let i=2;i<=n;i++){ // 数组长度为n+1
        console.log(i)
        // 每一个台阶可以转换成前一台阶走一步or前两台阶走两步
        dp[i]=dp[i-2]+dp[i-1];
        console.log(dp[i])
    }
    return dp[n];
};

// n=5, dp=[1,1,2,3,5,8] 
//注意，数组的长度不是n，而是n+1；n=0是默认为1，这样n=1的时候为1；n=2的时候为2
arr=[1,1,2,3,5,8]
climbStairs(5);
// 优化空间复杂度 O(n), O(1)
var climbStairs = function(n) {
    let dp0=1;
    let dp1=1;
    for(let i=2;i<=n;i++){ // 数组长度为n+1
        const temp = dp0;
        dp0=dp1;
        dp1 = temp+dp1;
    }
    return dp1;
};
climbStairs(5);