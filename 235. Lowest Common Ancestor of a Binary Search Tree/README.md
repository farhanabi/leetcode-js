# Problem 235: Lowest Common Ancestor of a Binary Search Tree

This folder contains a JavaScript solution to the LeetCode problem [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/). The problem requires us to find the lowest common ancestor of two given nodes in a binary search tree.

## Problem Description

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**)."

## Solution 1: Recursive Algorithm

The solution uses a recursive algorithm to find the lowest common ancestor of two given nodes in a binary search tree. It first checks if the value of the root node is greater than the values of both nodes. If it is, it calls itself recursively on the left subtree of the root node. If it isn't, it checks if the value of the root node is less than the values of both nodes. If it is, it calls itself recursively on the right subtree of the root node. If it isn't, it returns the root node.

### Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of nodes in the given binary search tree. This is because the solution uses a recursive algorithm to find the lowest common ancestor of two given nodes in a binary search tree. The recursive algorithm has a time complexity of O(n) because it visits each node in the given binary search tree at most once.

The space complexity of this solution is O(n) where n is the number of nodes in the given binary search tree. This is because the solution uses a recursive algorithm to find the lowest common ancestor of two given nodes in a binary search tree. The recursive algorithm has a space complexity of O(n) because it uses a call stack that is the same size as the number of nodes in the given binary search tree.

## Solution 2: Iterative Algorithm

The solution uses an iterative algorithm to find the lowest common ancestor of two given nodes in a binary search tree. It first checks if the value of the root node is greater than the values of both nodes. If it is, it sets the root node to the left child of the root node. If it isn't, it checks if the value of the root node is less than the values of both nodes. If it is, it sets the root node to the right child of the root node. If it isn't, it returns the root node.

### Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of nodes in the given binary search tree. This is because the solution uses an iterative algorithm to find the lowest common ancestor of two given nodes in a binary search tree. The iterative algorithm has a time complexity of O(n) because it visits each node in the given binary search tree at most once.

The space complexity of this solution is O(1) because the solution only uses a constant amount of extra space.