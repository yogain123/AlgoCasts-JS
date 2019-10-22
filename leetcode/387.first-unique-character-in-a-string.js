/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charMap = buildCharMap(s);
  if (s === "") return -1;
  let res = Object.entries(charMap).find(([key, value]) => value === 1);
  if (!res) return -1;
  return s.indexOf(res[0]);
};

function buildCharMap(str) {
  let obj = {};
  for (const i of str) {
    obj[i] = obj[i] + 1 || 1;
  }
  return obj;
}
// @lc code=end
