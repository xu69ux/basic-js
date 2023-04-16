const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let w = matrix[0].length,
      h = matrix.length,
      result = Array(h); 
      
      for (let y = 0; y < h; y++) {
        result[y] = Array(w);
      }
      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          
        }
      }

      return result;
}

module.exports = {
  minesweeper
};
