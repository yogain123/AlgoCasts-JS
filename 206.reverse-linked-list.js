/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let arr = convertLinkedListtoArray(head);
  arr.reverse();
  return convertArrayToLinkedList(arr);
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
