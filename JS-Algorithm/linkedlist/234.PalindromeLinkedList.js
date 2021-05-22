/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// to array + two pointer,  O(n), O(n)
 var isPalindrome = function(head) {
    let arr = [];
    let p = head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }
    console.log(arr)
    let p1= 0, p2 = arr.length - 1;
    while(p1<p2){
        if(arr[p1] === arr[p2]) {
            p1++;
            p2--;
        } else {
            return false;
        }
    }
    return true;
};