# Problem 136. Single Number

This folder contains a JavaScript solution to the LeetCode problem [Single Number](https://leetcode.com/problems/single-number/). The problem requires us to find the number that appears only once in an array of integers. All other numbers appear twice.

## Problem Description

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Solution

The solution uses the XOR operator to find the number that appears only once in the array. The solution iterates through the array and XORs each number with the result. The solution returns the result.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because the solution iterates through the input array once.

The space complexity of this solution is O(1), because the solution uses a constant amount of extra space.
