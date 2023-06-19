# Problem 268: Missing Number

This folder contains a JavaScript solution to the LeetCode problem [Missing Number](https://leetcode.com/problems/missing-number/). The problem requires us to find the missing number in an array of numbers.

## Problem Description

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only `O(1)` extra space complexity and `O(n)` runtime complexity?

## Solution 1

The solution uses a sum formula to find the missing number. It first calculates the sum of the numbers in the array. It then calculates the sum of the numbers from 0 to n. It then subtracts the sum of the numbers in the array from the sum of the numbers from 0 to n. The result is the missing number.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of numbers in the array. This is because the solution iterates through the numbers in the array to calculate the sum of the numbers in the array.

The space complexity of this solution is O(1) because the solution only uses constant space.

## Solution 2

The solution uses a bit manipulation approach to find the missing number. It first sets the missing number to n. It then iterates through the numbers in the array. For each number, it XORs the number with the index of the number. It then XORs the result with the missing number. The result is the missing number.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of numbers in the array. This is because the solution iterates through the numbers in the array to calculate the missing number.

The space complexity of this solution is O(1) because the solution only uses constant space.
