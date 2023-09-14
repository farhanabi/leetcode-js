# Problem 739: Daily Temperatures

This folder contains a JavaScript solution to the LeetCode problem [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/); the problem is also reproduced below.

## Problem Description

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

## Solution

The solution first initializes an array of the same length as the given temperatures array to 0. It then iterates through the temperatures in reverse order. For each temperature, it checks if the stack is empty. If it is, it sets the number of days until a warmer temperature to 0. Otherwise, it checks if the temperature at the top of the stack is greater than or equal to the current temperature. If it is, it sets the number of days until a warmer temperature to 0. Otherwise, it pops the top of the stack and sets the number of days until a warmer temperature to the difference between the current index and the index at the top of the stack. It then pushes the current index onto the stack.

## Time and Space Complexity

The time complexity of this solution is O(n) where n is the number of temperatures in the given array. This is because the solution iterates through the temperatures in reverse order and pushes and pops each index onto and off of the stack at most once.

The space complexity of this solution is O(n) where n is the number of temperatures in the given array. This is because the solution uses a stack to keep track of the indices of the temperatures that have not yet had a warmer temperature.
