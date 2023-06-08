/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Solution 1: Using Set
var hasCycle = function(head) {
    const set = new Set()
    while (head) {
        if (set.has(head)) return true
        set.add(head)
        head = head.next
    }
    return false
};
    
// Solution 2: Using Two Pointers
var hasCycle = function(head) {
    if (!head || !head.next) return false
    let slow = head, fast = head.next
    while (slow !== fast) {
        if (!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true
}