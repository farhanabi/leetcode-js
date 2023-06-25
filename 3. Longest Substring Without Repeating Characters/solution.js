/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let ans = 0;

    for(let left = -1, right = 0; right < s.length; right++) {
        if (map.has(s[right])) left = Math.max(left, map.get(s[right]));
        map.set(s[right], right);
        ans = Math.max(ans, right-left);
    }

    return ans;
};