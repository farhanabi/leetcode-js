# Problem 207. Course Schedule

This folder contains a JavaScript solution to the LeetCode problem [Course Schedule](https://leetcode.com/problems/course-schedule/). The problem requires us to determine if a directed graph is acyclic. The graph is represented as an adjacency list. For example, the adjacency list `[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1]]` represents the directed graph:

## Problem Description

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

### Example 1:

```
Input: numCourses = 2, prerequisites = [[1, 0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
```

### Example 2:

```
Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

## Solution

The solution uses a depth-first search to determine if the graph is acyclic. The solution iterates through the adjacency list. For each node in the adjacency list, the solution performs a depth-first search. If the depth-first search encounters a node that is already in the current path, the graph is cyclic. If the depth-first search encounters a node that has already been visited, the graph is acyclic. If the depth-first search encounters a node that has not been visited, the solution adds the node to the current path and performs a depth-first search on the node's neighbors. After the depth-first search, the solution removes the node from the current path.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the graph. This is because the solution performs a depth-first search on each node in the graph.

The space complexity of this solution is O(n), because the solution uses a stack to store the current path. The stack has a maximum size of n, where n is the number of nodes in the graph.
