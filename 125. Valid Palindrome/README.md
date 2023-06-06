# Problem 125: Valid Palindrome

This folder contains a JavaScript solution to the LeetCode problem [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/). The problem requires us to determine whether a given string is a palindrome.

## Problem Description

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

## Solution

The solution uses two pointers to iterate through the string. The first pointer starts at the beginning of the string and the second pointer starts at the end of the string. The solution compares the characters at the two pointers and moves the pointers closer to each other until the pointers meet or cross each other. If the characters at the two pointers are not alphanumeric, the solution moves the pointer to the next character. If the characters at the two pointers are alphanumeric and are not equal, the solution returns false. If the characters at the two pointers are alphanumeric and are equal, the solution moves the pointers closer to each other. If the pointers meet or cross each other, the solution returns true.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input string. This is because the solution iterates through the string once.

The space complexity of this solution is O(1), because the solution only uses two pointers to iterate through the string.