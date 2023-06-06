/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const sHash = strHash(s)
    const tHash = strHash(t)
    for (let [key, value] of sHash) {
        if (value !== tHash.get(key)) return false
    }
    return true
};

function strHash(s) {
    const res = new Map()
    for (let i = 0; i < s.length; i++) {
        const count = res.get(s[i]) || 0
        res.set(s[i], count + 1)
    }
    return res
}