/*
 * @lc app=leetcode id=28 lang=javascript
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  return haystack.indexOf(needle);
};
