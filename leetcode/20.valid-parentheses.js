/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let res = [];
  for (let letter of s) {
    if (res[res.length - 1] !== check(letter)) res.push(letter);
    else res.pop(letter);
  }
  return res.length === 0 ? true : false;
};

function check(symbol) {
  switch (symbol) {
    case "[":
      return "]";
    case "]":
      return "[";
    case "{":
      return "}";
    case "}":
      return "{";
    case "(":
      return ")";
    case ")":
      return "(";
  }
}
// @lc code=end
