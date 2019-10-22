/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let res = "";
  let word = strs[0];
  for (let i = 0; i < word.length; i++) {
    if (checkInAll(word[i], strs, i)) res += word[i];
    else break;
  }

  return res;
};

function getLengthMap(arr) {
  return arr.map(item => item.length);
}

function checkInAll(letter, strs, index) {
  console.log({ letter, strs, index });

  return strs.every(item => item[index] === letter);
}
// @lc code=end
