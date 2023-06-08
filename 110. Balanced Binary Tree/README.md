# Problem 110: Balanced Binary Tree

This folder contains a JavaScript solution to the LeetCode problem [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/). The problem requires us to determine if a binary tree is height-balanced.

## Problem Description

Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

## Solution

The solution uses a recursive algorithm to determine if a binary tree is height-balanced. It first checks if the root node is null. If it is, it returns true. If it isn't, it checks if the absolute difference between the height of the left subtree and the height of the right subtree is greater than 1. If it is, it returns false. If it isn't, it returns the result of calling itself recursively on the left subtree and the right subtree.

### Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of nodes in the given binary tree. This is because the solution uses a recursive algorithm to determine if a binary tree is height-balanced. The recursive algorithm has a time complexity of O(n) because it visits each node in the given binary tree at most once.

The space complexity of this solution is O(n) where n is the number of nodes in the given binary tree. This is because the solution uses a recursive algorithm to determine if a binary tree is height-balanced. The recursive algorithm has a space complexity of O(n) because it uses a call stack that is the same size as the number of nodes in the given binary tree.
