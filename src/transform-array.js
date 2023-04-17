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
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  result = []
  discard = false;
  arr.forEach((el,index)=>{
    switch (el){
      case '--discard-next':
      {
       
        discard = true;
        break;
      }  
      case '--discard-prev':
        {
          result.pop();
          break;
        }
      case '--double-next':
        {
          if (typeof arr[index + 1] === 'number')
          {
            next = arr[index+1];
            result.push(next);
          }
          break;
        }
      case '--double-prev':
        {
          if (typeof arr[index - 1] === 'number')
          {
            prev = arr[index-1];
            result.push(prev);
          }
          break;
        }
        default:{
          if (discard)
          {
            arr.splice(index,1);
            discard = false;
          }
          else{
            result.push(el);
          }
        }
  }})
  return result
}

module.exports = {
  transform
};
