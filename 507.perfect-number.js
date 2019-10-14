/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let sum = 0;
  if (num === 0) return false;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return num === sum;
};
// @lc code=end
