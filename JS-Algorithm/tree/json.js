// 遍历json的节点
const json = {
    a: {b:{c:1}},
    d: [1,2],
}

const dfs = (n, path)=>{
    console.log(n, path);
    Object.keys(n).forEach(key => {
        dfs(n[key], path.concat(key));
    });
}

dfs(json, []);