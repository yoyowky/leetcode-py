/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// dfs
var cloneGraph = function(node) {
    if (!node) return;
    const visited = new Map();
    const dfs = (node)=>{
        // copy node
        const newNode = new Node(node.val);
        // 将copy的node和原来的node建立一个映射关系
        visited.set(node, newNode);
        // 确保neighbor不是undefined
        (node.neighbors || []).forEach((neighbor) => {
            if(!visited.has(neighbor)){
                dfs(neighbor)
            }
            newNode.neighbors.push(visited.get(neighbor));
        })
        
    };
    dfs(node);
     return visited.get(node);
};
// dfs
var cloneGraph = function(node) {
    if (!node) return;
    const visited = new Map();
    const dfs = (node)=>{
        // copy node
        const newNode = new Node(node.val);
        // 将copy的node和原来的node建立一个映射关系
        visited.set(node, newNode);
        // 确保neighbor不是undefined
        (node.neighbors || []).forEach((neighbor) => {
            if(!visited.has(neighbor)){
                dfs(neighbor)
            }
            newNode.neighbors.push(visited.get(neighbor));
        })
    };
    dfs(node);
     return visited.get(node);
};
// bfs
var cloneGraph = function(node) {
    if (!node) return;
    const visited = new Map();
    visited.add(node, new Node(node.val));
    const queue = [];
    queue.push(node);
    while(queue.length){
        const top = queue.shift();
        console.log(top.val);
        top.neighbors.forEach((neighbor)=>{
            if(!visited.has(neighbor)){
                queue.push(neighbor);
                visited.add(neighbor, new Node(neighbor.val));
            }
            visited.get(top).neighbors.push(visited.get(neighbor));
        });
    }
    return visited.get(node);
};