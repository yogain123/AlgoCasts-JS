/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSoFar = 0;
  let maxEnding = 0;
  for (const item of nums) {
    maxEnding += item;
    if (maxEnding < 0) maxEnding = 0;
    if (maxEnding > maxSoFar) maxSoFar = maxEnding;
  }
  return maxSoFar === 0 ? Math.max(...nums) : maxSoFar;
};
// @lc code=end
