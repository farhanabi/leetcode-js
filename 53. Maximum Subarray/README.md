# Problem 53. Maximum Subarray

This folder contains a JavaScript solution to the LeetCode problem [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/). The problem requires us to find the contiguous subarray with the largest sum.

## Problem Description

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

### Example 1:

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
```

### Example 2:

```
Input: nums = [1]
Output: 1
```

### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

### Constraints:

* `1 <= nums.length <= 3 * 10^4`
* `-10^5 <= nums[i] <= 10^5`

## Solution 1

The solution uses a while loop to iterate through the array. The loop keeps track of the maximum sum of the subarray and the current sum of the subarray. The loop terminates when the end of the array is reached.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the array. This is because the solution iterates through the array once.

The space complexity of this solution is O(1), because the solution does not create any new data structures.

## Solution 2: Divide and Conquer

> Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

The divide and conquer approach is more subtle. The solution uses recursion to divide the array into two halves. The solution then finds the maximum subarray sum of the left half, the maximum subarray sum of the right half, and the maximum subarray sum that crosses the midpoint of the array. The solution returns the maximum of these three values.

### Time and Space Complexity

The time complexity of this solution is O(n log n), where n is the length of the array. This is because the solution divides the array into two halves and then iterates through the array once to find the maximum subarray sum that crosses the midpoint of the array.

The space complexity of this solution is O(log n), because the solution uses recursion to divide the array into two halves. The recursion stack has a maximum depth of log n, where n is the length of the array.
