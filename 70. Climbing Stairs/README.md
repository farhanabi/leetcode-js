# Problem 70: Climbing Stairs

This folder contains a JavaScript solution to the LeetCode problem [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/). The problem requires us to determine the number of distinct ways to climb to the top of a staircase. The staircase has n steps. Each time we can either climb 1 or 2 steps. In other words, we can climb 1 step or 2 steps at a time.

## Problem Description

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## Solution

The solution uses dynamic programming to determine the number of distinct ways to climb to the top of a staircase. It uses an array to keep track of the number of distinct ways to climb to each step. The number of distinct ways to climb to the first step is 1. The number of distinct ways to climb to the second step is 2. The number of distinct ways to climb to the third step is the sum of the number of distinct ways to climb to the first step and the number of distinct ways to climb to the second step. The number of distinct ways to climb to the fourth step is the sum of the number of distinct ways to climb to the second step and the number of distinct ways to climb to the third step. This pattern continues until the number of distinct ways to climb to the nth step is calculated.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of steps in the staircase. This is because the solution iterates through the staircase once.

The space complexity of this solution is O(n), because the solution uses an array to keep track of the number of distinct ways to climb to each step. The array can contain up to n steps, where n is the number of steps in the staircase.
