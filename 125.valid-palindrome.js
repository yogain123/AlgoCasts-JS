/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[\w]/g, "").toLowerCase();
  let rev = s
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  console.log({ s, rev });

  if (s === rev) return true;
  return false;
};
// @lc code=end
