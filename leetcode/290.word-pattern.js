/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let patternArr = pattern.split("");
  let strArray = str.split(" ");
  let patternArrUnique = [...new Set(patternArr)];
  let obj = {};
  patternArrUnique.forEach(item => {
    obj[item] = strArray[patternArr.findIndex(i => i === item)];
  });

  let res = [];
  for (let item of patternArr) {
    res.push(obj[item]);
  }
  if (new Set(Object.keys(obj)).size !== new Set(Object.values(obj)).size)
    return false;
  res = res.join(" ");
  return res === str;
};
// @lc code=end
