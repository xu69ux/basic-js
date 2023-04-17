const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let minusIndexes = [],
        clean = [];
    arr.forEach(function(v, index) {
        if (v === - 1) {
          minusIndexes.push(index); 
        } else {
          clean.push(v);
        }
    })
    clean.sort(function(a, b) {
        return Number(a) - Number(b);
    });
    minusIndexes.forEach(function(v, index) {
        clean.splice(v, 0, -1);
    })
    return clean;
}

module.exports = {
  sortByHeight
};
