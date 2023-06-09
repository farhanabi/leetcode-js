# Problem 232. Implement Queue using Stacks

This folder contains a JavaScript solution to the LeetCode problem [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/). The problem requires us to implement a queue using stacks.

## Problem Description

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:

- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

**Notes:**

- You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.

- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

**Follow-up:** Can you implement the queue such that each operation is **amortized** `O(1)` time complexity? In other words, performing `n` operations will take overall `O(n)` time even if one of those operations may take longer.

## Solution

The solution uses two stacks to implement a queue. The first stack, `stack1`, is used to store the elements of the queue. The second stack, `stack2`, is used to store the elements of the queue in reverse order. The solution uses the `push` method to add elements to the queue. The solution uses the `pop` method to remove elements from the queue. The solution uses the `peek` method to return the element at the front of the queue. The solution uses the `empty` method to determine if the queue is empty.

### Time and Space Complexity

The time complexity of this solution is O(1) for the `push`, `peek`, and `empty` methods. This is because the solution only uses the `push` method to add elements to the queue, the `peek` method to return the element at the front of the queue, and the `empty` method to determine if the queue is empty.

The time complexity of this solution is O(n) for the `pop` method. This is because the solution uses the `pop` method to remove elements from the queue. The `pop` method removes all elements from `stack1` and adds them to `stack2`.

The space complexity of this solution is O(n), where n is the number of elements in the queue. This is because the solution uses two stacks to store the elements of the queue. The space complexity of this solution is O(1) if we ignore the space used by the two stacks.
