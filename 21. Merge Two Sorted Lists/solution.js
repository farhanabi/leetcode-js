/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution 1: Recursion
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    if (list1.val >= list2.val) {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }

    list1.next = mergeTwoLists(list1.next, list2) 
    return list1
};

// Solution 2: Iteration
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-1)
    let tail = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    tail.next = (list1 !== null) ? list1 : list2
    return dummy.next
};
