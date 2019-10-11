/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  for (let i of nums) {
    obj[i] = obj[i] + 1 || 1;
  }
  return getMax(obj);
};

function getMax(obj) {
  let max = -Infinity;
  let res;
  for (let [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      res = key;
    }
  }
  return res;
}
// @lc code=end
