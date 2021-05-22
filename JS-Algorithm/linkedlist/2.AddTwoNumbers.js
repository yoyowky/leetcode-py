/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

注意：
- 建3个pointer来遍历列表
- 新建的列表需要用new ListNode（val）来指向下一个节点，从而建立list！
- 注意数学运算
**/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *  O(n),O(n)
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let p1 = l1, p2=l2, p=dummy;
    let rem = 0;
    while(p1 || p2){
        const v1 = p1? p1.val : 0;
        const v2 = p2? p2.val : 0;
        const x = (v1+v2+rem)%10;
        p.next = new ListNode(x);
        rem = Math.floor((v1+v2+rem)/10);
        p = p.next;
        if(p1) p1=p1.next;
        if(p2) p2=p2.next;
    }
    if(rem) p.next = new ListNode(rem);
    return dummy.next;
};