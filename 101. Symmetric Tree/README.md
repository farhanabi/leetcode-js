# Problem 101. Symmetric Tree

This folder contains a JavaScript solution to the LeetCode problem [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/). The problem requires us to determine if a binary tree is symmetric. A binary tree is symmetric if it is a mirror of itself (i.e. the left subtree is a mirror reflection of the right subtree).

## Problem Description

Given a binary tree, check whether it is a mirror of itself (i.e. symmetric around its center).

## Solution

The solution uses a recursive approach to solve the problem. It checks if the given binary tree is symmetric by checking if the left and right subtrees are mirrors of each other. It does this by recursively calling the function on the left and right subtrees of the given binary tree.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the given binary tree. This is because the solution recursively calls the function on the left and right subtrees of the given binary tree.

The space complexity of this solution is O(n), where n is the number of nodes in the given binary tree. This is because the solution uses a recursive call stack to keep track of the nodes in the given binary tree.
