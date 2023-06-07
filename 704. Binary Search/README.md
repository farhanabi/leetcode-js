# Problem 704: Binary Search

This folder contains a JavaScript solution to the LeetCode problem [Binary Search](https://leetcode.com/problems/binary-search/). The problem requires us to implement a binary search algorithm to find the index of a given target value in a sorted array of integers.

## Problem Description

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

## Solution

The solution uses a binary search algorithm to find the index of the target value in the given array. It first checks if the target value is less than the first element in the array or greater than the last element in the array. If it is, it returns -1. Otherwise, it sets the left and right pointers to the first and last indices in the array, respectively. It then iterates through the array, checking if the target value is equal to the value at the midpoint of the array. If it is, it returns the index of the midpoint. If it isn't, it checks if the target value is less than the value at the midpoint of the array. If it is, it sets the right pointer to the index of the midpoint minus one. If it isn't, it sets the left pointer to the index of the midpoint plus one. It then repeats this process until it finds the target value or until the left pointer is greater than the right pointer. If it finds the target value, it returns the index of the target value. If it doesn't, it returns -1.

## Time and Space Complexity

The time complexity of this solution is O(log n) where n is the length of the given array. This is because the solution uses a binary search algorithm to find the index of the target value in the given array. The binary search algorithm has a time complexity of O(log n) because it halves the size of the array at each iteration.

The space complexity of this solution is O(1) because the solution only uses a constant amount of extra space.