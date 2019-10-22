/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.indexOf(0) === -1) return 0;
  let sumfromArray = nums.reduce((a, b) => a + b);
  let k = Math.max(...nums);
  let pureSum = (k * (k + 1)) / 2;
  if (pureSum === sumfromArray) return k + 1;
  return pureSum - sumfromArray;
};
// @lc code=end
