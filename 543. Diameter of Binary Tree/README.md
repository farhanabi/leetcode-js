# Problem 543. Diameter of Binary Tree

This folder contains a JavaScript solution to the LeetCode problem [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/). The problem requires us to find the diameter of a binary tree.

## Problem Description

Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.

## Solution

The solution uses a recursive depth first search (DFS) to find the diameter of the binary tree. The DFS function returns the height of the binary tree and the diameter of the binary tree. The height of the binary tree is the maximum of the heights of the left and right subtrees plus one. The diameter of the binary tree is the maximum of the diameters of the left and right subtrees and the sum of the heights of the left and right subtrees.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because the solution visits each node in the binary tree once.

The space complexity of this solution is O(n), because the solution uses a recursive DFS to find the diameter of the binary tree. The recursive DFS can have up to n recursive calls on the call stack, where n is the number of nodes in the binary tree.
