# Problem 977. Squares of a Sorted Array

This folder contains a JavaScript solution to the LeetCode problem [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/).

## Problem Description

Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

## Solution

The solution uses a two-pointer algorithm to return an array of the squares of each number sorted in non-decreasing order. It first initializes a variable `left` to 0 and a variable `right` to the last index of the given array. It then initializes a variable `result` to an empty array. It then iterates until `left` is greater than `right`. In each iteration, it checks if the absolute value of the element at index `left` is greater than or equal to the absolute value of the element at index `right`. If it is, it pushes the square of the element at index `left` to `result` and increments `left` by 1. Otherwise, it pushes the square of the element at index `right` to `result` and decrements `right` by 1. It then returns `result`.

### Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of elements in the given array. This is because the solution uses a two-pointer algorithm to return an array of the squares of each number sorted in non-decreasing order. The two-pointer algorithm has a time complexity of O(n) because it iterates through each element in the given array at most once.

The space complexity of this solution is O(n) where n is the number of elements in the given array. This is because the solution uses a two-pointer algorithm to return an array of the squares of each number sorted in non-decreasing order. The two-pointer algorithm has a space complexity of O(n) because it uses a variable `result` that is the same size as the number of elements in the given array.
