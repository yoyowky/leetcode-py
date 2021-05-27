/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

//
// m == heights.length
// n == heights[i].length
 var pacificAtlantic = function(heights) {
    if(!heights || !heights[0]) return [];
    const m = heights.length;
    const n = heights[0].length;
    // build a m*n false matrix
    const flow1 = new Array(m).fill().map(() => new Array(n).fill(false));
    const flow2 = new Array(m).fill().map(() => new Array(n).fill(false));
    // 定义bfs
    const bfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r+1, c], [r-1, c], [r, c-1], [r, c+1]].forEach(([nr, nc])=>{
            if(
                // 保证新的r,c在矩阵中
                0<=nr && nr<=m-1 &&
                0<=nc && nc<=n-1 &&
                // 保证这个结点没被访问过
                !flow[nr][nc] &&
                // 保证下一个点的高度大于现在这个高度
                heights[nr][nc]>=heights[r][c]
            ){
                bfs(nr, nc, flow);
            }
        })
    }
    // 沿着四个海岸线做dfs
    for (let i=0; i<m; i++){
        bfs(i, 0, flow1);
        bfs(i, n-1, flow2);
    }
    for (let i=0; i<n; i++){
        bfs(0, i, flow1);
        bfs(m-1, i, flow2);
    }
    // 找到共同的true
    const res = []
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(flow1[i][j] === true && flow2[i][j] === true){
                res.push([i,j])
            }
        }
    }
    console.log(res)
    return res;
};




// heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
heights = [[3,3,3,3,3,3],[3,0,3,3,0,3],[3,3,3,3,3,3]]
pacificAtlantic(heights);
//Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]