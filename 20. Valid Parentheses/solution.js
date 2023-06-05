/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
    const stack = [];
    for (let c of s) {
        if (map.has(c)) {
            stack.push(c);
        } else if (map.get(stack.pop()) !== c) {
            return false;
        }
    }
    return stack.length === 0;
};
