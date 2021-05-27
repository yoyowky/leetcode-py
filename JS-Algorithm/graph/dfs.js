const graph = require('./graph');

const visited = new Set();
const dfs = (n)=>{
    // 1. 访问该节点
    console.log(n);
    // 2. 记录节点为visited
    visited.add(n);
    // 3. 遍历他的neighbor
    graph[n].forEach(item => {
        // 4. check是否为visited，不是的话执行dfs
        if(!visited.has(item)){
            dfs(item);
        }
    });
}

dfs(2)
