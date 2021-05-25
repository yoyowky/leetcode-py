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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let set = new Set();
    let result = false;
    const dfs = (root, res)=>{
        if(!root) return;
        res=res+root.val;
        if(!root.left && !root.right) {
            if(res===targetSum) result=true;
        };
        dfs(root.left, res);
        dfs(root.right, res);
    }
    dfs(root, 0);
    return result;
};
