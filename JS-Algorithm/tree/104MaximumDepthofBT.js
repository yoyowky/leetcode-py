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
 * @return {number}
 */

// O(n); O(log(n)) to O(n)
//Time complexity : we visit each node exactly once, thus the time complexity is O(N), where N is the number of nodes.
//Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node has only left child node, the recursion call would occur N times (the height of the tree), therefore the storage to keep the call stack would be O(N). But in the best case (the tree is completely balanced), the height of the tree would be O(log(N)). Therefore, the space complexity in this case would be O(log(N)).
var maxDepth = function(root) {
    let res = 0;
    const bfs = function(root, deep){
        if(!root) return;
        if(!root.left && !root.right) res = Math.max(res, deep);
        if(root.left) {
            bfs(root.left, deep+1);
        };
        if(root.right) {
            bfs(root.right, deep+1);
        };
    }
    bfs(root, 1);
    return res;
};