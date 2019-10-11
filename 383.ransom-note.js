/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let letter of ransomNote) {
    if (!magazine.includes(letter)) return false;
    else magazine = magazine.replace(letter, "");
  }
  return true;
};
// @lc code=end
