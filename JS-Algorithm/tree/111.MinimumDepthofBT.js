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

// O(n),O(n)
 var minDepth = function(root) {
    if(!root) return 0;
    const queue = [];
    let l = 1;
    queue.push([root,l]);
    console.log('q', queue)
    while(queue.length){
        const n = queue.shift();
        if(!n[0].left&&!n[0].right) return n[1];
        if(n[0].left) {
            queue.push([n[0].left,n[1]+1]);
        };
        if(n[0].right)  {
            queue.push([n[0].right,n[1]+1]);
        };
       
    }
};