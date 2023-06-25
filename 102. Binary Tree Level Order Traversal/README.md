# Problem 102. Binary Tree Level Order Traversal

This folder contains a JavaScript solution to the LeetCode problem [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/). The problem requires us to return the level order traversal of a binary tree's nodes' values. The level order traversal of a binary tree is the traversal of its nodes' values from left to right, level by level.

## Problem Description

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

### Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

### Example 2:

```
Input: root = [1]
Output: [[1]]
```

### Example 3:

```
Input: root = []
Output: []
```

## Solution

The solution uses a recursion to traverse the tree. The solution keeps track of the current level of the tree. The solution adds the current node's value to the array of values for the current level. The solution then recursively calls itself on the left and right subtrees, incrementing the current level by 1. The solution returns the array of values for the current level.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the tree. This is because the solution traverses each node in the tree once.

The space complexity of this solution is O(n), because the solution uses a hash table to store the nodes. The hash table has a maximum size of n, where n is the number of nodes in the tree.
