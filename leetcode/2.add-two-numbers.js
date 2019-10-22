/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let arr1 = convertLinkedListtoArray(l1);
  let arr2 = convertLinkedListtoArray(l2);
  arr1.reverse();
  arr2.reverse();
  let resStr = addStrings(arr1.join(""), arr2.join(""));
  let reverseResArr = resStr.split("").reverse();
  return convertArrayToLinkedList(reverseResArr);
};

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

function convertLinkedListtoArray(temp) {
  let arr = [];
  while (temp != null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  return arr;
}

function convertArrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let firstNode = new ListNode(arr[0]);
  let temp = firstNode;
  head = temp;
  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }
  return head;
}
// @lc code=end
