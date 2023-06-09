/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Solution 1: Using Map
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for (const c of magazine) {
        map.set(c, (map.get(c) || 0) + 1)
    }
    for (const c of ransomNote) {
        if (!map.has(c) || map.get(c) === 0) return false
        map.set(c, map.get(c) - 1)
    }
    return true
};

// Solution 2: Using Array
var canConstruct = function(ransomNote, magazine) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        counts[magazine.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const index = ransomNote.charCodeAt(i) - 97;
        if (counts[index] === 0) {
            return false;
        }
        counts[index]--;
    }
    return true;
};