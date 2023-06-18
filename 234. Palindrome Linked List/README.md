# Problem 234. Palindrome Linked List

This folder contains a JavaScript solution to the LeetCode problem [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/). The problem requires us to determine if a given singly-linked list is a palindrome.

## Problem Description

Given the `head` of a singly linked list, return `true` if it is a palindrome.

## Solution 1: Store Values in Array

The solution stores the values of the linked list in an array. The solution then iterates through the array and checks whether the values are the same in the forward and reverse directions. If the values are the same in the forward and reverse directions, the solution returns `true`. If the values are not the same in the forward and reverse directions, the solution returns `false`.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(n), where n is the length of the linked list. This is because the solution stores the values of the linked list in an array.

## Solution 2: Reverse Second Half of Linked List

The solution reverses the second half of the linked list. The solution then iterates through the first half of the linked list and the reversed second half of the linked list and checks whether the values are the same. If the values are the same, the solution returns `true`. If the values are not the same, the solution returns `false`.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the linked list. This is because the solution iterates through the linked list once.

The space complexity of this solution is O(1), because the solution reverses the second half of the linked list in place.
