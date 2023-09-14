/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0,
        right = s.length - 1;
    const alphanumeric = /^[a-z0-9]+$/i;
    while (left <= right) {
        const leftChar = s[left].toLowerCase();
        const rightChar = s[right].toLowerCase();
        if (!alphanumeric.test(leftChar)) {
            left++;
            continue;
        }
        if (!alphanumeric.test(rightChar)) {
            right--;
            continue;
        }
        if (leftChar !== rightChar) return false;
        left++;
        right--;
    }
    return true;
};
