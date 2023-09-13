# Problem 128: Longest Consecutive Sequence

This folder contains a JavaScript solution to the LeetCode problem [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/).

## Problem Description

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

## Solution

The solution uses a set to store all the numbers in the input array. The solution then iterates through each number in the set and checks if the number is the start of a sequence. If the number is the start of a sequence, the solution iterates through the sequence and increments the length of the sequence. The solution returns the maximum length of the sequence.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array `nums`, since it iterates over each element in the array `nums` exactly once.

The space complexity of this solution is O(n), because the solution uses a set of length `nums.length` to store the numbers in the input array.
