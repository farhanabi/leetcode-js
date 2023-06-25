# Problem 150. Evaluate Reverse Polish Notation

This folder contains a JavaScript solution to the LeetCode problem [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/). The problem requires us to evaluate a reverse polish notation expression. A reverse polish notation expression is an expression in which the operator follows the operands. For example, the reverse polish notation expression `2 1 + 3 *` is equivalent to the infix expression `(2 + 1) * 3`.

## Problem Description

Evaluate the value of an arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression.

**Note** that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

### Example 1:

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

### Example 2:

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

### Example 3:

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

## Solution

The solution uses a stack to store the operands. The solution iterates through the tokens array. If the token is an operand, the solution pushes the operand to the stack. If the token is an operator, the solution pops two operands from the stack, applies the operator to the operands, and pushes the result to the stack. The solution returns the top of the stack.

### Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the tokens array. This is because the solution iterates through the tokens array.

The space complexity of this solution is O(n), because the solution uses a stack to store the operands. The stack has a maximum size of n, where n is the length of the tokens array.
