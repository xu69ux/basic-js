const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = {};
    for (let name of names) {
      if  (name in result)  {
        let newName = name + '(' + result[name] + ')';
        result[name] ++;
        result[newName] = 1;
      } else {
        result[name] = 1;
      }
    } 
      return Object.keys(result);
}

module.exports = {
  renameFiles
};
