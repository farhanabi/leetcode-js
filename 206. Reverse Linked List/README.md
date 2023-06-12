# Problem 206: Reverse Linked List

This folder contains a JavaScript solution to the LeetCode problem [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/).

## Problem Description

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## Solution 1: Iterative

The solution uses a while loop to iterate through the linked list. The while loop stops when the current node is null. The while loop reverses the linked list by setting the next node of the current node to the previous node. The while loop also sets the previous node to the current node and the current node to the next node. The while loop returns the previous node, which is the head of the reversed linked list.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(1), because the solution uses a constant number of pointers to keep track of the nodes in the linked list.

## Solution 2: Recursive

The solution uses recursion to reverse the linked list. The solution calls itself recursively until it reaches the end of the linked list. The solution then sets the next node of the current node to the previous node. The solution also sets the previous node to the current node and the current node to the next node. The solution returns the previous node, which is the head of the reversed linked list.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(n), because the solution uses a call stack to keep track of the nodes in the linked list. The call stack can contain up to n nodes, where n is the number of nodes in the linked list.
