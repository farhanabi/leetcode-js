# Problem 42: Trapping Rain Water

This file contains a JavaScript solution to the LeetCode problem [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/).

## Problem Description

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

### Constraints

-   `n == height.length`
-   `0 <= n <= 3 * 10^4`
-   `0 <= height[i] <= 10^5`

### Examples

#### Example 1

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

#### Example 2

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Solution

The solution uses two pointers to find the amount of water that can be trapped after raining. The solution starts with a pointer at the beginning of the array and a pointer at the end of the array. The solution calculates the amount of water that can be trapped between the two pointers. The solution moves the pointer at the beginning of the array to the right if the height of the line at the beginning of the array is less than the height of the line at the end of the array. The solution moves the pointer at the end of the array to the left if the height of the line at the end of the array is less than the height of the line at the beginning of the array. The solution returns the total amount of water that can be trapped if the pointers meet.

### Time and Space Complexity

The time complexity of this solution is O(n), since the solution iterates through each number in the array exactly once.

The space complexity of the function is also O(1), since it uses fixed-size arrays to store the indices of the two lines that form the container with the most water.
