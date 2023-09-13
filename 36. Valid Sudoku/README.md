# Problem 36: Valid Sudoku

This file contains a JavaScript solution to the LeetCode problem [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/).

## Problem Description

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

## Solution

The solution uses a hash map to store the numbers in each row, column, and sub-box. The solution iterates through each cell in the board and checks if the number is already in the hash map. If the number is not in the hash map, the solution adds the number to the hash map. If the number is already in the hash map, the solution returns false. The solution returns true if it iterates through the entire board without returning false.

### Time and Space Complexity

The time complexity of this solution is O(1), since the solution iterates through each cell in the board exactly once.

The space complexity of the function is also O(1), since it uses fixed-size arrays to store the occurrence of each number in each row, column, and 3x3 box of the Sudoku board.
