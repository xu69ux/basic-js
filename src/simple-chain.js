const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
*/

let chainMaker = {
  chain: [],

  addLink: function(value) {
      if (value === undefined) value = '';
      this.chain.push(String(value));
      return this;
  },

  removeLink: function(index) {
      index --;
      if (!(index in this.chain)) {
          this.chain = [];
          throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(index, 1);
      return this;
  },

  reverseChain: function() {
      this.chain.reverse();
      return this;
  },

  getLength: function() {
      return this.chain.length;
  },

  finishChain: function() {
      let result = '( ' + this.chain.join(' )~~( ') + ' )';
      this.chain = [];
      return result;
  }
}

module.exports = {
  chainMaker
};
