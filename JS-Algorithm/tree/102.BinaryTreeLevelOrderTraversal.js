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
 * @return {number[][]}
 */
// O(n)，o(n)
// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [];
//     queue.push([root, 1]);
//     let res=[];
//     while(queue.length){
//         const n = queue.shift();
//         console.log(n[0].val, n[1]);
//         if(!res[n[1]-1]){
//             res.push([n[0].val])
//         }else{
//             res[n[1]-1].push(n[0].val);
//         }
//         if(n[0].left) queue.push([n[0].left,n[1]+1]);
//         if(n[0].right) queue.push([n[0].right,n[1]+1]);
//     }
//     return res;
// };

var levelOrder = function(root) {
    if (!root) return [];
    const queue = [];
    queue.push(root);
    let res=[];
    while(queue.length){
        const length = queue.length;
        res.push([]);
        // 保证每一次的res都是当前层
        while(length--){
            const n = queue.shift();
            res[res.length-1].push(n.val)
            if(n.left) queue.push(n.left);
            if(n.right) queue.push(n.right);
        }
    }
    return res;
};