# Problem 20: Valid Parentheses

This file contains a JavaScript solution to the LeetCode problem [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/). The problem requires us to determine if a given string of parentheses is valid. A string of parentheses is considered valid if every opening parenthesis has a corresponding closing parenthesis and they are in the correct order.

## Solution

The solution uses a stack data structure to keep track of the opening parentheses. It iterates through the string of parentheses and pushes each opening parenthesis onto the stack. When it encounters a closing parenthesis, it pops the last opening parenthesis from the stack and checks if it matches the closing parenthesis. If they match, it continues iterating through the string. If they don't match, it returns false because the string is not valid.

The solution uses a Map data structure to store the opening and closing parentheses pairs. This makes it easy to check if a closing parenthesis matches the last opening parenthesis on the stack.

Finally, the solution returns true if the stack is empty at the end of the iteration, which means all opening parentheses have been matched with their corresponding closing parentheses.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input string. This is because the solution iterates through the string of parentheses once.

The space complexity of this solution is O(n), where n is the length of the input string. This is because the solution uses a stack data structure to keep track of the opening parentheses, and the space used by the stack is proportional to the number of opening parentheses in the input string.
