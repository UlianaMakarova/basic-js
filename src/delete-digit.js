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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  let converted = n.toString();
  for(let i = 0; i < converted.length; i++){
    let number = Number(converted.replace(converted[i], ''));
    result = (Math.max(number, result))
  }
  return result
}

module.exports = {
  deleteDigit
};
