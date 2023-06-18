# Problem 283. Move Zeroes

This folder contains a JavaScript solution to the LeetCode problem [Move Zeroes](https://leetcode.com/problems/move-zeroes/). The problem requires us to move all 0's to the end of an array while maintaining the relative order of the non-zero elements.

## Problem Description

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

## Solution

The solution uses two pointers to move all 0's to the end of the array. The first pointer iterates through the array and the second pointer points to the first non-zero element in the array. If the first pointer points to a non-zero element, the solution swaps the element at the first pointer with the element at the second pointer. The solution then increments the second pointer. The solution returns nothing because it modifies the input array in place.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array, since it iterates over each element in the array exactly once.

The space complexity of this solution is O(1), because the solution uses a constant amount of extra space.
