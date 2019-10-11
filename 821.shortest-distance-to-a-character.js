/**
 * Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
 */

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

/*
 * @lc app=leetcode id=821 lang=javascript
 */

var shortestToChar = function(S, C) {
  let result = [];
  let indexArray = getIndexArray(S, C);

  S.split("").forEach((item, index) => {
    result.push(shortDistance(index, indexArray, S));
  });

  return result;
};

function getIndexArray(S, C) {
  let res = [];
  S.split("").forEach((item, index) => {
    if (item === C) res.push(index);
  });
  return res;
}

function shortDistance(index, indexArray, S) {
  let min = Infinity;
  for (let indexArrayEach of indexArray) {
    if (S.substring(index, indexArrayEach).length <= min)
      min = S.substring(index, indexArrayEach).length;
  }
  return min;
}
