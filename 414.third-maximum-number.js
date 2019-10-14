/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if (new Set(nums).size <= 2) return Math.max(...nums);
  return findKthLargest(nums, 3);
};

var findKthLargest = function(nums, k) {
  nums = [...new Set(nums)];
  let max, index;
  let res = [];
  for (let i = 1; i <= k; i++) {
    max = Math.max(...nums);
    index = nums.findIndex(item => item === max);
    nums[index] = -Infinity;
    res.push(max);
  }
  return res[res.length - 1];
};
// @lc code=end
