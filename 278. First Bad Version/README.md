# Problem 278: First Bad Version

This folder contains a JavaScript solution to the LeetCode problem [First Bad Version](https://leetcode.com/problems/first-bad-version/). The problem requires us to find the first bad version in a list of versions.

## Problem Description

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## Solution

The solution uses a binary search algorithm to find the first bad version. It first checks if the first version is bad. If it is, then the first version is the first bad version. If it isn't, then it checks if the last version is bad. If it is, then the last version is the first bad version. If it isn't, then it sets the left pointer to 1 and the right pointer to n. It then iterates through the versions using a binary search algorithm. If the current version is bad, then it checks if the previous version is bad. If it isn't, then the current version is the first bad version. If it is, then it sets the right pointer to the current version. If the current version isn't bad, then it sets the left pointer to the current version. It continues this process until the left pointer is greater than or equal to the right pointer. If the left pointer is greater than or equal to the right pointer, then the right pointer is the first bad version.

### Time and Space Complexity

The time complexity of this solution is O(log n) where n is the number of versions. This is because the solution uses a binary search algorithm to find the first bad version. The binary search algorithm has a time complexity of O(log n) because it divides the number of versions in half each time it checks if a version is bad.

The space complexity of this solution is O(1) because the solution only uses constant space.
