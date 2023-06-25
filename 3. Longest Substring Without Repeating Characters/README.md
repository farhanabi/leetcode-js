# Problem 3. Longest Substring Without Repeating Characters

This folder contains a JavaScript solution to the LeetCode problem [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/). The problem requires us to find the length of the longest substring without repeating characters.

## Problem Description

Given a string `s`, find the length of the longest substring without repeating characters.

### Example 1:

```
Input: s = "abcabcbb"
Output: 3

Explanation: The answer is "abc", with the length of 3.
```

### Example 2:

```
Input: s = "bbbbb"
Output: 1

Explanation: The answer is "b", with the length of 1.
```

### Example 3:

```
Input: s = "pwwkew"
Output: 3

Explanation: The answer is "wke", with the length of 3.
```

## Solution

The solution uses a sliding window to find the longest substring without repeating characters. The solution uses a while loop to iterate through the string. The loop keeps track of the longest substring without repeating characters and the current substring without repeating characters. The loop terminates when the end of the string is reached.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the string. This is because the solution iterates through the string once.

The space complexity of this solution is O(n), because the solution uses a hash map to keep track of the characters in the current substring without repeating characters. The hash map has a maximum size of n, where n is the length of the string.
