/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let str = num.toString();
  while (str.length > 1) {
    str = str
      .split("")
      .map(item => +item)
      .reduce((a, b) => a + b)
      .toString();
  }
  return +str;
};
// @lc code=end
