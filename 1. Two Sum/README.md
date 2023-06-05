# Problem 1: Two Sum

This folder contains a JavaScript solution to the LeetCode problem [Two Sum](https://leetcode.com/problems/two-sum/). The problem requires us to find two numbers in an array that add up to a given target.

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Solution

The solution uses a Map data structure to store the complement of each number in the array. It iterates through the array and checks if the complement of the current number is already in the Map. If it is, it returns the indices of the two numbers. If it isn't, it adds the current number and its index to the Map.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because the solution iterates through the array once.

The space complexity of this solution is O(n), where n is the length of the input array. This is because the solution uses a Map data structure to store the complement of each number in the array, and the space used by the Map is proportional to the length of the input array.