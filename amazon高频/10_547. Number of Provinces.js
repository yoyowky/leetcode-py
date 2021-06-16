/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// dfs+set
 var findCircleNum = function(isConnected) {
    let visited = new Set();
    let res=0;
    for(let i=0; i<isConnected.length;i++){
        if(!visited.has(i)){
           dfs(i);
            res++;
          }
    }
    function dfs(i){
        visited.add(i);
        const nodes = isConnected[i];
        nodes.forEach((node, i)=>{
            if(node===1 && !visited.has(i)) dfs(i)
        })
    }
    return res;
};




const arr =[[1,1,0],[1,1,0],[0,0,1]];
const res = findCircleNum(arr);
console.log(res)