const graph = require('./graph');

const bfs = (n)=>{
    const visited = new Set();
    // 1. 先将该节点标记为visited
    visited.add(n);
    // 2. 将该节点入队
    let queue = [n];
    // 队中没有元素，终止
    while(queue.length){
        // 队列第一个元素取出，访问
        const shift = queue.shift();
        console.log(shift);
        // 遍历该元素的所有相邻元素
        graph[shift].forEach(item => {
            if(!visited.has(item)){
                // 若该元素未visited， 入队并标记为visited
                queue.push(item);
                visited.add(item);
            }
        });
    }
}

bfs(2)

