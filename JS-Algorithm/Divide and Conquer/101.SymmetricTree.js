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
 * @return {boolean}
 */
// o(n)o(n)
 var isSymmetric = function(root) {
    if(!root) return true;
    const rec = (t1, t2)=>{
        if(!t1&&!t2) return true;
        if(t1 && t2 && t1.val===t2.val 
           && rec(t1.left, t2.right)
          && rec(t1.right, t2.left)){
            return true;
        } else {
            return false;
        }
    }
    return rec(root.left, root.right)
};