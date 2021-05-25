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

// // recursion O(n),O(n)
// const inorder = (root) => {
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// }
// inorder(bt);

// stack O(n),O(n)
const inorder = (root) => {
    if(!root) return;
    const stack = [];
    let p = root;
    while(stack.length || p){ // p带指stack.pop()的右指针，右指针没东西就继续pop stack
        while(p){
            stack.push(p);
            p = p.left;
        }
        const pop = stack.pop();
        console.log(pop.val);
        p = pop.right;
    }
}
inorder(bt);