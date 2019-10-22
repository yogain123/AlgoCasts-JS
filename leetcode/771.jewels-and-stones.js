/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let regg;
  let sum = 0;
  for (const item of J) {
    regg = new RegExp(item, "g");
    sum += (S.match(regg) || []).length;
  }
  return sum;
};
// @lc code=end
