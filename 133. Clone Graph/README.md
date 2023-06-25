# Problem 133. Clone Graph

This folder contains a JavaScript solution to the LeetCode problem [Clone Graph](https://leetcode.com/problems/clone-graph/). The problem requires us to return a deep copy of a graph. A graph is a data structure that consists of nodes and edges. Each node contains a value and a list of its neighbors. A deep copy of a graph is a graph with the same values for the nodes and the same neighbors for each node.

## Problem Description

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.

```
class Node {
    public int val;
    public List<Node> neighbors;
}
```

## Solution

The solution uses a hash table to store the nodes in the graph. The solution uses a recursion to traverse the graph. The solution first checks if the current node is in the hash table. If it is, the solution returns the node in the hash table. Otherwise, the solution creates a new node with the same value as the current node. The solution then adds the new node to the hash table. The solution then recursively calls itself on each neighbor of the current node, adding the neighbor to the list of neighbors of the new node. The solution returns the new node.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the number of nodes in the graph. This is because the solution traverses each node in the graph once.

The space complexity of this solution is O(n), because the solution uses a hash table to store the nodes. The hash table has a maximum size of n, where n is the number of nodes in the graph.
