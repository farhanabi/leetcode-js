# Solution 252. Meeting Rooms

This folder contains a JavaScript solution to the LeetCode problem [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/). The problem requires us to determine whether a person can attend all meetings.

## Problem Description

Given an array `intervals` where `intervals[i] = [starti, endi]`, return `true` if a person can attend all meetings, and `false` otherwise.

## Solution

The solution sorts the intervals by start time. The solution then iterates through the sorted intervals and checks whether the end time of the current interval is greater than the start time of the next interval. If the end time of the current interval is greater than the start time of the next interval, the solution returns `false`. If the solution iterates through the entire array without finding any overlapping intervals, the solution returns `true`.

### Time and Space Complexity

The time complexity of this solution is O(n log n), where n is the number of intervals. This is because the solution sorts the intervals by start time, which takes O(n log n) time, and then iterates through the sorted intervals, which takes O(n) time.

The space complexity of this solution is O(1), because the solution sorts the intervals in place.
