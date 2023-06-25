/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    for(const token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            const right = stack.pop();
            const left = stack.pop();
            stack.push(left - right);
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            const right = stack.pop();
            const left = stack.pop();
            stack.push(Math.trunc(left / right));
        } else {
            stack.push(Number(token));
        }
    }
    
    return stack.pop();
};