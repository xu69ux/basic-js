const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = '',
        count = 1;
    for (let i = 0; i < str.length; i++) {
      count = 1;
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] == str[j]) {
            count++;
            i++
          }
          else break;
      }
      if (count == 1) {
        result += str[i];
      } else {
        result += String(count) + str[i];
      }
    }
    return result;
}

module.exports = {
  encodeLine
};
