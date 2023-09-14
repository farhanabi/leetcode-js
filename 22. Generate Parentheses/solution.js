/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
    const backtrack = (str, open, close) => {
        if (str.length === n * 2) {
            res.push(str);
            return;
        }
        if (open < n) backtrack(str + '(', open + 1, close);
        if (close < open) backtrack(str + ')', open, close + 1);
    };
    backtrack('', 0, 0);
    return res;
};
