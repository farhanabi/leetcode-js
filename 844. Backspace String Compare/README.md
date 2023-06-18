# Problem 844. Backspace String Compare

This file contains a JavaScript solution to the LeetCode problem [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/). The problem requires us to determine if two given strings are equal after applying the backspace character to each string.

## Solution

The solution iterates through each string and remove the backspace characters. It does this by using a stack data structure to keep track of the characters in each string. When it encounters a backspace character, it pops the last character from the stack. When it encounters a non-backspace character, it pushes the character onto the stack. After iterating through each string, it compares the two stacks to determine if the strings are equal.

### Time and Space Complexity

The time complexity of this solution is O(m+n), where m is the length of the first string and n is the length of the second string. This is because the solution iterates through each string once.

The space complexity of this solution is O(m+n), where m is the length of the first string and n is the length of the second string. This is because the solution uses a stack data structure to keep track of the characters in each string, and the space used by the stack is proportional to the number of characters in each string.
