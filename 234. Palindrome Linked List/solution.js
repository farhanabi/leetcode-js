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
// Solution 1: O(n) time | O(n) space
var isPalindrome = function(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
};

// Solution 2: O(n) time | O(1) space
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    function reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow.next);
    let firstHalf = head;

    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
          return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
};
