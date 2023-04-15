const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    depth = 1;
    max_depth = 0;
    calculateDepth(arr, nested) {
      if (nested !== true) {
        this.depth = 1;
        this.max_depth = 0;
      }
      if (this.depth > this.max_depth) this.max_depth = this.depth;
      for (let el of arr) {
        if (Array.isArray(el)) {
          this.depth ++;
          this.calculateDepth(el, true);
          this.depth --;
        }
      }
      return this.max_depth;
    }
}


module.exports = {
  DepthCalculator
};
