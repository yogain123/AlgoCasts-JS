/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

/*
 * @lc app=leetcode id=136 lang=javascript
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let str = nums;
  let obj = {};
  for (let i of str) obj[i] = obj[i] + 1 || 1;

  for (let [key, value] of Object.entries(obj)) {
    if (value == 1) return key;
  }
};
