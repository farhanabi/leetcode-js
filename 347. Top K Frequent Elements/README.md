# Problem 347. Top K Frequent Elements

This folder contains a JavaScript solution to the LeetCode problem [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/). The problem requires us to return the `k` most frequent elements in an input array.

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

## Solution

The solution uses a hash map to count the frequency of each element in the input array. The solution then creates an array based on the keys of the hash map and sorts the array based on the values of the hash map. The solution then returns the last `k` elements of the sorted array.

### Time and Space Complexity

The time complexity of this solution is O(n log n), where n is the length of the input array `nums`, since it iterates over each element in the array `nums` exactly once and sorts the array based on the values of the hash map.

The space complexity of this solution is O(n), because the solution uses a hash map of length `nums.length` to count the frequency of each element in the input array and an array of length `nums.length` to store the keys of the hash map.
