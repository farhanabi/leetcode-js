# Problem 155: Min Stack

This file contains a JavaScript solution to the LeetCode problem [Min Stack](https://leetcode.com/problems/min-stack/).

## Problem Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

-   `push(x)` -- Push element `x` onto stack.
-   `pop()` -- Removes the element on top of the stack.
-   `top()` -- Get the top element.
-   `getMin()` -- Retrieve the minimum element in the stack.

### Constraints

-   `-2^31 <= x <= 2^31 - 1`
-   Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.
-   At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

### Examples

#### Example 1

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Solution

The solution uses two stacks to implement the MinStack class. The first stack stores the elements in the stack. The second stack stores the minimum element in the stack. The solution pushes the element to the first stack and the minimum element to the second stack when the solution pushes an element to the stack. The solution pops the element from the first stack and the minimum element from the second stack when the solution pops an element from the stack. The solution returns the top element of the first stack when the solution returns the top element of the stack. The solution returns the top element of the second stack when the solution returns the minimum element of the stack.

### Time and Space Complexity

The time complexity of this solution is O(1), since the solution pushes and pops elements from the stack in constant time.

The space complexity of the function is also O(1), since it uses fixed-size arrays to store the elements in the stack.
