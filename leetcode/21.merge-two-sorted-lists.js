/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  let arr1 = convertLinkedListtoArray(l1);
  let arr2 = convertLinkedListtoArray(l2);
  let res = [...arr1, ...arr2];
  res.sort((a, b) => a - b);
  return convertArrayToLinkedList(res);
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
