# Problem 15. 3Sum

This folder contains a JavaScript solution to the LeetCode problem [3Sum](https://leetcode.com/problems/3sum/). The problem requires us to find all unique triplets in the array which gives the sum of zero.

## Problem Description

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Example 1:

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: The solution set contains two triplets with sum 0.
```

### Example 2:

```
Input: nums = [0,1,1]
Output: []
Explanation: The solution set contains no triplets with sum 0.
```

### Example 3:

```
Input: nums = [0]
Output: []
Explanation: The solution set contains no triplets.
```

## Solution

The solution uses a nested for loop to iterate through the array. The outer loop iterates through the array, and the inner loop iterates through the array starting at the index after the outer loop. The inner loop terminates when the end of the array is reached. The inner loop keeps track of the sum of the current triplet. If the sum is equal to zero, the solution adds the triplet to the result array. The solution then returns the result array.

### Time and Space Complexity

The time complexity of this solution is O(n^2), where n is the length of the array. This is because the solution uses a nested for loop to iterate through the array.

The space complexity of this solution is O(n), because the solution uses a hash table to store the triplets. The hash table has a maximum size of n, where n is the length of the array.
