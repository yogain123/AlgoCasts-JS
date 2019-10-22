/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  p = `^${p}$`;
  let regularExp = new RegExp(p);
  return regularExp.test(s);
};
// @lc code=end
