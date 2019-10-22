/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    count = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      count++;
      if (sum >= s) {
        res.push(count);
        break;
      }
    }
  }
  if (res.length === 0) return 0;
  return Math.min(...res);
};
// @lc code=end
