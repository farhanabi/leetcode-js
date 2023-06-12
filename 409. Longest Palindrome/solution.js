/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const counts = new Array(128).fill(0)
    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i)]++
    }
    let result = 0, hasOdd = false
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] % 2 === 0) result += counts[i]
        else {
            result += counts[i] - 1
            hasOdd = true
        }
    }
    return hasOdd ? result + 1 : result
};