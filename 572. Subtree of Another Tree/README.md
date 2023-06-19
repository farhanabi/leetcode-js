# Problem 572. Subtree of Another Tree

This folder contains a JavaScript solution to the LeetCode problem [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/). The problem requires us to determine if a binary tree is a subtree of another binary tree.

## Problem Description

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

## Solution

The solution uses a recursive algorithm to determine if a binary tree is a subtree of another binary tree. It first checks if the root node of the first binary tree is null. If it is, it returns false. If it isn't, it checks if the first binary tree is equal to the second binary tree. If it is, it returns true. If it isn't, it returns the result of calling itself recursively on the left subtree of the first binary tree and the second binary tree or the result of calling itself recursively on the right subtree of the first binary tree and the second binary tree.

### Time and Space Complexity

The time complexity of this solution is O(mn) where m is the number of nodes in the first binary tree and n is the number of nodes in the second binary tree. This is because the solution uses a recursive algorithm to determine if a binary tree is a subtree of another binary tree. The recursive algorithm has a time complexity of O(mn) because it visits each node in the first binary tree at most once and each node in the second binary tree at most once.

The space complexity of this solution is O(mn) where m is the number of nodes in the first binary tree and n is the number of nodes in the second binary tree. This is because the solution uses a recursive algorithm to determine if a binary tree is a subtree of another binary tree. The recursive algorithm has a space complexity of O(mn) because it uses a call stack that is the same size as the number of nodes in the first binary tree and the number of nodes in the second binary tree.
