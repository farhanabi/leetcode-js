/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const buildString = (str) => {
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                result.pop();
            } else {
                result.push(str[i]);
            }
        }
        
        return result.join('');
    }
    
    return buildString(s) === buildString(t);
};