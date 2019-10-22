/**
 * You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
 */

/*
 * @lc app=leetcode id=1160 lang=javascript
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let result = "";
  for (let word of words) {
    if (checkIfGood(word, chars)) result += word;
  }
  return result.length;
};

function checkIfGood(word, chars) {
  for (let letter of word) {
    if (!chars.includes(letter)) return false;
    else chars = chars.replace(letter, "");
  }
  return true;
}
