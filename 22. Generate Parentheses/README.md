# Problem 22: Generate Parentheses

This folder contains a JavaScript solution to the LeetCode problem [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/). The problem requires us to generate all valid combinations of n pairs of parentheses.

## Problem Description

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Example 1:

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

### Example 2:

```
Input: n = 1
Output: ["()"]
```

### Constraints:

-   `1 <= n <= 8`

## Solution

The solution uses backtrack to generate all valid combinations of n pairs of parentheses. The solution starts with an empty string and the number of pairs of parentheses. The solution adds a left parenthesis to the string if the number of left parentheses is less than n. The solution adds a right parenthesis to the string if the number of right parentheses is less than the number of left parentheses. The solution adds the string to the list of valid combinations if the number of left parentheses is equal to the number of right parentheses and the number of left parentheses is equal to n. The solution returns the list of valid combinations.

### Time and Space Complexity

The time complexity of this solution is O(4^n / sqrt(n)), since the solution generates 4^n / sqrt(n) combinations of n pairs of parentheses.

The space complexity of the function is also O(4^n / sqrt(n)), since it uses a list to store the valid combinations of n pairs of parentheses.
