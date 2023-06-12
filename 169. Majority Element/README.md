# Problem 169. Majority Element

This folder contains a JavaScript solution to the LeetCode problem [Majority Element](https://leetcode.com/problems/majority-element/). The problem requires us to find the majority element in an array of integers.

## Problem Description

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Solution

The solution uses the Boyer-Moore Voting Algorithm to find the majority element in the array. The algorithm works by iterating through the array and keeping track of the majority element. If the current element is the majority element, then the count is incremented. If the current element is not the majority element, then the count is decremented. If the count reaches 0, then the current element is set as the majority element and the count is set to 1. After iterating through the array, the majority element is returned.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of elements in the array. This is because the solution iterates through the array once.

The space complexity of this solution is O(1), because the solution only uses two variables to keep track of the majority element and its count.
