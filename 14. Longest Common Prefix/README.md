# Problem 14. Longest Common Prefix

This folder contains a JavaScript solution to the LeetCode problem [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/). The problem requires us to find the longest common prefix string amongst an array of strings. If there is no common prefix, the solution should return an empty string.

## Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## Solution

The solution iterates through the first string in the array and checks whether each character is the same in all strings. If the character is the same in all strings, the solution adds the character to the longest common prefix. If the character is not the same in all strings, the solution returns the longest common prefix.

### Time and Space Complexity

The time complexity of this solution is O(n*m), where n is the number of strings in the array and m is the length of the first string. This is because the solution iterates through the first string in the array and checks whether each character is the same in all strings.

The space complexity of this solution is O(m), where m is the length of the first string. This is because the solution stores the longest common prefix in a variable.
