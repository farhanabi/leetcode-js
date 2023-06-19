# Problem 108. Convert Sorted Array to Binary Search Tree

This folder contains a JavaScript solution to the LeetCode problem [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/). The problem requires us to convert a sorted array to a height-balanced binary search tree.

## Problem Description

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

## Solution

The solution uses a recursive algorithm to convert a sorted array to a height-balanced binary search tree. It first checks if start is greater than end. If it is, it returns null. If it isn't, it calculates the middle index of the given array. It then creates a new TreeNode with the value of the element at the middle index of the given array. It then calls itself recursively on the left subtree and the right subtree.

### Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of elements in the given array. This is because the solution uses a recursive algorithm to convert a sorted array to a height-balanced binary search tree. The recursive algorithm has a time complexity of O(n) because it visits each element in the given array at most once.

The space complexity of this solution is O(n) where n is the number of elements in the given array. This is because the solution uses a recursive algorithm to convert a sorted array to a height-balanced binary search tree. The recursive algorithm has a space complexity of O(n) because it uses a call stack that is the same size as the number of elements in the given array.
