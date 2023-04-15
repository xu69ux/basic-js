const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function freq(arr) {
  let result = {};
  for (let el of arr) {
    if (el in result) result[el] += 1;
    else result[el] = 1;
  }
  return result;
}
function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split(''),
      a2 = s2.split(''),
      f1 = freq(a1),
      f2 = freq(a2),
      count = 0;
      for (let k in f1) {
        if (k in f2) {
          count += Math.min(f1[k], f2[k]);
        }
      }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
