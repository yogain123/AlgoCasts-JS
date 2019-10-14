/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
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
