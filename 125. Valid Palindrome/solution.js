/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let left = 0, right = s.length - 1
    while (left <= right) {
        const leftCharCode = s.charCodeAt(left)
        const rightCharCode = s.charCodeAt(right)
        const aCharCode = 'a'.charCodeAt(0), zCharCode = 'z'.charCodeAt(0), zeroCharCode = '0'.charCodeAt(0), nineCharCode = '9'.charCodeAt(0)
        if ((leftCharCode < aCharCode || leftCharCode > zCharCode) && (leftCharCode < zeroCharCode || leftCharCode > nineCharCode)) {
            left++
            continue
        }
        if ((rightCharCode < aCharCode || rightCharCode > zCharCode) && (rightCharCode < zeroCharCode || rightCharCode > nineCharCode)) {
            right--
            continue
        }
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
};