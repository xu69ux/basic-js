const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);

    if (options.repeatTimes !== undefined) {
      options.repeatTimes = Number(options.repeatTimes);
    } else {
      options.repeatTimes = 1;
    }
    if (options.separator !== undefined) {
      options.separator = String(options.separator);
    } else {
      options.separator = '+';
    }
    if (options.addition !== undefined) {
      options.addition = String(options.addition);
    } else { 
      options.addition = '';
    }
    if (options.additionRepeatTimes !== undefined) {
      options.additionRepeatTimes = Number(options.additionRepeatTimes);
    } else {
      options.additionRepeatTimes = 1;
    } 
    if (options.additionSeparator !== undefined) {
      options.additionSeparator = String(options.additionSeparator);
    } else {
      options.additionSeparator = '|';
    }
    let t = str + Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
    return Array(options.repeatTimes).fill(t).join(options.separator);
}

module.exports = {
  repeater
};
