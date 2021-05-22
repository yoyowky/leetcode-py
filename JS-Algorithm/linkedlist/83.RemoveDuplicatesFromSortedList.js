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
// O(n), O(1)
var deleteDuplicates = function(head) {
     let p = head;
     while(p){
         if(p.val === p.next.val){
             p.next = p.next.next
         } else { //  如果和下个元素相同才执行这个操作， 否则继续p.next = p.next.next; 指针再往下移动一位
            p = p.next;
         }
     }
    
};