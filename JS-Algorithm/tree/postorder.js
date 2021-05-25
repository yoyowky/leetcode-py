const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

// recursion
// const postorder = (root) => {
//     if(!root) return;
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
// }
// postorder(bt);

// stack, 先按照： root， right， left的顺序
postorder=(root)=>{
    if(!root) return;
    const stack = [];
    const newStack = [];
    stack.push(root);
    while(stack.length){
        const pop = stack.pop();
        newStack.push(pop.val);
        if(pop.left) stack.push(pop.left);
        if(pop.right) stack.push(pop.right);
    }
    while(newStack.length){
        console.log(newStack.pop());
    }
}
postorder(bt);