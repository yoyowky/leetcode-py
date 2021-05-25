// dfs
// Recursion

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


const dfs = (root) => {
    console.log(root.val);
    // root.children.forEach(child => {
    //     dfs(child)
    // });
    root.children.forEach(dfs); // 简单写法
}

dfs(tree);

// // 如果arr为空，则不会执行forEach函数
// const arr = [];
// console.log('qqqq')
// arr.forEach((a)=>{
//     console.log('aaa',a)
// })