/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let indexFromList2;
  let obj = {};
  list1.forEach((item, indexFromList1) => {
    indexFromList2 = list2.indexOf(item);
    if (indexFromList2 !== -1) {
      obj[item] = indexFromList1 + indexFromList2;
    }
  });
  let maxValue = Math.min(...Object.values(obj));
  let res = Object.entries(obj).filter(([key, value]) => value === maxValue);
  return res.map(item => item[0]);
};
// @lc code=end
