/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s.length === 0 || s.charAt(s.length - 1) === " " || s === "a ") return 0;
  return s.split(" ")[s.split(" ").length - 1].length;
};
