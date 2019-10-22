/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);
  let pos = 0;
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i]) {
      flag = true;
      pos = i;
    }
  }
  return pos === 0 && flag == false ? pos : pos + 1;
};
// @lc code=end
