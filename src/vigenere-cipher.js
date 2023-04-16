const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(isDirect) {
      if (isDirect === undefined) isDirect = true;
      else isDirect = false;
      this.isDirect = isDirect;
      this.indexA = 'A'.charCodeAt(0);
      this.indexZ = 'Z'.charCodeAt(0);
      this.alphabetLength = this.indexZ - this.indexA + 1;
      this.matrix = {};
      for (let i = 0; i < this.alphabetLength; i++) {
        let rowChar = String.fromCharCode(this.indexA + i);
        this.matrix[rowChar] = {};
        for (let j = 0; j < this.alphabetLength; j++) {
          let val = (i + j) % this.alphabetLength + this.indexA;
          this.matrix[rowChar][String.fromCharCode(this.indexA + j)] = String.fromCharCode(val);
        }
      }
    }
    encrypt(message, cipher) {
        if (message === undefined || cipher === undefined) throw new Error('Incorrect arguments!'); 
        message = message.toUpperCase();
        cipher = cipher.toUpperCase();
        let encrypted = '';
        for (let i = 0, j = 0; i < message.length; i++) {
          let val = this.encryptChar(message[i], cipher[j]);
          if (val === false) {
            encrypted += message[i];
          } else {
            encrypted += val;
            j++;
            j = j % cipher.length;
          } 
        }
        return this.isDirect ? encrypted : encrypted.split('').reverse().join('');
    }
    encryptChar(char, cipherChar) {
        if (cipherChar in this.matrix && char in this.matrix[cipherChar])
          return this.matrix[cipherChar][char];
        else return false;
        
    }
    decrypt(encrypted, cipher) {
      if (encrypted === undefined || cipher === undefined) throw new Error('Incorrect arguments!');
        encrypted = encrypted.toUpperCase();
        cipher = cipher.toUpperCase();
        let decrypted = '';
        for (let i = 0, j = 0; i < encrypted.length; i++) {
          let val = this.decryptChar(encrypted[i], cipher[j]);
          if (val === false) {
            decrypted += encrypted[i];
          } else {
            decrypted += val;
            j++;
            j = j % cipher.length; 
          }
        }
        return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
    }
    decryptChar(char, cipherChar) {
      if (cipherChar in this.matrix) {
        for (let k in this.matrix[cipherChar]) {
          if (this.matrix[cipherChar][k] === char) {
            return k;
          }
        }
      }
      return false;
    }
}

module.exports = {
  VigenereCipheringMachine
};
