# Problem 57. Insert Interval

This folder contains a JavaScript solution to the LeetCode problem [Insert Interval](https://leetcode.com/problems/insert-interval/). The problem requires us to insert a new interval into a list of non-overlapping intervals.

## Problem Description

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

### Example 1:

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

### Example 2:

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

```

### Example 3:

```
Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
```

### Constraints:

* `0 <= intervals.length <= 10^4`
* `intervals[i].length == 2`
* `0 <= starti <= endi <= 10^5`
* `intervals` is sorted by `starti` in ascending order.
* `newInterval.length == 2`
* `0 <= start <= end <= 10^5`

## Solution

The solution uses a for...of loop to iterate through the intervals. The loop keeps track of the current interval and the next interval. The loop terminates when the end of the intervals is reached. For each interval, the function checks if the end of the interval is less than the start of the new interval. If this is the case, the interval is non-overlapping and can be added to the result array. If the start of the interval is greater than the end of the new interval, the new interval can be added to the result array and the current interval becomes the new interval. Otherwise, the intervals overlap and the function merges them by updating the start and end of the new interval to be the minimum and maximum of the start and end of both intervals.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the intervals array. This is because the solution iterates through the intervals array once.

The space complexity of this solution is O(n), because the solution creates a new array to store the merged intervals.
