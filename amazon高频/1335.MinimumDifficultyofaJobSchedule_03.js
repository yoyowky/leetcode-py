/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
// dp[i][j] 代表使用 i 天完成 j 个工作的最小工作量
// dp 数组的第一列和第一行，也就是下标 0，是没有用的，也没有意义
// i 天做 j 个工作。可以是前 i - 1 天做了前 k 个工作，最后一天做了剩余所有的工作（最后一天的工作量是：k 到 j 的最大值
 var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;
    if(d>n) return -1;
    // dp[i][j] means the difficulty for i day with j jobs
    let dp = new Array(d+1).fill(0).map(()=>new Array(n+1).fill(0));
    dp[1][1] = jobDifficulty[0];
    // when day=1
    for(let i=2; i<=n; i++){
        dp[1][i] = Math.max(dp[1][i-1],jobDifficulty[i-1])
    }
    // check from day 2 to day d, var i for day, j for job
    for(let i=2; i<=d; i++){
        for(let j=i; j<=n;j++){
            // difficult is the difficult for i-th day's job difficulty
            let difficulty = jobDifficulty[j-1];
            // set the origin value: i-1-day: [i,j-1] and i-day: [j]
            dp[i][j] = dp[i-1][j-1] + difficulty; // k=j-1的情况
            // key means: i-1-day: [i,k] and i-day: (k,j]
            for(let k = j-2; k>=i-1; k--){
                difficulty = Math.max(difficulty, jobDifficulty[k]); // 相当于第k+1天的难度
                if(dp[i-1][k]+difficulty<dp[i][j]){
                    dp[i][j] = dp[i-1][k]+difficulty
                }
            }
        }
    }
    return dp[d][n]
};

const jobDifficulty = [11,111,22,222,33,333,44,444]
const d = 6
const res = minDifficulty(jobDifficulty,d);
console.log(res)

// const arr = [[1,2],[2,3],[3,5]]
// console.log(Math.max(...[2, 5, 16, 1]))