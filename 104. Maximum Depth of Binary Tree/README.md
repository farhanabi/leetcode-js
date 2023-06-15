# Problem 104. Maximum Depth of Binary Tree

This folder contains a JavaScript solution to the LeetCode problem [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/). The problem requires us to find the maximum depth of a binary tree.

## Problem Description

Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Solution

The solution uses a recursive function to find the maximum depth of the binary tree. The recursive function returns the maximum depth of either the left or right subtree plus one. The base case of the recursive function is when the root node is null, in which case the function returns zero.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because the solution visits each node in the binary tree once.

The space complexity of this solution is O(n), because the solution uses a recursive function to find the maximum depth of the binary tree. The recursive function can have up to n recursive calls on the call stack, where n is the number of nodes in the binary tree.
