/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    return res;
};
