# Problem 100. Same Tree

This file contains a JavaScript solution to the LeetCode problem [Same Tree](https://leetcode.com/problems/same-tree/). The problem requires us to determine if two given binary trees are the same. Two binary trees are considered the same if they have the same structure and the same values at each node.

## Solution

The solution uses a recursive approach to solve the problem. It checks if the two given binary trees are the same by checking if the values at each node are the same and if the left and right subtrees are the same. It does this by recursively calling the function on the left and right subtrees of each tree.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the larger of the two binary trees. This is because the solution recursively calls the function on the left and right subtrees of each tree.

The space complexity of this solution is O(n), where n is the number of nodes in the larger of the two binary trees. This is because the solution uses a recursive call stack to keep track of the nodes in each tree.
