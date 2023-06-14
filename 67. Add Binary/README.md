# Problem 67. Add Binary

This folder contains a JavaScript solution to the LeetCode problem [Add Binary](https://leetcode.com/problems/add-binary/). The problem requires us to add two binary numbers represented as strings.

## Problem Description

Given two binary strings `a` and `b`, return *their sum as a binary string*.

### Example 1:

```
Input: a = "11", b = "1"
Output: "100"
```

### Example 2:

```
Input: a = "1010", b = "1011"
Output: "10101"
```

### Constraints:

* `1 <= a.length, b.length <= 10^4`
* `a` and `b` consist only of `'0'` or `'1'` characters.
* Each string does not contain leading zeros except for the zero itself.

## Solution

The solution uses a while loop to iterate through the two binary strings. The loop adds the digits of the two binary strings and keeps track of the carry. The loop terminates when both binary strings have been iterated through and there is no carry.

### Time and Space Complexity

The time complexity of this solution is O(max(m, n)), where m and n are the lengths of the two binary strings. This is because the solution iterates through the longer binary string.

The space complexity of this solution is O(max(m, n)), because the solution creates a new string to store the sum of the two binary strings. The length of the new string is at most max(m, n) + 1, where m and n are the lengths of the two binary strings.
