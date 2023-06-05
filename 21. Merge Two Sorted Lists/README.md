# Problem 21: Merge Two Sorted Lists

This file contains a JavaScript solution to the LeetCode problem [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/). The problem requires us to merge two sorted linked lists into a single sorted linked list.

## Solution 1: Recursion

The solution uses recursion to merge the two lists. It compares the first nodes of the two lists and sets the next node of the smaller node to the result of merging the rest of the smaller list with the larger list. It returns the smaller node.

### Time and Space Complexity

The time complexity of this solution is O(n + m), where n is the length of the first list and m is the length of the second list. This is because the solution iterates through both lists once.

The space complexity of this solution is O(n + m), where n is the length of the first list and m is the length of the second list. This is because the solution uses recursion, and the space used by the call stack is proportional to the length of the two lists.

## Solution 2: Iteration

The solution uses iteration to merge the two lists. It creates a dummy node to serve as the head of the merged list. It then iterates through the two lists, setting the next node of the dummy node to the smaller node and moving the pointer of the smaller list forward. It returns the next node of the dummy node.

### Time and Space Complexity

The time complexity of this solution is O(n + m), where n is the length of the first list and m is the length of the second list. This is because the solution iterates through both lists once.

The space complexity of this solution is O(1) because the solution does not use any additional space.
