# Problem 876. Middle of the Linked List

This folder contains a JavaScript solution to the LeetCode problem [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/). The problem requires us to find the middle node of a linked list.

## Problem Description

Given a non-empty, singly linked list with head node `head`, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

## Solution

The solution uses two pointers to find the middle node of the linked list. The first pointer, `slow`, moves one node at a time. The second pointer, `fast`, moves two nodes at a time. When the `fast` pointer reaches the end of the linked list, the `slow` pointer will be pointing to the middle node of the linked list.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(1), because the solution only uses two pointers to find the middle node of the linked list.
