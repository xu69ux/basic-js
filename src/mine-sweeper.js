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
      function checkCell(tx, ty) {
        return tx >= 0 && tx < w && ty >= 0 && ty < h && matrix[ty][tx];
      }
      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          let n = 0;
          if (checkCell(x - 1, y - 1)) n++;
          if (checkCell(x, y - 1)) n++;
          if (checkCell(x + 1, y - 1)) n++;

          if (checkCell(x - 1, y)) n++;
          if (checkCell(x + 1, y)) n++;

          if (checkCell(x - 1, y + 1)) n++;
          if (checkCell(x, y + 1)) n++;
          if (checkCell(x + 1, y + 1)) n++;

          result[y][x] = n;
        }
      }
      return result;
}

module.exports = {
  minesweeper
};
