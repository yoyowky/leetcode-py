// Iteration + stack
// Binary Tree Preorder Traversal:  root-> left->right
// O(n) O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root){
    const res = [];
    const stack = [];
    if (root) stack.push(root);
    while(stack.length){
        const n = stack.pop();
        res.push(n.value);
        if(stack.right) stack.push(right);
        if(stack.left) stack.push(left);
    }
    return res;
}