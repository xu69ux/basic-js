const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function isControl(t) {
    return t === '--double-next' || t === '--double-prev' || t === '--discard-next' || t === '--discard-prev';
}

function transform(arr) {
    let seq = [], result = [];

    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    for (let val of arr) {
        if (isControl(val)) {
            seq.push(val);
        } else {
            seq.push({v: val, c: 1});
        }
    }

    for (let i = 0; i < seq.length; i++) {
        if (isControl(seq[i])) {
            if (seq[i] == '--double-next' && i < seq.length - 1 && seq[i + 1].c > 0) {
                seq[i + 1].c++;
            } else if (seq[i] == '--double-prev' && i > 0 && seq[i - 1].c > 0) {
                seq[i - 1].c++;
            } else if (seq[i] == '--discard-next' && i < seq.length - 1 && seq[i + 1].c > 0) {
                seq[i + 1].c--;
            } else if (seq[i] == '--discard-prev' && i > 0 && seq[i - 1].c > 0) {
                seq[i - 1].c--;
            }
        }
    }

    for (let val of seq) {
        if (isControl(val)) continue;
        for (let j = 0; j < val.c; j++) {
            result.push(val.v);
        }
    }

    return result;
}

module.exports = {
  transform
};
