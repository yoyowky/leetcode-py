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
// const preorder = (root) => {
//     if(!root) return;
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// }

// preorder(bt);

// stack
const preorder = (root) => {
    if(!root) return;
    const stack = [];
    stack.push(root);
    while(stack.length){
        const pop = stack.pop();
        console.log(pop.val);
        if(pop.right) stack.push(pop.right); //可能push一个null， 所以要check： if(pop.right)
        if(pop.left) stack.push(pop.left);
    }
}

preorder(bt);