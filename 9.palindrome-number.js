/*
 * @lc app=leetcode id=9 lang=javascript
 */

var isPalindrome = function(x) {
  x = x + "";
  let revx = reverseString(x);
  if (x === revx) return true;
  return false;
};

function reverseString(x) {
  return x
    .split("")
    .reverse()
    .join("");
}
