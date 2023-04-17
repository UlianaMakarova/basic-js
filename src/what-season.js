const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof date === 'undefined')
  return "Unable to determine the time of year!"
  if (Object.prototype.toString.call(date) !== '[object Date]' ||  date==Date.prototype.toString.call(new Date()))
  return "Invalid date!"
  winter = [12,1,2]
  spring = [3,4,5]
  summer = [6,7,8]
  autumn = [9,10,11]
  month = date.getMonth() === 12? 1: date.getMonth()+1
  if (winter.indexOf(month) != -1)
    return "winter"
  else if (spring.indexOf(month) != -1)  
    return "spring"
  else if (summer.indexOf(month) != -1)
    return "summer"
  else if (autumn.indexOf(month) != -1)
    return "autumn"
  else 
  return "Invalid date!"
  }

module.exports = {
  getSeason
};
