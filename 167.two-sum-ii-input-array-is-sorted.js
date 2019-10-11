/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
  let first = 0;
  let last = arr.length - 1;
  while (true) {
    if (arr[first] + arr[last] === target) {
      break;
    }
    if (arr[first] + arr[last] > target) {
      last--;
    } else {
      first++;
    }
  }
  first++;
  last++;
  return first > last ? [last, first] : [first, last];
};
// @lc code=end
