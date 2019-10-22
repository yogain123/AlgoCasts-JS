/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 d
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let arr1 = num1.split("");
  let arr2 = num2.split("");
  arr1.unshift(0);
  arr2.unshift(0);
  if (arr1.length > arr2.length) {
    arr2.unshift(...Array(arr1.length - arr2.length).fill(0));
  } else {
    arr1.unshift(...Array(arr2.length - arr1.length).fill(0));
  }
  let len = arr1.length;
  let carryOverArray = Array(len).fill(0);
  let resArray = Array(len).fill(0);
  let sum;
  for (let i = len - 1; i >= 0; i--) {
    sum = +arr1[i] + +arr2[i] + carryOverArray[i];
    if (sum >= 10) {
      carryOverArray[i - 1] = 1;
      resArray[i] = sum - 10;
    } else {
      resArray[i] = sum;
    }
  }
  let resultStr = resArray.join("");
  if (resultStr.charAt(0) === "0") resultStr = resultStr.substr(1);
  return resultStr;
};
// @lc code=end
