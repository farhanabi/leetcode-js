# Problem 238. Product of Array Except Self

This folder contains a JavaScript solution to the LeetCode problem [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/). The problem requires us to return an array of the products of all the elements in an input array except the element at the same index.

## Problem Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

## Solution

The solution uses dynamic programming to find the product of all the elements in an input array except the element at the same index. The solution creates an array `left` of length `nums.length` and sets each element to `1`. The solution then iterates through the array `left` and for each element `left[i]`, the solution sets `left[i]` to the product of `left[i - 1]` and `nums[i - 1]`. The solution then creates an array `right` of length `nums.length` and sets each element to `1`. The solution then iterates through the array `right` and for each element `right[i]`, the solution sets `right[i]` to the product of `right[i + 1]` and `nums[i + 1]`. The solution then creates an array `answer` of length `nums.length` and sets each element to `1`. The solution then iterates through the array `answer` and for each element `answer[i]`, the solution sets `answer[i]` to the product of `left[i]` and `right[i]`. The solution returns `answer`.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array `nums`, since it iterates over each element in the array `nums` exactly once.

The space complexity of this solution is O(n), because the solution uses an array of length `nums.length` for each of `left`, `right`, and `answer`.
