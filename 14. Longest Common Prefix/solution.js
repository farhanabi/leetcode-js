/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
      const c = strs[0][i];
      for (let j = 0; j < strs.length; j++) {
          if (strs[j][i] !== c) {
              return prefix
          }
      }
      prefix += c
  }
  return prefix
};