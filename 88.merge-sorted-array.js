/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  for (let item of nums2) {
    nums1.push(item);
  }
  nums1.sort((a, b) => a - b);
};
// @lc code=end
