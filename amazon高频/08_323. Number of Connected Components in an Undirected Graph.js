/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// DFS
/**
1. Create an adjacency list such that adj[v] contains all the adjacent vertices of vertex v.
2. Initialize array, visited, to track the visited vertices.
3. Define a counter variable and initialize it to zero.
4. Iterate over each vertex in edges, and if the vertex is not already in visited, start a DFS from it. Add every vertex visited during the DFS to visited.
5. Every time a new DFS starts, increment the counter variable by one.
6. At the end, the counter variable will contain the number of connected components in the undirected graph.
 */
 var countComponents = function(n, edges) {
    // create visited array, defalt as false
    let visited = new Array(n).fill(false);
    // create edgeTable
    let edgeTable = new Array(n).fill(0).map(() => new Array().fill(0));
    for (let edge of edges) {
        let [src, dist] = edge;
        edgeTable[src].push(dist);
        edgeTable[dist].push(src);
    }
    // create res
    let res = 0;
    // traverse edgeTable
    for(let i=0; i<n; i++){
        if(visited[i]===false){
            res++;
            dfs(i,edgeTable,visited);
        }
    }
    return res;
};
const dfs = (i,edgeTable,visited)=>{
    visited[i]=true;
    let nodes = edgeTable[i];
    nodes.forEach(node=>{
        if(visited[node]===false){
            dfs(node,edgeTable,visited);
        }
    })
}