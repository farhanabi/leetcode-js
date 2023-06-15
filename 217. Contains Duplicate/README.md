# Problem 217. Contains Duplicate

This folder contains a JavaScript solution to the LeetCode problem [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/). The problem requires us to determine whether an array contains any duplicates.

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Solution

The solution uses a hash table to determine whether an array contains any duplicates. The solution iterates through the array and adds each element to the hash table. If the hash table already contains the element, the solution returns `true`. If the solution iterates through the entire array without finding any duplicates, the solution returns `false`.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of elements in the array. This is because the solution iterates through the array once.

The space complexity of this solution is O(n), because the solution uses a hash table to store the elements in the array. The hash table can have up to n elements, where n is the number of elements in the array.
