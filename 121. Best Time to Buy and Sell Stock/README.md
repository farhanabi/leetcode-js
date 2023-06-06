# Problem 121: Best Time to Buy and Sell Stock

This folder contains a JavaScript solution to the LeetCode problem [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/). The problem requires us to find the maximum profit that can be made from buying and selling a stock.

## Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

## Solution

The solution uses a greedy approach to solve the problem. It iterates through the array and keeps track of the minimum price seen so far and the maximum profit that can be made by selling the stock at the current price. It then returns the maximum profit.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because the solution iterates through the array once.

The space complexity of this solution is O(1), because the solution only uses two variables to store the minimum price seen so far and the maximum profit that can be made by selling the stock at the current price.
