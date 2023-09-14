# Problem 167: Two Sum II - Input Array Is Sorted

This file contains a JavaScript solution to the LeetCode problem [167: Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/).

## Problem Description

Given an array of integers `numbers` that is already sorted in ascending order, find two numbers such that they add up to a specific `target` number.

Return the indices of the two numbers `(1-indexed)` as an integer array `answer` of size `2`, where `1 <= answer[0] < answer[1] <= numbers.length`.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

### Constraints

-   `2 <= numbers.length <= 3 * 10^4`
-   `-1000 <= numbers[i] <= 1000`
-   `numbers` is sorted in increasing order.
-   `-1000 <= target <= 1000`
-   The tests are generated such that there is exactly one solution.

### Examples

#### Example 1

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

#### Example 2

```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
```

## Solution

The solution uses two pointers to find the two numbers that add up to the target number. The solution starts with a pointer at the beginning of the array and a pointer at the end of the array. The solution adds the two numbers at the pointers. If the sum is greater than the target, the solution moves the pointer at the end of the array to the left. If the sum is less than the target, the solution moves the pointer at the beginning of the array to the right. The solution returns the indices of the two numbers if the sum is equal to the target.

### Time and Space Complexity

The time complexity of this solution is O(n), since the solution iterates through each number in the array exactly once.

The space complexity of the function is also O(1), since it uses fixed-size arrays to store the indices of the two numbers that add up to the target number.
