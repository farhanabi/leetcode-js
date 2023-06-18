# Problem 13. Roman to Integer

This file contains a JavaScript solution to the LeetCode problem [Roman to Integer](https://leetcode.com/problems/roman-to-integer/). The problem requires us to convert a Roman numeral to an integer.

## Solution

The solution uses a Map data structure to store the Roman numeral symbols and their corresponding integer values. It iterates through the input string of Roman numerals and adds the integer value of each symbol to the total. If the current symbol is less than the next symbol, it subtracts the current symbol's value from the total. This is because the current symbol is a prefix for the next symbol, so the next symbol's value should be added to the total instead of the current symbol's value.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input string. This is because the solution iterates through the input string once.

The space complexity of this solution is O(1) because the solution uses a constant amount of space to store the Map of Roman numeral symbols and their corresponding integer values.
