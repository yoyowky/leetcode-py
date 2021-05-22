/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    console.log('node.val', node.val)
    node.val = node.next.val;
    console.log('node.next.next', node.next.next)
    node.next = node.next.next;
};

// 不知道删除结点的上一节点，可以将删除节点的下一个的值转移到该节点，并将下个节点删除