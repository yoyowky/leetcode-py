// bfs
// Queue

const tree = {
    val:"a",
    children: [
        {
            val:"b",
            children: [
                {
                    val:"d",
                    children: []
                },
                {
                    val:"e",
                    children: []
                }
            ]
        },
        {
            val:"c",
            children: [
                {
                    val:"f",
                    children: []
                },
                {
                    val:"g",
                    children: []
                }
            ]
        }
    ]
}


const bfs = (root) => {
    let q = [];
    q.push(root);
    while(q.length){
        let top = q.shift();
        console.log(top.val);
        top.children.forEach(child => {
            q.push(child);
        });
    }
}

bfs(tree);
