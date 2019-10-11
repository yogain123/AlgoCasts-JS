/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .map(item =>
      item
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};
// @lc code=end
