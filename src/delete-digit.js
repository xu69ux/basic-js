const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    function deleteDigitPosition(n, pos) {
      let arr = String(n).split('');
      arr.splice(pos, 1);
      return Number((arr.join('')));
    }
    let result = 0;
    for (let i = 0; i < String(n).length; i++) {
        let variant = deleteDigitPosition(n, i);
        if (variant > result) result = variant;
    }
    return result;
}

module.exports = {
  deleteDigit
};
