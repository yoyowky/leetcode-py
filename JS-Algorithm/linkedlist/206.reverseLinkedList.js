/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// two pointer 一前一后 o(1)o(1)
 var reverseList = function(head) {
    let p0 = null;
    let p = head;
    while(p){
        const temp = p.next;
        p.next = p0;
        p0 = p;
        p = temp;
    }
    return p0;
};