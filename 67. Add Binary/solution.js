/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '', carry = 0, i = a.length - 1, j = b.length - 1;
    const zeroCharCode = '0'.charCodeAt(0);
    while (i >= 0 || j >= 0) {
        const sum = (i >= 0 ? a.charCodeAt(i--) - zeroCharCode : 0) + (j >= 0 ? b.charCodeAt(j--) - zeroCharCode : 0) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    if (carry) result = carry + result;
    return result;
};