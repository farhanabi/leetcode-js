# Problem 141. Linked List Cycle

This folder contains a JavaScript solution to the LeetCode problem [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/). The problem requires us to determine whether a linked list has a cycle in it.

## Problem Description

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

## Solution 1: Hash Table

The solution uses a hash table to keep track of the nodes that have been visited. It iterates through the linked list and checks if the current node has been visited. If it has, then the linked list has a cycle. If it hasn't, then the current node is added to the hash table and the next node is checked.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(n), because the solution uses a hash table to store the nodes that have been visited. The hash table can contain up to n nodes, where n is the number of nodes in the linked list.

## Solution 2: Two Pointers

> Follow up:
>
> Can you solve it using O(1) (i.e. constant) memory?

The solution uses two pointers to determine whether the linked list has a cycle. The first pointer, `slow`, moves one node at a time. The second pointer, `fast`, moves two nodes at a time. If the linked list has a cycle, then the two pointers will eventually point to the same node. If the linked list doesn't have a cycle, then the `fast` pointer will reach the end of the linked list.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(1), because the solution only uses two pointers to determine whether the linked list has a cycle.