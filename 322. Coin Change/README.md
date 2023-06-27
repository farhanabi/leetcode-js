# Problem 322. Coin Change

This folder contains a JavaScript solution to the LeetCode problem [Coin Change](https://leetcode.com/problems/coin-change/). The problem requires us to find the minimum number of coins needed to make up a given amount.

## Problem Description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## Solution

The solution uses dynamic programming to find the minimum number of coins needed to make up a given amount. The solution creates an array `dp` of length `amount + 1` and sets each element to `Infinity`. The solution sets `dp[0]` to `0` because it takes 0 coins to make up an amount of 0. The solution then iterates through the array `dp` and for each element `dp[i]`, the solution iterates through the array `coins` and for each element `coin`, the solution sets `dp[i]` to the minimum of `dp[i]` and `dp[i - coin] + 1`. The solution returns `dp[amount]` if it is less than `Infinity` and `-1` otherwise.

### Time and Space Complexity

The time complexity of this solution is O(n * m), where n is the length of the input array `coins` and m is the input `amount`, since it iterates over each element in the array `dp` exactly once for each element in the array `coins`.

The space complexity of this solution is O(m), because the solution uses an array of length `amount + 1`.
