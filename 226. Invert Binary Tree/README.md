# Problem 226: Invert Binary Tree

This folder contains a JavaScript solution to the LeetCode problem [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/). The problem requires us to invert a binary tree.

## Problem Description

Given the `root` of a binary tree, invert the tree, and return its root.

## Solution

The solution uses recursion to invert the binary tree. It swaps the left and right subtrees of the current node and then recursively inverts the left and right subtrees.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because the solution visits each node in the binary tree once.

The space complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because the solution uses recursion, and the space used by the call stack is proportional to the number of nodes in the binary tree.
